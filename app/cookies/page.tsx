import type { Metadata } from "next";
import { CarteTitre } from "@/blocks/CarteTitre";
import { reglages } from "@/logic/reglages";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Comment TopPariGagnant utilise les cookies et comment les gérer selon vos préférences.",
  alternates: { canonical: "/cookies" },
};

const TYPES = [
  {
    h: "Cookies fonctionnels",
    p: "Ces cookies sont indispensables au bon fonctionnement du site : mémorisation de vos préférences de consentement, navigation fluide entre les pages. Ils ne collectent aucune donnée personnelle identifiable.",
  },
  {
    h: "Cookies de mesure d'audience",
    p: "Des outils d'analyse nous permettent de comprendre comment le site est consulté (pages visitées, durée, provenance). Ces données sont agrégées et anonymisées pour améliorer le contenu.",
  },
  {
    h: "Cookies tiers (partenaires)",
    p: "Lorsque vous accédez à une plateforme partenaire via nos liens, celle-ci peut déposer ses propres cookies. Leur usage est régi par la politique de confidentialité de chaque partenaire, indépendante de la nôtre.",
  },
];

const GESTION = [
  {
    h: "Via la bannière de consentement",
    p: "À votre première visite, une bannière vous permet d'accepter ou de refuser les cookies non essentiels. Votre choix est mémorisé pour les visites suivantes.",
  },
  {
    h: "Via les paramètres de votre navigateur",
    p: "Vous pouvez bloquer ou supprimer les cookies à tout moment depuis les paramètres de votre navigateur (Chrome, Firefox, Safari, Edge). Cette opération peut affecter certaines fonctionnalités du site.",
  },
  {
    h: "Via la CNIL",
    p: "Pour en savoir plus sur vos droits et les recours disponibles, consultez le site de la Commission Nationale de l'Informatique et des Libertés : cnil.fr.",
  },
];

export default function CookiesPage() {
  return (
    <>
      <CarteTitre
        tag="Légal"
        titre="Politique de cookies"
        chapeau="Ce que nous utilisons, pourquoi, et comment exercer vos droits."
      />
      <section className="pitch pb-16">
        <div className="slab divide-y divide-[color:var(--color-seam)] p-6 md:p-8">
          <div className="pb-6">
            <p className="text-sm leading-relaxed text-mute">
              En naviguant sur {reglages.name}, des cookies peuvent être déposés sur votre appareil. Cette page
              explique quels cookies nous utilisons, dans quel but et comment les contrôler.
            </p>
          </div>

          <div className="py-6">
            <h2 className="mb-4 text-base font-bold text-bright">Types de cookies utilisés</h2>
            <div className="space-y-4">
              {TYPES.map((t) => (
                <div key={t.h}>
                  <h3 className="text-sm font-bold text-bright">{t.h}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mute">{t.p}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="py-6 last:pb-0">
            <h2 className="mb-4 text-base font-bold text-bright">Gérer vos préférences</h2>
            <div className="space-y-4">
              {GESTION.map((g) => (
                <div key={g.h}>
                  <h3 className="text-sm font-bold text-bright">{g.h}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mute">{g.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
