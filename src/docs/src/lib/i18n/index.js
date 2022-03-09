import { derived, writable } from "svelte/store"
import { subString } from "$lib/util"

const translations = import.meta.globEager(`../../translation/*.json`)
let localesArray = []
Object.entries(translations).map(([path]) => {
  localesArray.push(subString(path, "/translation/", ".json"))
})

const defaultLang = "en"
const path = "../../translation"
export const currentLang = writable(defaultLang)
export const langs = localesArray

function translate(currentLang, key, vars) {
  if (!key) throw new Error("no key provided to $t()")

  let text = translations[`${path}/${currentLang}.json`].default[key]

  if (!currentLang) throw new Error(`no translation for key "${key}"`)

  if (!text) {
    if (translations[`${path}/${currentLang}.json`].default[key] == undefined) {
      if (translations[`${path}/${defaultLang}.json`].default[key] == undefined) {
        console.error(`"${defaultLang}.${key}" translation not found. Showing the string as is.`)
        return key
      } else {
        console.warn(`"${currentLang}.${key}" translation not found. Showing "${defaultLang}.${key}" instead.`)
        return translations[`${path}/${defaultLang}.json`].default[key]
      }
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
    (key, vars = {}) =>
      translate($currentLang, key, vars)
)

const replaceStateWithQuery = (values) => {
  const url = new URL(window.location.toString())
  for (let [k, v] of Object.entries(values)) {
    if (!!v) {
      url.searchParams.set(encodeURIComponent(k), encodeURIComponent(v))
    } else {
      url.searchParams.delete(k)
    }
  }
  history.replaceState({}, "", url)
}

export const setLang = (lang) => {
  currentLang.set(lang)
  replaceStateWithQuery({ lang: lang })
  localStorage.setItem("lang", lang)
}
