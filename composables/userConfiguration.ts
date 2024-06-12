type Choice = {
  id: string;
  name: string;
};

const genres: Choice[] = [
  {
    id: "fantasy",
    name: "Fantastique",
  },
  {
    id: "sci-fi",
    name: "Science-fiction",
  },
  {
    id: "horror",
    name: "Horreur",
  },
  {
    id: "romance",
    name: "Romance",
  },
];

const characters: Choice[] = [
  {
    id: "pirate",
    name: "Pirate",
  },
  {
    id: "bandit",
    name: "Bandit",
  },
  {
    id: "barde",
    name: "Barde",
  },
  {
    id: "chevalier",
    name: "Chevalier",
  },
  {
    id: "scientifique",
    name: "Scientifique",
  },
  {
    id: "robot",
    name: "Robot",
  },
  {
    id: "druide",
    name: "Druide",
  },
  {
    id: "moine",
    name: "Moine",
  },
  {
    id: "président",
    name: "Président",
  },
];

const places = [
  {
    id: "chateau",
    name: "Château",
  },
  {
    id: "foret",
    name: "Forêt",
  },
  {
    id: "ville_futuriste",
    name: "Ville Futuriste",
  },
  {
    id: "caverne",
    name: "Caverne",
  },
  {
    id: "bateau",
    name: "Bateau",
  },
  {
    id: "port",
    name: "Port",
  },
  {
    id: "ecole",
    name: "École",
  },
  {
    id: "amphitheatre",
    name: "Amphithéâtre",
  },
  {
    id: "grotte",
    name: "Grotte",
  },
];

type UserConfiguration = {
  genre?: string;
  main_character?: string;
  secondary_character?: string;
  place?: string;
  description?: string;
};

const genreDescription = {
  fantasy:
    "Imaginez un monde médiéval fantastique où les royaumes sont en constante lutte pour le pouvoir. Les créatures magiques et les forces de la nature jouent un rôle significatif dans la politique du royaume. Le contexte politique est caractérisé par des alliances fragiles, des complots cachés et des intrigues politiques. Les royaumes sont gouvernés par des monarques charismatiques, mais aussi par des conseillers corrompus et des nobles ambitieux. La magie est présente, mais elle est réglementée et contrôlée par une autorité centrale. Les événements se déroulent dans un monde où la paix est précaire et où chaque décision politique peut avoir des conséquences dramatiques.",
  "sci-fi":
    "Veuillez créer une histoire de science-fiction qui intègre des éléments des genres sélectionnés. L'histoire doit se dérouler dans un univers futuriste où la technologie a considérablement progressé. Cela pourrait impliquer des voyages dans l’espace, l’intelligence artificielle, des voyages dans le temps, des sociétés dystopiques ou des réalités alternatives. Les genres sélectionnés peuvent être un mélange d'aventure, de mystère, de romance ou de thriller. L’histoire doit être engageante, stimulante et avoir un début, un milieu et une fin clairs. Veuillez vous assurer que le récit est cohérent et que les personnages sont bien développés. L'histoire doit tenir dans un long paragraphe",
  horror:
    "Imaginez une atmosphère dense et étrange aux abords, enveloppée dans un silence surnaturel. L’air est chargé d’une odeur inconnue et troublante. Les arbres sont tordus et noueux, leurs branches s'étendant comme les doigts d'une entité malveillante. Le sol est recouvert d’une couche de feuilles en décomposition qui crissent sous les pieds. Le soleil projette une lueur pâle et étrange à travers la canopée, peignant la scène dans une teinte surnaturelle. L’atmosphère est tendue et oppressante, évoquant un sentiment de malaise et d’effroi. Quels secrets cette forêt inquiétante recèle-t-elle et quelles horreurs pourraient se cacher dans son ombre ?",
  romance:
    "Une nuit étoilée, où le ciel est si profondément noir qu'il semble toucher les étoiles. L'air est frais et légèrement parfumé par les fleurs de la saison. Le bruit doux du vent dans les arbres crée une ambiance apaisante. Les lumières des villes lointaines créent un contraste mystique. Les émotions sont palpables, une combinaison de tristesse, d'espoir et d'une douce mélancolie.",
};

const userConfiguration = reactive<UserConfiguration>({});

export const useUserConfiguration = () => {
  return {
    genres,
    characters,
    userConfiguration,
    places,
    genreDescription,
  };
};
