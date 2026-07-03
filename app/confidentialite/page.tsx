import type { Metadata } from "next";
import { CarteTitre } from "@/blocks/CarteTitre";
import { reglages } from "@/logic/reglages";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Comment TopPariGagnant traite les données et respecte votre vie privée.",
  alternates: { canonical: "/confidentialite" },
};

const CLAUSES = [
  { h: "Données collectées", p: `${reglages.name} ne collecte que des statistiques limitées et standard, nécessaires pour comprendre et améliorer le site. Nous ne vendons pas de données personnelles.` },
  { h: "Cookies", p: "Nous utilisons des cookies et technologies similaires pour la mesure d'audience et des préférences de base. Vous pouvez les gérer via votre navigateur." },
  { h: "Tiers", p: "Lorsque vous suivez un lien vers une plateforme, sa propre politique de confidentialité s'applique. Nous vous invitons à la consulter." },
  { h: "Vos droits", p: "Conformément au RGPD, vous disposez de droits sur vos données personnelles, dont l'accès et l'effacement. Contactez-nous pour toute demande." },
];

export default function ConfidentialitePage() {
  return (
    <>
      <CarteTitre tag="Légal" titre="Politique de confidentialité" chapeau="Comment nous traitons les informations lorsque vous utilisez le site." />
      <section className="pitch pb-16">
        <div className="slab divide-y divide-[color:var(--color-seam)] p-6 md:p-8">
          {CLAUSES.map((c) => (
            <div key={c.h} className="py-5 first:pt-0 last:pb-0">
              <h2 className="text-base font-bold text-bright">{c.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mute">{c.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
