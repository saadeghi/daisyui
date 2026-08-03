# PR review report template

Write tmp/pr/pr-<number>.md using this exact section order. Replace every placeholder and remove any instruction that does not apply. Keep the report short.

# PR #<number>: <title>

PR: <direct GitHub URL>

Base: <full SHA>

Head: <full SHA>

Reviewed: <ISO-8601 timestamp>

## Problem

- **Trying to solve:** <plain description of the actual behavior>
- **Linked issue(s):** <direct URL(s), or “None linked”>
- **Before the PR:** <verified base behavior>
- **Expected behavior:** <verified contract or intended behavior>
- **Sources:** <direct issue/PR/documentation links and source paths at immutable SHAs>

No linked issue is not a concern by itself.

## Verify

- **Research:** <what the issue, code, comments, and official documentation establish>
- **Isolation:** <base/head fixture locations, runtime, and relevant environment>
- **Base result:** <exact check and observed result>
- **PR result:** <the identical check and observed result>
- **Regression checks:** <relevant commands and their observed results>
- **Finding:** <whether the PR fixes the stated problem and preserves existing behavior>

Include commands only if they were actually run. Quote decisive output when useful.

## Risks

| Scenario tied to changed code | Why it applies | Check and observed result | Likelihood |
| ----------------------------- | -------------- | ------------------------- | ---------- |
| <specific supported usage or failure path> | <changed path/selector/API and real consumer> | <focused check and result> | <Confirmed / Possible / Ruled out> |

Use only:

- **Confirmed** when a failure was reproduced.
- **Possible** when a real supported path and failure mechanism exist but a necessary check could not resolve it.
- **Ruled out** when the focused check passed.

Do not list generic, theoretical, or unknown future risks. If no Confirmed or Possible item remains, write: **No concerns found in the affected scope.**

## Compare

Before:

~~~text
<actual usage, configuration, source output, or observable behavior>
~~~

After:

~~~text
<actual usage, configuration, source output, or observable behavior>
~~~

**Developer experience:** <one direct explanation of what changes for users or maintainers>

## Result

**Safe to merge: <YES or NO>.**

**Confidence: <0, 50, or 100>%.**

**Concerns:** <None, or a short list of the specific Confirmed or Possible concerns.>

Use 100% with YES when the problem and fix are verified, relevant checks pass, and no concern remains. Use 50% with NO when an unresolved Possible concern remains but no failure was reproduced. Use 0% with NO when a Confirmed concern exists, the claimed fix fails, or a relevant regression is reproduced. Explain every value below 100% under Concerns. Do not use other percentages, scoring formulas, evidence ledgers, decision matrices, administrative policy deductions, or caveats about unknowable future bugs.
