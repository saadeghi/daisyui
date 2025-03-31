// export const slugFromPath = (path) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null

// export const readEnv = (id, defaultValue = "") => {
//   if (import.meta.env[id] !== undefined) {
//     return import.meta.env[id]
//   }
//   return defaultValue
// }

export const getOS = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()
  const macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i
  const windowsPlatforms = /(win32|win64|windows|wince)/i
  const iosPlatforms = /(iphone|ipad|ipod)/i
  let os = null

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

export const timeago = (timestamp, locale = "en") => {
  let value
  const diff = (new Date().getTime() - new Date(timestamp).getTime()) / 1000
  const minutes = Math.floor(diff / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })

  if (years > 0) {
    value = rtf.format(0 - years, "year")
  } else if (months > 0) {
    value = rtf.format(0 - months, "month")
  } else if (days > 0) {
    value = rtf.format(0 - days, "day")
  }
  // else if (hours > 0) {
  //   value = rtf.format(0 - hours, "hour")
  // } else if (minutes > 0) {
  //   value = rtf.format(0 - minutes, "minute")
  // } else {
  //   value = rtf.format(0 - diff, "second")
  // }
  else if (hours > 0) {
    value = "today"
  } else {
    value = ""
  }
  return value
}

export const formattedDate = (date) => {
  return new Date(date).toLocaleDateString("en-UK", { dateStyle: "medium" })
}

export const slugify = (str) => {
  return (
    String(str)
      .normalize("NFKD") // split accented characters into their base characters and diacritical marks
      // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
      .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
      .trim() // trim leading or trailing whitespace
      .toLowerCase() // convert to lowercase
      .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
      .replace(/\s+/g, "-") // replace spaces with hyphens
      .replace(/-+/g, "-") // remove consecutive hyphens
      .replace(/^-+|-+$/g, "")
  ) // remove leading and trailing hyphens
}
