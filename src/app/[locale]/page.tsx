import { notFound } from "next/navigation";
import { RpgIntro } from "@/components/hero/rpg-intro";
import { isLocale } from "@/lib/i18n/config";

type HomePageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "ar" }];
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  return <RpgIntro locale={rawLocale} />;
}
