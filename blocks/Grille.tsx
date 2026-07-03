import type { Marque } from "@/logic/donnees";
import { noteReda, etoilesReda } from "@/logic/note";
import { PariCard } from "./PariCard";

const POOL = [
  "Agréé ANJ",
  "Conditions compétitives",
  "Tous les grands championnats",
  "Appli mobile réactive",
  "Direct disponible",
  "Interface efficace",
];

function atoutsPour(i: number) {
  return ["Agréé ANJ", POOL[(i + 1) % POOL.length], POOL[(i + 3) % POOL.length]];
}

export function Grille({ marquesBureau, marquesMobile }: { marquesBureau: Marque[]; marquesMobile: Marque[] }) {
  return (
    <>
      <div className="hidden flex-col gap-3 lg:flex">
        {marquesBureau.map((m, i) => (
          <PariCard key={`d-${m.id}`} marque={m} rang={i + 1} note={noteReda(i + 1)} etoiles={etoilesReda(i + 1)} atouts={atoutsPour(i)} />
        ))}
      </div>
      <div className="flex flex-col gap-3 lg:hidden">
        {marquesMobile.map((m, i) => (
          <PariCard key={`m-${m.id}`} marque={m} rang={i + 1} note={noteReda(i + 1)} etoiles={etoilesReda(i + 1)} atouts={atoutsPour(i)} />
        ))}
      </div>
    </>
  );
}
