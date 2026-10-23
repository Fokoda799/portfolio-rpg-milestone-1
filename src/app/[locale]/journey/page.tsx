import { notFound } from "next/navigation";
import { PortfolioPlaceholderPage } from "@/components/portfolio-placeholder-page";
import { isLocale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export default async function JourneyPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <PortfolioPlaceholderPage
      locale={locale}
      title={{ en: "Journey", fr: "Parcours", ar: "المسيرة" }[locale]}
      description={{
        en: "Verified career and learning milestones will be added here.",
        fr: "Les étapes vérifiées du parcours professionnel et d’apprentissage seront ajoutées ici.",
        ar: "ستُضاف هنا محطات موثقة من المسيرة المهنية والتعلم.",
      }}
    />
  );
}
