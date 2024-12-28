const getPrefixedKey = (key, prefix) => {
  const prefixDot = prefix ? `.${prefix}` : ""
  const prefixAmpDot = prefix ? `&.${prefix}` : ""

  if (!prefix) return key

  if (key.startsWith(".")) {
    return `${prefixDot}${key.slice(1)}`
  }
  if (key.startsWith("&.")) {
    return `${prefixAmpDot}${key.slice(2)}`
  }
  if (key.includes(" ")) {
    return key
      .split(" ")
      .map((part) => getPrefixedKey(part, prefix))
      .join(" ")
  }
  if (key.includes(":")) {
    return key
      .split(":")
      .map((part, index) => {
        if (index === 0 && part.startsWith(".")) {
          return `${prefixDot}${part.slice(1)}`
        }
        if (part.includes("(")) {
          return part.replace(
            /\(([^)]+)\)/,
            (match, inner) =>
              `(${inner
                .split(",")
                .map((sel) =>
                  sel.trim().startsWith(".") ? `${prefixDot}${sel.trim().slice(1)}` : sel.trim(),
                )
                .join(", ")})`,
          )
        }
        return part
      })
      .join(":")
  }
  if (key.startsWith("@") || key.startsWith("[")) {
    return key
  }
  return key
}

const processValue = (value, prefix) => {
  if (Array.isArray(value)) {
    return value.map((item) => {
      if (typeof item === "string" && item.startsWith(".")) {
        return prefix ? `.${prefix}${item.slice(1)}` : item
      }
      return item
    })
  } else if (typeof value === "object" && value !== null) {
    return addPrefix(value, prefix)
  } else {
    return value
  }
}

export const addPrefix = (obj, prefix) => {
  return Object.entries(obj).reduce((result, [key, value]) => {
    const newKey = getPrefixedKey(key, prefix)
    result[newKey] = processValue(value, prefix)
    return result
  }, {})
}
