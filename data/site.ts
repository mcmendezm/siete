export const site = {
  name: "Siete Gestión Humana",
  tagline: "Mejores personas, mejores empresas",
  description:
    "Construimos entornos de trabajo saludables aplicando analítica de datos y ciencias del comportamiento. Reducimos la rotación, fortalecemos la cultura y elevamos la felicidad de quienes hacen posible tu organización.",
  founded: 2014,
  yearsActive: 12,
  contact: {
    address: "Cra 35 #19-620 interior 2710, Medellín, Colombia",
    phones: ["300 779 6474", "301 385 6433"],
    email: "elena@sietegho.com",
    whatsapp: "+573007796474",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/sietegho",
    instagram: "https://www.instagram.com/sietegho",
  },
} as const;

export const navigation = {
  primary: [
    { label: "Servicios", href: "#servicios" },
    { label: "Happly", href: "#happly" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Expertos", href: "/expertos" },
    { label: "Blog", href: "#blog" },
    { label: "Contacto", href: "#contacto" },
  ],
  cta: {
    secondary: { label: "Portal Clientes", href: "#portal" },
    primary: { label: "Conversemos", href: "#contacto" },
  },
  footer: {
    corporativo: [
      { label: "Quiénes somos", href: "#nosotros" },
      { label: "Nuestros servicios", href: "#servicios" },
      { label: "Nuestros expertos", href: "/expertos" },
      { label: "Casos de éxito", href: "#testimonios" },
    ],
    producto: [
      { label: "Happly", href: "#happly" },
      { label: "Solicita un demo", href: "#contacto" },
      { label: "Portal clientes", href: "#portal" },
    ],
    recursos: [
      { label: "Blog", href: "#blog" },
      { label: "Investigaciones", href: "#blog" },
      { label: "Política de privacidad", href: "/privacidad" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
} as const;

export const heroMetrics = [
  {
    value: "+200",
    label: "organizaciones en LATAM",
  },
  {
    value: "−38%",
    label: "rotación promedio post-intervención",
  },
  {
    value: "96%",
    label: "tasa de recomendación de clientes",
  },
] as const;
