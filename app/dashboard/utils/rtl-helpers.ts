export function isRTL(locale?: string): boolean {
  const rtlLocales = ["ar", "he", "fa", "ur"]
  return rtlLocales.includes(locale || "ar")
}

export function getTextDirection(locale?: string): "ltr" | "rtl" {
  return isRTL(locale) ? "rtl" : "ltr"
}

export function getTextAlign(locale?: string): "left" | "right" {
  return isRTL(locale) ? "right" : "left"
}

export function getFlexDirection(locale?: string): "row" | "row-reverse" {
  return isRTL(locale) ? "row-reverse" : "row"
}
