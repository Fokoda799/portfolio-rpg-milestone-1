import { notFound } from "next/navigation";
import { PortfolioPlaceholderPage } from "@/components/portfolio-placeholder-page";
import { isLocale } from "@/lib/i18n/config";
import { projects } from "@/content/projects";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const project = projects.find(
    (item) => item.slug === slug && item.status !== "placeholder",
  );

  if (!project) notFound();

  return (
    <PortfolioPlaceholderPage
      locale={locale}
      title={project.title}
      description={{
        en: project.summary,
        fr: project.summary,
        ar: project.summary,
      }}
    />
  );
}
