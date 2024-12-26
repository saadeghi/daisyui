# Contributing to daisyUI

daisyUI welcomes contributions from anyone willing to help 🤝

## Reporting issues

- Before opening a new issue, first [search for existing issues](https://github.com/saadeghi/daisyui/issues?q=) to avoid duplications.
- Provide detailed reports to make things easier for maintainers.
- If there's a weird bug, please provide a reproduction repository on GitHub (or a [CodePen page](https://daisyui.com/codepen/) or [Tailwind Play](https://daisyui.com/tailwindplay/) page)

## Fixing existing issues

- You can help by [fixing existing issues](https://github.com/saadeghi/daisyui/issues?q=)
- Don't work on issues assigned to others (to avoid duplicate efforts)
- Before starting to work on an issue, please first add a comment and ask to get assigned to that issue. This way everyone will know you're working on that and it avoids duplicate efforts.
- Commit messages must start with: `fix: #1 [description]` which `1` is the number of issue, so the issue will close automatically and it gets added to changelog file on a release.

## Feature requests

- If you have an idea to discuss with the community, please [open a discussion](https://github.com/saadeghi/daisyui/discussions)
- For feature requests, [open a new issue](https://github.com/saadeghi/daisyui/issues/new)
- All feature requests may not fit this library and some may get rejected. Don't take it personally.

## Pull requests

- A pull request must fix [an open issue](https://github.com/saadeghi/daisyui/issues?q=is%3Aissue+is%3Aopen) **assigned to you**. If there's no issue, please create one first. If it's not assigned to you, please ask for it in the comments. This is for avoiding duplicate efforts.
- Fixing typos doesn't need to be an issue. You can just open a pull request.
- Fixing a mistake in document website doesn't need to be an issue. You can just open a pull request.

## Contribute translations

- You can help add or fix translations by using the [Fink localization editor](https://fink.inlang.com/github.com/saadeghi/daisyui?ref=badge)
- Submit the translation by opening a pull request ([see guide](https://inlang.com/g/6ddyhpoi/guide-nilsjacobsen-contributeTranslationsWithFink))

  [![inlang status badge](https://badge.inlang.com/?url=github.com/saadeghi/daisyui&project=/src/docs/project.inlang)](https://fink.inlang.com/github.com/saadeghi/daisyui?ref=badge)

## Building on local

### To build the daisyUI node package on local:

1. [[Fork](https://github.com/saadeghi/daisyui/fork) and] clone the repo on local
1. [Install Bun](https://bun.sh/) if you don't have it:
1. Install dependencies:
  ```
  bun install
  ```
1. Build daisyUI package:
  ```
  bun run build
  ```
1. Now you can use your local build of daisyUI in another local project by installing it as a dependency using Bun (or NPM, etc):  
  In your own local project where you want to use daisyUI:
  ```
  bun install /path/to/daisyui/packages/daisyui
  ```

### To run the [documentation site](https://daisyui.com/) on local:

1. [[Fork](https://github.com/saadeghi/daisyui/fork) and] clone the repo on local
1. [Install Bun](https://bun.sh/) if you don't have it:
1. Install dependencies:
  ```
  bun install
  ```
1. Build daisyUI package:
  ```
  bun run build
  ```
1. Run the document site:
  ```
  bun run dev
  ```

### File structure

```js
packages
├── daisyui //daisyUI package
│   ├── index.js //entry point
│   ├── functions
│   ├── src
│   │   ├── base
│   │   ├── components
│   │   ├── themes
│   │   ╰── utilities
│   ╰── // generated files
├── docs //documentation site
│   ╰── src
│       ├── routes
│       │   ╰── (routes)
│       │       ├── blog
│       │       ├── components //component docs
│       │       ├── docs //docs
│       │       ╰── ...
│       ╰── translations
╰── playground //playground site
    ╰── src
        ╰── components
            ╰── Component.astro // Where you can test things without committing
```
