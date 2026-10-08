// Fuente única de proyectos: la usan la home y las páginas de servicio.
// `image` es el nombre del archivo en src/assets/projects/.
const projectList = [
  {
    title: "Leydy Villamizar - Sitio web",
    year: "2026",
    description:
      "Sitio web profesional con diseño responsivo y optimizado para SEO.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    image: "proyecto-leydyvillamizar.webp",
    alt: "Captura de la página de inicio del sitio web profesional de Leydy Villamizar, desarrollado con Next.js",
    demo: "https://www.leydyvillamizar.cl/",
    code: "",
    country: "chile",
  },
  {
    title: "RedBrokers - Landing",
    year: "2026",
    description:
      "Landing page informativo para una web app de canje inmobiliario entre corredores de propiedades.",
    tech: ["Astro", "Tailwind CSS", "TypeScript"],
    image: "proyecto-redbrokers-landing.webp",
    alt: "Captura de la landing page de RedBrokers, plataforma de canje inmobiliario entre corredores de propiedades",
    demo: "https://www.redbrokers.cl/",
    code: "",
    country: "chile",
  },
  {
    title: "RedBrokers - Web App - Fullstack",
    year: "2026",
    description:
      "Aplicación web enfocada al canje inmobiliario entre corredores de propiedades.",
    tech: ["TypeScript", "React", "Express", "Prisma", "PostgreSQL"],
    image: "proyecto-redbrokers-app.webp",
    alt: "Captura de la aplicación web de RedBrokers para el canje de propiedades entre corredores",
    demo: "https://app.redbrokers.cl/",
    code: "",
    country: "chile",
  },
  {
    title: "RedBrokers Catálogo - Web App - Fullstack",
    year: "2026",
    description:
      "Aplicación web enfocada al público como un catálogo digital de propiedades disponibles.",
    tech: ["TypeScript", "Next.js"],
    image: "proyecto-redbrokers-catalogo.webp",
    alt: "Captura del catálogo digital de propiedades de RedBrokers para el público",
    demo: "https://catalogo.redbrokers.cl/",
    code: "",
    country: "chile",
  },
  {
    title: "Maremonte Propiedades - Web App - Fullstack",
    year: "2026",
    description:
      "Sitio web para una inmobiliaria. Incluye un panel administrativo para gestión de propiedades.",
    tech: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
    image: "proyecto-maremonte.webp",
    alt: "Captura del sitio web de la inmobiliaria Maremonte Propiedades, con panel administrativo de propiedades",
    demo: "https://redbrokers-client-maremonte-propied.vercel.app/",
    code: "",
    country: "chile",
  },
  {
    title: "BeFlatMates - Web App - Fullstack",
    year: "2025",
    description:
      "Herramienta para encontrar roomies en Santiago. Full-stack con diseño responsivo, Mobile First y chatbot.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Chatbot"],
    image: "proyecto-beflatmates-app.webp",
    alt: "Captura de la aplicación web BeFlatMates para encontrar roomies en Santiago de Chile",
    demo: "https://beflatmates.cl/",
    country: "chile",
  },
  {
    title: "BeFlatMates - Landing",
    year: "2025",
    description:
      "Landing de BeFlatMates.cl. Herramienta para encontrar roomies en Santiago. Full-stack con diseño responsivo y Mobile First.",
    tech: ["React", "TypeScript", "Node.js", "Express"],
    image: "proyecto-beflatmates-landing.webp",
    alt: "Captura de la landing page de BeFlatMates, herramienta para encontrar roomies en Santiago",
    demo: "https://beflatmates.com/",
    country: "chile",
  },
  {
    title: "Dearpaoo E-commerce - Web App - Fullstack",
    year: "2026",
    description:
      "Tienda en linea fullstack con panel administrativo para gestión de productos y un blog.",
    tech: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
    image: "proyecto-dearpaoo.webp",
    alt: "Captura de la tienda online Dearpaoo, con panel administrativo de productos y blog",
    demo: "https://www.dearpaoo.com/",
    code: "",
    country: "chile",
  },
  {
    title: "Hogarplus - Web App - Fullstack",
    year: "2026",
    description:
      "Sitio web enfocado a inmobiliarias. Incluye panel administrativo para gestión de corredores y propiedades, y un chatbot.",
    tech: ["TypeScript", "Next.js", "Prisma", "Chatbot"],
    image: "proyecto-hogarplus.webp",
    alt: "Captura del sitio web inmobiliario Hogarplus, con gestión de corredores y propiedades",
    demo: "https://hogarplus.vercel.app/",
    country: "chile",
  },
  {
    title: "Hospital Clínico del Valle - Landing",
    year: "2026",
    description:
      "Landing institucional para hospital clínico con servicios médicos e información de contacto.",
    tech: ["HTML", "CSS", "JavaScript", "Astro"],
    image: "proyecto-hospital.webp",
    alt: "Captura de la landing page institucional del Hospital Clínico del Valle, con servicios médicos y contacto",
    demo: "https://hospitalclinicodelvalle.netlify.app/",
    country: "venezuela",
  },
  {
    title: "QBO Asesorías - Landing",
    year: "2026",
    description:
      "Landing para una agencia de asesoría tributaria en España.",
    tech: ["HTML", "CSS", "JavaScript", "Astro"],
    image: "proyecto-qboasesorias.webp",
    alt: "Captura de la landing page de QBO Asesorías, agencia de asesoría tributaria en España",
    demo: "https://asesoriaqbo.es/",
    country: "espana",
  },
  {
    title: "Price Optimizer Pro - Web App - Frontend",
    year: "2025",
    description:
      "Dashboard para gestión de inventario en Amazon/eBay. Arquitectura Atomic Design con métricas de precios y ventas.",
    tech: ["React", "TypeScript", "Shadcn/UI", "Tailwind CSS"],
    image: "proyecto-repricer-app.webp",
    alt: "Captura del dashboard de Price Optimizer Pro para gestionar inventario y precios en Amazon y eBay",
    demo: "https://upwork-first-project.netlify.app/",
    featured: false,
    country: "usa",
  },
  {
    title: "Price Optimizer Pro - Landing",
    year: "2025",
    description:
      "Landing para Price Optimizer Pro. Dashboard para gestión de inventario en Amazon/eBay. Arquitectura Atomic Design con métricas de precios y ventas.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    image: "proyecto-repricer-lading.webp",
    alt: "Captura de la landing page de Price Optimizer Pro, herramienta de gestión de precios para Amazon y eBay",
    demo: "https://upwork-first-landing-demo.netlify.app/",
    featured: false,
    country: "usa",
  },
  {
    title: "Fiberglass Replicas - Landing",
    year: "2026",
    description:
      "Landing page para empresa de réplicas de autos de Formula 1 en fibra de vidrio.",
    tech: ["HTML", "CSS", "JavaScript", "Astro"],
    image: "proyecto-fiberglassReplicas-landing.webp",
    alt: "Captura de la landing page de Fiberglass Replicas, réplicas de autos de Fórmula 1 en fibra de vidrio",
    demo: "https://gngnewtech.com/fiberglass_replicas/index.html",
    country: "usa",
  },
  {
    title: "Francés con Esteban - Landing",
    year: "2025",
    description:
      "Landing para profesor de francés con formulario integrado a WhatsApp.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    image: "proyecto-frances.webp",
    alt: "Captura de la landing page de Francés con Esteban, clases de francés con formulario a WhatsApp",
    demo: "https://frenchclassdemo.netlify.app/",
    country: "francia",
  },
  {
    title: "MAXagua - Landing",
    year: "2025",
    description:
      "Landing page corporativa con Responsive Design para empresa de servicios.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "proyecto-maxagua.webp",
    alt: "Captura de la landing page corporativa de MAXagua, empresa de servicios",
    demo: "https://maxagua-demo.netlify.app/",
    country: "chile",
  },
];

export const projects = projectList.map((project) => ({
  ...project,
  slug: project.image.replace(/^proyecto-/, "").replace(/\.webp$/, ""),
}));

export type Project = (typeof projects)[number];
