"use client";

import Image from "next/image";
import type { Marque } from "@/logic/donnees";
import { imageMarque } from "@/logic/images";
import { useTag, tagUrl } from "@/logic/pistage";
import { formatNote } from "@/logic/note";
import { Etoiles } from "./Etoiles";

interface Props {
  marque: Marque;
  rang: number;
  note: number;
  etoiles: number;
  atouts: string[];
}

function NoteBadge({ note, etoiles }: { note: number; etoiles: number }) {
  return (
    <div className="flex flex-col items-center">
      <span className="head text-3xl leading-none text-neon">{formatNote(note)}</span>
      <span className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-mute">Note de la rédaction</span>
      <Etoiles valeur={etoiles} className="mt-1" />
    </div>
  );
}

export function PariCard({ marque, rang, note, etoiles, atouts }: Props) {
  const tag = useTag();
  const href = tagUrl(marque.partnerUrl, tag);
  const logo = imageMarque(marque.logo);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`${marque.name} — ${marque.bonusText}`}
      className="group relative block overflow-hidden slab transition hover:border-flash-400/60"
    >
      <span className="skew-tab absolute left-3 top-3 z-10 bg-gradient-to-r from-flash-400 to-heat-500 px-3 py-1 text-sm font-black text-pitch-950">
        <span className="head">{rang}</span>
      </span>

      {/* Bureau */}
      <div className="hidden items-center gap-5 py-4 pl-16 pr-5 lg:flex">
        <div className="flex w-[180px] shrink-0 items-center justify-center">
          <Image src={logo} alt={`Logo ${marque.name}`} width={180} height={90} unoptimized className="h-[90px] w-[180px] object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-base font-bold leading-snug text-bright">{marque.bonusText}</p>
          <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-mute">{marque.name}</p>
        </div>
        <ul className="hidden w-[210px] shrink-0 space-y-1.5 xl:block">
          {atouts.slice(0, 3).map((a) => (
            <li key={a} className="flex items-center gap-2 text-xs text-mute">
              <span className="text-neon">/</span>
              {a}
            </li>
          ))}
        </ul>
        <div className="w-[120px] shrink-0 border-l border-[color:var(--color-seam)] pl-4">
          <NoteBadge note={note} etoiles={etoiles} />
        </div>
        <span className="skew-tab inline-flex shrink-0 items-center justify-center bg-neon px-6 py-3 text-sm font-black text-pitch-950 transition group-hover:bg-flash-400 group-hover:text-bright">
          <span className="head">Voir l&apos;offre</span>
        </span>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-3 p-4 pt-12 lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <Image src={logo} alt={`Logo ${marque.name}`} width={170} height={80} unoptimized className="h-[80px] w-[170px] object-contain" />
          <NoteBadge note={note} etoiles={etoiles} />
        </div>
        <div>
          <p className="text-sm font-bold leading-snug text-bright">{marque.bonusText}</p>
          <span className="skew-tab mt-3 flex w-full items-center justify-center bg-neon px-4 py-3 text-sm font-black text-pitch-950">
            <span className="head">Voir l&apos;offre</span>
          </span>
        </div>
      </div>
    </a>
  );
}
