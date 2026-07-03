import type { Metadata } from "next";
import { CarteTitre } from "@/blocks/CarteTitre";
import { reglages } from "@/logic/reglages";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales, informations sur l'éditeur et conditions d'utilisation de TopPariGagnant.",
  alternates: { canonical: "/mentions-legales" },
};

const EDITEUR = [
  {
    h: "Éditeur du site",
    p: `${reglages.name} est édité par [Raison sociale], société [forme juridique] au capital de [X €], immatriculée au RCS de [ville] sous le numéro [SIRET]. Siège social : [adresse complète], [code postal] [ville], France.`,
  },
  {
    h: "Directeur de la publication",
    p: `[Prénom Nom], [titre]. Contact : contact@${reglages.domain}.`,
  },
  {
    h: "Hébergeur",
    p: "Ce site est hébergé par Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis.",
  },
];

const CLAUSES = [
  {
    h: "Objet informatif",
    p: `${reglages.name} propose des contenus comparatifs et éditoriaux sur les plateformes agréées par l'Autorité Nationale des Jeux (ANJ) en France, à titre informatif uniquement. Il ne s'agit ni de conseils financiers ni de conseils juridiques.`,
  },
  {
    h: "Public concerné",
    p: "Nos contenus s'adressent exclusivement aux personnes majeures (18 ans et plus) autorisées à utiliser ces plateformes en France. L'accès et l'utilisation sont strictement réservés aux majeurs.",
  },
  {
    h: "Offres des tiers",
    p: "Les offres présentées appartiennent aux plateformes partenaires et sont soumises à leurs propres conditions générales, susceptibles d'évoluer à tout moment. Vérifiez toujours les conditions en vigueur directement sur le site de la plateforme avant toute utilisation.",
  },
  {
    h: "Relations commerciales et liens affiliés",
    p: "Certains liens présents sur ce site sont des liens affiliés. Nous percevons une commission si vous accédez à une plateforme partenaire via nos liens. Cette relation commerciale n'influe en aucune façon sur notre classement, nos notes ou notre indépendance éditoriale.",
  },
  {
    h: "Responsabilité",
    p: "Nous veillons à l'exactitude des informations publiées mais ne pouvons en garantir l'exhaustivité ni la mise à jour en temps réel. L'utilisation du site et des informations qu'il contient relève de votre entière responsabilité.",
  },
  {
    h: "Propriété intellectuelle",
    p: `Tous les contenus (textes, graphismes, logos) publiés sur ${reglages.url} sont la propriété exclusive de leur auteur ou de [Raison sociale] et sont protégés par le droit d'auteur. Toute reproduction sans autorisation est interdite.`,
  },
  {
    h: "Cookies et données personnelles",
    p: `Nous utilisons des cookies fonctionnels et de mesure d'audience. Consultez notre politique de confidentialité pour en savoir plus. Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données : contact@${reglages.domain}.`,
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <CarteTitre
        tag="Légal"
        titre="Mentions légales"
        chapeau="Informations sur l'éditeur du site et conditions d'utilisation."
      />
      <section className="pitch pb-16">
        <div className="slab divide-y divide-[color:var(--color-seam)] p-6 md:p-8">
          <div className="pb-6">
            <h2 className="mb-4 text-base font-bold uppercase tracking-wider text-mute">
              Informations légales
            </h2>
            {EDITEUR.map((c) => (
              <div key={c.h} className="py-3">
                <span className="text-sm font-bold text-bright">{c.h} — </span>
                <span className="text-sm leading-relaxed text-mute">{c.p}</span>
              </div>
            ))}
          </div>
          {CLAUSES.map((c) => (
            <div key={c.h} className="py-5 last:pb-0">
              <h2 className="text-base font-bold text-bright">{c.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mute">{c.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
