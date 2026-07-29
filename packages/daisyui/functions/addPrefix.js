const defaultExcludedPrefixes = ["color-", "size-", "radius-", "border", "depth", "noise"]
const excludedSelectors = [
  "prose",
  "is-hidden",
  "is-bound",
  "is-disabled",
  "is-today",
  "is-selected",
  "has-event",
  "is-inrange",
  "is-startrange",
  "is-endrange",
  "is-outside-current-month",
  "is-selection-disabled",
  "pick-whole-week",
]
const shouldExcludeSelector = (selector) => {
  const selectorName = selector.match(/^[\w-]+/)?.[0] || selector
  return excludedSelectors.includes(selectorName) || /^(rdp|pika|vc)-/.test(selectorName)
}

const shouldExcludeVariable = (variableName, excludedPrefixes) => {
  if (variableName.startsWith("tw")) {
    return true
  }
  return excludedPrefixes.some((excludedPrefix) => variableName.startsWith(excludedPrefix))
}

const prefixVariable = (variableName, prefix, excludedPrefixes) => {
  if (shouldExcludeVariable(variableName, excludedPrefixes)) {
    return variableName
  }
  return `${prefix}${variableName}`
}

const isHexDigit = (character) => character !== undefined && /^[0-9a-fA-F]$/.test(character)
const isIdentifierCharacter = (character) => {
  if (character === undefined) return false
  const characterCode = character.charCodeAt(0)
  return (
    character === "-" ||
    character === "_" ||
    character === "\\" ||
    (characterCode >= 48 && characterCode <= 57) ||
    (characterCode >= 65 && characterCode <= 90) ||
    (characterCode >= 97 && characterCode <= 122) ||
    characterCode >= 128
  )
}

const getEscapeEnd = (selector, start) => {
  if (!isHexDigit(selector[start + 1])) return Math.min(start + 2, selector.length)

  let end = start + 1
  while (end < selector.length && end < start + 7 && isHexDigit(selector[end])) {
    end++
  }
  if (/\s/.test(selector[end])) end++
  return end
}

const getIdentifierEnd = (selector, start) => {
  let end = start
  while (end < selector.length && isIdentifierCharacter(selector[end])) {
    if (selector[end] === "\\") {
      end = getEscapeEnd(selector, end)
    } else {
      end++
    }
  }
  return end
}

const prefixSelectorClasses = (selector, prefix) => {
  let result = ""
  let attributeDepth = 0
  let quote = ""

  for (let index = 0; index < selector.length;) {
    const character = selector[index]

    if (quote) {
      if (character === "\\") {
        const escapeEnd = getEscapeEnd(selector, index)
        result += selector.slice(index, escapeEnd)
        index = escapeEnd
        continue
      }
      result += character
      index++
      if (character === quote) quote = ""
      continue
    }

    if (character === '"' || character === "'") {
      quote = character
      result += character
      index++
      continue
    }

    if (character === "/" && selector[index + 1] === "*") {
      const commentEnd = selector.indexOf("*/", index + 2)
      const end = commentEnd === -1 ? selector.length : commentEnd + 2
      result += selector.slice(index, end)
      index = end
      continue
    }

    if (character === "\\") {
      const escapeEnd = getEscapeEnd(selector, index)
      result += selector.slice(index, escapeEnd)
      index = escapeEnd
      continue
    }

    if (character === "[") {
      attributeDepth++
    } else if (character === "]" && attributeDepth > 0) {
      attributeDepth--
    }

    if (character === "." && attributeDepth === 0 && isIdentifierCharacter(selector[index + 1])) {
      const identifierEnd = getIdentifierEnd(selector, index + 1)
      const identifier = selector.slice(index + 1, identifierEnd)
      result += shouldExcludeSelector(identifier) ? `.${identifier}` : `.${prefix}${identifier}`
      index = identifierEnd
      continue
    }

    result += character
    index++
  }

  return result
}

const getPrefixedKey = (key, prefix, excludedPrefixes) => {
  if (!prefix) return key

  if (key.startsWith("--")) {
    const variableName = key.slice(2)
    return `--${prefixVariable(variableName, prefix, excludedPrefixes)}`
  }

  if (key.startsWith("@property --")) {
    return processStringValue(key, prefix, excludedPrefixes)
  }

  if (key.startsWith("@")) {
    return key
  }

  const prefixedKey = prefixSelectorClasses(key, prefix)
  return /^[>+~]/.test(prefixedKey) && !prefixedKey.includes(",") ? ` ${prefixedKey}` : prefixedKey
}

const processArrayValue = (value, prefix, excludedPrefixes) => {
  return value.map((item) => {
    if (typeof item === "string") {
      if (item.startsWith(".")) {
        return getPrefixedKey(item, prefix, excludedPrefixes)
      }
      return processStringValue(item, prefix, excludedPrefixes)
    }
    if (typeof item === "object" && item !== null) {
      return Array.isArray(item)
        ? processArrayValue(item, prefix, excludedPrefixes)
        : addPrefix(item, prefix, excludedPrefixes)
    }
    return item
  })
}

const reVariableName = /--([a-zA-Z0-9_-]+)/g
const processStringValue = (value, prefix, excludedPrefixes) => {
  if (prefix === 0) return value
  return value.replace(reVariableName, (match, variableName) => {
    if (shouldExcludeVariable(variableName, excludedPrefixes)) {
      return match
    }
    return `--${prefix}${variableName}`
  })
}

const processValue = (value, prefix, excludedPrefixes) => {
  if (Array.isArray(value)) {
    return processArrayValue(value, prefix, excludedPrefixes)
  } else if (typeof value === "object" && value !== null) {
    return addPrefix(value, prefix, excludedPrefixes)
  } else if (typeof value === "string") {
    return processStringValue(value, prefix, excludedPrefixes)
  } else {
    return value
  }
}

export const addPrefix = (obj, prefix, excludedPrefixes = defaultExcludedPrefixes) => {
  return Object.entries(obj).reduce((result, [key, value]) => {
    const newKey = getPrefixedKey(key, prefix, excludedPrefixes)
    result[newKey] = processValue(value, prefix, excludedPrefixes)
    return result
  }, {})
}
