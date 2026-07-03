import type { Metadata } from "next";
import { CarteTitre } from "@/blocks/CarteTitre";
import { FormContact } from "./FormContact";
import { reglages } from "@/logic/reglages";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'équipe de TopPariGagnant : questions, retours et corrections bienvenus.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <CarteTitre
        tag="Contact"
        titre="Nous contacter"
        chapeau="Une correction à signaler ou une question sur le classement ? Écrivez-nous, on lit tout."
      />
      <section className="pitch grid gap-6 py-9 md:grid-cols-[1fr_1.1fr]">
        <div className="slab p-6 md:p-8">
          <h2 className="head text-xl text-bright">Par e-mail</h2>
          <p className="mt-2 text-sm text-mute">Écrivez-nous directement :</p>
          <p className="mt-1 font-semibold text-neon">contact@{reglages.domain}</p>
          <div className="my-6 h-px bg-[color:var(--color-seam)]" />
          <p className="text-sm text-mute">Réponse sous deux jours ouvrés. Pour toute aide à l&apos;usage responsable, consultez la page dédiée.</p>
        </div>
        <FormContact />
      </section>
    </>
  );
}
