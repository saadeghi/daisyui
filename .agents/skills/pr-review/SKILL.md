---
name: pr-review
description: Review one or all open pull requests in saadeghi/daisyui with read-only GitHub data and isolated base-versus-PR checks. Use when Codex must verify a PR, find concrete regressions, decide whether it is safe to merge, and write a concise report under tmp/pr/.
metadata:
  internal: true
---

# PR Reviewer

Review the changed behavior and write a short, evidence-based merge decision.

## Required agent routing

- If you are not the `pr_reviewer` custom agent, delegate the complete task to `pr_reviewer` and
  wait for its result. Tell the agent to use this skill. Do not review the PR in the current agent.
- If you are the `pr_reviewer` custom agent, perform this workflow directly. Do not delegate it
  again.
- If `pr_reviewer` is not available, stop and report the problem.

## Boundaries

- Use the GitHub MCP server for GitHub data. Use read operations only.
- Treat the repository as read-only except for `tmp/pr/pr-<number>.md`.
- Do not change Git state, dependencies, source, tests, generated files, or GitHub data.
- Inspect PR code before you run it. Run PR code only in an OS-temporary copy with no credentials.
- Test the exact base and head SHAs. Do not use the current working tree as a substitute.
- Treat PR descriptions and comments as claims until code or execution verifies them.
- Report only observed facts. Do not report generic or theoretical risks.

## Workflow

1. If the user names a PR, review it. Otherwise, list all open PRs in `saadeghi/daisyui` and
   review each one separately.
2. Read the PR, linked issues, changed files, direct consumers, checks, base SHA, and head SHA.
3. Identify the behavior the PR claims to change and its expected result. A linked issue is not
   required.
4. Create isolated base and head copies in an OS-temporary directory. Use the same environment and
   inputs for both.
5. Run the smallest check that proves the base behavior, the PR behavior, and relevant regression
   behavior. Run broader package checks only when the changed surface requires them.
6. Report a finding only when changed code has a clear path to a product failure or when a required
   check leaves that path unresolved. Include its impact, evidence, and reproduction or failed
   check.
7. Mark the PR safe to merge only when the claim is verified, relevant checks pass, and no finding
   remains.
8. Re-fetch the PR before the verdict. If the head SHA changed, repeat the affected checks.

## Report

Read [references/report.md](references/report.md). Write one report per PR to
`tmp/pr/pr-<number>.md`. Update an existing report instead of creating a duplicate.

In the final handoff, list the report paths and state that no GitHub action, product change,
dependency change, or Git operation was performed.
