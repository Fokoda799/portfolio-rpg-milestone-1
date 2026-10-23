"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { portfolioProfile } from "@/content/profile";
import {
  introDialogue,
  selectionDialogue,
  type IntroStage,
} from "@/content/intro-dialogue";
import type { Locale } from "@/lib/i18n/config";
import { copy } from "@/lib/i18n/copy";
import { DialogueBox } from "./dialogue-box";
import { IntroScene } from "./intro-scene";
import "./hero-scene.css";

type RpgIntroProps = Readonly<{
  locale: Locale;
}>;

const sequence: readonly Exclude<IntroStage, "arrival">[] = [
  "greeting",
  "introduction",
  "identity",
  "menu",
];

export function RpgIntro({ locale }: RpgIntroProps) {
  const router = useRouter();

  const [stage, setStage] = useState<IntroStage>("arrival");
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const text = copy[locale];

  const menuItems = [
    { label: text.menuItems[0], href: `/${locale}/about` },
    { label: text.menuItems[1], href: `/${locale}/skills` },
    { label: text.menuItems[2], href: `/${locale}/projects` },
    { label: text.menuItems[3], href: `/${locale}/journey` },
    { label: text.menuItems[4], href: `/${locale}/services` },
    { label: text.menuItems[5], href: `/${locale}/contact` },
  ];

  useEffect(() => {
    if (stage !== "arrival") return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const timeout = window.setTimeout(
      () => setStage("greeting"),
      reducedMotion ? 0 : 900,
    );

    return () => window.clearTimeout(timeout);
  }, [stage]);

  function advance() {
    if (isNavigating) return;

    if (stage === "arrival") {
      setStage("greeting");
      return;
    }

    const currentIndex = sequence.indexOf(stage);

    if (currentIndex >= 0 && currentIndex < sequence.length - 1) {
      setStage(sequence[currentIndex + 1]);
    }
  }

  function skipIntro() {
    setStage("menu");
  }

  function navigateWithDialogue(href: string, message: string) {
    if (isNavigating) return;

    setIsNavigating(true);
    setSelectedMessage(message);

    window.setTimeout(() => {
      router.push(href);
    }, 650);
  }

  const message = stage === "arrival" ? "" : introDialogue[stage][locale];

  const showMenu = stage === "menu";

  return (
    <main className="rpg-intro">
      <a href="#intro-content" className="rpg-skip-link">
        {text.skipToContent}
      </a>

      <section
        id="intro-content"
        aria-labelledby="intro-title"
        className="rpg-intro-layout"
      >
        <div className="rpg-intro-world">
          <IntroScene locale={locale} />

          {stage === "identity" && (
            <div
              className="rpg-identity"
              aria-label={portfolioProfile.displayName}
            >
              <div className="rpg-logo-mark" aria-hidden="true">
                {portfolioProfile.displayName.slice(0, 1)}
              </div>
              <p className="rpg-logo-name">{portfolioProfile.displayName}</p>
              <p className="rpg-logo-role">
                {portfolioProfile.rolePlaceholder}
              </p>
            </div>
          )}
        </div>

        <div className="rpg-intro-interface">
          <p className="rpg-eyebrow">{text.eyebrow}</p>

          <h1 id="intro-title" className="rpg-title">
            {portfolioProfile.displayName}
          </h1>

          {!showMenu && (
            <DialogueBox
              speaker={portfolioProfile.displayName}
              message={message}
              continueLabel={text.continueLabel}
              skipLabel={text.skipIntroLabel}
              onContinue={advance}
              onSkip={skipIntro}
              showContinue
            />
          )}

          {showMenu && (
            <>
              <DialogueBox
                speaker={portfolioProfile.displayName}
                message={message}
                continueLabel={text.continueLabel}
                skipLabel={text.skipIntroLabel}
                onContinue={() => undefined}
                onSkip={() => undefined}
                showContinue={false}
              />

              <button
                type="button"
                className="rpg-mobile-menu-toggle"
                aria-expanded={mobileMenuOpen}
                aria-controls="rpg-menu-panel"
                aria-label={
                  mobileMenuOpen ? text.closeMenuLabel : text.mobileMenuLabel
                }
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                <span aria-hidden="true">{mobileMenuOpen ? "×" : "☰"}</span>
                <span>
                  {mobileMenuOpen ? text.closeMenuLabel : text.mobileMenuLabel}
                </span>
              </button>

              <section
                id="rpg-menu-panel"
                className={`rpg-menu${mobileMenuOpen ? " is-mobile-open" : ""}`}
                aria-labelledby="rpg-menu-title"
              >
                <h2 id="rpg-menu-title">{text.menuLabel}</h2>

                <nav aria-label={text.menuLabel}>
                  <ul className="rpg-menu-list">
                    <li>
                      <Link
                        href={`/${locale}/projects`}
                        className="rpg-menu-primary"
                        onClick={(event) => {
                          if (
                            event.metaKey ||
                            event.ctrlKey ||
                            event.shiftKey ||
                            event.altKey
                          ) {
                            return;
                          }

                          event.preventDefault();

                          navigateWithDialogue(
                            `/${locale}/projects`,
                            selectionDialogue.portfolio[locale],
                          );
                        }}
                      >
                        <span>{text.portfolioMode}</span>
                        <small>{text.portfolioDescription}</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/projects`}
                        className="rpg-menu-primary"
                        onClick={(event) => {
                          if (
                            event.metaKey ||
                            event.ctrlKey ||
                            event.shiftKey ||
                            event.altKey
                          ) {
                            return;
                          }

                          event.preventDefault();

                          navigateWithDialogue(
                            `/${locale}/projects`,
                            selectionDialogue.adventure[locale],
                          );
                        }}
                      >
                        <span>{text.adventureMode}</span>
                        <small>{text.adventureDescription}</small>
                      </Link>
                    </li>
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <Link className="rpg-menu-link" href={item.href}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </section>
            </>
          )}

          {stage === "arrival" && (
            <button
              type="button"
              className="rpg-start-button"
              onClick={advance}
            >
              {text.startIntroLabel}
            </button>
          )}

          {!showMenu && (
            <button
              type="button"
              className="rpg-skip-button"
              onClick={skipIntro}
            >
              {text.skipIntroLabel}
            </button>
          )}
        </div>
      </section>

      <div className="rpg-corner-expression">
        <span aria-hidden="true">✦</span>
        <span>{text.cornerExpression}</span>
      </div>

      <div className="rpg-version-language">
        <span>{text.versionLabel} 0.1.0</span>

        <nav
          aria-label={text.languageNavigation}
          className="rpg-language-links"
        >
          {(["en", "fr", "ar"] as const).map((language) => (
            <Link
              key={language}
              href={`/${language}`}
              lang={language}
              hrefLang={language}
              aria-current={language === locale ? "page" : undefined}
            >
              {language.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
