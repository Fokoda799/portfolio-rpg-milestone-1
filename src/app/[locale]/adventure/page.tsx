import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";

type PageProps = Readonly<{ params: Promise<{ locale: string }> }>;

export default async function AdventurePlaceholderPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const copy = {
    en: { title: "Adventure mode", body: "The game scene is intentionally not implemented in this milestone. The portfolio content remains available through the regular site.", back: "Return to portfolio" },
    fr: { title: "Mode aventure", body: "La scène de jeu n’est volontairement pas implémentée dans cette étape. Le contenu du portfolio reste accessible sur le site classique.", back: "Retour au portfolio" },
    ar: { title: "وضع المغامرة", body: "لم يُنفذ مشهد اللعبة عمدًا في هذه المرحلة. يظل محتوى الملف المهني متاحًا عبر الموقع العادي.", back: "العودة إلى الملف المهني" },
  }[rawLocale];

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">Portfolio RPG</p>
      <h1 className="mt-3 text-4xl font-bold">{copy.title}</h1>
      <p className="mt-5 max-w-xl text-[var(--color-muted)]">{copy.body}</p>
      <Link className="mt-8 w-fit rounded-lg border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-panel-raised)]" href={`/${rawLocale}`}>{copy.back}</Link>
    </main>
  );
}
