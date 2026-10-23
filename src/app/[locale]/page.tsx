import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { copy } from "@/lib/i18n/copy";
import { portfolioProfile } from "@/content/profile";

type HomePageProps = Readonly<{ params: Promise<{ locale: string }> }>;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "ar" }];
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const text = copy[rawLocale];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12">
      <a
        href="#main-content"
        className="sr-only z-50 rounded bg-white px-4 py-2 text-black focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        {text.skipToContent}
      </a>

      <header className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-5">
        <Link href={`/${rawLocale}`} className="font-semibold tracking-wide">
          ABD / DEV
        </Link>
        <nav
          aria-label={text.languageNavigation}
          className="flex gap-3 text-sm"
        >
          {(["en", "fr", "ar"] as const).map((language) => (
            <Link
              key={language}
              href={`/${language}`}
              hrefLang={language}
              aria-current={language === rawLocale ? "page" : undefined}
              className="rounded px-2 py-1 text-[var(--color-muted)] hover:text-[var(--color-text)] aria-[current=page]:bg-[var(--color-panel-raised)] aria-[current=page]:text-[var(--color-text)]"
            >
              {language.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>

      <section
        id="main-content"
        className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20"
        aria-labelledby="hero-title"
      >
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            {text.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="text-4xl font-bold leading-tight sm:text-6xl"
          >
            {text.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)]">
            {text.intro}
          </p>
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            {portfolioProfile.rolePlaceholder}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${rawLocale}/projects`}
              className="rounded-lg bg-[var(--color-accent)] px-5 py-3 font-semibold text-[#17232a] transition hover:brightness-110"
            >
              {text.projectsCta}
            </Link>
            <Link
              href={`/${rawLocale}/adventure`}
              className="rounded-lg border border-[var(--color-border)] px-5 py-3 font-semibold transition hover:bg-[var(--color-panel-raised)]"
            >
              {text.adventureCta}
            </Link>
          </div>
        </div>

        <div className="pixel-frame pixel-grid relative isolate flex min-h-[340px] items-center justify-center overflow-hidden p-6 sm:min-h-[420px]">
          <div
            aria-hidden="true"
            className="absolute inset-x-8 bottom-10 h-36 -skew-y-6 rounded-2xl border border-emerald-200/20 bg-emerald-300/5"
          />
          <div className="relative flex flex-col items-center gap-5">
            <div
              aria-hidden="true"
              className="grid h-28 w-24 place-items-center border-4 border-[#101a22] bg-[#d9a16a] shadow-[8px_8px_0_#101a22]"
            >
              <div className="relative h-16 w-14 bg-[#6e4c3a]">
                <div className="absolute inset-x-1 top-4 h-7 bg-[#e9c19a]" />
                <div className="absolute left-3 top-6 h-2 w-2 bg-[#18252a]" />
                <div className="absolute right-3 top-6 h-2 w-2 bg-[#18252a]" />
                <div className="absolute inset-x-3 bottom-1 h-1 bg-[#18252a]" />
              </div>
            </div>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]/95 px-4 py-2 text-center text-sm">
              <span className="text-[var(--color-accent)]">◆</span>{" "}
              {text.heroStatus}
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/95 p-3 sm:p-4">
            <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
              {text.menuLabel}
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
              {text.menuItems.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-[var(--color-panel-raised)] px-3 py-2"
                >
                  ▸ {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-wrap justify-between gap-3 border-t border-[var(--color-border)] py-5 text-xs text-[var(--color-muted)]">
        <span>© {new Date().getFullYear()} Abdellah</span>
        <span>{text.placeholderNotice}</span>
      </footer>
    </main>
  );
}
