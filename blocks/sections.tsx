export const FAQ_ITEMS = [
  {
    q: "Comment TopPariGagnant établit son classement ?",
    a: "Notre rédaction ne retient que des plateformes agréées par l'ANJ. Chacune est jugée selon les mêmes critères — offre de bienvenue, conditions, choix de sports et expérience — puis classée en conséquence.",
  },
  {
    q: "Les plateformes en ligne sont-elles légales en France ?",
    a: "Oui, à condition d'utiliser une plateforme titulaire d'un agrément ANJ valide. Les sites sans agrément échappent au cadre légal français et présentent des risques supplémentaires.",
  },
  {
    q: "Que vaut la « Note de la rédaction » ?",
    a: "Elle traduit la position d'une plateforme par rapport aux autres suivies. La première du classement obtient la meilleure note, chaque suivante étant notée juste en dessous.",
  },
  {
    q: "Comment repérer une plateforme fiable ?",
    a: "Vérifiez l'agrément ANJ, la clarté des conditions de bonus, un support en français et des informations visibles sur l'usage responsable. Nos fiches résument ces éléments.",
  },
  {
    q: "Le classement est-il actualisé ?",
    a: "Oui, régulièrement en 2026. Quand les offres évoluent, le classement est révisé pour refléter le marché actuel.",
  },
  {
    q: "Comment garder le contrôle de son activité ?",
    a: "Fixez un budget et une limite de temps, activez les outils de contrôle proposés par la plateforme et faites des pauses. En cas de difficulté, contactez le 09 74 75 13 13 (non surtaxé) ou consultez joueurs-info-service.fr.",
  },
  {
    q: "Est-ce payant ?",
    a: "Non. TopPariGagnant est entièrement gratuit. Certains liens vers des partenaires peuvent générer une commission, sans jamais influencer nos notes ni notre classement.",
  },
];

export function Criteres() {
  const items = [
    { n: "01", t: "L'offre de bienvenue", d: "Une offre généreuse et des conditions claires, sans mauvaises surprises." },
    { n: "02", t: "Les conditions", d: "La compétitivité des conditions sur les grands rendez-vous du sport." },
    { n: "03", t: "Catalogue & fonctionnalités", d: "L'étendue des sports, le direct et la qualité de l'application." },
    { n: "04", t: "La fiabilité", d: "Agrément, réputation et régularité de l'expérience." },
  ];
  return (
    <section className="pitch py-14">
      <h2 className="head text-3xl text-bright md:text-5xl">Nos critères</h2>
      <p className="mt-3 w-full text-sm leading-relaxed text-mute">Quatre critères, les mêmes pour tous. Aucun passe-droit.</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.n} className="slab p-5">
            <span className="head text-2xl text-flash-400">{it.n}</span>
            <h3 className="mt-2 text-base font-bold text-bright">{it.t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-mute">{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AtoutsRedaction() {
  const atouts = [
    {
      n: "01",
      t: "Plateformes vérifiées",
      d: "Seules les plateformes titulaires d'un agrément ANJ valide figurent dans notre classement. La régulation est notre premier filtre.",
    },
    {
      n: "02",
      t: "Bonus décryptés",
      d: "Conditions d'utilisation, plafonds et durées sont résumés clairement pour repérer les offres réalistes et éviter les mauvaises surprises.",
    },
    {
      n: "03",
      t: "Paiements & délais",
      d: "Moyens de dépôt, frais de retrait et délais de traitement : des repères concrets pour comparer au-delà du simple affichage.",
    },
    {
      n: "04",
      t: "Grille constante",
      d: "La même méthode appliquée à chaque fiche. Des résultats comparables et reproductibles, sans arbitraire.",
    },
  ];

  return (
    <section className="pitch py-14">
      <div className="w-full">
        <h2 className="head text-3xl text-bright md:text-5xl">Pourquoi nous faire confiance</h2>
        <p className="mt-3 text-sm leading-relaxed text-mute">
          Quatre engagements qui guident chaque analyse publiée sur TopPariGagnant.
        </p>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {atouts.map((a) => (
          <div key={a.n} className="slab p-5">
            <span className="head text-2xl text-flash-400">{a.n}</span>
            <h3 className="mt-2 text-base font-bold text-bright">{a.t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-mute">{a.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BandeauSerein() {
  return (
    <section className="pitch py-4">
      <div className="slab flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="head text-2xl text-bright">Gardez la tête froide</h2>
          <p className="mt-1.5 w-full text-sm leading-relaxed text-mute">
            Fixez vos limites, faites des pauses, gardez l&apos;activité comme un divertissement. De l&apos;aide est disponible à tout moment.
          </p>
        </div>
        <a href="/usage-responsable" className="skew-tab shrink-0 bg-flash-400 px-5 py-3 text-sm font-black text-pitch-950 transition hover:bg-neon">
          <span className="head">Usage responsable</span>
        </a>
      </div>
    </section>
  );
}

export function CadreRedaction() {
  const points = [
    {
      t: "Indépendance éditoriale",
      d: "TopPariGagnant ne gère aucune transaction et ne prend aucun dépôt. Nous publions uniquement des synthèses comparatives à titre informatif.",
    },
    {
      t: "Plateformes sérieuses uniquement",
      d: "Nous ne référençons que des plateformes dont l'agrément ANJ est vérifiable. La conformité réglementaire est non négociable.",
    },
    {
      t: "Liens rémunérés — transparence totale",
      d: "Certains liens vers nos partenaires peuvent générer une commission. Cette relation commerciale n'influe jamais sur notre classement ni nos notes.",
    },
    {
      t: "Contenus réservés aux majeurs",
      d: "Nos contenus s'adressent exclusivement aux personnes de 18 ans et plus. Toute consultation par un mineur est strictement interdite.",
    },
  ];

  return (
    <section className="pitch py-14">
      <div className="slab p-6 md:p-8">
        <div className="mb-6 w-full">
          <h2 className="head text-3xl text-bright md:text-5xl">Cadre éditorial</h2>
          <p className="mt-3 text-sm leading-relaxed text-mute">
            Ce que nous sommes, ce que nous ne sommes pas — et comment nous travaillons.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.t} className="border-l-2 border-flash-400 pl-4">
              <h3 className="text-sm font-bold text-bright">{p.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-mute">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionFaq() {
  return (
    <section className="pitch py-14">
      <h2 className="head text-3xl text-bright md:text-5xl">Questions fréquentes</h2>
      <div className="mt-6 grid gap-3">
        {FAQ_ITEMS.map((f) => (
          <details key={f.q} className="slab group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-bright">
              {f.q}
              <span className="head text-neon transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-mute">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
