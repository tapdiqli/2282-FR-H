import type { Metadata } from "next";
import { CarteTitre } from "@/blocks/CarteTitre";

export const metadata: Metadata = {
  title: "Usage responsable",
  description:
    "Outils d'usage responsable et ressources d'aide en France. Fixez des limites, faites des pauses et trouvez du soutien.",
  alternates: { canonical: "/usage-responsable" },
};

const OUTILS = [
  { t: "Fixez vos limites", d: "Chaque plateforme agréée permet de plafonner vos dépenses et votre temps d'utilisation. Réglez ces limites dès le départ." },
  { t: "Pause ou auto-exclusion", d: "Des pauses et une auto-exclusion sont disponibles sur demande. Utilisez-les sans hésiter." },
  { t: "Modération", d: "Activez les rappels en session pour toujours savoir depuis combien de temps vous utilisez la plateforme." },
  { t: "Interdiction volontaire", d: "Vous pouvez demander une interdiction d'accès auprès de l'ANJ, valable sur l'ensemble des plateformes agréées." },
];

const AIDE = [
  { name: "Joueurs Info Service", detail: "09 74 75 13 13 (appel non surtaxé) · joueurs-info-service.fr" },
  { name: "ANJ", detail: "Autorité Nationale des Jeux · anj.fr" },
  { name: "Auto-évaluation", detail: "Testez votre pratique sur joueurs-info-service.fr" },
];

export default function UsageResponsablePage() {
  return (
    <>
      <CarteTitre
        tag="Usage responsable"
        titre="Gardez la maîtrise"
        chapeau="L'activité doit rester un divertissement. Ces outils et services vous aident à garder le contrôle, et de l'aide est disponible à tout moment."
      />
      <section className="pitch py-9">
        <div className="grid gap-3 md:grid-cols-2">
          {OUTILS.map((o) => (
            <div key={o.t} className="slab p-5">
              <h3 className="text-base font-bold text-bright">{o.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mute">{o.d}</p>
            </div>
          ))}
        </div>
        <div className="slab mt-6 p-6 md:p-8">
          <h2 className="head text-2xl text-bright">Où trouver de l&apos;aide</h2>
          <ul className="mt-4 grid gap-3">
            {AIDE.map((a) => (
              <li key={a.name} className="flex flex-col gap-0.5 border-b border-[color:var(--color-seam)] pb-3 last:border-0">
                <span className="font-bold text-bright">{a.name}</span>
                <span className="text-sm text-mute">{a.detail}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-mute">Réservé aux personnes majeures.</p>
        </div>
      </section>
    </>
  );
}
