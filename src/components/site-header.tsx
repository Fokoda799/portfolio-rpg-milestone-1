import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { shellCopy } from "@/lib/i18n/shell-copy";

type SiteHeaderProps = Readonly<{
  locale: Locale;
}>;

const languages: readonly Locale[] = ["en", "fr", "ar"];

export function SiteHeader({ locale }: SiteHeaderProps) {
  const text = shellCopy[locale];

  const links = [
    { label: text.home, href: `/${locale}` },
    { label: text.about, href: `/${locale}/about` },
    { label: text.skills, href: `/${locale}/skills` },
    { label: text.projects, href: `/${locale}/projects` },
    { label: text.journey, href: `/${locale}/journey` },
    { label: text.services, href: `/${locale}/services` },
    { label: text.contact, href: `/${locale}/contact` },
    { label: text.adventure, href: `/${locale}/adventure` },
  ];

  return (
    <header className="border-b border-[var(--color-border)]">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href={`/${locale}`}
          className="shrink-0 rounded font-semibold tracking-wide text-[var(--color-text)] focus-visible:outline"
        >
          ABD / DEV
        </Link>

        <nav
          aria-label={text.primaryNavigation}
          className="order-3 w-full overflow-x-auto pb-1 sm:order-2 sm:w-auto sm:max-w-full"
        >
          <ul className="flex w-max min-w-full gap-1 sm:min-w-0 sm:flex-wrap sm:justify-end">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="interactive-surface block rounded-md px-3 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] focus-visible:outline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav
          aria-label={text.languageNavigation}
          className="order-2 flex shrink-0 gap-1 sm:order-3"
        >
          {languages.map((language) => (
            <Link
              key={language}
              href={`/${language}`}
              hrefLang={language}
              aria-current={language === locale ? "page" : undefined}
              lang={language}
              className="interactive-surface rounded px-2 py-1 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] aria-[current=page]:bg-[var(--color-panel-raised)] aria-[current=page]:text-[var(--color-text)] focus-visible:outline"
            >
              {language.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
