export interface Marque {
  id: string;
  name: string;
  logo: string;
  bonusText: string;
  partnerUrl: string;
  clickId: string;
}

export interface DonneesStade {
  pageTitle: string;
  headText: string;
  headParagraph: string;
  marquesBureau: Marque[];
  marquesMobile: Marque[];
}

const marqueVedette: Marque = {
  id: "pmu",
  name: "PMU",
  logo: "pmu.png",
  bonusText: "JUSQU'À 100 € DE BONUS DE BIENVENUE",
  partnerUrl: "https://www.pmu.fr/",
  clickId: "n5kx8rq2bw4mz7vhjft1py9gdu3csale",
};

export async function getStade(): Promise<DonneesStade> {
  return {
    pageTitle: "Meilleures plateformes en France (2026) | TopPariGagnant",
    headText: "Entrez dans le stade des plateformes gagnantes",
    headParagraph:
      "Notre rédaction passe au crible chaque plateforme agréée ANJ — offre de bienvenue, conditions et expérience utilisateur — pour vous livrer un classement net et actionnable.",
    marquesBureau: [marqueVedette],
    marquesMobile: [marqueVedette],
  };
}
