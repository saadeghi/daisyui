export const CONTINUE = true
export const EXIT = false
export const SKIP = "skip"

const matches = (node, test) => {
  if (!test) return true
  if (typeof test === "string") return node.type === test
  if (Array.isArray(test)) return test.some((item) => matches(node, item))
  if (typeof test === "function") return Boolean(test(node))
  if (typeof test === "object") {
    return Object.entries(test).every(([key, value]) => node[key] === value)
  }
  return false
}

const normalizeResult = (result) => {
  if (Array.isArray(result)) return result
  if (typeof result === "number") return [CONTINUE, result]
  return result == null ? [] : [result]
}

/**
 * Small, dependency-free subset of `unist-util-visit`.
 *
 * It preserves the traversal and mutation semantics used by the docs'
 * Markdown transforms: depth-first preorder, string/array tests, parent/index
 * arguments, and visitor actions.
 */
export function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse = false) {
  const hasTest = typeof visitorOrReverse === "function"
  const test = hasTest ? testOrVisitor : undefined
  const visitor = hasTest ? visitorOrReverse : testOrVisitor
  const reverse = hasTest ? maybeReverse : Boolean(visitorOrReverse)
  const step = reverse ? -1 : 1

  const walk = (node, parent) => {
    let result = []
    const index = parent ? parent.children.indexOf(node) : undefined

    if (matches(node, test)) {
      result = normalizeResult(visitor(node, index, parent))
      if (result[0] === EXIT) return result
    }

    if (Array.isArray(node.children) && result[0] !== SKIP) {
      let offset = (reverse ? node.children.length : -1) + step

      while (offset > -1 && offset < node.children.length) {
        const childResult = walk(node.children[offset], node)
        if (childResult[0] === EXIT) return childResult
        offset = typeof childResult[1] === "number" ? childResult[1] : offset + step
      }
    }

    return result
  }

  walk(tree, undefined)
}
