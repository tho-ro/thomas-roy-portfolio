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

function photo(slug: string, file: string, width: number, height: number): Photo {
  return {
    src: `/photos/${slug}/${file}`,
    width,
    height,
    alt: "",
  };
}

const angolaPhotos: Photo[] = [
  photo("angola", "01.jpg", 1920, 1272),
  photo("angola", "02.jpg", 1291, 1920),
  photo("angola", "03.jpg", 1920, 1292),
  photo("angola", "04.jpg", 1280, 1920),
  photo("angola", "05.jpg", 1278, 1920),
  photo("angola", "06.jpg", 1288, 1920),
  photo("angola", "07.jpg", 1920, 1282),
  photo("angola", "08.jpg", 1920, 1262),
  photo("angola", "09.jpg", 1254, 1920),
  photo("angola", "10.jpg", 1280, 1920),
  photo("angola", "11.jpg", 1920, 1290),
  photo("angola", "12.jpg", 1284, 1920),
  photo("angola", "13.jpg", 1262, 1920),
  photo("angola", "14.jpg", 1920, 1267),
  photo("angola", "15.jpg", 1264, 1920),
  photo("angola", "16.jpg", 1269, 1920),
  photo("angola", "17.jpg", 1266, 1920),
  photo("angola", "18.jpg", 1280, 1920),
  photo("angola", "19.jpg", 1920, 1285),
  photo("angola", "20.jpg", 1273, 1920),
  photo("angola", "21.jpg", 1284, 1920),
  photo("angola", "22.jpg", 1277, 1920),
  photo("angola", "23.jpg", 1257, 1920),
  photo("angola", "24.jpg", 1284, 1920),
  photo("angola", "25.jpg", 1296, 1920),
  photo("angola", "26.jpg", 1920, 1286),
  photo("angola", "27.jpg", 1920, 1282),
  photo("angola", "28.jpg", 1920, 1272),
  photo("angola", "29.jpg", 1920, 1293),
  photo("angola", "30.jpg", 1920, 1281),
  photo("angola", "31.jpg", 1284, 1920),
  photo("angola", "32.jpg", 1291, 1920),
  photo("angola", "33.jpg", 1270, 1920),
  photo("angola", "34.jpg", 1256, 1920),
  photo("angola", "35.jpg", 1280, 1920),
  photo("angola", "36.jpg", 1259, 1920),
  photo("angola", "37.jpg", 1296, 1920),
  photo("angola", "38.jpg", 1275, 1920),
  photo("angola", "39.jpg", 1274, 1920),
  photo("angola", "40.jpg", 1920, 1265),
  photo("angola", "41.jpg", 1920, 1281),
  photo("angola", "42.jpg", 1291, 1920),
  photo("angola", "43.jpg", 1920, 1265),
  photo("angola", "44.jpg", 1920, 1287),
  photo("angola", "45.jpg", 1920, 1280),
  photo("angola", "46.jpg", 1920, 1291),
  photo("angola", "47.jpg", 1295, 1920),
  photo("angola", "48.jpg", 1920, 1286),
  photo("angola", "49.jpg", 1287, 1920),
  photo("angola", "50.jpg", 1267, 1920),
  photo("angola", "51.jpg", 1920, 1276),
  photo("angola", "52.jpg", 1920, 1280),
  photo("angola", "53.jpg", 1920, 1300),
  photo("angola", "54.jpg", 1920, 1275),
  photo("angola", "55.jpg", 1920, 1271),
  photo("angola", "56.jpg", 1920, 1275),
  photo("angola", "57.jpg", 1920, 1272),
  photo("angola", "58.jpg", 1280, 1920),
  photo("angola", "59.jpg", 1272, 1920),
];

const vietnamPhotos: Photo[] = [
  photo("vietnam", "01.jpg", 1440, 1080),
  photo("vietnam", "02.jpg", 1440, 1080),
  photo("vietnam", "03.jpg", 810, 1080),
  photo("vietnam", "04.jpg", 810, 1080),
  photo("vietnam", "05.jpg", 1440, 1080),
  photo("vietnam", "06.jpg", 1440, 1080),
  photo("vietnam", "07.jpg", 810, 1080),
  photo("vietnam", "08.jpg", 810, 1080),
  photo("vietnam", "09.jpg", 1440, 1080),
  photo("vietnam", "10.jpg", 1440, 1080),
  photo("vietnam", "11.jpg", 1440, 1080),
  photo("vietnam", "12.jpg", 1440, 1080),
  photo("vietnam", "13.jpg", 1440, 1080),
  photo("vietnam", "14.jpg", 1440, 1080),
  photo("vietnam", "15.jpg", 1440, 1080),
  photo("vietnam", "16.jpg", 1440, 1080),
  photo("vietnam", "17.jpg", 1080, 1080),
  photo("vietnam", "18.jpg", 1440, 1080),
  photo("vietnam", "19.jpg", 1620, 1080),
  photo("vietnam", "20.jpg", 1440, 1080),
];

const urbanscapePhotos: Photo[] = [
  photo("urbanscape", "01.jpg", 1626, 1080),
  photo("urbanscape", "02.jpg", 1626, 1080),
  photo("urbanscape", "03.jpg", 1626, 1080),
  photo("urbanscape", "04.jpg", 1577, 1080),
  photo("urbanscape", "05.jpg", 720, 1080),
  photo("urbanscape", "06.jpg", 1627, 1080),
  photo("urbanscape", "07.jpg", 720, 1080),
  photo("urbanscape", "08.jpg", 717, 1080),
  photo("urbanscape", "09.jpg", 720, 1080),
  photo("urbanscape", "10.jpg", 717, 1080),
  photo("urbanscape", "11.jpg", 720, 1080),
  photo("urbanscape", "12.jpg", 717, 1080),
  photo("urbanscape", "13.jpg", 1440, 1080),
  photo("urbanscape", "14.jpg", 1620, 1080),
  photo("urbanscape", "15.jpg", 1620, 1080),
  photo("urbanscape", "16.jpg", 717, 1080),
  photo("urbanscape", "17.jpg", 720, 1080),
];

const landscapePhotos: Photo[] = [
  photo("landscape", "01.jpg", 1626, 1080),
  photo("landscape", "02.jpg", 1626, 1080),
  photo("landscape", "03.jpg", 1626, 1080),
  photo("landscape", "04.jpg", 1440, 1080),
  photo("landscape", "05.jpg", 1626, 1080),
  photo("landscape", "06.jpg", 717, 1080),
  photo("landscape", "07.jpg", 1626, 1080),
  photo("landscape", "08.jpg", 1626, 1080),
  photo("landscape", "09.jpg", 717, 1080),
  photo("landscape", "10.jpg", 717, 1080),
  photo("landscape", "11.jpg", 1626, 1080),
  photo("landscape", "12.jpg", 717, 1080),
  photo("landscape", "13.jpg", 1626, 1080),
  photo("landscape", "14.jpg", 1626, 1080),
  photo("landscape", "15.jpg", 1626, 1080),
  photo("landscape", "16.jpg", 1626, 1080),
  photo("landscape", "17.jpg", 1626, 1080),
  photo("landscape", "18.jpg", 1626, 1080),
  photo("landscape", "19.jpg", 1626, 1080),
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
