# PR review report

Write `tmp/pr/pr-<number>.md`. Use only these sections and keep them concise.

```markdown
# PR #<number>: <title>

PR: <direct GitHub URL>
Base: <full SHA>
Head: <full SHA>

## Summary

<Describe the problem, the verified base behavior, and what the PR changes.>

## Verification

- Base: <check and observed result>
- PR: <same check and observed result>
- Regression checks: <commands and observed results>
- Pending: <required verification that could not run, or `None`>

## Findings

<Write `None` when no concrete concern remains. For each concern, state its product impact,
evidence at the exact SHA and path, and minimal reproduction or unresolved check.>

## Result

**Safe to merge: <YES or NO>.**

<Give the shortest reason that follows from the verification and findings.>
```

Do not add confidence scores, risk tables, file inventories, policy audits, or speculative concerns.
