const WHATSAPP_NUMBER = "520000000000"

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const settings = {
  WHATSAPP_NUMBER,
  whatsappLink,
  socialLinks: {
    instagram: "https://www.instagram.com/cmbintegral/",
    facebook: "https://www.facebook.com/centromedicodebienestarintegral/",
  },
  images: {
    logo: "/cmbi-logo.jpg",
    hero: "/cmbi-hero.png",
    pool: "/cmbi-pool.png",
    wellness: "/cmbi-wellness.png",
    fitness: "/cmbi-fitness.png",
    map: "/cmbi-map.png",
  },
  colors: {
    plum: "#6f2c7f",
    teal: "#1188a0",
    aqua: "#6fb8c8",
    ink: "#1f2430",
    cream: "#fbf8f5",
  },
} as const

export const siteConfig = {
  name: "CMBI",
  fullName: "Centro Médico de Bienestar Integral",
  title: "CMBI | Centro Médico de Bienestar Integral en Ensenada",
  description:
    "Centro Médico de Bienestar Integral en Ensenada: nutrición, belleza, spa, gym, sauna, alberca techada y terapias de bienestar en un espacio cálido y profesional.",
  location: "Calle De Las Redes, zona costera de Ensenada, B.C.",
  language: "Español",
  nav: [
    { label: "Servicios", href: "/#servicios" },
    { label: "Beneficios", href: "/#beneficios" },
    { label: "Instalaciones", href: "/#instalaciones" },
    { label: "Panel", href: "/#disponibilidad" },
    { label: "Ubicación", href: "/#ubicacion" },
    { label: "Contacto", href: "/#contacto" },
  ],
  heroBadges: [
    "Nutrición + belleza",
    "Spa",
    "Gimnasio funcional",
    "Sauna + alberca",
    "Atención integral",
  ],
  heroStats: [
    { value: "01", label: "Valoración clara" },
    { value: "02", label: "Plan por objetivo" },
    { value: "03", label: "Seguimiento humano" },
  ],
  reserveHref: whatsappLink(
    "Hola CMBI, quiero agendar una cita y conocer disponibilidad."
  ),
  consultHref: "/#servicios",
  experienceHref: "/#instalaciones",
  contactBlock: {
    heading: "Agenda por WhatsApp",
    copy:
      "Cuéntanos qué objetivo tienes y te orientamos hacia el área adecuada: nutrición, terapia acuática, spa, sauna, gym o bienestar integral.",
    note:
      "No compartas información clínica sensible por mensajes. El equipo puede indicarte el canal correcto para una valoración.",
  },
  cookie: {
    title: "Preferencias de cookies",
    body:
      "Usamos cookies necesarias para recordar tus preferencias de interfaz y mejorar la experiencia del sitio.",
    primary: "Aceptar todo",
    secondary: "Solo necesarias",
    tertiary: "Configurar",
  },
  footer: {
    copy: "Centro Médico de Bienestar Integral",
    note:
      "Bienestar, salud y belleza en Ensenada con una experiencia cálida, ordenada y profesional.",
  },
} as const

export const servicePages = [
  {
    slug: "nutricion",
    eyebrow: "Nutrición",
    title: "Nutrición para entender tu cuerpo y sostener mejores hábitos.",
    shortTitle: "Nutrición",
    description:
      "Consulta nutricional, composición corporal y orientación realista para objetivos de salud, energía y bienestar cotidiano.",
    image: settings.images.hero,
    alt:
      "Recepción luminosa de CMBI con consulta personalizada en un ambiente cálido.",
    cta: "Escribir sobre nutrición",
    whatsappHref: whatsappLink(
      "Hola CMBI, me interesa una consulta de nutrición y composición corporal."
    ),
    cardCta: "Ver nutrición",
    idealFor: [
      "Personas que quieren ordenar hábitos sin dietas extremas.",
      "Objetivos de composición corporal, energía o bienestar general.",
      "Quienes buscan una guía clara antes de iniciar un plan.",
    ],
    approach: [
      "Lectura del contexto personal y metas principales.",
      "Uso de composición corporal como referencia de seguimiento.",
      "Recomendaciones prácticas para integrarse a la rutina.",
    ],
    expectations: [
      "Conversación inicial sencilla.",
      "Plan orientado por objetivos.",
      "Siguiente paso definido por el especialista.",
    ],
    slides: [
      {
        title: "Composición corporal",
        copy:
          "Una lectura inicial ayuda a entender punto de partida, progreso y prioridades.",
        illustration: "composition",
      },
      {
        title: "Plato balanceado",
        copy:
          "La orientación se traduce en decisiones simples para el día a día.",
        illustration: "plate",
      },
      {
        title: "Hábitos sostenibles",
        copy:
          "El objetivo es construir constancia, no depender de cambios imposibles.",
        illustration: "habits",
      },
    ],
  },
  {
    slug: "acuaterapia",
    eyebrow: "Acuaterapia",
    title: "Terapia en agua para movilidad, relajación y acompañamiento corporal.",
    shortTitle: "Acuaterapia",
    description:
      "Sesiones en alberca techada con enfoque suave, movilidad controlada y relajación corporal responsable.",
    image: settings.images.pool,
    alt: "Alberca techada de CMBI con personas realizando terapia acuática.",
    cta: "Escribir sobre acuaterapia",
    whatsappHref: whatsappLink("Hola CMBI, quiero información sobre acuaterapia o Watsu."),
    cardCta: "Ver acuaterapia",
    idealFor: [
      "Personas que prefieren movimiento de bajo impacto.",
      "Procesos de relajación corporal y movilidad acompañada.",
      "Quienes buscan una experiencia acuática guiada y tranquila.",
    ],
    approach: [
      "Agua como soporte para reducir tensión y facilitar movimiento.",
      "Ritmo pausado, claro y adaptado al objetivo de la sesión.",
      "Lenguaje responsable para técnicas como Watsu y terapia suave.",
    ],
    expectations: [
      "Orientación inicial antes de entrar al agua.",
      "Sesión guiada en alberca techada.",
      "Recomendaciones de continuidad según respuesta corporal.",
    ],
    slides: [
      {
        title: "Agua como soporte",
        copy:
          "El entorno acuático permite trabajar con suavidad, control y sensación de descarga.",
        illustration: "water",
      },
      {
        title: "Movilidad amable",
        copy:
          "Los ejercicios buscan ampliar rango y confianza sin movimientos bruscos.",
        illustration: "mobility",
      },
      {
        title: "Relajación guiada",
        copy:
          "El ritmo de la sesión prioriza respiración, pausa y seguridad.",
        illustration: "relax",
      },
    ],
  },
  {
    slug: "fitness",
    eyebrow: "Fitness",
    title: "Movimiento funcional para fuerza, movilidad y constancia.",
    shortTitle: "Fitness",
    description:
      "Rutinas guiadas con un enfoque práctico: moverse mejor, construir fuerza y sostener una rutina posible.",
    image: settings.images.fitness,
    alt: "Gimnasio de CMBI con entrenamiento funcional y equipo profesional.",
    cta: "Escribir sobre fitness",
    whatsappHref: whatsappLink("Hola CMBI, quiero conocer opciones de gym y entrenamiento."),
    cardCta: "Ver fitness",
    idealFor: [
      "Personas que quieren retomar actividad física con acompañamiento.",
      "Objetivos de fuerza, movilidad o condición general.",
      "Quienes prefieren rutinas claras y progresivas.",
    ],
    approach: [
      "Entrenamiento funcional con técnica y control.",
      "Progresión según capacidad, objetivo y constancia.",
      "Espacio visualmente limpio para reducir fricción al empezar.",
    ],
    expectations: [
      "Definición del objetivo de entrenamiento.",
      "Rutina guiada por nivel.",
      "Ajustes conforme avance la práctica.",
    ],
    slides: [
      {
        title: "Fuerza funcional",
        copy:
          "Trabajo útil para actividades diarias, postura y sensación de capacidad.",
        illustration: "strength",
      },
      {
        title: "Movilidad",
        copy:
          "Ejercicios de control y rango para moverse con más confianza.",
        illustration: "fitnessMobility",
      },
      {
        title: "Rutina posible",
        copy:
          "La constancia empieza con una estructura fácil de repetir.",
        illustration: "routine",
      },
    ],
  },
  {
    slug: "spa-belleza",
    eyebrow: "Spa + belleza",
    title: "Cuidado estético y relajación con una experiencia serena.",
    shortTitle: "Spa + belleza",
    description:
      "Tratamientos de bienestar, piel y descanso sensorial con comunicación sobria y atención cercana.",
    image: settings.images.wellness,
    alt: "Cabina de spa con tratamiento facial en ambiente sereno.",
    cta: "Escribir sobre spa",
    whatsappHref: whatsappLink("Hola CMBI, quiero información sobre spa y belleza."),
    cardCta: "Ver spa + belleza",
    idealFor: [
      "Personas que buscan una pausa de relajación.",
      "Cuidado de piel y bienestar sensorial.",
      "Momentos de descanso dentro de una rutina integral.",
    ],
    approach: [
      "Ambiente cálido, limpio y sin saturación visual.",
      "Tratamientos presentados con lenguaje cuidadoso y realista.",
      "Experiencia pensada para reducir ruido y facilitar descanso.",
    ],
    expectations: [
      "Elección del tratamiento de acuerdo con la intención.",
      "Ambiente preparado para calma y privacidad.",
      "Cierre con recomendaciones simples de cuidado.",
    ],
    slides: [
      {
        title: "Piel y calma",
        copy:
          "El cuidado estético se presenta como parte de una pausa responsable.",
        illustration: "skin",
      },
      {
        title: "Ambiente sensorial",
        copy:
          "Luz, textura y silencio ayudan a que el servicio se sienta cuidado.",
        illustration: "spaCalm",
      },
      {
        title: "Belleza sin exagerar",
        copy:
          "La comunicación evita promesas absolutas y prioriza confianza.",
        illustration: "beauty",
      },
    ],
  },
  {
    slug: "sauna",
    eyebrow: "Sauna",
    title: "Calor, pausa y recuperación en una rutina de bienestar.",
    shortTitle: "Sauna",
    description:
      "Servicio wellness complementario para descanso, respiración y sensación de recuperación, con uso responsable.",
    image: settings.images.wellness,
    alt: "Espacio cálido de bienestar para relajación y pausa.",
    cta: "Escribir sobre sauna",
    whatsappHref: whatsappLink("Hola CMBI, quiero información sobre el servicio de sauna."),
    cardCta: "Ver sauna",
    idealFor: [
      "Personas que buscan una pausa cálida y silenciosa.",
      "Rutinas de bienestar complementarias al movimiento o spa.",
      "Momentos de descanso antes o después de otra actividad.",
    ],
    approach: [
      "Uso responsable y orientado por tolerancia personal.",
      "Experiencia simple: calor, respiración, hidratación y pausa.",
      "Lenguaje wellness sin prometer resultados médicos.",
    ],
    expectations: [
      "Indicaciones básicas antes de entrar.",
      "Tiempo de uso definido con calma.",
      "Cierre con hidratación y descanso.",
    ],
    slides: [
      {
        title: "Calor seco",
        copy:
          "Una experiencia cálida y contenida para bajar el ritmo.",
        illustration: "heat",
      },
      {
        title: "Recuperación",
        copy:
          "Puede integrarse como pausa complementaria a movimiento o spa.",
        illustration: "recovery",
      },
      {
        title: "Respiración",
        copy:
          "La experiencia funciona mejor cuando el cuerpo marca el ritmo.",
        illustration: "breath",
      },
    ],
  },
] as const

export const serviceCards = servicePages.map((service) => ({
  id: service.slug,
  eyebrow: service.eyebrow,
  title: service.title,
  copy: service.description,
  image: service.image,
  alt: service.alt,
  cta: service.cardCta,
  href: `/servicios/${service.slug}`,
}))

export const benefitCards = [
  {
    title: "Todo en un mismo lugar",
    copy: "Nutrición, movimiento, agua, sauna, spa y bienestar conectados sin saturar tu agenda.",
  },
  {
    title: "Comunicación clara",
    copy: "Textos breves, orientación por objetivo y llamadas a la acción directas.",
  },
  {
    title: "Cuidado sensible",
    copy: "Redacción responsable para terapias corporales, belleza y temas personales.",
  },
  {
    title: "Experiencia premium",
    copy: "Espacios luminosos, ritmo tranquilo y una estética coherente con el logo.",
  },
]

export const galleryItems = [
  {
    image: settings.images.hero,
    alt: "Recepción premium de CMBI con logo visible y área de espera.",
    caption: "Recepción cálida",
  },
  {
    image: settings.images.pool,
    alt: "Alberca interior techada para terapia acuática.",
    caption: "Alberca techada",
  },
  {
    image: settings.images.fitness,
    alt: "Área de gimnasio con equipo funcional.",
    caption: "Fitness guiado",
  },
  {
    image: settings.images.wellness,
    alt: "Cabina de spa y tratamiento de bienestar.",
    caption: "Spa y belleza",
  },
]

export const testimonials = [
  {
    label: "Bienestar",
    quote:
      "Un espacio pensado para llegar, respirar y entender qué servicio necesitas sin ruido.",
  },
  {
    label: "Claridad",
    quote:
      "La experiencia se siente profesional porque ordena nutrición, terapia, gym, sauna y spa por intención.",
  },
  {
    label: "Confianza",
    quote:
      "El tono evita exageraciones: acompaña, explica y dirige a una conversación responsable.",
  },
]

export const dashboardMetrics = [
  { label: "Citas por WhatsApp", value: "24h", detail: "Mensajes por intención" },
  { label: "Servicios activos", value: "6", detail: "Nutrición, agua, gym, sauna, spa, belleza" },
  { label: "Seguimiento", value: "1:1", detail: "Orientación cercana por objetivo" },
]

export const footerLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" },
]
