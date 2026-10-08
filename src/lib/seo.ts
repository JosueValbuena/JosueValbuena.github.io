export const siteUrl = "https://josuevalbuena.com";

export const whatsappUrl = (message: string) =>
  `https://wa.me/56941412775?text=${encodeURIComponent(message)}`;

export const baseJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Josué Valbuena",
      inLanguage: "es-CL",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Josué Valbuena",
      alternateName: "Josué Valbuena Huerta",
      url: `${siteUrl}/`,
      image: `${siteUrl}/images/og-image.jpg`,
      jobTitle: "Desarrollador Web Full-Stack",
      email: "mailto:joshvlbn@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressCountry: "CL",
      },
      worksFor: [
        // { "@type": "Organization", name: "sbpay" },
        // { "@type": "Organization", name: "Kibernum" },
        { "@type": "Organization", name: "FirmaVirtual" },
      ],
      knowsAbout: [
        "Desarrollo web",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "E-commerce",
        "Chatbots con IA",
        "Agentes de IA",
        "Automatización de procesos",
      ],
      sameAs: [
        "https://github.com/JosueValbuena",
        "https://www.linkedin.com/in/josuevalbuena",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Josué Valbuena - Desarrollo Web e Integraciones con IA",
      url: `${siteUrl}/`,
      image: `${siteUrl}/images/og-image.jpg`,
      founder: { "@id": `${siteUrl}/#person` },
      areaServed: { "@type": "Country", name: "Chile" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressCountry: "CL",
      },
      serviceType: [
        "Desarrollo de sitios web",
        "Tiendas online y e-commerce",
        "Aplicaciones web a medida",
        "Chatbots y agentes de IA",
        "Automatización de procesos",
      ],
    },
  ],
};
