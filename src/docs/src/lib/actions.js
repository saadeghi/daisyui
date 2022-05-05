export function replace(node, parameters = {}) {
  const originalContent = node.textContent ?? ""
  const defaultParameters = {
    search: "$$",
    to: "",
  }

  function update(p) {
    const { search, to } = {
      ...defaultParameters,
      ...p,
    }
    node.textContent = originalContent.replaceAll(search, to)
  }

  update(parameters)

  return {
    update,
  }
}
