# Bug plan format

Write each decision-ready plan to:

`tmp/bugs/<package>-<short-kebab-case-symptom>.md`

Use `daisyui`, `docs`, or `cross-package` as `<package>`. Keep the filename stable, descriptive,
and free of issue numbers unless an issue number is part of the supplied report. Before creating
a file, search `tmp/bugs/*.md` for the same root cause. Update the existing plan instead of
duplicating it.

Use one file for multiple reported symptoms only when one proven root cause and the same atomic
source change resolves all of them. Otherwise split them into independent files.

## Required structure

Use this structure exactly. Replace every placeholder; write `None` only when the section truly
does not apply. Do not include implementation code or a patch.

```markdown
---
title: "<concise bug title>"
status: "ready-for-decision"
packages:
  - "packages/daisyui"
area: "<component, route, function, build step, or subsystem>"
severity: "<low | medium | high | critical>"
confidence: "<high only for a ready plan>"
date: "YYYY-MM-DD"
---

# <Concise bug title>

## Summary

<One paragraph stating the broken behavior, expected behavior, affected users/configurations, and
why this is a bug rather than a feature request.>

## Product impact

- Affected product surface:
- Affected users/configurations:
- Severity rationale:
- Scope observed:
- Scope explicitly not observed:

## Evidence

### Expected behavior

<State the contract and cite its repository file, test, documentation, platform behavior, or
other authoritative basis.>

### Actual behavior

<State the stable failure signal and attach exact output, computed state, URL, or screenshot path
when relevant.>

### Reproduction

1. <Prerequisite/environment>
2. <Exact command or navigation/input step>
3. <Exact observation>

### Controls

- Passing comparison:
- Repetition/flakiness result:
- Environment matrix checked:

## Root cause

### Causal chain

1. <User-facing action/input>
2. <Route, public API, class, or build path>
3. <Source behavior with repository path and line reference>
4. <Why that behavior produces the observed failure>

### Root cause statement

<One precise, evidence-backed statement. Do not restate only the symptom.>

## Isolation analysis

- Smallest change boundary:
- Direct consumers:
- Shared dependencies/selectors/tokens/layouts:
- Adjacent behavior that must remain unchanged:
- Generated outputs affected later:
- Why the fix is feasible in isolation:
- Out-of-scope follow-ups:

## Solution options

### Recommended

- Behavioral change:
- Likely source files:
- Why this addresses the root cause:
- Compatibility and repository-rule fit:
- Tradeoffs:

### Alternatives considered

1. **<Alternative>** — <behavior, benefit, risk, and reason not recommended>

## Implementation plan for later approval

1. <Future source change described in prose, with file/symbol/selector and intended behavior>
2. <Future regression coverage, including exact test location and cases>
3. <Future generated-output/build step, if applicable; never treat generated output as source>
4. <Future focused and broader verification>

## Verification plan

### Regression checks

- <Exact test file and cases to add or extend after approval>

### Commands

- `<focused command>` — <expected proof>
- `<broader command>` — <expected regression coverage>

### Product checks

- <Exact route/fixture/configuration, interaction, viewport/theme/language/browser, and expected
  result>

## Risk assessment

| Risk   | Why it matters | Mitigation/check         |
| ------ | -------------- | ------------------------ |
| <risk> | <impact>       | <specific planned check> |

## Acceptance criteria

- [ ] <User-visible expected behavior>
- [ ] <Protected adjacent behavior>
- [ ] <Automated regression proof>
- [ ] <Product-level verification>
- [ ] <Relevant package-wide checks pass>

## Open questions

- None.
```

## Quality rules

- Use repository-relative paths and current line references for evidence. Treat line numbers as
  investigation aids, not the only locator; include a symbol, selector, route, or heading too.
- Include the exact commands already run and their observed outcome in `Evidence`. Keep commands
  proposed for the future fix in `Verification plan`.
- Separate observed facts from inference. Mark any unexecuted check as pending.
- Make the implementation plan precise enough that a later agent does not need to rediscover the
  cause, affected surface, or test seam.
- Do not include source code, pseudo-patches, commit instructions, branch instructions, issue/PR
  actions, release actions, or unrelated cleanup.
- Do not use `status: ready-for-decision` or `confidence: high` when reproduction, root cause,
  isolation, or product impact remains uncertain. In that case, do not create the plan.
