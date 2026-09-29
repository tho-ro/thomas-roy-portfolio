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

function photo(slug: string, n: number, width: number, height: number): Photo {
  const file = `${slug}-${String(n).padStart(2, "0")}.jpg`;
  return {
    src: `/photos/${slug}/${file}`,
    width,
    height,
    alt: "",
  };
}

const angolaPhotos: Photo[] = [
  photo("angola", 1, 1920, 1272),
  photo("angola", 2, 1291, 1920),
  photo("angola", 3, 1920, 1292),
  photo("angola", 4, 1280, 1920),
  photo("angola", 5, 1278, 1920),
  photo("angola", 6, 1288, 1920),
  photo("angola", 7, 1920, 1282),
  photo("angola", 8, 1920, 1262),
  photo("angola", 9, 1254, 1920),
  photo("angola", 10, 1280, 1920),
  photo("angola", 11, 1920, 1290),
  photo("angola", 12, 1284, 1920),
  photo("angola", 13, 1262, 1920),
  photo("angola", 14, 1920, 1267),
  photo("angola", 15, 1264, 1920),
  photo("angola", 16, 1269, 1920),
  photo("angola", 17, 1266, 1920),
  photo("angola", 18, 1280, 1920),
  photo("angola", 19, 1920, 1285),
  photo("angola", 20, 1273, 1920),
  photo("angola", 21, 1284, 1920),
  photo("angola", 22, 1277, 1920),
  photo("angola", 23, 1257, 1920),
  photo("angola", 24, 1284, 1920),
  photo("angola", 25, 1296, 1920),
  photo("angola", 26, 1920, 1286),
  photo("angola", 27, 1920, 1282),
  photo("angola", 28, 1920, 1272),
  photo("angola", 29, 1920, 1293),
  photo("angola", 30, 1920, 1281),
  photo("angola", 31, 1284, 1920),
  photo("angola", 32, 1291, 1920),
  photo("angola", 33, 1270, 1920),
  photo("angola", 34, 1256, 1920),
  photo("angola", 35, 1280, 1920),
  photo("angola", 36, 1259, 1920),
  photo("angola", 37, 1296, 1920),
  photo("angola", 38, 1275, 1920),
  photo("angola", 39, 1274, 1920),
  photo("angola", 40, 1920, 1265),
  photo("angola", 41, 1920, 1281),
  photo("angola", 42, 1291, 1920),
  photo("angola", 43, 1920, 1265),
  photo("angola", 44, 1920, 1287),
  photo("angola", 45, 1920, 1280),
  photo("angola", 46, 1920, 1291),
  photo("angola", 47, 1295, 1920),
  photo("angola", 48, 1920, 1286),
  photo("angola", 49, 1287, 1920),
  photo("angola", 50, 1267, 1920),
  photo("angola", 51, 1920, 1276),
  photo("angola", 52, 1920, 1280),
  photo("angola", 53, 1920, 1300),
  photo("angola", 54, 1920, 1275),
  photo("angola", 55, 1920, 1271),
  photo("angola", 56, 1920, 1275),
  photo("angola", 57, 1920, 1272),
  photo("angola", 58, 1280, 1920),
  photo("angola", 59, 1272, 1920),
];

const vietnamPhotos: Photo[] = [
  photo("vietnam", 1, 1440, 1080),
  photo("vietnam", 2, 1440, 1080),
  photo("vietnam", 3, 810, 1080),
  photo("vietnam", 4, 810, 1080),
  photo("vietnam", 5, 1440, 1080),
  photo("vietnam", 6, 1440, 1080),
  photo("vietnam", 7, 810, 1080),
  photo("vietnam", 8, 810, 1080),
  photo("vietnam", 9, 1440, 1080),
  photo("vietnam", 10, 1440, 1080),
  photo("vietnam", 11, 1440, 1080),
  photo("vietnam", 12, 1440, 1080),
  photo("vietnam", 13, 1440, 1080),
  photo("vietnam", 14, 1440, 1080),
  photo("vietnam", 15, 1440, 1080),
  photo("vietnam", 16, 1440, 1080),
  photo("vietnam", 17, 1080, 1080),
  photo("vietnam", 18, 1440, 1080),
  photo("vietnam", 19, 1620, 1080),
  photo("vietnam", 20, 1440, 1080),
];

const urbanscapePhotos: Photo[] = [
  photo("urbanscape", 1, 1626, 1080),
  photo("urbanscape", 2, 1626, 1080),
  photo("urbanscape", 3, 1626, 1080),
  photo("urbanscape", 4, 1577, 1080),
  photo("urbanscape", 5, 720, 1080),
  photo("urbanscape", 6, 1627, 1080),
  photo("urbanscape", 7, 720, 1080),
  photo("urbanscape", 8, 717, 1080),
  photo("urbanscape", 9, 720, 1080),
  photo("urbanscape", 10, 717, 1080),
  photo("urbanscape", 11, 720, 1080),
  photo("urbanscape", 12, 717, 1080),
  photo("urbanscape", 13, 1440, 1080),
  photo("urbanscape", 14, 1620, 1080),
  photo("urbanscape", 15, 1620, 1080),
  photo("urbanscape", 16, 717, 1080),
  photo("urbanscape", 17, 720, 1080),
];

const landscapePhotos: Photo[] = [
  photo("landscape", 1, 1626, 1080),
  photo("landscape", 2, 1626, 1080),
  photo("landscape", 3, 1626, 1080),
  photo("landscape", 4, 1440, 1080),
  photo("landscape", 5, 1626, 1080),
  photo("landscape", 6, 717, 1080),
  photo("landscape", 7, 1626, 1080),
  photo("landscape", 8, 1626, 1080),
  photo("landscape", 9, 717, 1080),
  photo("landscape", 10, 717, 1080),
  photo("landscape", 11, 1626, 1080),
  photo("landscape", 12, 717, 1080),
  photo("landscape", 13, 1626, 1080),
  photo("landscape", 14, 1626, 1080),
  photo("landscape", 15, 1626, 1080),
  photo("landscape", 16, 1626, 1080),
  photo("landscape", 17, 1626, 1080),
  photo("landscape", 18, 1626, 1080),
  photo("landscape", 19, 1626, 1080),
];

export const projects: Project[] = [
  {
    slug: "angola",
    title: "Fragments d'Angola",
    location: "Angola",
    year: "2000–2004",
    description:
      "« Des livres comme celui-ci peuvent nous aider à être meilleurs. Ils peuvent aussi aider les autres à nous aider. » — José Eduardo Agualusa, préface de Fragments d'Angola (Actes Sud, 2006).",
    cover: angolaPhotos[0],
    photos: angolaPhotos,
  },
  {
    slug: "vietnam",
    title: "Vietnam",
    location: "Vietnam",
    year: "2012",
    description:
      "Traversée du Vietnam à la rencontre de ses paysages, de ses villages et de ses habitants.",
    cover: vietnamPhotos[0],
    photos: vietnamPhotos,
  },
  {
    slug: "urbanscape",
    title: "Urbanscape",
    location: "Divers",
    year: "2009–2013",
    description:
      "Un travail au long cours sur les paysages urbains du monde entier, de Delhi à Hanoi, de Porto à Reykjavik.",
    cover: urbanscapePhotos[0],
    photos: urbanscapePhotos,
  },
  {
    slug: "landscape",
    title: "Landscape",
    location: "Divers",
    year: "2009–2012",
    description: "Paysages captés au fil des voyages.",
    cover: landscapePhotos[0],
    photos: landscapePhotos,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
