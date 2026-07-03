/**
 * Note de la rédaction, déduite de la position affichée de la plateforme.
 * Position 1 = 9,9 puis -0,1 par rang, avec un plancher à 9,0.
 * Présentée comme « Note de la rédaction » (sur 10).
 */
export function noteReda(position: number): number {
  const brut = 9.9 - (position - 1) * 0.1;
  return Math.round(Math.max(9.0, brut) * 10) / 10;
}

/** Format français : virgule décimale. */
export function formatNote(n: number): string {
  return n.toFixed(1).replace(".", ",");
}

/** Étoiles : top 3 -> 5, rangs 4 à 7 -> 4,5, sinon 4. */
export function etoilesReda(position: number): number {
  if (position <= 3) return 5;
  if (position <= 7) return 4.5;
  return 4;
}
