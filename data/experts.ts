export type Expert = {
  id: string;
  name: string;
  role: string;
  focus: string;
  quote: string;
  email: string;
  photo: string;
  linkedin?: string;
};

export const experts: Expert[] = [
  {
    id: "elena",
    name: "Elena Cortina Espitia",
    role: "Directora de Relación con Clientes",
    focus: "Atracción y cierre de negocios",
    quote:
      "Me conecto genuinamente con lo que les duele a nuestros clientes, por eso los acompaño a construir verdaderas soluciones, siempre en el marco de uno de nuestros valores, la Empatía.",
    email: "elena@sietegho.com",
    photo: "/images/team/elena.jpg",
  },
  {
    id: "alejandro",
    name: "Alejandro Sanín Posada",
    role: "Director de Proyectos",
    focus: "Equipos de alto desempeño y gestión de la felicidad",
    quote:
      "Cuando veo gente que disfruta y se enorgullece de su trabajo y empresas que valoran a sus trabajadores y sustentan su éxito en una relación positiva y saludable con ellos, me doy cuenta de que vale mucho la pena hacer lo que hago.",
    email: "alejandro@sietegho.com",
    photo: "/images/team/alejandro.jpg",
  },
  {
    id: "maribel",
    name: "Maribel Giraldo Isaza",
    role: "Directora de Proyectos",
    focus: "Innovación, transformación digital y analítica de datos",
    quote:
      "Yo trabajo en esto porque sé que es posible que las organizaciones se centren en la gente, que sean su fin y no su medio.",
    email: "maribel@sietegho.com",
    photo: "/images/team/maribel.jpg",
  },
  {
    id: "maria-eugenia",
    name: "María Eugenia Londoño Londoño",
    role: "Directora de Proyectos",
    focus: "Diagnósticos psicosociales y diseño de instrumentos a medida",
    quote:
      "Disfruto cuando encuentro que las personas tienen trabajos que les permiten desarrollar todo su potencial y las empresas descubren que trabajar por esto las hace más competitivas.",
    email: "mariae@sietegho.com",
    photo: "/images/team/maria-eugenia.jpg",
  },
  {
    id: "janis",
    name: "Janis López Ospina",
    role: "Directora de Proyectos",
    focus: "Cambio organizacional, desarrollo de personas y equipos",
    quote:
      "Disfruto y valoro la diversidad de talentos y experiencias que se reúnen en las organizaciones y que nos permite aprender los unos de los otros.",
    email: "janis@sietegho.com",
    photo: "/images/team/janis.jpg",
  },
  {
    id: "sebastian",
    name: "Sebastián Villa Gónima",
    role: "Director Financiero y Administrativo",
    focus: "Finanzas y estrategia organizacional",
    quote:
      "Lograr que la estrategia y los servicios administrativos y financieros impacten positivamente la gestión de las personas y las organizaciones es el motor principal de mi vida profesional.",
    email: "sebastian@sietegho.com",
    photo: "/images/team/sebastian.jpg",
  },
];
