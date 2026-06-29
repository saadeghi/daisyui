import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import { load as loadYaml } from "js-yaml"
import { error, isHttpError } from "@sveltejs/kit"

const fetchYamlData = async (url) => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`)
    }

    const yamlText = await response.text()
    return loadYaml(yamlText)
  } catch (e) {
    console.error(`Error loading or parsing YAML from ${url}`, e)
    throw error(500, "Server configuration error: Could not load data")
  }
}

const fetchAlternativeData = () => fetchYamlData(`${PUBLIC_DAISYUI_API_PATH}/data/alternative.yaml`)
const fetchCompareData = () => fetchYamlData(`${PUBLIC_DAISYUI_API_PATH}/data/compare.yaml`)

const getDeterministicIndex = (seedString, maxIndex) => {
  if (maxIndex <= 0) return 0
  const hash = seedString.split("").reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)
  return Math.abs(hash) % maxIndex
}

const getItemByIndex = (arr, index) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined
  }
  const effectiveIndex = index % arr.length
  return arr[effectiveIndex]
}

const getValue = (item) => {
  if (typeof item === "object" && item !== null && item.hasOwnProperty("value")) {
    return item.value
  }
  return item
}

const isPositiveAttribute = (value) => {
  return typeof value === "object" && value !== null && "positive" in value
}

const getAttributeDef = (data, attribute) => data?.attributes?.[attribute]

const getAttributeValue = (data, attribute, fallback = "N/A") => {
  const attr = getAttributeDef(data, attribute)
  if (attr === undefined) return fallback
  return getValue(attr)
}

const formatAttributeValue = (value) => {
  if (value === undefined || value === null || value === "") return "N/A"
  if (typeof value === "boolean") return value ? "Yes" : "No"
  if (typeof value === "number") return value.toLocaleString("en-US")
  return String(value)
}

const formatAttribute = (data, attribute, fallback = "N/A") => {
  return formatAttributeValue(getAttributeValue(data, attribute, fallback))
}

const hasKnownAttribute = (data, attribute) => {
  const value = getAttributeValue(data, attribute, undefined)
  return value !== undefined && value !== "?"
}

const sentenceJoin = (items) => {
  const filteredItems = items.filter(Boolean)
  if (filteredItems.length <= 1) return filteredItems[0] || ""
  if (filteredItems.length === 2) return `${filteredItems[0]} and ${filteredItems[1]}`
  return `${filteredItems.slice(0, -1).join(", ")}, and ${filteredItems.at(-1)}`
}

const paragraphJoin = (items) => {
  const paragraph = items
    .filter(Boolean)
    .map((item) =>
      String(item)
        .trim()
        .replace(/[.。]+$/, ""),
    )
    .filter(Boolean)
    .join(". ")

  return paragraph ? `${paragraph}.` : ""
}

const getReplacementMap = (daisyUIData, libraryData) => {
  return {
    "{libraryName}": libraryData.name,
    "{depsCount}": formatAttribute(libraryData, "Dependencies"),
    "{otherJSSize}": formatAttribute(libraryData, "JavaScript size"),
    "{otherFrameworks}": formatAttribute(libraryData, "Frameworks", "specific frameworks"),
    "{daisyThemes}": formatAttribute(daisyUIData, "Built-in Themes", "many"),
    "{otherThemes}": formatAttribute(libraryData, "Built-in Themes", "few"),
  }
}

const replacePlaceholders = (text, replacements) => {
  let replacedText = text
  for (const [placeholder, value] of Object.entries(replacements)) {
    replacedText = replacedText.replace(
      new RegExp(placeholder.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"),
      String(value),
    )
  }
  return replacedText
}

const checkIsDaisyUIBetter = (attribute, attributeRules, daisyValueDef, otherValueDef) => {
  if (daisyValueDef === undefined || otherValueDef === undefined) {
    return false
  }

  const rule = attributeRules[attribute]
  if (rule === undefined) {
    return false
  }

  const daisyIsPositive = isPositiveAttribute(daisyValueDef) ? daisyValueDef.positive : undefined
  const otherIsPositive = isPositiveAttribute(otherValueDef) ? otherValueDef.positive : undefined

  if (daisyIsPositive !== undefined || otherIsPositive !== undefined) {
    if (daisyIsPositive !== undefined && otherIsPositive !== undefined) {
      return daisyIsPositive === true && otherIsPositive === false
    } else if (daisyIsPositive !== undefined) {
      return daisyIsPositive === true
    } else {
      // otherIsPositive is defined, daisyIsPositive is not
      return otherIsPositive === false
    }
  }

  const val1 = getValue(daisyValueDef)
  const val2 = getValue(otherValueDef)

  if (val1 === "?" || val2 === "?" || typeof val1 !== typeof val2) {
    // Incomparable or unknown values
    return false
  }

  if (typeof val1 === "number") {
    if (rule === "less") {
      return val1 < val2
    }
    if (rule === "more") {
      return val1 > val2
    }
  }

  return false
}

const generateComparisonText = (type, isBetter, daisyUIData, libraryData, stringsData, index) => {
  const texts = stringsData[type]
  if (!texts) {
    console.error(`Missing strings for type: ${type} in YAML`)
    return `[Missing text: ${type}]`
  }

  let textArray
  // Handle sections that don't use better/worse structure
  if (Array.isArray(texts)) {
    textArray = texts
  } else if (texts.better && texts.worse) {
    textArray = isBetter ? texts.better : texts.worse
  } else {
    console.error(`Invalid string structure for type: ${type} in YAML`)
    return `[Invalid string structure: ${type}]`
  }

  if (!Array.isArray(textArray) || textArray.length === 0) {
    console.error(
      `Missing array or empty array for ${type}${
        texts.better ? (isBetter ? ".better" : ".worse") : ""
      }`,
    )
    return `[Missing text variant: ${type}]`
  }

  let text = getItemByIndex(textArray, index)
  if (!text) return `[Missing text variant: ${type}]`

  return replacePlaceholders(text, getReplacementMap(daisyUIData, libraryData))
}

const generateAllComparisons = (daisyUIData, libraryData, stringsData, index, attributeRules) => {
  const getSafeValue = (data, attribute) => data?.attributes?.[attribute] // Return the whole definition

  const daisyUIStarsDef = getSafeValue(daisyUIData, "GitHub stars")
  const libraryStarsDef = getSafeValue(libraryData, "GitHub stars")
  const daisyUIDownloadsDef = getSafeValue(daisyUIData, "NPM downloads")
  const libraryDownloadsDef = getSafeValue(libraryData, "NPM downloads")
  const daisyUIComponentsDef = getSafeValue(daisyUIData, "Unique components")
  const libraryComponentsDef = getSafeValue(libraryData, "Unique components")
  const daisyUIDepsDef = getSafeValue(daisyUIData, "Dependencies")
  const libraryDepsDef = getSafeValue(libraryData, "Dependencies")

  return {
    stars: generateComparisonText(
      "stars",
      checkIsDaisyUIBetter("GitHub stars", attributeRules, daisyUIStarsDef, libraryStarsDef),
      daisyUIData,
      libraryData,
      stringsData,
      index,
    ),
    downloads: generateComparisonText(
      "downloads",
      checkIsDaisyUIBetter(
        "NPM downloads",
        attributeRules,
        daisyUIDownloadsDef,
        libraryDownloadsDef,
      ),
      daisyUIData,
      libraryData,
      stringsData,
      index,
    ),
    components: generateComparisonText(
      "components",
      checkIsDaisyUIBetter(
        "Unique components",
        attributeRules,
        daisyUIComponentsDef,
        libraryComponentsDef,
      ),
      daisyUIData,
      libraryData,
      stringsData,
      index,
    ),
    dependencies: generateComparisonText(
      "dependencies",
      checkIsDaisyUIBetter("Dependencies", attributeRules, daisyUIDepsDef, libraryDepsDef),
      daisyUIData,
      libraryData,
      stringsData,
      index,
    ),
  }
}

const validateStringsData = (stringsData) => {
  const requiredKeys = [
    "overview",
    "intro",
    "stars",
    "downloads",
    "components",
    "dependencies",
    "themes",
    "performance",
    "compatibility",
    "customization",
  ]
  const minVariants = 15

  for (const key of requiredKeys) {
    const data = stringsData[key]
    if (!data) {
      console.error(`YAML 'alternative.strings' is missing the '${key}' section.`)
      throw error(500, `Server configuration error: Missing strings for '${key}'`)
    }

    if (["stars", "downloads", "components", "dependencies"].includes(key)) {
      if (
        !data.better ||
        !data.worse ||
        !Array.isArray(data.better) ||
        !Array.isArray(data.worse)
      ) {
        console.error(`YAML 'alternative.strings.${key}' is missing 'better' or 'worse' array.`)
        throw error(500, `Server configuration error: Invalid structure for '${key}' strings.`)
      }
      if (data.better.length < minVariants)
        console.warn(
          `YAML 'alternative.strings.${key}.better' has less than ${minVariants} variants.`,
        )
      if (data.worse.length < minVariants)
        console.warn(
          `YAML 'alternative.strings.${key}.worse' has less than ${minVariants} variants.`,
        )
    } else if (Array.isArray(data)) {
      if (data.length < minVariants)
        console.warn(`YAML 'alternative.strings.${key}' has less than ${minVariants} variants.`)
    } else {
      console.error(
        `YAML 'alternative.strings.${key}' should be an array but is type ${typeof data}.`,
      )
      throw error(500, `Server configuration error: Invalid structure for '${key}' strings.`)
    }
  }
}

const defineSections = (
  overviewText,
  daisyUIData,
  libraryData,
  stringsData,
  maxVariants,
  variantIndex,
  getReplacedTextFunc, // Renamed for clarity
  attributeRules, // New parameter
) => {
  const comparisons = generateAllComparisons(
    daisyUIData,
    libraryData,
    stringsData,
    variantIndex,
    attributeRules,
  )
  const daisyComponents = formatAttribute(daisyUIData, "Unique components")
  const libraryComponents = formatAttribute(libraryData, "Unique components")
  const daisyDeps = formatAttribute(daisyUIData, "Dependencies")
  const libraryDeps = formatAttribute(libraryData, "Dependencies")
  const daisyThemes = formatAttribute(daisyUIData, "Built-in Themes")
  const libraryThemes = formatAttribute(libraryData, "Built-in Themes")
  const daisyJsSize = formatAttribute(daisyUIData, "JavaScript size")
  const libraryJsSize = formatAttribute(libraryData, "JavaScript size")
  const daisyFrameworks = formatAttribute(daisyUIData, "Frameworks")
  const libraryFrameworks = formatAttribute(libraryData, "Frameworks")

  const comparisonSummary = sentenceJoin([
    hasKnownAttribute(daisyUIData, "Unique components") &&
      hasKnownAttribute(libraryData, "Unique components") &&
      `${daisyComponents} daisyUI components versus ${libraryComponents} in ${libraryData.name}`,
    hasKnownAttribute(daisyUIData, "Built-in Themes") &&
      hasKnownAttribute(libraryData, "Built-in Themes") &&
      `${daisyThemes} built-in daisyUI themes versus ${libraryThemes}`,
    hasKnownAttribute(daisyUIData, "Dependencies") &&
      hasKnownAttribute(libraryData, "Dependencies") &&
      `${daisyDeps} daisyUI dependencies versus ${libraryDeps} for ${libraryData.name}`,
  ])

  const overviewDescription =
    paragraphJoin([
      `Choosing a ${libraryData.name} alternative is less about chasing one metric and more about how the library fits your project over time.`,
      comparisonSummary ? `The data gives a useful starting point: ${comparisonSummary}.` : "",
      `daisyUI is built around Tailwind CSS classes, CSS variables, and framework-agnostic HTML, so the UI layer stays portable while your app keeps its own JavaScript behavior.`,
    ]) ||
    `${comparisons.stars || ""}. ${comparisons.components || ""}. ${comparisons.dependencies || ""}`
      .replace(/^\.\s*|\.\s*$/g, "")
      .replace(/\.\s*\./g, ".")
      .trim() ||
    getReplacedTextFunc("intro", (variantIndex + 1) % maxVariants)

  return [
    {
      id: "overview",
      title: overviewText,
      description: overviewDescription,
      attributes: [],
    },
    {
      id: "components",
      title: "Components",
      description:
        hasKnownAttribute(daisyUIData, "Unique components") &&
        hasKnownAttribute(libraryData, "Unique components")
          ? `${libraryData.name} gives you ${libraryComponents} unique components. daisyUI gives you ${daisyComponents}, but the larger difference is how those components are used: they are class names you can apply to normal HTML instead of a separate component API you have to wrap, import, or adapt.`
          : getReplacedTextFunc("components", (variantIndex + 2) % maxVariants),
      attributes: ["Unique components"],
    },
    {
      id: "themes",
      title: "Themes",
      description:
        hasKnownAttribute(daisyUIData, "Built-in Themes") &&
        hasKnownAttribute(libraryData, "Built-in Themes")
          ? `${libraryData.name} lists ${libraryThemes} built-in themes. daisyUI includes ${daisyThemes}, and the theme system is based on CSS variables, so you can switch themes at runtime, keep dark mode simple, and customize colors without rewriting every component.`
          : getReplacedTextFunc("themes", (variantIndex + 3) % maxVariants),
      attributes: ["Built-in Themes", "Supports more than two themes", "Runtime CSS customization"],
    },
    {
      id: "performance",
      title: "Performance",
      description:
        hasKnownAttribute(daisyUIData, "JavaScript size") &&
        hasKnownAttribute(libraryData, "JavaScript size")
          ? `${libraryData.name} has a JavaScript size of ${libraryJsSize}, while daisyUI is ${daisyJsSize}. That matters when a page only needs styling. daisyUI lets your framework handle state and interaction while the component styles stay in CSS.`
          : `A UI library should not add JavaScript for components that only need styling. daisyUI keeps the component layer in CSS, so your app framework remains responsible for state, events, rendering, and data flow.`,
      attributes: ["JavaScript size", "Dependencies", "Dependency size"],
    },
    {
      id: "compatibility",
      title: "Compatibility",
      description:
        hasKnownAttribute(daisyUIData, "Frameworks") && hasKnownAttribute(libraryData, "Frameworks")
          ? `${libraryData.name} is built for ${libraryFrameworks}. daisyUI works across ${daisyFrameworks} because it styles HTML with Tailwind CSS classes. That makes it easier to use the same design language in React, Vue, Svelte, server-rendered templates, static HTML, or a mixed stack.`
          : getReplacedTextFunc("compatibility", (variantIndex + 5) % maxVariants),
      attributes: ["Frameworks", "works without Node.js", "No-build version", "CDN"],
    },
    {
      id: "customization",
      title: "Customization",
      description: `${libraryData.name} can be the right choice when you want its exact component model. daisyUI is stronger when you want Tailwind CSS control, semantic component classes, runtime CSS variables, P3 colors, RTL support, and native CSS features without locking the markup to one framework.`,
      attributes: [
        "Global customizations",
        "P3 colors",
        "RTL support",
        "Native CSS nesting",
        "Runtime CSS customization",
      ],
    },
    {
      id: "community",
      title: "Community & Support",
      description:
        paragraphJoin([comparisons.stars, comparisons.downloads]) ||
        `Community numbers are only one signal, but they help show whether a UI library is active enough to trust. Check stars, downloads, open issues, license, and real project usage before choosing between ${libraryData.name} and daisyUI.`,
      attributes: [
        "GitHub stars",
        "Used by open source projects",
        "NPM downloads",
        "Open GitHub issues",
        "License",
      ],
    },
  ]
}

const filterSections = (sections, daisyUIData, libraryData, attributeRules, isBetterFunc) => {
  return sections
    .map((section) => {
      const sectionAttributes = Array.isArray(section.attributes) ? section.attributes : []
      const attributesWhereDaisyIsBetter = sectionAttributes.filter((attr) => {
        const daisyAttr = daisyUIData.attributes?.[attr]
        const libraryAttr = libraryData.attributes?.[attr]
        // Ensure both attributes exist before comparing
        return (
          daisyAttr !== undefined &&
          libraryAttr !== undefined &&
          isBetterFunc(attr, attributeRules, daisyAttr, libraryAttr)
        )
      })

      const hasComparableData = sectionAttributes.some((attr) => {
        return (
          daisyUIData.attributes?.[attr] !== undefined &&
          libraryData.attributes?.[attr] !== undefined
        )
      })

      return section.id === "overview" || hasComparableData
        ? {
            ...section,
            // Show only attributes where daisyUI is better. The section text still gives context.
            attributes: attributesWhereDaisyIsBetter,
          }
        : null
    })
    .filter((section) => section !== null)
}

export const load = async ({ params }) => {
  try {
    const [alternativeData, compareData] = await Promise.all([
      fetchAlternativeData(),
      fetchCompareData(),
    ])

    const stringsData = alternativeData.strings

    if (!compareData?.data || !compareData.attributeRules || !stringsData) {
      console.error(
        "YAML data structure error: Missing 'compare.data', 'compare.attributeRules', or 'alternative.strings'",
      )
      throw error(500, "Server configuration error: Invalid data structure")
    }

    validateStringsData(stringsData)

    const libraryData = compareData.data[params.library]
    const daisyUIData = compareData.data.daisyui

    if (!libraryData || !daisyUIData || params.library === "daisyui") {
      throw error(404, `Library data not found for: ${params.library}`)
    }

    const allStringKeys = Object.keys(stringsData)
    const minLengths = allStringKeys.map((key) => {
      const data = stringsData[key]
      if (Array.isArray(data)) return data.length
      if (data.better && data.worse) return Math.min(data.better.length, data.worse.length)
      return 0
    })

    const maxVariants = Math.min(15, ...minLengths.filter((len) => len > 0))

    if (maxVariants === 0) {
      throw error(
        500,
        "Server configuration error: Insufficient text variants found across sections.",
      )
    }
    const variantIndex = getDeterministicIndex(libraryData.name, maxVariants)

    // Helper function to generate text, now includes daisyUIData
    const getReplacedText = (key, index) => {
      const textArray = stringsData[key]
      let sourceArray = []

      if (Array.isArray(textArray)) {
        sourceArray = textArray
      } else if (textArray && textArray.better && textArray.worse) {
        // Default to 'better' if structure doesn't match simple array,
        // actual comparison happens in generateComparisonText
        console.warn(`Using default text logic for key '${key}', expected simple array.`)
        sourceArray = textArray.better
      }

      const text = getItemByIndex(sourceArray, index)
      if (!text) {
        console.error(`Failed to retrieve text for key '${key}' at index ${index}`)
        return `[Missing text: ${key}]`
      }

      return replacePlaceholders(text, getReplacementMap(daisyUIData, libraryData))
    }

    const intro = getReplacedText("intro", variantIndex)
    const overview = getReplacedText("overview", variantIndex)

    const allSections = defineSections(
      overview,
      daisyUIData,
      libraryData,
      stringsData,
      maxVariants,
      variantIndex,
      getReplacedText,
      compareData.attributeRules, // Pass attributeRules to defineSections
    )

    const filteredSections = filterSections(
      allSections,
      daisyUIData,
      libraryData,
      compareData.attributeRules,
      checkIsDaisyUIBetter,
    )

    // Regenerate comparisons for the final return object, ensuring consistency
    const finalComparisons = generateAllComparisons(
      daisyUIData,
      libraryData,
      stringsData,
      variantIndex,
      compareData.attributeRules,
    )

    return {
      library: {
        key: params.library,
        ...libraryData,
      },
      daisyui: {
        key: "daisyui",
        ...daisyUIData,
      },
      sections: filteredSections,
      attributeRules: compareData.attributeRules,
      comparisons: finalComparisons, // Use the consistently generated comparisons
      introText: intro,
    }
  } catch (err) {
    if (isHttpError(err)) {
      throw err
    }
    console.error("Error in load function:", err)
    throw error(500, "Failed to load comparison data")
  }
}

export const entries = async () => {
  try {
    const compareData = await fetchCompareData()

    if (!compareData?.data) {
      console.warn("No comparison data found in YAML for generating entries.")
      return []
    }

    return Object.keys(compareData.data)
      .filter((key) => key !== "daisyui")
      .map((key) => ({ library: key }))
  } catch (err) {
    console.error("Error generating entries:", err)
    return []
  }
}
