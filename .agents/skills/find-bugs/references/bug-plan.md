# Bug plan format

Write each decision-ready plan to:

`tmp/bugs/<package>-<short-kebab-case-symptom>.md`

Use `daisyui`, `docs`, or `cross-package` as `<package>`. Keep the filename short and descriptive.
Before you create a file, search `tmp/bugs/*.md` for the same root cause. Update the existing file
instead of creating a duplicate.

Use one file for multiple symptoms only when they have the same proven root cause and the same
solution. Otherwise, write a separate file for each bug.

## Status

These files are bug reports with solution options. They use bug status values, not implementation
plan status values. Start every file with YAML frontmatter that contains `status`.

- Use `open` for an unresolved local bug. Use `closed` only after a verified fix or a confirmed
  decision to close the bug.
- If the report is about a specific PR, use its current verified state in lowercase: `open`,
  `merged`, or `closed`. A merged PR uses `merged`, even if the API also reports it as closed.
- If the report is about a specific issue, use its current verified issue state, such as `open`
  or `closed`.
- Make clear which item the status describes. A link to a PR or issue does not change the status
  source of a local bug report.
- Check the status each time you create or update the file. A local fix or commit does not prove
  that a remote PR or issue changed state.

## Required structure

Include the required frontmatter. Use only these body sections and keep each section concise.
Do not add extra sections, implementation code, or a patch.

```markdown
---
status: "open"
---

# Summary

<Describe the issue.>

# Impact

<Explain how the issue affects the product and its users.>

# Current behavior

<Describe what the product does now.>

# Expected behavior

<Describe what the product must do instead.>

# Reason

<Explain the proven root cause. Include repository-relative file and symbol references when they
help identify the cause.>

# Reproduction

<Give the shortest exact steps that reproduce the issue. Include only the minimal commands or
code example needed. State the failure result.>

# Solution

## 1. <Solution name> — Recommended

<Describe the solution.>

- Pros: <Main benefits.>
- Cons: <Main disadvantages.>
- Possible side effects: <Product behavior or areas that can change. Write `None known` when no
  side effect is known.>

## 2. <Solution name>

<Describe the solution.>

- Pros: <Main benefits.>
- Cons: <Main disadvantages.>
- Possible side effects: <Product behavior or areas that can change. Write `None known` when no
  side effect is known.>

## 3. <Solution name>

<Describe the solution.>

- Pros: <Main benefits.>
- Cons: <Main disadvantages.>
- Possible side effects: <Product behavior or areas that can change. Write `None known` when no
  side effect is known.>
```

## Rules

- Include only facts supported by the investigation.
- Clearly mark one solution as recommended.
- Rank the solutions from most suitable to least suitable.
- Use repository-relative paths.
- Do not include unrelated findings, investigation logs, command history, acceptance criteria,
  risk tables, or future work.
