import type { Metadata } from "next";
import { Anton, Sora } from "next/font/google";
import "./globals.css";
import { EnTete } from "@/blocks/EnTete";
import { BasDePage } from "@/blocks/BasDePage";
import { BandeauConsentement } from "@/blocks/BandeauConsentement";
import { reglages } from "@/logic/reglages";

const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(reglages.url),
  title: {
    default: `${reglages.name} — Comparateur de plateformes`,
    template: `%s · ${reglages.name}`,
  },
  description: reglages.description,
  applicationName: reglages.name,
  keywords: [
    "plateformes agréées ANJ",
    "meilleures plateformes France",
    "comparateur plateformes 2026",
    "offre de bienvenue plateforme",
    "classement plateformes France",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: reglages.url,
    siteName: reglages.name,
    title: `${reglages.name} — Comparateur de plateformes`,
    description: reglages.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${reglages.name} — Comparateur de plateformes`,
    description: reglages.description,
  },
  robots: { index: true, follow: true },
  category: "reference",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${anton.variable} ${sora.variable}`}>
      <body className="flex min-h-screen flex-col">
        <EnTete />
        <main className="flex-1">{children}</main>
        <BasDePage />
        <BandeauConsentement />
      </body>
    </html>
  );
}
