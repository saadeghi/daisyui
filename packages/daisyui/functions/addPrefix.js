const defaultExcludedPrefixes = ["color-", "size-", "radius-", "border", "depth", "noise"]

const shouldExcludeVariable = (variableName, excludedPrefixes) => {
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
  return `.${prefix}${selector.slice(1)}`
}

const getPrefixedKey = (key, prefix, excludedPrefixes) => {
  const prefixDot = prefix ? `.${prefix}` : ""
  const prefixAmpDot = prefix ? `&.${prefix}` : ""

  if (!prefix) return key

  if (key.startsWith("--")) {
    const variableName = key.slice(2)
    return `--${prefixVariable(variableName, prefix, excludedPrefixes)}`
  }

  if (key.startsWith("@") || key.startsWith("[")) {
    return key
  }

  if (key.startsWith("&.")) {
    return `${prefixAmpDot}${key.slice(2)}`
  }

  if (key.startsWith(":")) {
    return key.replace(/\.([\w-]+)/g, `.${prefix}$1`)
  }

  if (
    key.includes(".") &&
    !key.includes(" ") &&
    !key.includes(">") &&
    !key.includes("+") &&
    !key.includes("~")
  ) {
    return key
      .split(".")
      .filter(Boolean)
      .map((part) => prefix + part)
      .join(".")
      .replace(/^/, ".")
  }

  if (key.includes(">") || key.includes("+") || key.includes("~")) {
    return key
      .split(/\s*([>+~])\s*/)
      .map((part) => {
        part = part.trim()
        // Check if part contains any CSS function (like :not(), :is(), :where(), etc)
        if (part.includes(":(") || part.match(/:[a-z-]+\(/)) {
          return part.replace(/\.[\w-]+(?=[\s)])/g, (match) => `.${prefix}${match.slice(1)}`)
        }
        if (part === ">" || part === "+" || part === "~") return ` ${part} `
        return part.startsWith(".") ? getPrefixedSelector(part, prefix) : part
      })
      .join("")
  }

  if (key.includes(" ")) {
    return key
      .split(/\s+/)
      .map((part) => {
        if (part.startsWith(".")) {
          return getPrefixedSelector(part, prefix)
        }
        return part
      })
      .join(" ")
  }

  if (key.includes(":")) {
    const [selector, ...pseudo] = key.split(":")
    if (selector.startsWith(".")) {
      return `${getPrefixedSelector(selector, prefix)}:${pseudo.join(":")}`
    }
    return key.replace(/\.([\w-]+)/g, `.${prefix}$1`)
  }

  if (key.startsWith(".")) {
    return getPrefixedSelector(key, prefix)
  }

  return key
}

const processArrayValue = (value, prefix, excludedPrefixes) => {
  return value.map((item) => {
    if (typeof item === "string") {
      if (item.startsWith(".")) {
        return prefix ? `.${prefix}${item.slice(1)}` : item
      }
      return processStringValue(item, prefix, excludedPrefixes)
    }
    return item
  })
}

const processStringValue = (value, prefix, excludedPrefixes) => {
  return value.replace(/var\(--([^)]+)\)/g, (match, variableName) => {
    if (shouldExcludeVariable(variableName, excludedPrefixes)) {
      return match
    }
    return `var(--${prefix}${variableName})`
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
