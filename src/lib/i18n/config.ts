export const locales = ["en", "fr", "ar"] as const;

export type Locale = (typeof locales)[number];
export type Direction = "ltr" | "rtl";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localeDirection(locale: Locale): Direction {
  return locale === "ar" ? "rtl" : "ltr";
}
