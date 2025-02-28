export const replaceApplyTrueWithEmptyObject = (obj) => {
  const stack = [obj]

  while (stack.length > 0) {
    const currentObj = stack.pop()

    for (const [key, value] of Object.entries(currentObj)) {
      if (typeof value === "object" && value !== null) {
        stack.push(value)
      }

      if (key.startsWith("@apply") && value === true) {
        currentObj[key] = {}
      }
    }
  }
}
