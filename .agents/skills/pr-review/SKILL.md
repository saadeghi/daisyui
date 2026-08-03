---
name: pr-review
description: Review one or all open pull requests in saadeghi/daisyui using the GitHub MCP server and isolated base-versus-PR verification. Use when Codex must fact-check a daisyUI PR, verify that it solves its stated problem or linked issue, test concrete regression risks, explain developer experience before and after, decide whether it is safe to merge, and write a concise report under tmp/pr/. Base every report statement on linked sources, inspected code, or observed command output; never invent claims, risks, results, or confidence deductions.
---

# Review daisyUI pull requests

Review the code, not the PR pitch. Investigate the changed behavior, run the relevant checks, and write a short decision-ready report.

Read references/report.md before writing a report.

## Hard rules

- Use the GitHub MCP server for PRs, issues, comments, reviews, commits, changed files, and checks.
- Use GitHub read operations only. Never comment, review, label, close, update, or merge anything.
- Treat the current repository as read-only except for tmp/pr/pr-<number>.md.
- Do not change Git state, branches, dependencies, lockfiles, product code, tests, or generated files.
- Never read secrets, credentials, private keys, or .env files.
- Inspect PR code before executing it. Run it only in an isolated OS-temporary copy with no credentials.
- Use exact base and head SHAs. Never test the current working tree as a substitute.
- Report only facts from direct GitHub sources, inspected source at a named SHA, official documentation, or commands actually run with observed output.
- Attribute PR-author statements as claims until code or execution verifies them.
- Do not invent intent, expected behavior, affected users, risks, test results, or reasons to lower confidence.
- Do not treat the lack of a linked issue, assignment, new test, or PR description detail as a product defect.
- Do not require unrelated tools or tests. Use the smallest verification that proves the changed behavior, then run the relevant package checks.
- Do not lower confidence because unknown future bugs are theoretically possible.

## Select the PRs

If the user names a PR, review that open PR. Otherwise:

1. Call the GitHub MCP identity or readiness method if required.
2. List every open PR in saadeghi/daisyui, following pagination.
3. Review each PR independently.
4. Write one report per PR at tmp/pr/pr-<number>.md.

Record the PR URL, base SHA, head SHA, changed files, current merge state, and current checks.

## Problem

Determine what the PR is trying to change from:

- linked issue bodies and discussions;
- the PR description and comments;
- the actual diff and the behavior of the base revision.

Read every explicitly linked issue. Verify its reported behavior against the current base when practical.

A linked issue is not required. If there is no issue, state that fact briefly and derive the testable problem from the PR claim and changed behavior. Never fail a technically valid PR merely because no issue was filed.

Establish expected behavior from the repository, an existing public contract, a reproduced user-visible behavior, or official documentation. Do not use the author's wording alone as proof.

## Verify

### Inspect first

Read all changed files and their direct consumers. Identify the smallest public behavior affected by each change. Check for unrelated edits, unsafe code, dependency changes, weakened tests, API changes, and generated-file mismatches.

### Test base versus PR

Materialize clean source copies for the exact base and head SHAs in an OS-temporary directory without Git metadata. Use the same environment and inputs for both.

Run a focused independent check that answers:

1. Does the problem exist on the base?
2. Does the PR change that behavior as claimed?
3. Does the previous valid behavior still work?
4. Do relevant existing tests and builds pass?

Use the most direct proof available:

- For deterministic CSS or generated output, inspect the exact declarations and compile a focused fixture. Use a browser only when browser-computed behavior is genuinely needed to decide the result.
- For JavaScript or build behavior, run the smallest reproduction and the affected package tests.
- For docs behavior, verify the relevant build, route, rendering, or interaction.
- For public APIs, exercise the old supported usage and the new behavior.

Run broader tests only when the changed surface reaches them. Green CI supports the result but does not replace the focused check. PR-added tests may be used, but do not rely on them as the only proof.

A separate test-merge candidate is required only when the base moved after the PR head, GitHub reports a conflict or uncertain merge state, or the change interacts with recent base changes. Do not create a blocker from an unavailable test-merge SHA when exact base and head testing already proves an isolated change.

If a required check cannot run, first decide whether another direct check proves the same behavior. Record it as a concern only when the missing check is necessary to resolve a concrete question about the changed code.

## Risks

Look for concrete ways the changed lines could affect existing supported usage. Trace each scenario from:

changed code → real consumer or public contract → failure condition.

Test each scenario when practical. Report only scenarios with that trace. Never list generic possibilities that could apply to any PR.

Use these likelihood labels:

- Confirmed: the failure was reproduced.
- Possible: a real supported path and failure mechanism were identified, but the relevant check could not resolve it.
- Ruled out: the targeted check passed.

For every row, name the source path or contract, the exact check, its result, and why the likelihood label follows. A Ruled out scenario is evidence of safety, not a concern. If no Confirmed or Possible scenario remains, say that no concern was found in the affected scope.

## Compare

Show the developer-visible behavior before and after. Prefer a small code block using actual markup, API usage, configuration, or generated output. If the change is internal, explain the observable effect instead.

Do not fabricate an example. Derive it from the diff, linked issue, documentation, or the reproduction used during verification.

## Result

Give a direct verdict:

- Safe to merge: YES when the stated problem is verified, the PR fixes it, relevant checks pass, and no Confirmed or Possible concern remains. Confidence must be 100%.
- Safe to merge: NO when a specific concern remains. Every reason must name the observed failure or unresolved concrete scenario.

Use only these confidence values so the report cannot manufacture numerical precision:

- 100%: the relevant verification passed and no concern remains.
- 50%: no failure was reproduced, but at least one Possible concern remains unresolved.
- 0%: a Confirmed concern exists, the claimed fix failed, or a relevant regression was reproduced.

Use the lowest applicable value. These are verdict labels, not calculated probabilities. Do not use weighted categories, point deductions, caps, decision gates, or formulas. Do not subtract confidence for missing bureaucracy, irrelevant coverage, or unknowable future behavior.

When confidence is below 100%, explain exactly what is wrong and what check or change would resolve it. When no concern is found after relevant verification, return 100% and safe to merge.

## Write the report

Use references/report.md and keep the report concise. Include only:

1. Problem
2. Verify
3. Risks
4. Compare
5. Result

Cite facts inline with direct GitHub URLs, immutable SHAs and repository paths, official documentation URLs, or exact commands and observed results. Do not add an evidence ledger, scoring table, gate matrix, policy audit, exhaustive file inventory, or speculative caveats.

Re-fetch the PR after testing. If the head changed, rerun the affected verification before writing the verdict. Update tmp/pr/pr-<number>.md rather than creating duplicate reports.

In the final handoff, list the reports written and state that no GitHub action, product-code change, dependency change, or Git operation was performed.
