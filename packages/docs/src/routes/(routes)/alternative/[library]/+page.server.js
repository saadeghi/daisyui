import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
import yaml from "js-yaml"
import { error } from "@sveltejs/kit"

const fetchYamlData = async (url) => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`)
    }

    const yamlText = await response.text()
    return yaml.load(yamlText)
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

  const replacements = {
    "{libraryName}": libraryData.name,
    "{depsCount}": libraryData.attributes?.Dependencies?.value ?? "N/A",
    "{otherJSSize}": libraryData.attributes?.["JavaScript size"]?.value ?? "N/A",
    "{otherFrameworks}": libraryData.attributes?.Frameworks?.value ?? "specific frameworks",
    "{daisyThemes}": daisyUIData.attributes?.["Built-in Themes"]?.value ?? "many",
    "{otherThemes}": libraryData.attributes?.["Built-in Themes"]?.value ?? "few",
  }

  for (const [key, value] of Object.entries(replacements)) {
    text = text.replace(
      new RegExp(key.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"),
      String(value),
    )
  }

  return text
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

  return [
    {
      id: "overview",
      title: overviewText,
      description:
        `${comparisons.stars || ""}. ${comparisons.components || ""}. ${comparisons.dependencies || ""}`
          .replace(/^\.\s*|\.\s*$/g, "")
          .replace(/\.\s*\./g, ".")
          .trim() || getReplacedTextFunc("intro", (variantIndex + 1) % maxVariants), // Fallback description
      attributes: ["Unique components", "Dependencies", "GitHub stars", "NPM downloads"],
    },
    {
      id: "components",
      title: "Components",
      description:
        comparisons.components ||
        getReplacedTextFunc("components", (variantIndex + 2) % maxVariants), // Use components text as fallback
      attributes: ["Unique components"],
    },
    {
      id: "themes",
      title: "Themes",
      description: getReplacedTextFunc("themes", (variantIndex + 3) % maxVariants),
      attributes: ["Built-in Themes", "Supports more than two themes", "Runtime CSS customization"],
    },
    {
      id: "performance",
      title: "Performance",
      description:
        comparisons.dependencies ||
        getReplacedTextFunc("performance", (variantIndex + 4) % maxVariants),
      attributes: ["JavaScript size", "Dependencies", "Dependency size"],
    },
    {
      id: "compatibility",
      title: "Compatibility",
      description: getReplacedTextFunc("compatibility", (variantIndex + 5) % maxVariants),
      attributes: ["Frameworks", "works without Node.js", "No-build version", "CDN"],
    },
    {
      id: "customization",
      title: "Customization",
      description: getReplacedTextFunc("customization", (variantIndex + 6) % maxVariants),
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
        `${comparisons.stars || ""}. ${comparisons.downloads || ""}`
          .replace(/^\.\s*|\.\s*$/g, "")
          .replace(/\.\s*\./g, ".")
          .trim() || getReplacedTextFunc("intro", (variantIndex + 7) % maxVariants), // Fallback
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

      // Keep section if it's overview OR if daisyUI is better in at least one attribute
      return attributesWhereDaisyIsBetter.length > 0 || section.id === "overview"
        ? {
            ...section,
            // Show only attributes where daisyUI is better
            attributes: attributesWhereDaisyIsBetter,
          }
        : null // Return null if section should be filtered out
    })
    .filter((section) => section !== null) // Remove null entries
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

      // Perform replacements
      const replacements = {
        "{libraryName}": libraryData.name,
        "{depsCount}": libraryData.attributes?.Dependencies?.value ?? "N/A",
        "{otherJSSize}": libraryData.attributes?.["JavaScript size"]?.value ?? "N/A",
        "{otherFrameworks}": libraryData.attributes?.Frameworks?.value ?? "specific frameworks",
        "{daisyThemes}": daisyUIData.attributes?.["Built-in Themes"]?.value ?? "many",
        "{otherThemes}": libraryData.attributes?.["Built-in Themes"]?.value ?? "few",
      }

      let replacedText = text
      for (const [placeholder, value] of Object.entries(replacements)) {
        replacedText = replacedText.replace(
          new RegExp(placeholder.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"),
          String(value),
        )
      }
      return replacedText
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
