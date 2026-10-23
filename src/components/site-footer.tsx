import type { Locale } from "@/lib/i18n/config";
import { shellCopy } from "@/lib/i18n/shell-copy";

type SiteFooterProps = Readonly<{
  locale: Locale;
}>;

export function SiteFooter({ locale }: SiteFooterProps) {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap justify-between gap-3 px-5 py-5 text-xs text-[var(--color-muted)] sm:px-8 lg:px-12">
        <span>© {new Date().getFullYear()} Abdellah</span>
        <span>{shellCopy[locale].footerNotice}</span>
      </div>
    </footer>
  );
}
