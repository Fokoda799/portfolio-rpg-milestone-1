import type { Locale } from "./config";

type ShellCopy = {
  primaryNavigation: string;
  home: string;
  about: string;
  skills: string;
  projects: string;
  journey: string;
  services: string;
  contact: string;
  adventure: string;
  languageNavigation: string;
  footerNotice: string;
};

export const shellCopy: Record<Locale, ShellCopy> = {
  en: {
    primaryNavigation: "Main navigation",
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    journey: "Journey",
    services: "Services",
    contact: "Contact",
    adventure: "Adventure",
    languageNavigation: "Language",
    footerNotice:
      "Portfolio RPG · Professional portfolio and optional adventure",
  },
  fr: {
    primaryNavigation: "Navigation principale",
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    journey: "Parcours",
    services: "Services",
    contact: "Contact",
    adventure: "Aventure",
    languageNavigation: "Langue",
    footerNotice:
      "Portfolio RPG · Portfolio professionnel et aventure facultative",
  },
  ar: {
    primaryNavigation: "التنقل الرئيسي",
    home: "الرئيسية",
    about: "نبذة",
    skills: "المهارات",
    projects: "المشاريع",
    journey: "المسار",
    services: "الخدمات",
    contact: "التواصل",
    adventure: "المغامرة",
    languageNavigation: "اللغة",
    footerNotice: "Portfolio RPG · ملف مهني ومغامرة اختيارية",
  },
};
