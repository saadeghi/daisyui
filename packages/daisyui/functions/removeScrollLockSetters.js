const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value)

const isEmptyObject = (value) => isPlainObject(value) && Object.keys(value).length === 0

// A setter rule only sets --page-scroll-lock (possibly prefixed), e.g. `:root:has(.modal:target) { --page-scroll-lock: ; }`
const isScrollLockSetter = (value) =>
  isPlainObject(value) &&
  !isEmptyObject(value) &&
  Object.keys(value).every((key) => key.startsWith("--") && key.endsWith("page-scroll-lock"))

// Removes scroll lock setter rules, and any rule left empty by removing them
export const removeScrollLockSetters = (styles) => {
  if (Array.isArray(styles)) {
    return styles.map(removeScrollLockSetters).filter((item) => !isEmptyObject(item))
  }
  if (!isPlainObject(styles)) return styles

  const result = {}
  for (const [key, value] of Object.entries(styles)) {
    if (isScrollLockSetter(value)) continue
    const cleaned = removeScrollLockSetters(value)
    if (isEmptyObject(cleaned) && !isEmptyObject(value)) continue
    result[key] = cleaned
  }
  return result
}
