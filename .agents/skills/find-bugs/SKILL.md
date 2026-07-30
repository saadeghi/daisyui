---
name: find-bugs
description: Investigate reported or suspected bugs in this daisyUI monorepo, including proactive bug searches in packages/daisyui and packages/docs. Use when Codex must reproduce a defect, prove product impact, identify its root cause and isolation boundary, evaluate non-code solution options, or prepare a decision-ready bug-fix plan in tmp/bugs/. This skill performs read-only source analysis and verification; it never implements a fix, edits product source or tests, changes dependencies, or commits.
metadata:
  internal: true
---

# Bug Finder

Find only evidence-backed product bugs and leave the user with a plan they can approve or reject.
Do not implement the plan.

## Non-negotiable boundary

- Treat the repository as read-only except for the final `tmp/bugs/*.md` plan files.
- Do not edit source, tests, snapshots, fixtures, generated package files, build output, config,
  translations, dependencies, lockfiles, or Git metadata.
- Do not create a temporary reproduction inside `packages/`. Put disposable fixtures, logs, and
  screenshots in an OS temporary directory.
- Do not run formatters, auto-fixers, write-mode generators, dependency installers, release
  commands, or publishing commands.
- Do not create a branch, commit, PR, issue, comment, or other external side effect.
- Do not provide a patch or replacement code. Describe the intended behavior and future change
  boundary in prose.
- Stop after writing the plan. The user decides whether implementation should happen.

Normal tests, local servers, and read-only diagnostics are allowed. Prefer commands that do not
write into the repository. Before running any command, determine whether it creates build output
or generated files. If it does, use an OS-temporary copy or a non-writing alternative; otherwise
record that verification as pending. Never overwrite or clean up a user's files.

## Load the relevant guidance

1. Read `packages/AGENTS.md`.
2. Read the target package's `AGENTS.md`.
3. Read [references/daisyui.md](references/daisyui.md) for `packages/daisyui`.
4. Read [references/docs.md](references/docs.md) for `packages/docs`.
5. Read both package references when ownership is unclear or the defect crosses the package
   boundary.
6. Read [references/bug-plan.md](references/bug-plan.md) before creating or updating a plan.

Re-read current files rather than assuming this skill's repository map is still complete.

## Investigation workflow

### 1. Establish a clean evidence baseline

- Record `git status --short` without changing it. Treat every pre-existing change as user-owned.
- Capture the exact report, affected URL/class/API, environment, configuration, browser/runtime,
  viewport, theme, language, and expected behavior when known.
- Define the product claim to test before searching broadly.
- If no bug was supplied, scope the search to the requested package. If neither package was
  specified, inspect both without turning code smells or missing features into bugs.

### 2. Search from behavior toward ownership

- Use `rg --files` and `rg` first. Follow the failing route, selector, class, option, data field, or
  message into its callers, transformations, and generated/product-facing output.
- Inspect nearby tests, related components, shared helpers/tokens, build steps, documentation, and
  recent history when it can explain intent.
- For proactive searches, prioritize boundary conditions, conflicting states, error and empty
  paths, SSR/client differences, theme and direction variants, browser-specific behavior,
  configuration combinations, stale assumptions, and gaps between source and shipped output.
- Treat TODOs, suspicious code, style preferences, performance opportunities, and absent tests as
  leads only. They are not bugs without an observable broken product contract.

### 3. Reproduce and prove product impact

A finding is confirmed only when all of these are true:

1. State the expected behavior from a reliable source: existing docs, tests, API contract,
   accessibility/platform behavior, or a clearly established product invariant.
2. Reproduce the actual behavior on the current checkout with exact steps and a stable failure
   signal. Repeat it and include a nearby passing control when useful.
3. Exercise the user-facing path, not only an isolated source fragment. Use the built package,
   actual docs route, rendered browser state, or public function/configuration involved.
4. Trace the observed failure back to current source and explain the causal chain.
5. Rule out stale generated output, unsupported configuration, misuse, external service failure,
   browser-only flakiness, and intended behavior.

Use the narrowest existing automated test or diagnostic first, then broader verification in
proportion to the risk. For visual or interactive behavior, inspect the rendered page, computed
state, console, and network as relevant. Never change source merely to make a reproduction.

Do not write a plan for an unverified suspicion. Report what is missing and stop.

### 4. Establish root cause and isolation

Identify the smallest source unit that explains every reproduced symptom. Distinguish root cause
from the file where the symptom becomes visible.

Map:

- direct callers/consumers and the source-to-product path;
- shared selectors, tokens, helpers, data, layouts, translations, and build transforms;
- configurations, states, routes, themes, languages, directions, and browsers affected;
- adjacent behavior that must remain unchanged;
- existing coverage and the exact future regression-test seam.

Call the bug independently fixable only when:

- one bounded behavioral change addresses the root cause;
- the public behavior and acceptance criteria are unambiguous;
- the likely source files and generated downstream outputs are known;
- unrelated behavior can be protected with focused and broader checks;
- no dependency addition, broad redesign, unrelated refactor, or speculative cleanup is required.

If isolation cannot be demonstrated, do not present the plan as ready. State the unresolved
coupling or product decision needed and stop without creating a decision-ready plan.

### 5. Develop solution options without changing code

- Derive solutions from the proven root cause, repository conventions, and smallest safe change
  boundary.
- Describe each option's behavior, likely source locations, compatibility, test seam, risks, and
  effect on generated output. Do not include code or a patch.
- Prefer the smallest option that preserves public API/class behavior and avoids added bytes,
  dependencies, specificity, duplication, or new cross-package coupling.
- Include alternatives when genuinely viable. Explain why the recommendation is safer and why
  rejected options are broader, brittle, or fail a constraint.
- Do not test a hypothetical fix by editing source. Specify how an approved implementation would
  prove the fix and detect regressions.

### 6. Apply the plan readiness gate

Create a plan only after answering yes to every item:

- Is the behavior reproducible on the current checkout?
- Is product impact directly observed?
- Is expected behavior supported by evidence?
- Is the root cause evidenced rather than guessed?
- Is a bounded fix feasible in isolation?
- Are affected and protected behaviors listed?
- Is the recommended solution precise enough to implement without rediscovery?
- Are regression and product-level verification steps defined?
- Are risks, unknowns, and acceptance criteria explicit?

### 7. Group findings and write plans

- Write plans only under `tmp/bugs/`.
- Use one Markdown file per independent bug.
- Combine multiple symptoms or reports only when evidence shows one root cause and the same atomic
  source change fixes all of them. List every symptom and reproduction in that shared plan.
- Use separate files when findings require different source changes, even if they affect the same
  component or were found together.
- Reuse and update an existing plan when it describes the same root cause; do not create a
  duplicate.
- Use the filename rules and full structure in [references/bug-plan.md](references/bug-plan.md).
- Create `tmp/bugs/` only when at least one finding passes the readiness gate.
- After writing, re-open every plan and verify that every factual claim points to evidence and
  that no plan contains implementation code.

## Handoff

Report the created or updated plan path, the verified product impact, and any verification that
remains pending. Explicitly state that no fix was implemented. End the task and wait for the
user's decision.
