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
- Commit messages must start with: `fix: #1 [description]` where `1` is the number of the issue, so the issue will close automatically and it gets added to the changelog file on a release.

## Feature requests

- If you have an idea to discuss with the community, please [open a discussion](https://github.com/saadeghi/daisyui/discussions)
- For feature requests, [open a new issue](https://github.com/saadeghi/daisyui/issues/new)
- All feature requests may not fit this library and some may get rejected. Don't take it personally.

## Pull requests

- A pull request must fix [an open issue](https://github.com/saadeghi/daisyui/issues?q=is%3Aissue+is%3Aopen) **assigned to you**. If there's no issue, please create one first. If it's not assigned to you, please ask for it in the comments. This is for avoiding duplicate efforts.
- Fixing typos doesn't need to be an issue. You can just open a pull request.
- Fixing a mistake in the document website doesn't need to be an issue. You can just open a pull request.

## Contribute translations

- You can help add or fix translations by using the [Fink localization editor](https://fink.inlang.com/github.com/saadeghi/daisyui?ref=badge)
- Submit the translation by opening a pull request ([Fink docs](https://inlang.com/m/tdozzpar/app-inlang-finkLocalizationEditor))

## Building on local

### To build the daisyUI node package locally:

1. [Fork](https://github.com/saadeghi/daisyui/fork) and clone the repo (only fork the master branch)
2. [Install Bun](https://bun.sh/) if you don't have it
3. Install dependencies:
  ```
  bun install
  ```
4. Build daisyUI package:
  ```
  bun run build
  ```
5. Now you can use your local build of daisyUI in another local project by installing it as a dependency using Bun (or NPM, etc):  
  In your own local project where you want to use daisyUI:
  ```
  bun install /path/to/daisyui/packages/daisyui
  ```

### To run the [documentation site](https://daisyui.com/) on local:

1. [Fork](https://github.com/saadeghi/daisyui/fork) and clone the repo (only fork the master branch)
2. [Install Bun](https://bun.sh/) if you don't have it
3. Install dependencies:
  ```
  bun install
  ```
4. Build daisyUI package:
  ```
  bun run build
  ```
5. Run the document site:
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

### packages/daisyui workflow

```mermaid
%%{init: {"theme": "base", "themeVariables": {"textColor": "#ecf9ff", "titleColor": "#ecf9ff", "lineColor": "#7e8792", "clusterBkg": "#191e24", "clusterBorder": "#15191e", "edgeLabelBackground": "#191e24", "primaryColor": "#1d232a", "primaryTextColor": "#ecf9ff", "primaryBorderColor": "#323940"}, "flowchart": {"nodeSpacing": 30, "rankSpacing": 50}}}%%
flowchart LR
  subgraph src["src/"]
    direction LR
    themesSrc["themes/*.css"]
    baseSrc["base/*.css"]
    componentsSrc["components/*.css"]
    utilitiesSrc["utilities/*.css"]
  end

  build(["build.js"])

  subgraph generated["generated"]
    css["*.css"]
    classJson["components/*/class.json"]
    index["*/index.js"]
    object["*/object.js"]
  end

  subgraph cssOut["CSS"]
    cdn["daisyui.css (CDN)"]
    themesCss["themes.css"]
    chunks["chunks.css"]
  end

  subgraph plugin["@plugin 'daisyui'"]
    imports["imports.js"]
    pluginIndex["index.js"]
  end

  functions["functions/<br>plugin.js<br>pluginOptionsHandler.js<br>variables.js<br>nestCssLayers.js"]

  subgraph themePlugin["@plugin 'daisyui/theme'"]
    themeObject["theme/object.js"]
    themeIndex["theme/index.js<br>(themePlugin.js)"]
  end

  src --> build --> generated
  css --> cdn & chunks
  css -- "theme/*.css" --> themesCss
  index --> imports --> pluginIndex
  functions --> pluginIndex
  object -- "theme/*/object.js" --> themeObject --> themeIndex

  classDef file fill:#1d232a,stroke:#323940,color:#ecf9ff,rx:6px,ry:6px
  classDef css fill:#605dff,stroke:#605dff,color:#edf1fe,rx:6px,ry:6px
  classDef entry fill:#fcb700,stroke:#fcb700,color:#793205,font-weight:bold,rx:6px,ry:6px
  classDef step fill:#09090b,stroke:#323940,color:#e4e4e7,font-weight:bold
  classDef list fill:#1d232a,stroke:#323940,color:#ecf9ff,rx:8px,ry:8px,text-align:left
  class themesSrc,baseSrc,componentsSrc,utilitiesSrc,classJson,index,object,imports,themeObject file
  class css,cdn,themesCss,chunks css
  class pluginIndex,themeIndex entry
  class build step
  class functions list
  style src fill:#191e24,stroke:#15191e,rx:8px,ry:8px
  style generated fill:#191e24,stroke:#323940,stroke-dasharray:6 4,rx:8px,ry:8px
  style cssOut fill:#191e24,stroke:#15191e,rx:8px,ry:8px
  style plugin fill:#191e24,stroke:#15191e,rx:8px,ry:8px
  style themePlugin fill:#191e24,stroke:#15191e,rx:8px,ry:8px
  linkStyle default stroke:#7e8792,stroke-width:1.5px
```
