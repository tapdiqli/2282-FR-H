import type { Metadata } from "next";
import { getStade } from "@/logic/donnees";
import { Grille } from "@/blocks/Grille";
import { CarteTitre } from "@/blocks/CarteTitre";

export const metadata: Metadata = {
  title: "Classement",
  description:
    "Le classement complet des plateformes agréées ANJ notées par notre rédaction, du meilleur au dernier.",
  alternates: { canonical: "/classement" },
};

export default async function ClassementPage() {
  const { marquesBureau, marquesMobile } = await getStade();
  return (
    <>
      <CarteTitre
        tag="Classement complet"
        titre="Le classement de la rédaction"
        chapeau="Toutes les plateformes agréées ANJ actuellement suivies, notées selon notre dernière analyse. La position reflète notre évaluation la plus récente."
      />
      <section className="pitch py-9">
        <Grille marquesBureau={marquesBureau} marquesMobile={marquesMobile} />
        <p className="mx-auto mt-6 w-full text-center text-xs leading-relaxed text-mute">
          Les offres sont soumises aux conditions générales de chaque plateforme. Interdit aux mineurs. Utilisez les plateformes de manière responsable.
        </p>
        <p className="mx-auto mt-2 w-full text-center text-xs leading-relaxed text-mute/70 italic">
          Liens affiliés — nous percevons une commission si vous visitez un partenaire. Cela n&apos;influe jamais sur notre classement ou nos notes.
        </p>
      </section>
    </>
  );
}
