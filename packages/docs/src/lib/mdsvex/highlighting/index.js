import { createTextMateEngine } from "./textmate-engine.js"
import { renderHighlightedCode } from "./renderer.js"

export async function createHighlighter(options) {
  const engine = await createTextMateEngine(options)

  return {
    codeToHtml(code, renderOptions = {}) {
      return renderHighlightedCode(
        engine.tokenize(code, renderOptions.lang ?? "text"),
        engine.theme,
      )
    },
    getLoadedLanguages: engine.getLoadedLanguages,
    getLoadedThemes: engine.getLoadedThemes,
    dispose: engine.dispose,
  }
}
