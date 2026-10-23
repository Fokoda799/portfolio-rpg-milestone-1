import type { Locale } from "@/lib/i18n/config";

export type Skill = {
  id: string;
  name: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced";
};

export type JourneyEntry = {
  id: string;
  period: string;
  title: string;
  description: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
};

export type ContactInfo = {
  emailPlaceholder: string;
  githubPlaceholder: string;
  linkedinPlaceholder: string;
};

export type DialogueLine = {
  id: string;
  speaker: string;
  text: Partial<Record<Locale, string>>;
};

export const skills: readonly Skill[] = [];
export const journey: readonly JourneyEntry[] = [];
export const services: readonly Service[] = [];

export const contactInfo: ContactInfo = {
  emailPlaceholder: "[Placeholder: add a public contact email]",
  githubPlaceholder: "[Placeholder: add a verified GitHub profile URL]",
  linkedinPlaceholder: "[Placeholder: add a verified LinkedIn profile URL]",
};

export const dialogue: readonly DialogueLine[] = [];
