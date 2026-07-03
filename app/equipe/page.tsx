import type { Metadata } from "next";
import { CarteTitre } from "@/blocks/CarteTitre";
import { reglages } from "@/logic/reglages";

export const metadata: Metadata = {
  title: "Équipe",
  description:
    "L'équipe indépendante derrière TopPariGagnant et sa façon de couvrir le marché des plateformes agréées en France.",
  alternates: { canonical: "/equipe" },
};

const ENGAGEMENTS = [
  {
    t: "Plateformes agréées uniquement",
    d: "Seules les plateformes titulaires d'un agrément ANJ en cours de validité figurent dans notre classement. Aucune exception.",
  },
  {
    t: "Une méthode fixe et transparente",
    d: "Chaque plateforme est évaluée avec les mêmes critères, dans le même ordre. Le résultat est comparable d'une fiche à l'autre.",
  },
  {
    t: "Indépendance éditoriale",
    d: "Certains liens génèrent une commission. Cette relation commerciale n'influence jamais notre classement ni nos notes.",
  },
  {
    t: "Usage responsable en priorité",
    d: "Nous rappelons systématiquement les ressources d'aide et encourageons une utilisation mesurée. L'activité doit rester un divertissement.",
  },
];

const METHODE = [
  {
    n: "01",
    t: "Sélection initiale",
    d: "Nous ne retenons que les plateformes disposant d'un agrément ANJ actif et d'une offre accessible au public français.",
  },
  {
    n: "02",
    t: "Évaluation par critères",
    d: "Offre de bienvenue, conditions, richesse du catalogue et fiabilité générale sont mesurés avec la même grille.",
  },
  {
    n: "03",
    t: "Classement relatif",
    d: "Les positions reflètent une comparaison entre plateformes au moment de l'analyse. Une note élevée signifie une meilleure position relative, pas une garantie absolue.",
  },
  {
    n: "04",
    t: "Mise à jour continue",
    d: "Les offres évoluent. Lorsque les conditions changent de manière significative, le classement est révisé pour rester fidèle au marché.",
  },
];

export default function EquipePage() {
  return (
    <>
      <CarteTitre
        tag="À propos"
        titre="Notre équipe"
        chapeau={`${reglages.name} est un guide comparatif indépendant dédié aux plateformes agréées en France. Notre objectif : rendre le classement lisible, juste et accessible en un coup d'œil.`}
      />
      <section className="pitch py-12">
        <div className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
          <div className="slab p-6 md:p-8">
            <h2 className="head text-2xl text-bright">Notre mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              Comparer les plateformes agréées demande du temps et de la méthode. {reglages.name} réunit
              dans un classement unique toutes les plateformes régulées et les évalue avec les mêmes critères, pour
              que vous puissiez décider en connaissance de cause.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              Nous ne prenons aucun dépôt, ne gérons aucune transaction et ne proposons aucune offre directe.
              Ce site est exclusivement un outil d&apos;information et de comparaison.
            </p>
          </div>
          <div className="slab p-6 md:p-8">
            <h3 className="text-base font-bold text-bright">Nos engagements</h3>
            <ul className="mt-4 space-y-3">
              {ENGAGEMENTS.map((e) => (
                <li key={e.t} className="border-l-2 border-flash-400 pl-3">
                  <span className="text-sm font-bold text-bright">{e.t}</span>
                  <p className="mt-0.5 text-xs leading-relaxed text-mute">{e.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pitch pb-16">
        <div className="mb-8">
          <h2 className="head text-3xl text-bright md:text-5xl">Notre méthode en quatre étapes</h2>
          <p className="mt-3 text-sm text-mute">De la sélection au classement — comment nous travaillons.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {METHODE.map((m) => (
            <div key={m.n} className="slab p-5">
              <span className="head text-2xl text-flash-400">{m.n}</span>
              <h3 className="mt-2 text-base font-bold text-bright">{m.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mute">{m.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
