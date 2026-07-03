import Link from "next/link";
import Image from "next/image";
import { Blason } from "./Blason";
import { reglages, liensPied } from "@/logic/reglages";

const ORGS = [
  { label: "Joueurs Info Service", href: "https://www.joueurs-info-service.fr" },
  { label: "ANJ", href: "https://anj.fr" },
  { label: "Addictions France", href: "https://addictions-france.org" },
  { label: "SOS Joueurs", href: "https://www.sosjoueurs.org" },
  { label: "GamCare", href: "https://www.gamcare.org.uk" },
];

const SIGNS = [
  { src: "/signs/anj.png", alt: "ANJ — Autorité Nationale des Jeux", href: "https://anj.fr" },
  { src: "/signs/joueurs-info.png", alt: "Joueurs Info Service", href: "https://www.joueurs-info-service.fr" },
  { src: "/signs/gamble-aware.png", alt: "BeGambleAware", href: "https://www.begambleaware.org" },
  { src: "/signs/gordon-moody.png", alt: "Gordon Moody", href: "https://gordonmoody.org.uk" },
  { src: "/signs/mediateur-jeux.png", alt: "Médiateur des jeux en ligne", href: "https://www.mediateur-jeux.fr" },
];

export function BasDePage() {
  return (
    <footer className="mt-16 border-t border-[color:var(--color-seam)] bg-pitch-900">
      <div className="pitch grid min-w-0 gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="min-w-0">
          <Blason className="h-9 w-auto" />
          <p className="mt-4 w-full text-sm leading-relaxed text-mute">
            {reglages.tagline}. Classements indépendants des plateformes agréées par l&apos;ANJ, actualisés en 2026.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-mute/70">
            Site d&apos;information uniquement — aucune transaction ni dépôt n&apos;est traité ici.
            Certains liens sont rémunérés sans surcoût pour vous ; notre ligne éditoriale reste indépendante.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-mute">
            <span className="skew-tab bg-pitch-850 px-3 py-1"><span>Interdit aux -18 ans</span></span>
            <span className="skew-tab bg-pitch-850 px-3 py-1"><span>Agréé ANJ</span></span>
            <span className="skew-tab bg-pitch-850 px-3 py-1"><span>Contenu informatif</span></span>
          </div>
        </div>

        <nav>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-mute">Navigation</p>
          <div className="grid gap-2 text-sm">
            {liensPied.map((l) => (
              <Link key={l.href} href={l.href} className="text-mute transition hover:text-neon">
                {l.label}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-mute">Aide & prévention</p>
          <div className="grid gap-2 text-sm">
            {ORGS.map((o) => (
              <a
                key={o.href}
                href={o.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-mute transition hover:text-neon"
              >
                {o.label}
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-mute/70">
            Ligne d&apos;écoute gratuite :{" "}
            <span className="font-semibold text-mute">09 74 75 13 13</span>
          </p>
        </div>
      </div>

      <div className="border-t border-[color:var(--color-seam)]">
        <div className="pitch flex flex-wrap items-center gap-5 py-6">
          {SIGNS.map((s) => (
            <Link
              key={s.src}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={s.alt}
              className="opacity-50 transition hover:opacity-90"
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={80}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-[color:var(--color-seam)]">
        <div className="pitch flex flex-col gap-2 py-5 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {reglages.name}. Tous droits réservés.</p>
          <p className="break-words">
            Une utilisation excessive comporte des risques : endettement, isolement, dépendance. Appelez le{" "}
            <span className="font-semibold">09 74 75 13 13</span> (appel non surtaxé).
          </p>
        </div>
      </div>
    </footer>
  );
}
