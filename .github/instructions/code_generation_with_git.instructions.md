---
applyTo: "**"
---

# Rules for using Git branches during code generation sessions

## Activation

- These rules are ONLY applied when the user explicitly says "#usegit"
- If "#usegit" is not mentioned explicitly with the exact phrase, ignore these rules completely

## Initial Setup

- Create a new feature branch with timestamp: `git checkout -b LLM/[$(date +%Y%m%d)]-[TASKNAME]`
  - Replace `[TASKNAME]` with a short descriptive name of the task
  - Example: `git checkout -b LLM/20241005-add-authentication`
- Confirm branch creation and inform user of the branch name
- Auto-stash any uncommitted changes before starting: `git stash`

## Development Loop

For each code change iteration, make a to do list for yourself and follow these steps:

1. **Write/modify code** according to the user's requirements according to code generation instructions at .github/instructions/code_generation.instructions.md
2. **Test the code** by writing test files according to testing instructions at .github/instructions/code_generation.instructions.md
3. **Verify functionality** - ensure tests pass and code works as expected
4. **Stage and commit** if tests pass:
   - `git add -A`
   - `git commit -m "[descriptive message here]"`
   - Use descriptive commit messages that explain what was added/changed and why
5. **Report status** to user: what was changed, test results, commit hash

## Error Handling

- If tests fail, do NOT commit
- Fix the issue and retry the loop
- If multiple attempts fail, ask user for guidance
- If git operations fail, report the error and ask for manual intervention

## Session End

- Ask the user for explicit order to merge `#merge [commit message here]`. If not received, do not merge. the user must provide a commit message in the mentioned format explicitly.
- use the commit message provided by the user in the merge command.
- in the description of the commit message, add the branch name of the feature branch used like "Merged changes from branch [timestamp]" without the `LLM/` prefix.
- Before merging, show commit history: `git log --oneline`
- Execute merge:

```bash
  git checkout main  # or original branch
  git merge --squash LLM/[BRANCHNAME]
  git commit -m "[user's final commit message]"
```

- Do not delete the feature branch until user asks specifically
- Confirm successful merge to user
- If you stashed changes at the start, pop the stash: `git stash pop`

## Safety Rules

- Never force push or use destructive git operations
- Always confirm with user before deleting a file
- Always verify git status before major operations
- If conflicts arise, stop and ask user for resolution
- Keep the user informed of every git operation performed
- If user says "abort" or "stop", immediately checkout back to original branch
- Preserve original branch state - never modify main/master directly
- Do not delete branches unless user explicitly requests it

## Branch Management

- Branch naming convention: `LLM/[$(date +%Y%m%d)]-[TASKNAME]` for uniqueness
  - Replace `[TASKNAME]` with a short descriptive name of the task
  - Example: `git checkout -b LLM/20241005-add-authentication`
- Always work on the feature branch, never directly on main/master
- If switching between multiple coding sessions, ask user which branch to continue
- Do not delete branches unless user explicitly requests it

## Commit Best Practices

- Each commit should represent a working state
- Commit messages format: "[what was done and why]"
- Commit messages should be useful as a log for future reference so if you had to look back you would understand what was done and why, include discoveries or decisions made in the commit description
- Examples:
  - "Changed render function to use new API for better performance"
  - "Downgraded library X to version Y due to a bug that was leaging to invalid syntax"
  - "Refactored authentication to pure functions for easier testing"
  - "Reverted changes to fix build error: unknown identifier"
  - "Fixed unknown identifier error in utils.js"
- Never commit broken or untested code
- If experimental code doesn't work, mention it but don't commit
- If it's possible to break down changes into smaller commits without breaking functionality, do so

## User Communication

- Always announce when starting git operations
- Report each commit with: changed files, test results, commit hash
- Before final merge, summarize all changes made during the session
- Ask for confirmation before any potentially destructive operations
- If user seems unsure about merging, offer to show diff or explain changes
