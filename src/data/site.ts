const WHATSAPP_NUMBER = "526462550205"

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
    nutrition: "/cmbi-nutrition-demo.jpg",
    sauna: "/cmbi-sauna-demo.jpg",
    cafeteria: "/cmbi-cafeteria-demo.jpg",
    supplements: "/cmbi-supplements-demo.jpg",
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
    "Centro Médico de Bienestar Integral en Ensenada: salud, movimiento, agua, cuidado personal, cafetería y suplementación para el bienestar.",
  location: "De Las Redes 96, Playa Ensenada, 22880 Ensenada, B.C.",
  locationHref: "https://share.google/n5f3FLKdCwjQPWkZ",
  hours: "7:00 am - 8:00 pm",
  whatsappDisplay: "646 255 02 05",
  language: "Español",
  nav: [
    { label: "Servicios", href: "/#servicios" },
    { label: "Beneficios", href: "/#beneficios" },
    { label: "Instalaciones", href: "/#instalaciones" },
    { label: "Ubicación", href: "/#ubicacion" },
    { label: "Contacto", href: "/#contacto" },
  ],
  heroBadges: [
    "Salud y recuperación",
    "Movimiento y entrenamiento",
    "Agua y clases",
    "Relajación y cuidado",
  ],
  heroStats: [
    { value: "01", label: "Para todas las edades" },
    { value: "02", label: "Servicios por objetivo" },
    { value: "03", label: "Orientación cercana" },
  ],
  reserveHref: whatsappLink(
    "Hola CMBI, quiero agendar una cita y conocer disponibilidad."
  ),
  consultHref: "/#servicios",
  experienceHref: "/#instalaciones",
  contactBlock: {
    heading: "Agenda por WhatsApp",
    copy:
      "Cuéntanos qué necesitas y te orientamos hacia el área adecuada, desde nutrición y movimiento hasta recuperación, cuidado personal y servicios complementarios.",
    note:
      "No compartas información clínica sensible por mensajes. El equipo puede indicarte el canal correcto para una valoración.",
  },
  cookie: {
    title: "Preferencias de cookies",
    body:
      "Usamos cookies necesarias para recordar tus preferencias de interfaz y mejorar la experiencia del sitio.",
    primary: "Aceptar",
    secondary: "Solo necesarias",
  },
  footer: {
    copy: "Centro Médico de Bienestar Integral",
    note:
      "Bienestar, salud y cuidado personal en Ensenada con una experiencia cálida, ordenada y profesional.",
  },
} as const

export const servicePages = [
  {
    slug: "nutricion",
    eyebrow: "Nutrición",
    title: "Nutrición para entender tu cuerpo y sostener mejores hábitos.",
    shortTitle: "Nutrición",
    description:
      "Consulta nutricional y composición corporal para metas de salud, energía y bienestar cotidiano.",
    image: settings.images.nutrition,
    alt:
      "Imagen demo de una comida balanceada con vegetales, proteína, fruta y agua.",
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
      "Sesiones en alberca techada para movilidad, relajación y acompañamiento corporal responsable.",
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
    eyebrow: "Movimiento",
    title: "Entrenamiento funcional con instructor para fuerza, movilidad y constancia.",
    shortTitle: "Movimiento",
    description:
      "Rutinas guiadas con un enfoque práctico para moverse mejor, construir fuerza y sostener una rutina posible.",
    image: settings.images.fitness,
    alt: "Gimnasio de CMBI con entrenamiento funcional y equipo profesional.",
    cta: "Escribir sobre movimiento",
    whatsappHref: whatsappLink("Hola CMBI, quiero conocer opciones de movimiento y entrenamiento."),
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
    title: "Faciales y cuidado estético con una experiencia serena.",
    shortTitle: "Spa + belleza",
    description:
      "Tratamientos de bienestar, piel y descanso sensorial con atención cercana.",
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
      "Servicio complementario para descanso, respiración y sensación de recuperación, con uso responsable.",
    image: settings.images.sauna,
    alt: "Imagen demo de una cabina contemporánea de sauna seco.",
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
  {
    slug: "cafeteria",
    eyebrow: "Cafetería",
    title: "Colaciones y alimentos alineados con tu orientación nutricional.",
    shortTitle: "Cafetería",
    description:
      "Artículos para colaciones y opciones de comida bajas en grasa, azúcar y calorías, pensadas para facilitar el seguimiento de tu plan de nutrición.",
    image: settings.images.cafeteria,
    alt: "Imagen demo de dulces y colaciones sin marca en una cafetería de bienestar.",
    cta: "Escribir sobre cafetería",
    whatsappHref: whatsappLink("Hola CMBI, quiero información sobre las opciones de cafetería y colaciones."),
    cardCta: "Ver cafetería",
    idealFor: [
      "Personas que salen de su consulta de nutrición con un plan definido.",
      "Quienes buscan colaciones prácticas dentro del mismo centro.",
      "Personas que quieren opciones con información clara antes de elegir.",
    ],
    approach: [
      "Opciones pensadas como apoyo práctico a la orientación nutricional.",
      "Selección enfocada en alternativas bajas en grasa, azúcar y calorías.",
      "Disponibilidad sujeta al menú y a las recomendaciones de cada consulta.",
    ],
    expectations: [
      "Consulta de opciones disponibles en el día.",
      "Elección acorde con tu plan y preferencias.",
      "Orientación privada cuando una recomendación requiera más contexto.",
    ],
    slides: [],
  },
  {
    slug: "suplementacion",
    eyebrow: "Suplementación",
    title: "Suplementación para tu bienestar con orientación personalizada.",
    shortTitle: "Suplementación",
    description:
      "Opciones de suplementación general disponibles con información privada y consulta para elegir de forma responsable.",
    image: settings.images.supplements,
    alt: "Imagen demo de un multivitamínico genérico sin marca junto a un vaso de agua.",
    cta: "Consultar suplementación",
    whatsappHref: whatsappLink("Hola CMBI, quiero información sobre suplementación para el bienestar."),
    cardCta: "Ver suplementación",
    idealFor: [
      "Adultos que buscan información general sobre suplementación de bienestar.",
      "Personas que prefieren consultar antes de elegir un producto.",
      "Quienes desean integrar la suplementación a un plan más amplio.",
    ],
    approach: [
      "Información clara y atención privada.",
      "Selección responsable según contexto, objetivos y orientación profesional.",
      "Sin sustituir una valoración médica ni hacer promesas de resultados.",
    ],
    expectations: [
      "Conversación inicial sobre el objetivo de bienestar.",
      "Información sobre opciones y disponibilidad.",
      "Recomendación de consulta cuando el contexto lo requiera.",
    ],
    slides: [],
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
    copy: "Salud, movimiento, agua, cuidado personal y servicios complementarios reunidos en un mismo lugar.",
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
    title: "Experiencia humana",
    copy: "Espacios luminosos, ritmo tranquilo y una estética coherente con la marca.",
  },
]

export const installationPages = [
  {
    slug: "recepcion",
    eyebrow: "Recepción",
    shortTitle: "Recepción cálida",
    title: "Un primer espacio para orientarte con calma.",
    description:
      "La recepción de CMBI es el punto de inicio para conocer las áreas, resolver dudas y encontrar el siguiente paso para tu visita.",
    image: settings.images.hero,
    alt: "Recepción de CMBI con área de espera, consultorio y alberca al fondo.",
    idealFor: [
      "Personas que visitan CMBI por primera vez.",
      "Familias que necesitan ubicar servicios y horarios.",
      "Quienes prefieren recibir orientación antes de elegir un área.",
    ],
    features: [
      "Área de bienvenida y espera.",
      "Orientación sobre servicios y disponibilidad.",
      "Acceso sencillo hacia las principales áreas del centro.",
    ],
    expectations: [
      "Una llegada ordenada y clara.",
      "Información breve sobre el servicio que buscas.",
      "Acompañamiento para iniciar tu visita.",
    ],
  },
  {
    slug: "alberca-techada",
    eyebrow: "Alberca techada",
    shortTitle: "Alberca techada",
    title: "Un espacio acuático para movimiento y acompañamiento corporal.",
    description:
      "La alberca techada permite realizar actividades acuáticas durante todo el año, con un entorno cómodo para terapia, clases y movilidad.",
    image: settings.images.pool,
    alt: "Alberca interior techada de CMBI para actividades acuáticas.",
    idealFor: [
      "Personas interesadas en actividades acuáticas.",
      "Quienes buscan movimiento de bajo o mediano impacto.",
      "Familias que consultan clases o sesiones en agua.",
    ],
    features: [
      "Espacio interior protegido del clima.",
      "Área para terapia acuática y clases.",
      "Ambiente pensado para moverse con acompañamiento.",
    ],
    expectations: [
      "Consulta de horarios y disponibilidad.",
      "Orientación sobre la actividad adecuada.",
      "Uso acompañado según el servicio elegido.",
    ],
  },
  {
    slug: "fitness-guiado",
    eyebrow: "Fitness guiado",
    shortTitle: "Fitness guiado",
    title: "Movimiento funcional en un espacio preparado para entrenar.",
    description:
      "El área de fitness reúne equipo funcional y un entorno de trabajo para construir una rutina de movimiento con orientación del instructor.",
    image: settings.images.fitness,
    alt: "Área de fitness de CMBI con equipo funcional.",
    idealFor: [
      "Personas que quieren retomar una rutina de movimiento.",
      "Quienes prefieren entrenar con orientación.",
      "Objetivos de fuerza, movilidad y constancia.",
    ],
    features: [
      "Equipo para trabajo funcional.",
      "Rutinas adaptadas al objetivo y experiencia.",
      "Acompañamiento de instructor durante la actividad.",
    ],
    expectations: [
      "Una conversación inicial sobre tu objetivo.",
      "Indicaciones claras para usar el espacio.",
      "Progresión acorde con tu ritmo y disponibilidad.",
    ],
  },
  {
    slug: "spa-belleza",
    eyebrow: "Spa y belleza",
    shortTitle: "Spa y belleza",
    title: "Un espacio sereno para cuidado personal y descanso.",
    description:
      "El área de spa y belleza ofrece un entorno tranquilo para faciales y servicios de cuidado personal con atención cercana.",
    image: settings.images.wellness,
    alt: "Cabina de spa y tratamiento de bienestar en CMBI.",
    idealFor: [
      "Personas que buscan una pausa de cuidado personal.",
      "Quienes desean conocer opciones de faciales y bienestar.",
      "Usuarios que prefieren una experiencia tranquila y acompañada.",
    ],
    features: [
      "Cabina de atención en un ambiente sereno.",
      "Servicios de cuidado facial y bienestar.",
      "Orientación sobre opciones y disponibilidad.",
    ],
    expectations: [
      "Información clara sobre el servicio.",
      "Un ritmo de atención tranquilo.",
      "Recomendaciones de cuidado acordes con el servicio elegido.",
    ],
  },
] as const

export const galleryItems = installationPages.map((installation) => ({
  image: installation.image,
  alt: installation.alt,
  caption: installation.shortTitle,
  href: `/instalaciones/${installation.slug}`,
}))

export const footerLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" },
]
