---
applyTo: "**"
---

# Workspace Rules

- This project is a monorepo managed by Bun Workspaces.
- Each package has its own folder within the `packages` directory.

# Our Stack

- We use Bun.js as the runtime environment and package manager
- We use JavaScript ESM
- We use latest stable versions of all packages, languages, and libraries
- This project is a monorepo managed by Bun Workspaces
- Do not add any new package or dependency without asking first

## Packages

- `packages/daisyui`: The main DaisyUI package
- `packages/docs`: The DaisyUI website built with SvelteKit and Svelte 5
- `packages/bundle`: This directory contains generated bundle files. Do not read nor write code here.
- `packages/logs`: This directory contains generated log files for performance analysis. Do not read nor write code here.
- `packages/playground`: This directory is an Astro project used for testing and experimenting with DaisyUI components. It is not part of the main application.

## Commands

Run these commands from the root of the repository

- `bun run dev`: Builds daisyUI package and starts the development server for daisyUI docs site on `http://localhost:3000`
- `bun run build`: Builds the daisyUI package
- `bun run build:docs`: Builds the daisyUI docs site for production
- `bun run format`: Formats all files in the repository using Prettier
- `bun run lint`: Lints all files in the repository using OXLint
- `bun run test`: Runs tests for all packages using Bun test runner
- `bun run dev:localapi`: Runs the local API server for daisyUI API and then runs the docs site with the local API at the same time
