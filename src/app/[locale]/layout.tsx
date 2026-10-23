import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localeDirection } from "@/lib/i18n/config";
import "../globals.css";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "ar" }];
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  return {
    alternates: {
      languages: {
        en: "/en",
        fr: "/fr",
        ar: "/ar",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  return (
    <html lang={rawLocale} dir={localeDirection(rawLocale)}>
      <body>{children}</body>
    </html>
  );
}
