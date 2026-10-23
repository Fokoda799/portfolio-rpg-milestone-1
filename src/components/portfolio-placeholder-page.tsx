import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

type PortfolioPlaceholderPageProps = {
  locale: Locale;
  title: string;
  description: Record<Locale, string>;
};

const backLabels: Record<Locale, string> = {
  en: "Back to home",
  fr: "Retour à l’accueil",
  ar: "العودة إلى الرئيسية",
};

export function PortfolioPlaceholderPage({
  locale,
  title,
  description,
}: PortfolioPlaceholderPageProps) {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
        Portfolio RPG
      </p>
      <h1 className="mt-3 text-4xl font-bold">{title}</h1>
      <p className="mt-5 max-w-xl text-[var(--color-muted)]">
        {description[locale]}
      </p>
      <Link
        className="mt-8 w-fit rounded-lg border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-panel-raised)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        href={`/${locale}`}
      >
        {backLabels[locale]}
      </Link>
    </main>
  );
}
