import type { Metadata } from "next";
import { CarteTitre } from "@/blocks/CarteTitre";
import { Criteres } from "@/blocks/sections";

export const metadata: Metadata = {
  title: "Notre jury",
  description:
    "Comment TopPariGagnant note et classe les plateformes agréées : nos critères et notre méthode, en toute transparence.",
  alternates: { canonical: "/notre-jury" },
};

export default function NotreJuryPage() {
  return (
    <>
      <CarteTitre
        tag="Méthode"
        titre="Comment nous notons"
        chapeau="Chaque plateforme passe devant le même jury, avec les mêmes critères. Voici comment se construit une note et une position."
      />
      <Criteres />
      <section className="pitch pb-16">
        <div className="slab space-y-4 p-6 md:p-8">
          <h2 className="head text-2xl text-bright">De la note au classement</h2>
          <p className="text-sm leading-relaxed text-mute">
            Nous réunissons nos quatre critères en une position unique. La première du classement décroche la
            meilleure « Note de la rédaction », chaque suivante étant notée juste en dessous. Une note est donc
            toujours relative au marché du moment : une comparaison honnête plutôt qu&apos;une valeur figée.
          </p>
          <p className="text-sm leading-relaxed text-mute">
            Le classement évolue avec le marché. Les relations commerciales n&apos;influencent jamais
            l&apos;ordre d&apos;affichage.
          </p>
        </div>
      </section>
    </>
  );
}
