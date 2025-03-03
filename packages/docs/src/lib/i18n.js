import { derived, writable } from "svelte/store"
import { subString } from "$lib/util"

const translations = import.meta.glob("../translation/*.json", { eager: true })
const localesArray = []
Object.entries(translations).map(([path]) => {
  const localeFileName = subString(path, "/translation/", ".json")
  localesArray.push(localeFileName)
})

const path = "../translation"
export const defaultLang = "en"
export const currentLang = writable(defaultLang)
export const langs = localesArray

function translate(currentLang, key, vars, returnFallback) {
  if (!key) throw new Error("no key provided to $t()")

  let text = translations[`${path}/${currentLang}.json`].default[key]

  if (!currentLang) throw new Error(`no translation for key "${key}"`)

  if (!text) {
    if (translations[`${path}/${currentLang}.json`].default[key] === undefined) {
      if (translations[`${path}/${defaultLang}.json`].default[key] === undefined) {
        // console.error(`"${defaultLang}.${key}" translation not found. Showing the string as is.`)
        return key
      }
      if (returnFallback === false) {
        return key
      }
      console.warn(
        `"${currentLang}.${key}" translation not found. Showing "${defaultLang}.${key}" instead.`,
      )
      return translations[`${path}/${defaultLang}.json`].default[key]
    }
  }

  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g")
    text = text.replace(regex, vars[k])
  })

  return text
}

export const t = derived(
  currentLang,
  ($currentLang) =>
    (key, vars = {}, lang = $currentLang, returnFallback = true) =>
      translate(lang, key, vars, returnFallback),
)

const replaceStateWithQuery = (values) => {
  const url = new URL(window.location.toString())
  for (const [k, v] of Object.entries(values)) {
    if (v) {
      url.searchParams.set(encodeURIComponent(k), encodeURIComponent(v))
    } else {
      url.searchParams.delete(k)
    }
  }
  history.replaceState({}, "", url)
}

export const setLang = (lang, replaceQuery = true) => {
  if (!langs.includes(lang)) {
    return null
  }
  currentLang.set(lang)
  replaceQuery && replaceStateWithQuery({ lang: lang })
  localStorage.setItem("lang", lang)
  document.documentElement.setAttribute("lang", lang)
  // set direction
  document.documentElement.setAttribute("dir", translations[`${path}/${lang}.json`].__direction)
}
