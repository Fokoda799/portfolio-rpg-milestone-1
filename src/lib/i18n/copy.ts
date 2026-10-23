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
  portfolioMode: string;
  adventureMode: string;
  sceneLabel: string;
  sceneDescription: string;
  startIntroLabel: string;
  continueLabel: string;
  skipIntroLabel: string;
  portfolioDescription: string;
  adventureDescription: string;
  mobileMenuLabel: string;
  closeMenuLabel: string;
  cornerExpression: string;
  versionLabel: string;
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
    portfolioMode: "Portfolio Mode",
    adventureMode: "Adventure Mode",
    sceneLabel: "The developer's clearing",
    sceneDescription: "Decorative pixel-art scene preview",
    startIntroLabel: "Start introduction",
    continueLabel: "Continue",
    skipIntroLabel: "Skip intro",
    portfolioDescription: "Browse my projects",
    adventureDescription: "Explore the world",
    mobileMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    cornerExpression: "Good things take exploration.",
    versionLabel: "Version",
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
    portfolioMode: "Mode portfolio",
    adventureMode: "Mode aventure",
    sceneLabel: "La clairière du développeur",
    sceneDescription: "Aperçu décoratif d’une scène en pixel art",
    startIntroLabel: "Commencer l’introduction",
    continueLabel: "Continuer",
    skipIntroLabel: "Passer l’introduction",
    portfolioDescription: "Découvrir mes projets",
    adventureDescription: "Explorer le monde",
    mobileMenuLabel: "Ouvrir le menu",
    closeMenuLabel: "Fermer le menu",
    cornerExpression: "Les belles découvertes demandent de l’exploration.",
    versionLabel: "Version",
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
    portfolioMode: "وضع الملف المهني",
    adventureMode: "وضع المغامرة",
    sceneLabel: "فسحة المطور",
    sceneDescription: "معاينة زخرفية لمشهد بفن البكسل",
    startIntroLabel: "ابدأ المقدمة",
    continueLabel: "متابعة",
    skipIntroLabel: "تجاوز المقدمة",
    portfolioDescription: "استكشف مشاريعي",
    adventureDescription: "استكشف العالم",
    mobileMenuLabel: "فتح القائمة",
    closeMenuLabel: "إغلاق القائمة",
    cornerExpression: "الاكتشاف يبدأ بالاستكشاف.",
    versionLabel: "الإصدار",
  },
};
