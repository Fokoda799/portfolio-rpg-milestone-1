import { notFound } from "next/navigation";
import { PortfolioPlaceholderPage } from "@/components/portfolio-placeholder-page";
import { isLocale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <PortfolioPlaceholderPage
      locale={locale}
      title={{ en: "Services", fr: "Services", ar: "الخدمات" }[locale]}
      description={{
        en: "Service offerings will be published after they are confirmed.",
        fr: "Les services proposés seront publiés après confirmation.",
        ar: "ستُنشر الخدمات بعد تأكيد تفاصيلها.",
      }}
    />
  );
}
