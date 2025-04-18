import { derived, writable, get } from "svelte/store"
import { subString } from "$lib/util"

// For initial load, we'll use eager loading for the default language
// to ensure translations are available immediately
const defaultTranslationModule = import.meta.glob("../translation/en.json", { eager: true })
const defaultTranslation = defaultTranslationModule["../translation/en.json"].default

// For other languages, use lazy loading
const translationModules = import.meta.glob("../translation/*.json")
const localesArray = []
Object.entries(translationModules).map(([path]) => {
  const localeFileName = subString(path, "/translation/", ".json")
  localesArray.push(localeFileName)
})

// Hardcoded language metadata to display in dropdown before loading translations
export const languageMetadata = {
  en: { __name: "English", __code: "EN", __direction: "ltr" },
  ar: { __name: "العربية", __code: "AR", __direction: "rtl" },
  bn: { __name: "বাংলা", __code: "BN", __direction: "ltr" },
  ca: { __name: "Català", __code: "CA", __direction: "ltr" },
  cs: { __name: "Čeština", __code: "CS", __direction: "ltr" },
  de: { __name: "Deutsch", __code: "DE", __direction: "ltr" },
  es: { __name: "Español", __code: "ES", __direction: "ltr" },
  fa: { __name: "فارسی", __code: "FA", __direction: "rtl" },
  fr: { __name: "Français", __code: "FR", __direction: "ltr" },
  hu: { __name: "Magyar", __code: "HU", __direction: "ltr" },
  id: { __name: "Bahasa Indonesia", __code: "ID", __direction: "ltr" },
  it: { __name: "Italiano", __code: "IT", __direction: "ltr" },
  ja: { __name: "日本語", __code: "JA", __direction: "ltr" },
  ko: { __name: "한국어", __code: "KO", __direction: "ltr" },
  ms: { __name: "Bahasa Melayu", __code: "MS", __direction: "ltr" },
  pl: { __name: "Polski", __code: "PL", __direction: "ltr" },
  pt: { __name: "Português", __code: "PT", __direction: "ltr" },
  ro: { __name: "Română", __code: "RO", __direction: "ltr" },
  ru: { __name: "Русский", __code: "RU", __direction: "ltr" },
  uk: { __name: "Українська", __code: "UK", __direction: "ltr" },
  vi: { __name: "Tiếng Việt", __code: "VI", __direction: "ltr" },
  zh_hans: { __name: "简体中文", __code: "ZH", __direction: "ltr" },
  zh_hant: { __name: "繁體中文", __code: "ZH", __direction: "ltr" },
}

const path = "../translation"
export const defaultLang = "en"
export const currentLang = writable(defaultLang)
export const langs = localesArray

// Store for loaded translations - initialize with default language
const loadedTranslations = writable({
  [defaultLang]: defaultTranslation,
})

// Function to check if a language is valid
const isValidLanguage = (lang) => langs.includes(lang)

// Function to replace state with query
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

// Function to save language to localStorage
const saveLanguageToStorage = (lang) => {
  localStorage.setItem("lang", lang)
}

// Function to update language in the store
const updateLanguageStore = (lang) => {
  currentLang.set(lang)
}

// Function to get translation module path
const getTranslationModulePath = (lang) => `${path}/${lang}.json`

// Function to update loaded translations store
const updateLoadedTranslations = (lang, translationData) => {
  loadedTranslations.update((translations) => ({
    ...translations,
    [lang]: translationData,
  }))
}

// Function to load a translation file
async function loadTranslation(lang) {
  // If already loaded, don't reload
  const translations = get(loadedTranslations)
  if (translations[lang]) return translations[lang]

  try {
    // Dynamically import the translation file
    const modulePath = getTranslationModulePath(lang)
    const module = await translationModules[modulePath]()

    // Update the loaded translations store
    updateLoadedTranslations(lang, module.default)

    return module.default
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error)
    return null
  }
}

// Function to replace variables in a translation string
const replaceVariables = (text, vars) => {
  Object.keys(vars || {}).forEach((k) => {
    const regex = new RegExp(`{{${k}}}`, "g")
    text = text.replace(regex, vars[k])
  })
  return text
}

// Function to get translation text for a given key and language
const getTranslationText = (translations, lang, key) => {
  return translations[lang]?.[key]
}

// Function to handle missing translation keys
const handleMissingTranslation = (translations, currentLang, key, returnFallback) => {
  if (translations[currentLang]?.[key] === undefined) {
    if (translations[defaultLang]?.[key] === undefined) {
      return key
    }
    if (returnFallback === false) {
      return key
    }
    console.warn(
      `"${currentLang}.${key}" translation not found. Showing "${defaultLang}.${key}" instead.`,
    )
    return translations[defaultLang][key]
  }
  return null
}

// Function to translate a key synchronously
const translateSync = (currentLang, key, vars, returnFallback) => {
  if (!key) throw new Error("no key provided to $t()")

  // Special case for language metadata
  if (key.startsWith("__") && languageMetadata[currentLang]?.[key]) {
    return languageMetadata[currentLang][key]
  }

  // Get current loaded translations
  const translations = get(loadedTranslations)

  // If language not loaded yet, return key or fallback
  if (!translations[currentLang]) {
    loadTranslation(currentLang)
    if (returnFallback === false) {
      return key
    }
    const defaultText = getTranslationText(translations, defaultLang, key)
    return defaultText ? replaceVariables(defaultText, vars) : key
  }

  // Get the translation text
  let text = getTranslationText(translations, currentLang, key)

  if (!text) {
    text = handleMissingTranslation(translations, currentLang, key, returnFallback)
  }

  return replaceVariables(text, vars)
}

export const t = derived(
  currentLang,
  ($currentLang) =>
    (key, vars = {}, lang = $currentLang, returnFallback = true) =>
      translateSync(lang, key, vars, returnFallback),
)

// Function to update the document's language and direction attributes
const updateDocumentLanguageAttributes = (lang) => {
  document.documentElement.setAttribute("lang", lang)
  const direction = languageMetadata[lang]?.__direction || "ltr"
  document.documentElement.setAttribute("dir", direction)
}

// Function to handle storage event for language changes
const handleStorageEvent = (event) => {
  if (event.key === "lang" && event.newValue && langs.includes(event.newValue)) {
    setLang(event.newValue, false)
  }
}

// Function to handle navigation end event
const handleNavigationEnd = () => {
  const savedLang = localStorage.getItem("lang")
  if (savedLang && langs.includes(savedLang)) {
    if (get(currentLang) !== savedLang) {
      setLang(savedLang, false)
    }
  }
}

// Initialize from localStorage if available
if (typeof window !== "undefined") {
  window.addEventListener("storage", handleStorageEvent)
  document.addEventListener("sveltekit:navigation-end", handleNavigationEnd)
}

// Function to set the language
export const setLang = async (lang, replaceQuery = true) => {
  if (!isValidLanguage(lang)) {
    return null
  }

  // Load the translations for the new language
  await loadTranslation(lang)

  updateLanguageStore(lang)
  if (replaceQuery) {
    replaceStateWithQuery({ lang })
  }
  saveLanguageToStorage(lang)
  updateDocumentLanguageAttributes(lang)
}
