export function CarteTitre({ tag, titre, chapeau }: { tag: string; titre: string; chapeau: string }) {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--color-seam)]">
      <div className="absolute -right-20 top-0 h-full w-1/3 skew-x-[-12deg] bg-flash-400/10" aria-hidden="true" />
      <div className="pitch relative py-10 md:py-14">
        <span className="skew-tab inline-flex bg-heat-500 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-pitch-950">
          <span>{tag}</span>
        </span>
        <h1 className="head mt-4 w-full text-4xl leading-[1] text-bright md:text-5xl">{titre}</h1>
        <p className="mt-3 w-full text-sm leading-relaxed text-mute md:text-base">{chapeau}</p>
      </div>
    </section>
  );
}
