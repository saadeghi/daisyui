---
applyTo: "**"
---

# Code Generation Rules

## General rules

- Never ever break the code syntax
- If you are asked to write code, only write the code, do not add any explanations unless necessary
- do not make up answers. For code, always search the docs and write code based on that
- If you're not sure about the syntax Use Context7 MCP server

## Finding information

- Use Context7 MCP server to find information about packages, libraries, and languages. Context7 MCP server provides up-to-date and accurate information
- Search official documentation if needed
- You can search into related files to find patterns and examples

## Writing code

- Do not guess, do not hallucinate, write code based on the information and facts you have, if you don't have enough information, ask for more information
- Be careful about the syntax, always double check it
- If you're asked to fix a specific issue, only fix that issue, do not change anything else unless necessary
- Do not randomly change indentation, formatting, or style of existing code unless asked
- If you're asked to refactor code, make sure to keep the same functionality and behavior
- Latest features of the languages and libraries are preferred

## Code style

- Use latest version of packages, languages, and libraries
- Always write small, pure functions that do one thing only. avoid side effects, avoid large functions if possible
- Always use best practices and latest standards
- Prioritize performance security, clean code, readability and accessibility
- Use early returns to reduce nesting

## Security

- Never ever delete files before asking
- Never run dangerous commands like rm -rf, etc before asking
- Do not include any sensitive information such as API keys, passwords, or personal data in the code
- If you're adding console logs for debugging, make sure to remove them after you're done

## HTML

- When writing HTML, ensure semantic tags are used appropriately
- Ensure proper indentation and formatting for readability
- Prioritize accessibility by using ARIA roles and properties where necessary

## CSS

- Prefer Tailwind CSS 4 for styling.

## Testing

- We use Bun test runner for testing. Read Bun docs for more info: https://bun.sh/docs/cli/test
- For tests, use the available Bun test features and syntax, if you need to install an addional package, ask first
- Always write testable code
- After generating new code, write a temporary test file at `/tmp/FILENAME.test.js` at the root of the repo to check the functionality of the generated code. `tmp` folder is ignored in git and you don't need to remove the test file after you're done
- If you're asked to write a permanent test file, write the test file within the project structure, do not write it in `/tmp`

## Debugging

- If you encounter an error, read the error message carefully and try to understand what it means
- Search about the error on the web to find possible solutions
- If you need to fix an error, only fix that error, do not change anything else unless necessary
- If you're asked to fix an error, write a temporary test file at `/tmp/FILENAME.test.js` at the root of the repo to check the functionality of the fixed code.

## Comments

- If part of the code needs explanation on WHY we did it, add a comment explaining the reason briefly
- Do not add comments explaining WHAT the code is doing unless it's not obvious because of unconventional complexity or unusual syntax (in that case consider refactoring the code to be more readable maybe?)
- Keep comments short, preferably one-liners, concise and to the point
