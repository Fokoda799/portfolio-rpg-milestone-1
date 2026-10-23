import { notFound } from "next/navigation";
import { PortfolioPlaceholderPage } from "@/components/portfolio-placeholder-page";
import { isLocale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <PortfolioPlaceholderPage
      locale={locale}
      title={{ en: "About", fr: "À propos", ar: "نبذة عني" }[locale]}
      description={{
        en: "A verified professional biography will be added here.",
        fr: "Une biographie professionnelle vérifiée sera ajoutée ici.",
        ar: "ستُضاف هنا نبذة مهنية موثقة.",
      }}
    />
  );
}
