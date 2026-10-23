import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localeDirection } from "@/lib/i18n/config";
import "../globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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
      <body className="flex min-h-screen flex-col">
        <SiteHeader locale={rawLocale} />
        <div className="flex-1">{children}</div>
        <SiteFooter locale={rawLocale} />
      </body>
    </html>
  );
}
