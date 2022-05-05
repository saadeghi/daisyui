export const slugFromPath = (path) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null

export const readEnv = (id, defaultValue = "") => {
  if (import.meta.env[id] !== undefined) {
    return import.meta.env[id]
  }
  return defaultValue
}

export const getOS = () => {
  let userAgent = window.navigator.userAgent.toLowerCase(),
    macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
    windowsPlatforms = /(win32|win64|windows|wince)/i,
    iosPlatforms = /(iphone|ipad|ipod)/i,
    os = null

  if (macosPlatforms.test(userAgent)) {
    os = "macos"
  } else if (iosPlatforms.test(userAgent)) {
    os = "ios"
  } else if (windowsPlatforms.test(userAgent)) {
    os = "windows"
  } else if (/android/.test(userAgent)) {
    os = "android"
  } else if (!os && /linux/.test(userAgent)) {
    os = "linux"
  }

  return os
}

export const subString = (input, from, to) => {
  return input.slice(input.indexOf(from) + from.length, input.lastIndexOf(to))
}
