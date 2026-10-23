import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";

type PageProps = Readonly<{ params: Promise<{ locale: string }> }>;

export default async function ProjectsPlaceholderPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const copy = {
    en: {
      title: "Projects",
      body: "Project case studies will be added in a later milestone. No sample project here represents verified work.",
      back: "Back to home",
    },
    fr: {
      title: "Projets",
      body: "Les études de cas seront ajoutées lors d’une prochaine étape. Aucun exemple ici ne représente un travail vérifié.",
      back: "Retour à l’accueil",
    },
    ar: {
      title: "المشاريع",
      body: "ستُضاف دراسات المشاريع في مرحلة لاحقة. لا يمثل أي مثال هنا عملًا موثقًا.",
      back: "العودة إلى الرئيسية",
    },
  }[rawLocale];

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
        Portfolio RPG
      </p>
      <h1 className="mt-3 text-4xl font-bold">{copy.title}</h1>
      <p className="mt-5 max-w-xl text-[var(--color-muted)]">{copy.body}</p>
      <Link
        className="mt-8 w-fit rounded-lg border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-panel-raised)]"
        href={`/${rawLocale}`}
      >
        {copy.back}
      </Link>
    </main>
  );
}
