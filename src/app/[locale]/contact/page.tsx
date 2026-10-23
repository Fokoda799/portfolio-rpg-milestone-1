import { notFound } from "next/navigation";
import { PortfolioPlaceholderPage } from "@/components/portfolio-placeholder-page";
import { isLocale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <PortfolioPlaceholderPage
      locale={locale}
      title={{ en: "Contact", fr: "Contact", ar: "اتصل بي" }[locale]}
      description={{
        en: "Verified contact details will be published here. No message form is active.",
        fr: "Les coordonnées vérifiées seront publiées ici. Aucun formulaire d’envoi n’est actif.",
        ar: "ستُنشر هنا بيانات التواصل الموثقة. لا يوجد نموذج إرسال نشط.",
      }}
    />
  );
}
