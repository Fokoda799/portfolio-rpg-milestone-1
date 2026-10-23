export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: "placeholder";
  stack: readonly string[];
};

export const projects: readonly Project[] = [
  {
    slug: "project-placeholder",
    title: "[Placeholder project]",
    summary: "Replace this entry with a real project and verified outcomes.",
    status: "placeholder",
    stack: ["TypeScript", "React"],
  },
];
