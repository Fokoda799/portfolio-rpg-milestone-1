import type { Locale } from "@/lib/i18n/config";

export type IntroStage =
  "arrival" | "greeting" | "introduction" | "identity" | "menu";

type LocalizedText = Record<Locale, string>;

export const introDialogue: Record<
  Exclude<IntroStage, "arrival">,
  LocalizedText
> = {
  greeting: {
    en: "Hey, adventurer! Welcome to my corner of the internet.",
    fr: "Salut, aventurier ! Bienvenue dans mon univers.",
    ar: "مرحبًا أيها المغامر! أهلًا بك في عالمي.",
  },
  introduction: {
    en: "I'm Abdellah. Explore my work and discover what I build.",
    fr: "Je suis Abdellah. Découvrez mes projets et ce que je crée.",
    ar: "أنا عبد الله. اكتشف مشاريعي وما أعمل على تطويره.",
  },
  identity: {
    en: "Your journey starts here. Choose where you'd like to go.",
    fr: "Votre aventure commence ici. Choisissez votre destination.",
    ar: "تبدأ رحلتك من هنا. اختر وجهتك.",
  },
  menu: {
    en: "Explore the portfolio or enter the adventure. It's your choice!",
    fr: "Explorez le portfolio ou entrez dans l'aventure. À vous de choisir !",
    ar: "استكشف الملف المهني أو ادخل المغامرة. الخيار لك!",
  },
};

export const selectionDialogue = {
  portfolio: {
    en: "Enjoy exploring my projects and discovering how I work!",
    fr: "Bonne exploration de mes projets et de ma façon de travailler !",
    ar: "استمتع باستكشاف مشاريعي والتعرف على طريقة عملي!",
  },
  adventure: {
    en: "Your adventure begins now. Let's explore!",
    fr: "Votre aventure commence maintenant. Partons explorer !",
    ar: "تبدأ مغامرتك الآن. هيا نستكشف العالم!",
  },
  page: {
    en: "Enjoy exploring. See you on the next page!",
    fr: "Bonne exploration. À bientôt sur la prochaine page !",
    ar: "استمتع بالاستكشاف، أراك في الصفحة التالية!",
  },
} satisfies Record<string, Record<Locale, string>>;
