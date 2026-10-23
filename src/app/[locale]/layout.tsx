import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localeDirection } from "@/lib/i18n/config";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
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
  if (!isLocale(rawLocale)) notFound();

  return (
    <section lang={rawLocale} dir={localeDirection(rawLocale)}>
      {children}
    </section>
  );
}
