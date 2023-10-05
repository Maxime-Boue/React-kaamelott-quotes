export type Citation = {
  citation: string;
  infos: Infos;
};

export type Infos = {
  auteur: string;
  acteur: string;
  personnage: string;
  saison: string;
  episode: string;
};

export type KaamelottType = {
  status: number;
  citation: Citation;
};
