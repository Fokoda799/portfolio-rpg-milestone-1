import type { Locale } from "./config";

type HomeCopy = {
  skipToContent: string;
  languageNavigation: string;
  eyebrow: string;
  headline: string;
  intro: string;
  projectsCta: string;
  adventureCta: string;
  heroStatus: string;
  menuLabel: string;
  menuItems: readonly string[];
  placeholderNotice: string;
};

export const copy: Record<Locale, HomeCopy> = {
  en: {
    skipToContent: "Skip to content",
    languageNavigation: "Language",
    eyebrow: "Full-stack developer · Portfolio world",
    headline: "Building useful things, one level at a time.",
    intro:
      "A professional portfolio with a small RPG-inspired world to explore. The portfolio remains usable without entering the adventure.",
    projectsCta: "Explore projects",
    adventureCta: "Enter adventure",
    heroStatus: "Character preview · art placeholder",
    menuLabel: "PORTFOLIO MENU",
    menuItems: [
      "About",
      "Skills",
      "Projects",
      "Journey",
      "Services",
      "Contact",
    ],
    placeholderNotice:
      "Starter scaffold — replace all placeholder content before launch.",
  },
  fr: {
    skipToContent: "Aller au contenu",
    languageNavigation: "Langue",
    eyebrow: "Développeur full-stack · Monde portfolio",
    headline: "Créer des solutions utiles, un niveau à la fois.",
    intro:
      "Un portfolio professionnel accompagné d’un petit univers inspiré des RPG. Le portfolio reste accessible sans lancer l’aventure.",
    projectsCta: "Voir les projets",
    adventureCta: "Entrer dans l’aventure",
    heroStatus: "Aperçu du personnage · illustration provisoire",
    menuLabel: "MENU DU PORTFOLIO",
    menuItems: [
      "À propos",
      "Compétences",
      "Projets",
      "Parcours",
      "Services",
      "Contact",
    ],
    placeholderNotice:
      "Base de départ — remplacez les contenus provisoires avant publication.",
  },
  ar: {
    skipToContent: "انتقل إلى المحتوى",
    languageNavigation: "اللغة",
    eyebrow: "مطور شامل · عالم الملف الشخصي",
    headline: "نبني حلولًا مفيدة، مستوى بعد مستوى.",
    intro:
      "ملف مهني مع عالم صغير مستوحى من ألعاب تقمص الأدوار. يمكنك تصفح المعلومات دون دخول المغامرة.",
    projectsCta: "استكشف المشاريع",
    adventureCta: "ادخل المغامرة",
    heroStatus: "معاينة الشخصية · رسم مؤقت",
    menuLabel: "قائمة الملف الشخصي",
    menuItems: ["نبذة", "المهارات", "المشاريع", "المسار", "الخدمات", "التواصل"],
    placeholderNotice: "هيكل أولي — استبدل المحتوى المؤقت قبل النشر.",
  },
};
