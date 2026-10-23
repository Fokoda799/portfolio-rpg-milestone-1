import { notFound } from "next/navigation";
import { PortfolioPlaceholderPage } from "@/components/portfolio-placeholder-page";
import { isLocale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export default async function SkillsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <PortfolioPlaceholderPage
      locale={locale}
      title={{ en: "Skills", fr: "Compétences", ar: "المهارات" }[locale]}
      description={{
        en: "Verified skills and proficiency levels will be listed here.",
        fr: "Les compétences et niveaux vérifiés seront présentés ici.",
        ar: "ستُعرض هنا المهارات ومستويات الإتقان الموثقة.",
      }}
    />
  );
}
