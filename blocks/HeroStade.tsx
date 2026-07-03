const BADGES = ["Agréé ANJ", "Noté par la rédaction", "Mis à jour en 2026", "Interdit aux -18 ans", "100% indépendant"];

export function HeroStade({ headText, headParagraph }: { headText: string; headParagraph: string }) {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--color-seam)]">
      <div className="absolute -right-24 top-0 h-full w-1/2 skew-x-[-12deg] bg-gradient-to-br from-flash-400/15 to-heat-500/10" aria-hidden="true" />
      <div className="pitch relative grid min-w-0 gap-8 py-9 md:grid-cols-[1.2fr_0.8fr] md:items-start md:py-14">
        <div className="min-w-0">
          <span className="skew-tab inline-flex items-center gap-2 bg-heat-500 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-pitch-950">
            <span>Coup d&apos;envoi · Plateformes régulées</span>
          </span>
          <h1 className="head mt-5 w-full text-4xl leading-[0.98] text-bright md:text-6xl">{headText}</h1>
          <p className="mt-4 w-full text-sm leading-relaxed text-mute md:text-base">{headParagraph}</p>
        </div>

        <div className="hidden md:flex min-w-0 flex-col gap-4 md:pt-8">
          <div className="flex flex-col items-center justify-center flex-wrap gap-2">
            {BADGES.map((b) => (
              <span key={b} className="skew-tab whitespace-nowrap bg-pitch-850 px-3 py-1.5 text-xs font-bold text-bright">
                <span>{b}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
