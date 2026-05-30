export type BlogPost = {
  id: string;
  tag: string;
  title: string;
  author: string;
  readTime: string;
  excerpt?: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "liderazgo-femenino",
    tag: "Liderazgo",
    title: "Derechos, equidad y liderazgo femenino: correr el velo corporativo",
    author: "Janis López Ospina",
    readTime: "6 min",
  },
  {
    id: "feedforward",
    tag: "Desempeño",
    title: "Entre la tendencia y la evidencia: el caso del feedforward",
    author: "Lina Marcela Guevara",
    readTime: "8 min",
  },
  {
    id: "trabajo-apasionante",
    tag: "Bienestar",
    title: "Un trabajo altamente apasionante también puede ser desgastante",
    author: "Diana María Uribe",
    readTime: "5 min",
  },
];
