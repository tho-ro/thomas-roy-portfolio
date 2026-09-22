export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  description: string;
  cover: Photo;
  photos: Photo[];
};

function placeholder(seed: string, index: number, width = 1600, height = 2000): Photo {
  return {
    src: `https://picsum.photos/seed/${seed}-${index}/${width}/${height}`,
    width,
    height,
    alt: "",
  };
}

export const projects: Project[] = [
  {
    slug: "angola",
    title: "Fragments d'Angola",
    location: "Angola",
    year: "2019",
    description:
      "Un reportage documentaire sur le quotidien et les paysages humains d'Angola, entre héritage et transformation.",
    cover: placeholder("angola", 0),
    photos: Array.from({ length: 8 }, (_, i) => placeholder("angola", i + 1)),
  },
  {
    slug: "vietnam",
    title: "Vietnam",
    location: "Vietnam",
    year: "2021",
    description:
      "Traversée du Vietnam à la rencontre de ses paysages, de ses villes et de ses habitants.",
    cover: placeholder("vietnam", 0),
    photos: Array.from({ length: 8 }, (_, i) => placeholder("vietnam", i + 1)),
  },
  {
    slug: "urbanscape",
    title: "Urbanscape",
    location: "Divers",
    year: "2022",
    description:
      "Une exploration photographique des formes, lignes et textures de l'architecture urbaine.",
    cover: placeholder("urbanscape", 0),
    photos: Array.from({ length: 8 }, (_, i) => placeholder("urbanscape", i + 1)),
  },
  {
    slug: "landscape",
    title: "Landscape",
    location: "Divers",
    year: "2023",
    description: "Paysages naturels capturés dans leur silence et leur échelle.",
    cover: placeholder("landscape", 0),
    photos: Array.from({ length: 8 }, (_, i) => placeholder("landscape", i + 1)),
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
