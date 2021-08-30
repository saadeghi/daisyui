# Contributing to daisyUI
daisyUI welcomes contributions from anyone 🤝

## Reporting issues
- Before opening a new issue, first [search for existing issues](https://github.com/saadeghi/daisyui/issues?q=) to avoid duplications. 
- Provide detailed reports to make things easier for maintainers.  
- If there's a weird bug, please provide a reproduction repository on Github (or a [CodePen page](https://codepen.io/saadeghi/pen/gOwWKvv) or [Tailwind Play](https://play.tailwindcss.com/R74XalS4na) page)

## Fixing existing issues
- You can help by [fixing existing issues](https://github.com/saadeghi/daisyui/issues?q=)
- Don't work on issues assigned to others (to avoid duplicate efforts)
- Before starting to work on an issue, please first add a comment and ask to get assigned to that issue. This way everyone will know you're working on that and it avoids duplicate efforts.
- Commit messages must start with: `fix: #1 [description]` which `1` is the number of issue, so the issue will close automatically and it gets added to changelog file on a release.

## Feature requests
- For feature requests, [open a new issue](https://github.com/saadeghi/daisyui/issues/new)
- All feature requests might not fit this library and some might get rejected. Don't take it personally.

## Pull requests
- A pull request must fix [an open issue](https://github.com/saadeghi/daisyui/issues?q=is%3Aissue+is%3Aopen) **assigned to you**. If there's no issue, please create one first. If it's not assigned to you, please ask for it in the comments. This is for avoiding duplicate efforts.
- Fixing typos doesn't need to be an issue. You can just open a pull request.

## Building on local
### To build the daisyUI node package on local:
1. [Fork and] clone the repo on local
1. Install package dependencies:  
    ```
    npm install
    ```
1. Build the package:  
    ```
    npm run build
    ```
1. Now you can import daisyUI to your `tailwind.config.js`:  
      ```js
      module.exports = {
        plugins: [
          require('/path/to/dist/directory'),
        ],
      }
      ```

### To run the [documentation site](https://daisyui.com/) on local:

1. [Fork and] clone the repo on local
1. Install package dependencies:  
    ```
    npm install
    ```
1. Build the package:  
    ```
    npm run build
    ```
3. Install document site dependencies:  
    ```
    npm run install:docs
    ```
1. Run the document site:
    ```
    npm run dev
    ```
## Adding a new component
First check `List of components` at the end of [/README.md](https://github.com/saadeghi/daisyui/blob/master/README.md) to see what components should be added.  

### File structure
All component styles are in [`/src`](https://github.com/saadeghi/daisyui/tree/master/src) but it's important to separate the style to 4 files:  
- `/src/components/unstyled`: Styles that define the layout and placement of a component  
  (for example: [layout of `tab` and `tabs`](https://github.com/saadeghi/daisyui/blob/master/src/components/unstyled/tab.css))
- `/src/components/styled`: Styles that define the visual appearance of a component  
  (for example: [colors and spacing of `alert`](https://github.com/saadeghi/daisyui/blob/master/src/components/styled/alert.css))
- `/src/utilities/unstyled`: Styles that define the layout and placement of a variant of a component that must be responsive  
  (for example: [sizes of a `.btn`](https://github.com/saadeghi/daisyui/blob/master/src/utilities/unstyled/button.css))
- `/src/utilities/styled`: Styles that define the visual appearance of a variant of a component that must be responsive  
  (for example: [colors of `alert`](https://github.com/saadeghi/daisyui/blob/master/src/utilities/styled/alert.css))

> Separating styles to these 4 files, allows us to use daisyUI components with/without *design decision* styles ([See `styled` config](styled)) and allows us to define some styles as responsive utilities (to work with `lg:`, `md:`, `sm:`, etc... prefixes)

### An example
Let's say we want to add a new component named `.coolbutton` (don't add that actually 😅 )

1. Add these files:  
    ```
    /src/components/unstyled/coolbutton.css
    /src/components/styled/coolbutton.css
    ```
1. Add your CSS there (you can use `@apply` too)
1. Add a page to documentation site:
    ```
    /src/docs/pages/components/coolbutton.vue
    ```
1. Add some HTML to the Vue file that uses your class name
    ```html
    <template>
      <button class="coolbutton">Cool!</button>
    </template>
    ```
1. Build the documentation site:
    ```
    npm run dev
    ```
1. Now when you open the site on localhost, you can see your new page, showing the new component with your style:
    ```
    http://localhost:3030/components/coolbutton
    ```

