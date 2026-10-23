import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Abdellah | Full-Stack Developer",
    template: "%s | Abdellah",
  },
  description:
    "A multilingual developer portfolio with a 16-bit RPG-inspired presentation.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Abdellah | Full-Stack Developer",
    description: "Explore projects, skills, and the developer journey.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
