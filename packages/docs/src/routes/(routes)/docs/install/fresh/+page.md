---
title: Install daisyUI for Deno Fresh
desc: How to install Tailwind CSS and daisyUI in a Deno Fresh project
---

This document records the complete process of integrating and using daisyUI in a Fresh v2.0 alpha project.
The Fresh framework now supports the new Tailwind CSS plugin and Deno loader, with "nodeModulesDir": "auto" set by default, making the integration of daisyUI simpler and more efficient.

## Project Initialization

### 1. Create a Fresh Project

Use `jsr` to initialize a new Fresh project.

```bash
deno run -Ar jsr:@fresh/init@2.0.0-alpha.46
```

**Configuration Options:**

- **Project Name**：`fresh2-daisyui`
- **Tailwind CSS Support**：`y`
- **VS Code Support**：`y`

### 2. Enter Project Directory

```bash
cd fresh2-daisyui
```

## Installation and Configuration

### 3. Add daisyUI Dependency

Add daisyUI as an npm dependency to the project.

```bash
deno i -D npm:daisyui@latest
```

**Installation Result:**

- Successfully installed `daisyui@5.0.47`
- Received a warning about npm lifecycle scripts (can be ignored in the current scenario)

### 4. Configure Tailwind CSS

daisyUI needs to be configured as a plugin in `./static/styles.css`.

```typescript
@import "tailwindcss";
@plugin "daisyui";
/* Existing other parts */
```

## Startup and Development

### 5. Start the Development Server

```bash
deno task dev
```

**Server Information:**

- **Local Address**: `http://localhost:8000/`
- Automatically listens for file changes and restarts
- After startup, daisyUI styles are automatically loaded

## Using daisyUI Components

### 6. Create a Button Component Example

Create a button component in the `components` directory, using daisyUI's style classes for reference.

```tsx
// components/Button.tsx
import type { ComponentChildren } from "preact";

export interface ButtonProps {
  id?: string;
  onClick?: () => void;
  children?: ComponentChildren;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className="btn btn-dash btn-primary"
      {...props}
      class="px-2 py-1 border-gray-500 border-2 rounded-sm bg-white hover:bg-gray-200 transition-colors"
    />
  );
}
```

### Display Effect

<img width="1006" height="406" alt="image" src="https://github.com/user-attachments/assets/291e283c-04e4-46d3-abcb-51198ad5183a" />


### daisyUI Class Name Reference

- For more components and usage, please refer to the [daisyUI official documentation](https://daisyui.com/)
