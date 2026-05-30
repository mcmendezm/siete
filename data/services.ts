export type Service = {
  id: string;
  number: string;
  title: string;
  slogan: string;
  lead: string;
  question: string;
  belief: {
    intro: string;
    bullets: string[];
  };
  process: {
    title: string;
    items: string[];
  };
  conferences: string[];
};

export const services: Service[] = [
  {
    id: "clima",
    number: "01",
    title: "Clima Organizacional",
    slogan: "Mejores ambientes de trabajo, Mejores Empresas",
    lead: "Una organización que brinde los recursos sociales, técnicos y administrativos logrará una imagen positiva ante sus colaboradores.",
    question: "¿Tus trabajadores tienen una buena imagen de la organización?",
    belief: {
      intro: "Creemos que un clima organizacional saludable:",
      bullets: [
        "Motiva hacia los resultados.",
        "Mejora la satisfacción del personal.",
        "Incrementa el desempeño individual y colectivo.",
        "Mejora la satisfacción del cliente externo y la reputación de la empresa.",
        "Implica la corresponsabilidad de directivos, gestión humana, líderes y colaboradores.",
      ],
    },
    process: {
      title: "¿Cómo lo hacemos?",
      items: [
        "Plataforma de medición — App Siete.",
        "Prueba ECO V (diseñada y validada por Fernando Toro Álvarez del Centro de Investigación en Comportamiento Organizacional — Cincel, referente con +100.000 encuestados, 10 variables clave con comparativos históricos).",
        "Prueba CL7 desarrollada por Siete (16 variables desde la psicología ocupacional positiva, conectada con desarrollo sostenible: bienestar, salud, trabajo decente y equidad de género).",
        "Ruta 5E.",
        "Formación del personal.",
      ],
    },
    conferences: [
      "El rol del líder en la gestión de la calidad de vida laboral.",
      "¿Cómo lograr el compromiso de los colaboradores?",
      "¿Por qué fracasan los planes de intervención de la calidad de vida laboral?",
    ],
  },
  {
    id: "cultura",
    number: "02",
    title: "Cultura Organizacional",
    slogan: "Cultura Saludable, Mejores Empresas",
    lead: "Trascendemos el concepto de cultura actual e ideal, formal e informal a Cultura Saludable.",
    question: "¿La cultura que definimos es la cultura que nos conviene para alcanzar nuestras metas?",
    belief: {
      intro: "Creemos que en una Cultura saludable:",
      bullets: [
        "Las personas son conscientes de sus hábitos, valores, creencias, rituales y actuaciones.",
        "Se identifican las características principales de la organización en el momento actual.",
        "Se analiza críticamente si las características actuales y las ideales son convenientes.",
      ],
    },
    process: {
      title: "Proceso de transformación cultural",
      items: [
        "Evaluación de la Cultura Organizacional — metodologías cualitativas y cuantitativas para identificar la brecha entre la cultura actual, la deseada y la que le conviene a la organización.",
        "Acompañamiento en la gestión y el cambio en 7 pasos.",
      ],
    },
    conferences: [
      "7 pasos para la transformación organizacional desde la cultura.",
      "¿Cómo evaluar la cultura organizacional?",
    ],
  },
  {
    id: "liderazgo",
    number: "03",
    title: "Liderazgo",
    slogan: "Mejores Líderes, Mejores Empresas",
    lead: "Los líderes deben ser promotores del bienestar laboral, del compromiso y de la sostenibilidad organizacional, pero en ocasiones ocurre lo contrario, convirtiéndose en generadores de estrés, reprocesos, costos ocultos y resultados que se agotan en el corto plazo.",
    question: "¿Tienes los líderes que tu organización necesita?",
    belief: {
      intro: "Creemos que el liderazgo saludable:",
      bullets: [
        "Puede medirse.",
        "Implica autoconciencia y retroalimentación.",
        "Se puede desarrollar adquiriendo herramientas y practicando.",
        "Requiere lineamientos, recursos y exigencias de parte de la organización.",
      ],
    },
    process: {
      title: "Proceso de desarrollo Líder PHD (Personas que Hacen la Diferencia)",
      items: [
        "Liderazgo PHD en tu empresa (diseño del modelo y articulación con el plan estratégico).",
        "Plataforma de medición de habilidades blandas Líder PHD.",
        "Programa de formación Líder PHD (talleres experienciales y acompañamientos individuales).",
        "Verificación del impacto del liderazgo (indicadores y analítica de datos).",
        "Ciclo de conversatorios Líder PHD: Autoconciencia, Inteligencia emocional, Comunicación asertiva, Retroalimentación.",
      ],
    },
    conferences: [
      "Mejor persona, Mejor líder.",
      "Liderazgo de equipos remotos.",
      "Liderazgo para el desempeño y bienestar de las personas.",
    ],
  },
  {
    id: "desempeno",
    number: "04",
    title: "Desempeño",
    slogan: "Mejor Desempeño, Mejores Empresas",
    lead: "Los resultados organizacionales se consiguen a través de las actuaciones de las personas, por ello la gestión del desempeño es un eje del direccionamiento estratégico, liderado por el área de talento humano.",
    question: "¿Las personas y equipos de tu organización son de alto desempeño?",
    belief: {
      intro: "Creemos que un desempeño de alto nivel:",
      bullets: [
        "Es posible si se gestiona de forma sistemática.",
        "Genera mayores probabilidades en el cumplimiento de metas.",
        "Beneficia al individuo, su equipo, la organización y la sociedad.",
        "Implica conocimientos, habilidades, motivación y condiciones objetivas bien definidas.",
      ],
    },
    process: {
      title: "Proceso de mejoramiento de sistemas de alto desempeño",
      items: [
        "Diseño del modelo de alto desempeño y articulación con el plan estratégico.",
        "Diseño de instrumentos a la medida para evaluación de desempeño o competencias.",
        "Entrenamiento a líderes para la gestión del desempeño de equipos.",
        "Entrenamiento para áreas estratégicas.",
      ],
    },
    conferences: [
      "7 pasos clave para diseñar sistemas de evaluación del desempeño.",
      "La retroalimentación como estrategia para la gestión del desempeño.",
      "Gestión del desempeño de equipos remotos.",
      "Liderazgo para el desempeño y bienestar de las personas.",
    ],
  },
  {
    id: "riesgo",
    number: "05",
    title: "Factores de Riesgo Psicosocial",
    slogan: "Personas Sanas, Mejores Empresas",
    lead: "La salud mental y física de los trabajadores es una responsabilidad de todas las organizaciones.",
    question: "¿En tu organización el cuidado de la salud y el equilibrio entre la vida personal/laboral es una prioridad?",
    belief: {
      intro: "Creemos que las personas sanas física y mentalmente:",
      bullets: [
        "Logran sus objetivos.",
        "Mejoran la reputación de la empresa.",
        "Actúan de forma más ética y responsable.",
        "Vuelven la empresa un lugar ideal para trabajar y atractivo en el mercado.",
        "Contribuyen a la sostenibilidad organizacional.",
      ],
    },
    process: {
      title: "Proceso de gestión de los riesgos psicosociales laborales",
      items: [
        "Implementación de programas y planes según la normatividad vigente.",
        "Medición de factores de riesgo y protectores (intralaboral, extralaboral y condiciones individuales) y sus efectos.",
        "Entrenamiento a líderes y trabajadores en estrategias de felicidad y bienestar integral.",
        "Ruta 5E enfocada en causa raíz (diseño, ejecución y verificación de impactos).",
      ],
    },
    conferences: [
      "El rol del líder en la gestión de la calidad de vida laboral.",
      "Gestión de los factores de riesgo psicosocial.",
      "Estrategias de prevención del burnout a través del engagement.",
      "8 estrategias para favorecer el bienestar personal y laboral.",
    ],
  },
  {
    id: "felicidad",
    number: "06",
    title: "Felicidad y Bienestar Laboral",
    slogan: "Personas Felices, Mejores Empresas",
    lead: "Cuando las personas experimentan emociones positivas en su trabajo, lo encuentran gratificante y le ven sentido, se aumenta su motivación y las ganas de seguir trabajando en la empresa.",
    question: "¿Las personas de tu organización disfrutan su trabajo?",
    belief: {
      intro: "Creemos que las personas felices con su trabajo son:",
      bullets: [
        "Productivas.",
        "Saludables.",
        "Innovadoras.",
        "Responsables con la sociedad.",
      ],
    },
    process: {
      title: "Proceso de bienestar laboral integral",
      items: [
        "Valoración de procesos y prácticas organizacionales.",
        "Medición de la felicidad F7 (disfrute, gratificación y sentido del trabajo).",
        "Implementación de programas desde la psicología ocupacional positiva.",
        "Diseño y ejecución de planes de gestión de la felicidad para equipos.",
        "Entrenamiento a líderes y trabajadores.",
      ],
    },
    conferences: [
      "El rol del líder en la gestión de la calidad de vida laboral.",
      "8 estrategias para favorecer el bienestar personal y laboral.",
      "Personas y Organizaciones más Felices ¿Cómo lograrlo?",
      "Vidas y Organizaciones con propósito, claves de la felicidad.",
    ],
  },
];
