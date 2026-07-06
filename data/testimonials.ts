export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "catalina",
    quote:
      "Siete logró que nuestro discurso de cultura por fin tuviera evidencia detrás. No nos vendieron talleres: nos entregaron un diagnóstico real, métricas y un plan que el comité directivo entendió y aprobó en quince minutos.",
    author: "Catalina Arboleda",
    role: "Gerente de Cultura y Talento",
    company: "Línea Directa S.A.S.",
    featured: true,
  },
  {
    id: "jorge",
    quote:
      "El servicio fue excelente desde la preparación previa de la actividad, la información impartida y el manejo del grupo. El impacto en la audiencia también fue excepcional creando conciencia y motivando las reacciones positivas, así como el interés de quienes asistimos. Sin duda, la preparación y las habilidades del Dr. Alejandro Sanín cubrieron todas las expectativas posibles y próximamente continuaremos apoyándonos con él y con Siete gestión humana y organizacional.",
    author: "Jorge Fernández",
    role: "Director de recursos humanos",
    company: "Virbac México SA de CV",
  },
  {
    id: "daniela",
    quote:
      "Siete ha demostrado seriedad en el cumplimiento de sus compromisos y una calificación de 5/5.",
    author: "Daniela Jaramillo",
    role: "Directora de Abastecimiento Estratégico",
    company: "Unidad de Servicios Compartidos - Corona",
  },
  {
    id: "andres",
    quote:
      "Nuestro concepto del servicio es el mejor, se complementan las teorías de habilidades blandas con soportes estadísticos",
    author: "Andrés Osorio",
    role: "Gerente Laminaire S.A.S.",
    company: "",
  },
  {
    id: "catalina-linea",
    quote: "Nuestro concepto del servicio es Excelente",
    author: "Catalina Arboleda",
    role: "Gerente de Cultura y Talento",
    company: "Línea Directa S.A.S.",
  },
  {
    id: "aleida",
    quote:
      "Este servicio fue prestado con muy buena calidad, disposición, compromiso y cumplimiento, fue muy bien recibido y evaluado por las empresas participantes.",
    author: "Aleida Sánchez",
    role: "Dirección Creativa · Taller Creativo de Aleida Sánchez B. SAS · Programa de formación Coaching empresarial \"Empresas de Brazos Abiertos\" estrategia para la Organización Internacional para las Migraciones- OIM y el Ministerio del Trabajo con el apoyo de la USAID.",
    company: "",
  },
  {
    id: "tatiana",
    quote:
      "Nuestro concepto del servicio es el mejor, por la calidad de los profesionales que realizaron la aplicación del instrumento, el acompañamiento en la entrega de resultados, la disposición para la atención de las inquietudes; y la asesoría en el uso de la plataforma y acceso a los datos.",
    author: "Tatiana Álvarez Gutiérrez",
    role: "Gestión Humana, Formación y Clima Laboral",
    company: "Minera El Roble S.A.",
  },
  {
    id: "lina",
    quote:
      "Happly transformó la manera en que medimos felicidad: lo hicimos pasar de encuesta anual a métrica viva. Las reacciones del equipo fueron inmediatas.",
    author: "Lina Marcela Guevara",
    role: "Gerente de Personas",
    company: "Parque Explora",
  },
];

const EMPRESAS = "/images/Empresas";

export const clientLogos: string[] = [
  `${EMPRESAS}/ARESS_Corredores_de_Seguros.png`,
  `${EMPRESAS}/ARUS.png`,
  `${EMPRESAS}/ARclad.png`,
  `${EMPRESAS}/Alqueria.png`,
  `${EMPRESAS}/Altavista_Editores.png`,
  `${EMPRESAS}/Antioquia_Gold.jpg`,
  `${EMPRESAS}/Botero_Soto.png`,
  `${EMPRESAS}/CBE.png`,
  `${EMPRESAS}/CEO_Energetica_de_Occidente.png`,
  `${EMPRESAS}/Clinica_Oftalmologia_Sandiego.png`,
  `${EMPRESAS}/Clinica_Somer.png`,
  `${EMPRESAS}/Clinica_del_Campestre.png`,
  `${EMPRESAS}/Club_Campestre_Medellin.png`,
  `${EMPRESAS}/Colegio_Montessori_Medellin.png`,
  `${EMPRESAS}/Comfama.png`,
  `${EMPRESAS}/Corfi_Colombiana.png`,
  `${EMPRESAS}/Coviandina.png`,
  `${EMPRESAS}/Cruz_Roja_Colombiana_Antioquia.png`,
  `${EMPRESAS}/Deliflor_Americas.png`,
  `${EMPRESAS}/Deutsche_Schule_Medellin.png`,
  `${EMPRESAS}/El_Colombiano.png`,
  `${EMPRESAS}/Elite_Ingenieros.png`,
  `${EMPRESAS}/Exito.png`,
  `${EMPRESAS}/FEPEP.png`,
  `${EMPRESAS}/Findeter.png`,
  `${EMPRESAS}/Fundacion_Santa_Fe_de_Bogota.png`,
  `${EMPRESAS}/GdO.png`,
  `${EMPRESAS}/Hospital_Pablo_Tobon_Uribe.png`,
  `${EMPRESAS}/ISAGEN.png`,
  `${EMPRESAS}/MASA_Excavaciones.png`,
  `${EMPRESAS}/MDP_by_Medipiel.png`,
  `${EMPRESAS}/Maria_Cano_Fundacion_Universitaria.png`,
  `${EMPRESAS}/Masglo_Cerescos.png`,
  `${EMPRESAS}/Metro_de_Medellin.png`,
  `${EMPRESAS}/Microplast.png`,
  `${EMPRESAS}/Neroli.png`,
  `${EMPRESAS}/New_Stetic.png`,
  `${EMPRESAS}/Pactia.png`,
  `${EMPRESAS}/Parque_Explora.png`,
  `${EMPRESAS}/Placetopay_Evertec.png`,
  `${EMPRESAS}/Promigas.png`,
  `${EMPRESAS}/Renting_Colombia.png`,
  `${EMPRESAS}/SP_Ingenieros.png`,
  `${EMPRESAS}/Salamanca.png`,
  `${EMPRESAS}/Santafe_Mi_Mundo.png`,
  `${EMPRESAS}/Seguros_Bolivar.png`,
  `${EMPRESAS}/Sofka.png`,
  `${EMPRESAS}/Somer_Incare.png`,
  `${EMPRESAS}/Somex.png`,
  `${EMPRESAS}/Summa_Grupo_Argos.png`,
  `${EMPRESAS}/Sura.png`,
  `${EMPRESAS}/TM_Medicas.png`,
  `${EMPRESAS}/The_Columbus_School.png`,
  `${EMPRESAS}/UNAD.png`,
  `${EMPRESAS}/Universal.png`,
  `${EMPRESAS}/Universidad_EAFIT.png`,
  `${EMPRESAS}/Universidad_Nacional_de_Colombia.png`,
  `${EMPRESAS}/Universidad_de_Antioquia.png`,
  `${EMPRESAS}/Virbac.png`,
  `${EMPRESAS}/Wolkvox.png`,
  `${EMPRESAS}/Zeuss.png`,
];
