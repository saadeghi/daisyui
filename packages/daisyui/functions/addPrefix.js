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

const getPrefixedSelector = (selector, prefix) => {
  if (!selector.startsWith(".")) return selector
  if (shouldExcludeSelector(selector.slice(1))) return selector
  return `.${prefix}${selector.slice(1)}`
}

const getPrefixedKey = (key, prefix, excludedPrefixes) => {
  if (!prefix) return key

  if (key.startsWith(".") && shouldExcludeSelector(key.slice(1))) return key

  if (key.startsWith("--")) {
    const variableName = key.slice(2)
    return `--${prefixVariable(variableName, prefix, excludedPrefixes)}`
  }

  if (key.startsWith("@property --")) {
    return processStringValue(key, prefix, excludedPrefixes)
  }

  if (key.startsWith("@") || key.startsWith("[")) {
    return key
  }

  if (key.startsWith("&")) {
    return key.replace(/\.([\w-]+)/g, (m, cls) =>
      shouldExcludeSelector(cls) ? `.${cls}` : `.${prefix}${cls}`,
    )
  }

  if (key.startsWith(":")) {
    return key.replace(/\.([\w-]+)/g, (m, cls) =>
      shouldExcludeSelector(cls) ? `.${cls}` : `.${prefix}${cls}`,
    )
  }

  if (
    key.includes(".") &&
    !key.includes(" ") &&
    !key.includes(">") &&
    !key.includes("+") &&
    !key.includes("~")
  ) {
    return key.replace(/\.([\w-]+)/g, (m, cls) =>
      shouldExcludeSelector(cls) ? `.${cls}` : `.${prefix}${cls}`,
    )
  }

  if (key.includes(">") || key.includes("+") || key.includes("~")) {
    // For comma-separated selectors
    if (key.includes(",")) {
      return key
        .split(/\s*,\s*/)
        .map((part) => {
          // Replace class names with prefixed versions for each part
          return part.replace(/\.([\w-]+)/g, (m, cls) =>
            shouldExcludeSelector(cls) ? `.${cls}` : `.${prefix}${cls}`,
          )
        })
        .join(", ")
    }

    // For simple combinators (not comma-separated)
    let processedKey = key.replace(/\.([\w-]+)/g, (m, cls) =>
      shouldExcludeSelector(cls) ? `.${cls}` : `.${prefix}${cls}`,
    )

    // Add a space before combinators at the beginning
    if (
      processedKey.startsWith(">") ||
      processedKey.startsWith("+") ||
      processedKey.startsWith("~")
    ) {
      processedKey = ` ${processedKey}`
    }

    return processedKey
  }

  if (key.includes(" ")) {
    return key
      .split(/\s+/)
      .map((part) => {
        if (part.startsWith(".")) {
          return shouldExcludeSelector(part.slice(1)) ? part : getPrefixedSelector(part, prefix)
        }
        return part
      })
      .join(" ")
  }

  if (key.includes(":")) {
    const [selector, ...pseudo] = key.split(":")
    if (selector.startsWith(".")) {
      return `${shouldExcludeSelector(selector.slice(1)) ? selector : getPrefixedSelector(selector, prefix)}:${pseudo.join(":")}`
    }
    return key.replace(/\.([\w-]+)/g, (m, cls) =>
      shouldExcludeSelector(cls) ? `.${cls}` : `.${prefix}${cls}`,
    )
  }

  if (key.startsWith(".")) {
    return shouldExcludeSelector(key.slice(1)) ? key : getPrefixedSelector(key, prefix)
  }

  return key
}

const processArrayValue = (value, prefix, excludedPrefixes) => {
  return value.map((item) => {
    if (typeof item === "string") {
      if (item.startsWith(".")) {
        return shouldExcludeSelector(item.slice(1))
          ? item
          : prefix
            ? `.${prefix}${item.slice(1)}`
            : item
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
