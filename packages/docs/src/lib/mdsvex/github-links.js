import { visit } from "./visit.js"

// Adapted from remark-github and mdast-util-find-and-replace (MIT).
// Copyright (c) 2015 Titus Wormer.
const denyMention = new Set(["mention", "mentions"])
const denyHash = new Set(["acceded", "deedeed", "defaced", "effaced", "fabaceae"])
const minShaLength = 7
const userGroup = "[\\da-z][-\\da-z]{0,38}"
const projectGroup = "(?:\\.git[\\w-]|\\.(?!git)|[\\w-])+"
const repoGroup = `(${userGroup})\\/(${projectGroup})`

const linkRegex = new RegExp(
  `^https?:\\/\\/github\\.com\\/${repoGroup}\\/(commit|compare|issues|pull)\\/([a-f\\d]+(?:\\.{3}[a-f\\d]+)?\\/?(?=[#?]|$))`,
  "i",
)
const repoRegex = new RegExp(`(?:^|/(?:repos/)?)${repoGroup}(?=\\.git|[\\/#@]|$)`, "i")
const referenceRegex = new RegExp(
  `(${userGroup})(?:\\/(${projectGroup}))?(?:#([1-9]\\d*)|@([a-f\\d]{7,40}))`,
  "gi",
)
const mentionRegex = new RegExp(`@(${userGroup}(?:\\/${userGroup})?)`, "gi")

const abbreviate = (sha) => sha.slice(0, minShaLength)

export const defaultBuildGithubUrl = (values) => {
  const base = "https://github.com"
  if (values.type === "mention") return `${base}/${values.user}`
  if (values.type === "commit") {
    return `${base}/${values.user}/${values.project}/commit/${values.hash}`
  }
  if (values.type === "issue") {
    return `${base}/${values.user}/${values.project}/issues/${values.no}`
  }
  return `${base}/${values.user}/${values.project}/compare/${values.base}...${values.compare}`
}

const replaceText = (tree, expression, replacement) => {
  const walk = (node, ancestors) => {
    if (
      node.type === "text" &&
      !ancestors.some((ancestor) => ["link", "linkReference"].includes(ancestor.type))
    ) {
      const parent = ancestors.at(-1)
      if (!parent) return

      const siblings = parent.children
      const index = siblings.indexOf(node)
      const nodes = []
      let changed = false
      let start = 0
      expression.lastIndex = 0
      let match = expression.exec(node.value)

      while (match) {
        const position = match.index
        let value = replacement(...match, {
          index: match.index,
          input: match.input,
          stack: [...ancestors, node],
        })

        if (typeof value === "string") {
          value = value ? { type: "text", value } : undefined
        }

        if (value === false) {
          expression.lastIndex = position + 1
        } else {
          if (start !== position) {
            nodes.push({ type: "text", value: node.value.slice(start, position) })
          }
          if (Array.isArray(value)) nodes.push(...value)
          else if (value) nodes.push(value)
          start = position + match[0].length
          changed = true
        }

        if (!expression.global) break
        match = expression.exec(node.value)
      }

      if (!changed) return
      if (start < node.value.length) nodes.push({ type: "text", value: node.value.slice(start) })
      siblings.splice(index, 1, ...nodes)
      return index + nodes.length
    }

    if (!Array.isArray(node.children)) return
    let index = 0
    const nextAncestors = [...ancestors, node]
    while (index < node.children.length) {
      const nextIndex = walk(node.children[index], nextAncestors)
      index = typeof nextIndex === "number" ? nextIndex : index + 1
    }
  }

  walk(tree, [])
}

const parseGithubLink = (node) => {
  const match = linkRegex.exec(node.url)
  if (
    !match ||
    node.children.length !== 1 ||
    node.children[0].type !== "text" ||
    node.children[0].value !== node.url ||
    (match[3] === "commit" && (match[4].length < 4 || match[4].length > 40)) ||
    (match[3] === "compare" && !/^[a-f\d]{4,40}\.{3}[a-f\d]{4,40}$/.test(match[4])) ||
    ((match[3] === "issues" || match[3] === "pull") && /[a-f]/i.test(match[4])) ||
    match[2].length >= 100
  ) {
    return
  }

  let reference = match[4]
  if (match[3] === "compare") {
    const [base, compare] = reference.split("...")
    reference = `${abbreviate(base)}...${abbreviate(compare)}`
  } else {
    reference = abbreviate(reference)
  }

  return {
    comment: node.url.charAt(match[0].length) === "#" && match[0].length + 1 < node.url.length,
    page: match[3],
    project: match[2],
    reference,
    user: match[1],
  }
}

export function githubLinks(options = {}) {
  const buildUrl = options.buildUrl || defaultBuildGithubUrl

  return (tree) => {
    const repositoryMatch = repoRegex.exec(options.repository || "")
    if (!repositoryMatch) {
      throw new Error("Unexpected invalid `repository`, expected for example `user/project`")
    }

    const repository = { project: repositoryMatch[2], user: repositoryMatch[1] }

    const replaceMention = (value, username, match) => {
      if (
        /[\w`]/.test(match.input.charAt(match.index - 1)) ||
        /[/\w`]/.test(match.input.charAt(match.index + value.length)) ||
        denyMention.has(username)
      ) {
        return false
      }

      const url = buildUrl({ type: "mention", user: username })
      if (!url) return false
      let node = { type: "text", value }
      if (options.mentionStrong !== false) node = { type: "strong", children: [node] }
      return { type: "link", title: null, url, children: [node] }
    }

    const replaceIssue = (value, no, match) => {
      if (
        /\w/.test(match.input.charAt(match.index - 1)) ||
        /\w/.test(match.input.charAt(match.index + value.length))
      ) {
        return false
      }
      const url = buildUrl({ no, type: "issue", ...repository })
      return url ? { type: "link", title: null, url, children: [{ type: "text", value }] } : false
    }

    const replaceHashRange = (value, base, compare, match) => {
      if (
        /[^\t\n\r (@[{]/.test(match.input.charAt(match.index - 1)) ||
        /\w/.test(match.input.charAt(match.index + value.length)) ||
        denyHash.has(value)
      ) {
        return false
      }
      const url = buildUrl({ base, compare, type: "compare", ...repository })
      return url
        ? {
            type: "link",
            title: null,
            url,
            children: [
              { type: "inlineCode", value: `${abbreviate(base)}...${abbreviate(compare)}` },
            ],
          }
        : false
    }

    const replaceHash = (value, match) => {
      if (
        /[^\t\n\r (@[{.]/.test(match.input.charAt(match.index - 1)) ||
        (match.input.charAt(match.index - 1) === "." &&
          match.input.charAt(match.index - 2) !== ".") ||
        /\w/.test(match.input.charAt(match.index + value.length)) ||
        denyHash.has(value)
      ) {
        return false
      }
      const url = buildUrl({ hash: value, type: "commit", ...repository })
      return url
        ? {
            type: "link",
            title: null,
            url,
            children: [{ type: "inlineCode", value: abbreviate(value) }],
          }
        : false
    }

    const replaceReference = (value, user, specificProject, no, hash, match) => {
      if (
        /[^\t\n\r (@[{]/.test(match.input.charAt(match.index - 1)) ||
        /\w/.test(match.input.charAt(match.index + value.length))
      ) {
        return false
      }

      const project = specificProject || repository.project
      const values = no
        ? { no, project, type: "issue", user }
        : { hash, project, type: "commit", user }
      const url = buildUrl(values)
      if (!url) return false

      const children = []
      let label = ""
      if (project !== repository.project) label += `${user}/${project}`
      else if (user !== repository.user) label += user

      if (no) label += `#${no}`
      else {
        label += "@"
        children.push({ type: "inlineCode", value: abbreviate(hash) })
      }
      children.unshift({ type: "text", value: label })
      return { type: "link", title: null, url, children }
    }

    for (const [expression, replacement] of [
      [referenceRegex, replaceReference],
      [mentionRegex, replaceMention],
      [/(?:#|\bgh-)([1-9]\d*)/gi, replaceIssue],
      [/\b([a-f\d]{7,40})\.{3}([a-f\d]{7,40})\b/gi, replaceHashRange],
      [/\b[a-f\d]{7,40}\b/gi, replaceHash],
    ]) {
      replaceText(tree, expression, replacement)
    }

    visit(tree, "link", (node) => {
      const link = parseGithubLink(node)
      if (!link) return

      const comment = link.comment ? " (comment)" : ""
      let base
      if (
        link.project !== repository.project ||
        (link.page === "compare" && link.user !== repository.user)
      ) {
        base = `${link.user}/${link.project}`
      } else if (link.user === repository.user) {
        base = ""
      } else {
        base = link.user
      }

      const children = []
      if (link.page === "issues" || link.page === "pull") {
        children.push({ type: "text", value: `${base}#${link.reference}${comment}` })
      } else {
        if (base) children.push({ type: "text", value: `${base}@` })
        children.push({ type: "inlineCode", value: link.reference })
        if (link.comment) children.push({ type: "text", value: comment })
      }
      node.children = children
    })
  }
}
