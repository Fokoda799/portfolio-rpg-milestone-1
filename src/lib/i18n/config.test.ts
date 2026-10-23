import { describe, expect, it } from "vitest";
import { isLocale, localeDirection } from "./config";

describe("locale configuration", () => {
  it("accepts only supported locales", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("fr")).toBe(true);
    expect(isLocale("ar")).toBe(true);
    expect(isLocale("es")).toBe(false);
  });

  it("uses RTL only for Arabic", () => {
    expect(localeDirection("ar")).toBe("rtl");
    expect(localeDirection("en")).toBe("ltr");
    expect(localeDirection("fr")).toBe("ltr");
  });
});
