import type { Metadata } from "next";
import { getStade } from "@/logic/donnees";
import { reglages } from "@/logic/reglages";
import { HeroStade } from "@/blocks/HeroStade";
import { Grille } from "@/blocks/Grille";
import { Criteres, BandeauSerein, SectionFaq, AtoutsRedaction, CadreRedaction, FAQ_ITEMS } from "@/blocks/sections";

export async function generateMetadata(): Promise<Metadata> {
  const { pageTitle } = await getStade();
  return { title: pageTitle, alternates: { canonical: "/" } };
}

export default async function AccueilPage() {
  const { headText, headParagraph, marquesBureau, marquesMobile } = await getStade();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <HeroStade headText={headText} headParagraph={headParagraph} />

      <section id="classement" className="pitch py-9">
        <div className="mb-5 hidden md:flex items-end justify-between">
          <h2 className="head text-3xl text-bright md:text-5xl">Le classement</h2>
          <span className="hidden text-xs font-semibold uppercase tracking-wide text-mute sm:block">Du meilleur au dernier</span>
        </div>
        <Grille marquesBureau={marquesBureau} marquesMobile={marquesMobile} />
        <p className="mx-auto mt-6 w-full text-center text-xs leading-relaxed text-mute">
          Les offres sont soumises aux conditions générales de chaque plateforme. Interdit aux mineurs. Utilisez les plateformes de manière responsable.
        </p>
        <p className="mx-auto mt-2 w-full text-center text-xs leading-relaxed text-mute/70 italic">
          Liens affiliés — nous percevons une commission si vous visitez un partenaire. Cela n&apos;influe jamais sur notre classement ou nos notes.
        </p>
      </section>

      <BandeauSerein />
      <AtoutsRedaction />
      <Criteres />
      <SectionFaq />
      <CadreRedaction />

      <section className="pitch pb-16">
        <div className="slab space-y-4 p-6 md:p-8">
          <h2 className="head text-2xl text-bright">Choisir sa plateforme comme un pro</h2>
          <p className="text-sm leading-relaxed text-mute">
            {reglages.name} met les plateformes agréées sur la même ligne de départ et les note avec les mêmes
            critères, pour un classement clair et sans langue de bois.
          </p>
          <p className="text-sm leading-relaxed text-mute">
            Toutes les plateformes présentées disposent d&apos;un agrément de l&apos;ANJ, gage d&apos;un cadre régulé.
            Avant toute offre de bienvenue, lisez attentivement les conditions générales sur le site de la plateforme.
          </p>
          <p className="text-sm leading-relaxed text-mute">
            Enfin, l&apos;activité doit rester un divertissement. Fixez des limites, faites des pauses et demandez de l&apos;aide dès que
            le plaisir laisse place à autre chose.
          </p>
        </div>
      </section>
    </>
  );
}
