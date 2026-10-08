// Contenido de las páginas /servicios/[slug]/. Cada página ataca una intención
// de búsqueda distinta: no copiar el texto de una a otra.
export interface ServicePage {
  slug: string;
  name: string;
  /** Título corto para menús y pie de página */
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  includes: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  /** `slug` de los proyectos de src/data/projects.ts */
  relatedProjects: string[];
  faq: { question: string; answer: string }[];
  whatsappMessage: string;
}

export const servicePages: ServicePage[] = [
  {
    slug: "tienda-online",
    name: "Creación de tiendas online",
    navLabel: "Tienda online",
    metaTitle: "Crear tienda online en Chile | Josué Valbuena",
    metaDescription:
      "Desarrollo tiendas online a medida en Chile: catálogo, carrito, pagos y panel para gestionar tus productos y pedidos. Cotiza tu e-commerce conmigo.",
    h1: "Creación de tiendas online en Chile",
    intro:
      "Desarrollo tu tienda online a medida para que vendas tus productos las 24 horas, con un panel propio para gestionar el catálogo y los pedidos sin depender de nadie.",
    includes: [
      {
        title: "Catálogo de productos",
        description:
          "Categorías, fichas de producto y buscador, pensados para que tus clientes encuentren lo que buscan.",
      },
      {
        title: "Carrito y compra",
        description:
          "Un proceso de compra claro y corto, que funcione bien desde el celular.",
      },
      {
        title: "Pasarelas de pago",
        description:
          "Integro las pasarelas más usadas para que tus clientes paguen de forma segura.",
      },
      {
        title: "Panel administrativo",
        description:
          "Agrega y edita productos, revisa pedidos y gestiona tu tienda desde un panel simple de usar.",
      },
      {
        title: "SEO y velocidad",
        description:
          "Estructura técnica y carga rápida para que Google pueda leer y mostrar tu tienda.",
      },
      {
        title: "Blog (opcional)",
        description:
          "Un espacio para publicar contenido y atraer más visitas hacia tus productos.",
      },
    ],
    benefits: [
      {
        title: "Hecha para tu negocio",
        description:
          "El diseño y las funciones se adaptan a cómo vendes, sin los límites de una plantilla genérica.",
      },
      {
        title: "Pensada para el celular",
        description:
          "Gran parte de las compras online se hacen desde el teléfono, así que parto de ahí.",
      },
      {
        title: "Fácil de administrar",
        description:
          "Gestionas tus productos y pedidos tú mismo, sin conocimientos técnicos.",
      },
    ],
    relatedProjects: ["dearpaoo"],
    faq: [
      {
        question: "¿Cuánto cuesta una tienda online?",
        answer:
          "Depende del alcance: cantidad de productos, métodos de pago e integraciones que necesites. Después de conversar contigo te envío una propuesta con el precio y el plazo antes de empezar.",
      },
      {
        question: "¿Cuánto demora en estar lista?",
        answer:
          "Depende del tamaño del proyecto. El plazo estimado va en la propuesta, y durante el desarrollo te muestro avances para que veas cómo va quedando.",
      },
      {
        question: "¿Podré administrar los productos yo mismo?",
        answer:
          "Sí. Incluyo un panel administrativo para que agregues y edites productos y revises los pedidos sin depender de mí.",
      },
      {
        question: "¿Qué pasarelas de pago puedo usar?",
        answer:
          "Puedo integrar las pasarelas de pago más usadas. En la conversación inicial vemos cuál conviene a tu negocio.",
      },
      {
        question: "¿Aparecerá mi tienda en Google?",
        answer:
          "La construyo con buenas prácticas de SEO técnico y carga rápida, que son la base. Posicionarse en los primeros resultados además depende del contenido y del tiempo.",
      },
      {
        question: "¿Me ayudas después del lanzamiento?",
        answer:
          "Sí. Una vez publicada, sigo disponible para resolver dudas y hacer ajustes.",
      },
    ],
    whatsappMessage:
      "Hola Josué, vi tu web y quiero cotizar una tienda online. ¿Podemos hablar?",
  },
  {
    slug: "desarrollo-web",
    name: "Desarrollo de páginas web",
    navLabel: "Páginas web",
    metaTitle: "Páginas web para empresas en Chile | Josué Valbuena",
    metaDescription:
      "Desarrollo páginas web profesionales para empresas y emprendedores en Chile: rápidas, adaptadas al celular y optimizadas para Google. Pide tu cotización.",
    h1: "Desarrollo de páginas web para empresas en Chile",
    intro:
      "Creo la página web de tu negocio para que te encuentren en Google, entiendan rápido qué ofreces y te contacten sin vueltas.",
    includes: [
      {
        title: "Diseño a tu medida",
        description:
          "Un diseño que refleja tu marca y se ve bien en cualquier pantalla, sin plantillas genéricas.",
      },
      {
        title: "Pensada primero para el celular",
        description:
          "La mayoría de tus visitas llegará desde el teléfono, así que parto diseñando para ahí.",
      },
      {
        title: "SEO técnico y velocidad",
        description:
          "Estructura clara, metadatos y carga rápida para que Google pueda leer y mostrar tu sitio.",
      },
      {
        title: "Contacto directo",
        description:
          "Formularios y botón de WhatsApp para que tus clientes te escriban en un clic.",
      },
      {
        title: "Landing pages",
        description:
          "Páginas enfocadas en una sola acción, ideales para campañas o para lanzar un servicio.",
      },
      {
        title: "Sitios corporativos",
        description:
          "Varias secciones o páginas para presentar tu empresa, tus servicios y tu equipo.",
      },
    ],
    benefits: [
      {
        title: "Trato directo",
        description:
          "Hablas conmigo durante todo el proyecto, sin intermediarios ni equipos que se pasan el mensaje.",
      },
      {
        title: "Tecnología actual",
        description:
          "Uso herramientas modernas que cargan rápido y son más fáciles de mantener en el tiempo.",
      },
      {
        title: "Pensada para convertir",
        description:
          "No es solo que se vea bien: cada sección guía al visitante hacia contactarte.",
      },
    ],
    relatedProjects: [
      "leydyvillamizar",
      "redbrokers-landing",
      "hospital",
      "qboasesorias",
    ],
    faq: [
      {
        question: "¿Cuánto cuesta una página web?",
        answer:
          "Depende de cuántas secciones necesites y de si requiere funciones adicionales, como formularios o integraciones. Tras conversar contigo te envío una propuesta con precio y plazo antes de empezar.",
      },
      {
        question: "¿Cuánto demora hacerla?",
        answer:
          "Depende del tamaño y de qué tan rápido tengamos los textos e imágenes. El plazo estimado va en la propuesta y te voy mostrando avances.",
      },
      {
        question: "¿Necesito tener los textos y las fotos listos?",
        answer:
          "Ayuda mucho, pero no es obligatorio. Puedo guiarte sobre qué contenido hace falta y cómo ordenarlo.",
      },
      {
        question: "¿Se verá bien en el celular?",
        answer:
          "Sí. Todas mis páginas se diseñan primero para el celular y se adaptan a tablets y computadores.",
      },
      {
        question: "¿Puedo pedir cambios después de publicarla?",
        answer:
          "Sí. Sigo disponible después del lanzamiento para resolver dudas y hacer ajustes.",
      },
    ],
    whatsappMessage:
      "Hola Josué, vi tu web y quiero cotizar una página web para mi negocio. ¿Podemos hablar?",
  },
  {
    slug: "aplicaciones-a-medida",
    name: "Desarrollo de software y aplicaciones web a medida",
    navLabel: "Software a medida",
    metaTitle: "Software y sistemas web a medida | Josué Valbuena",
    metaDescription:
      "Desarrollo aplicaciones y sistemas web a medida en Chile: paneles administrativos, gestión de usuarios y datos, e integraciones con otras plataformas.",
    h1: "Desarrollo de software y sistemas web a medida",
    intro:
      "Si tu negocio funciona con planillas, procesos manuales o herramientas que no se ajustan a lo que necesitas, construyo un sistema hecho para cómo trabajas.",
    includes: [
      {
        title: "Paneles administrativos",
        description:
          "Un lugar centralizado para gestionar tus datos, clientes, productos u operaciones.",
      },
      {
        title: "Usuarios, roles y permisos",
        description:
          "Cada persona accede solo a lo que le corresponde, con inicio de sesión seguro.",
      },
      {
        title: "Gestión de datos",
        description:
          "Base de datos bien estructurada para que tu información esté ordenada y disponible.",
      },
      {
        title: "Dashboards y reportes",
        description:
          "Visualiza las cifras importantes de tu negocio sin armar planillas a mano.",
      },
      {
        title: "Integraciones",
        description:
          "Conexión con otras plataformas y servicios mediante APIs, para que tus herramientas trabajen juntas.",
      },
      {
        title: "Crecimiento a futuro",
        description:
          "Una base ordenada para que puedas sumar funciones a medida que tu negocio crece.",
      },
    ],
    benefits: [
      {
        title: "Se adapta a ti",
        description:
          "Tú no cambias tu forma de trabajar para usar el software: el software se construye según tu proceso.",
      },
      {
        title: "Construido paso a paso",
        description:
          "Empezamos por lo esencial y avanzamos por etapas, para que veas resultados rápido.",
      },
      {
        title: "Experiencia en producción",
        description:
          "He construido aplicaciones con paneles de gestión, usuarios y bases de datos para negocios reales.",
      },
    ],
    relatedProjects: ["redbrokers-app", "maremonte", "hogarplus"],
    faq: [
      {
        question: "¿Cuánto cuesta un sistema a medida?",
        answer:
          "Depende de las funciones que necesites. Primero conversamos para entender tu proceso y luego te envío una propuesta con el alcance, el precio y el plazo.",
      },
      {
        question: "¿Por dónde empezamos si mi idea es grande?",
        answer:
          "Definimos una primera versión con lo esencial y la ampliamos por etapas. Así validas la idea antes de invertir en todo.",
      },
      {
        question: "¿Qué diferencia hay con un software ya hecho?",
        answer:
          "Un software genérico te obliga a adaptarte a sus límites. Uno a medida se ajusta a tu proceso y puede crecer contigo.",
      },
      {
        question: "¿Puede conectarse con las herramientas que ya uso?",
        answer:
          "En muchos casos sí, mediante APIs. En la conversación inicial reviso qué se puede integrar.",
      },
      {
        question: "¿Quién es dueño del sistema?",
        answer:
          "Lo defines conmigo antes de empezar y queda por escrito en la propuesta.",
      },
    ],
    whatsappMessage:
      "Hola Josué, vi tu web y quiero cotizar un sistema o aplicación a medida. ¿Podemos hablar?",
  },
  {
    slug: "chatbots-ia",
    name: "Desarrollo de chatbots y agentes de IA",
    navLabel: "Chatbots con IA",
    metaTitle: "Chatbots con IA para empresas | Josué Valbuena",
    metaDescription:
      "Desarrollo chatbots y agentes de IA para tu web y WhatsApp, con la información de tu negocio. Atiende consultas de clientes sin estar siempre disponible.",
    h1: "Chatbots y agentes de IA para tu negocio",
    intro:
      "Creo asistentes con inteligencia artificial que responden las consultas de tus clientes con la información de tu negocio, y te avisan cuando hace falta una persona.",
    includes: [
      {
        title: "Chatbot para tu web",
        description:
          "Un asistente integrado en tu sitio que atiende a los visitantes en el momento en que tienen la duda.",
      },
      {
        title: "Chatbot para WhatsApp",
        description:
          "Atención automática en el canal que tus clientes ya usan todos los días.",
      },
      {
        title: "Responde con tu información",
        description:
          "Lo entreno con tus servicios, precios y preguntas frecuentes para que no invente respuestas.",
      },
      {
        title: "Agentes que ejecutan tareas",
        description:
          "Más allá de responder: agendar, consultar datos o registrar solicitudes en tus sistemas.",
      },
      {
        title: "Derivación a una persona",
        description:
          "Cuando una consulta es compleja o sensible, el chatbot pasa la conversación a ti o a tu equipo.",
      },
      {
        title: "Modelos de IA líderes",
        description:
          "Trabajo con OpenAI, Gemini y Claude, y elijo el que mejor se ajusta a tu caso y a tu presupuesto.",
      },
    ],
    benefits: [
      {
        title: "Atención sin pausa",
        description:
          "Tus clientes reciben respuesta a cualquier hora, sin que tengas que estar pendiente.",
      },
      {
        title: "Menos tareas repetitivas",
        description:
          "Las preguntas de siempre se responden solas y tu tiempo se dedica a lo importante.",
      },
      {
        title: "Con control y transparencia",
        description:
          "Defines qué puede y qué no puede responder, y puedes revisar las conversaciones.",
      },
    ],
    relatedProjects: ["hogarplus", "beflatmates-app"],
    faq: [
      {
        question: "¿Cuánto cuesta un chatbot con IA?",
        answer:
          "Tiene dos partes: el desarrollo, que se cotiza una vez, y el uso del modelo de IA, que varía según el volumen de conversaciones. Te explico ambos en la propuesta.",
      },
      {
        question: "¿El chatbot puede inventar respuestas?",
        answer:
          "Los modelos de IA pueden equivocarse, por eso lo configuro para responder con la información de tu negocio y derivar a una persona cuando no tiene certeza.",
      },
      {
        question: "¿Puede funcionar en WhatsApp?",
        answer:
          "Sí, además de tu página web. En la conversación inicial vemos qué canal te conviene más.",
      },
      {
        question: "¿Necesito tener mucha información para empezar?",
        answer:
          "Basta con tus servicios, tus preguntas frecuentes y tus políticas. Puedo ayudarte a ordenarlas.",
      },
      {
        question: "¿Reemplaza a mi equipo de atención?",
        answer:
          "No. Se encarga de lo repetitivo y deriva lo importante a una persona.",
      },
    ],
    whatsappMessage:
      "Hola Josué, vi tu web y quiero cotizar un chatbot con IA para mi negocio. ¿Podemos hablar?",
  },
  {
    slug: "automatizacion",
    name: "Automatización de procesos con IA y software",
    navLabel: "Automatización",
    metaTitle: "Automatización de procesos con IA | Josué Valbuena",
    metaDescription:
      "Automatizo procesos repetitivos de tu negocio con código e IA: conexión entre herramientas, correos, formularios y reportes. Ahorra horas de trabajo.",
    h1: "Automatización de procesos para tu negocio",
    intro:
      "Identifico las tareas repetitivas que te quitan tiempo y las automatizo, conectando las herramientas que ya usas para que trabajen solas.",
    includes: [
      {
        title: "Conexión entre herramientas",
        description:
          "Hago que tus sistemas se comuniquen entre sí, sin copiar y pegar datos a mano.",
      },
      {
        title: "Correos y notificaciones",
        description:
          "Mensajes automáticos a clientes o a tu equipo cuando ocurre algo importante.",
      },
      {
        title: "Formularios y documentos",
        description:
          "Procesamiento de solicitudes y archivos para que lleguen ordenados a donde corresponde.",
      },
      {
        title: "Reportes automáticos",
        description:
          "Informes que se generan y se envían solos, con los datos actualizados.",
      },
      {
        title: "IA para tareas del día a día",
        description:
          "Resumir, clasificar o extraer información de textos y documentos con modelos de IA.",
      },
      {
        title: "Integración con APIs",
        description:
          "Conexión con plataformas externas para llevar y traer información de forma automática.",
      },
    ],
    benefits: [
      {
        title: "Recuperas tiempo",
        description:
          "Lo que hoy te toma horas cada semana pasa a ocurrir solo, en segundo plano.",
      },
      {
        title: "Menos errores",
        description:
          "Un proceso automático hace siempre lo mismo y evita los errores de copiar datos a mano.",
      },
      {
        title: "Empezamos por lo que más duele",
        description:
          "Priorizamos la tarea con más impacto y vamos sumando automatizaciones desde ahí.",
      },
    ],
    relatedProjects: [],
    faq: [
      {
        question: "¿Qué tipo de procesos se pueden automatizar?",
        answer:
          "Los que son repetitivos y siguen reglas claras: enviar avisos, mover datos entre sistemas, procesar formularios o generar reportes. Lo evaluamos juntos en la conversación inicial.",
      },
      {
        question: "¿Cuánto cuesta automatizar un proceso?",
        answer:
          "Depende de la complejidad y de las herramientas involucradas. Te envío una propuesta con alcance, precio y plazo antes de empezar.",
      },
      {
        question: "¿Tengo que cambiar las herramientas que uso?",
        answer:
          "Normalmente no. La idea es conectar lo que ya usas para que trabaje en conjunto.",
      },
      {
        question: "¿Cómo sé si vale la pena automatizar?",
        answer:
          "Si una tarea se repite seguido y te consume tiempo, probablemente sí. En la primera conversación te doy mi opinión sincera.",
      },
    ],
    whatsappMessage:
      "Hola Josué, vi tu web y quiero consultar por automatizar procesos en mi negocio. ¿Podemos hablar?",
  },
  {
    slug: "rediseno-web",
    name: "Rediseño y mejora de páginas web",
    navLabel: "Rediseño web",
    metaTitle: "Rediseño de página web en Chile | Josué Valbuena",
    metaDescription:
      "Rediseño y mejoro tu página web actual: más rápida, moderna, adaptada al celular y mejor posicionada en Google. Cuéntame qué no te funciona hoy.",
    h1: "Rediseño y mejora de tu página web",
    intro:
      "Si tu web actual es lenta, se ve antigua, no se adapta al celular o no te trae contactos, la rediseño para que trabaje a tu favor.",
    includes: [
      {
        title: "Diagnóstico inicial",
        description:
          "Reviso tu sitio actual, qué funciona y qué no, antes de proponerte cambios.",
      },
      {
        title: "Diseño moderno",
        description:
          "Una imagen actualizada que transmite confianza y refleja bien tu negocio.",
      },
      {
        title: "Adaptación al celular",
        description:
          "Si tu web se ve mal en el teléfono, la rehago para que se use cómodamente.",
      },
      {
        title: "Velocidad",
        description:
          "Reduzco los tiempos de carga, algo que afecta tanto a tus visitantes como a Google.",
      },
      {
        title: "Mejoras de SEO",
        description:
          "Ordeno la estructura y los metadatos para mejorar tus posibilidades de aparecer en las búsquedas.",
      },
      {
        title: "Migración a tecnología actual",
        description:
          "Paso tu sitio a una base moderna que sea más rápida y fácil de mantener.",
      },
    ],
    benefits: [
      {
        title: "Conservas lo que funciona",
        description:
          "No empezamos de cero sin necesidad: aprovechamos tu contenido y tu marca.",
      },
      {
        title: "Mejoras concretas",
        description:
          "Cada cambio tiene un objetivo claro: más velocidad, más contactos o mejor experiencia.",
      },
      {
        title: "Sin interrupciones",
        description:
          "Preparo el nuevo sitio por separado y lo publicamos cuando esté listo.",
      },
    ],
    relatedProjects: [],
    faq: [
      {
        question: "¿Cómo sé si mi web necesita un rediseño?",
        answer:
          "Si tarda en cargar, se ve mal en el celular, luce antigua o no te llegan contactos, probablemente sí. Puedo darte mi opinión tras revisarla.",
      },
      {
        question: "¿Se pierde el posicionamiento que ya tengo en Google?",
        answer:
          "Cuido las direcciones y la estructura del sitio actual para evitar perder el posicionamiento que ya tienes.",
      },
      {
        question: "¿Cuánto cuesta un rediseño?",
        answer:
          "Depende del tamaño del sitio y de qué necesite cambiar. Te envío una propuesta con precio y plazo tras revisar tu web.",
      },
      {
        question: "¿Puedo conservar mis textos e imágenes?",
        answer:
          "Sí. Podemos reutilizar lo que funciona y mejorar o reemplazar lo que no.",
      },
    ],
    whatsappMessage:
      "Hola Josué, vi tu web y quiero cotizar el rediseño de mi página web. ¿Podemos hablar?",
  },
];

export const getServicePage = (slug: string) =>
  servicePages.find((page) => page.slug === slug);
