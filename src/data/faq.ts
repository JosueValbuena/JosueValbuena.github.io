// Preguntas frecuentes generales (home). Las de cada servicio viven en servicePages.ts.
export interface FaqItem {
  question: string;
  answer: string;
}

export const generalFaq: FaqItem[] = [
  {
    question: "¿Qué tipo de proyectos desarrollas?",
    answer:
      "Páginas web, tiendas online, sistemas y aplicaciones web a medida, chatbots y agentes de IA, y automatización de procesos. También rediseño sitios que ya existen.",
  },
  {
    question: "¿Cuánto cuesta un proyecto?",
    answer:
      "Depende del alcance: funciones, cantidad de páginas e integraciones. Después de conversar contigo te envío una propuesta con el precio y el plazo antes de empezar.",
  },
  {
    question: "¿Cuánto demora?",
    answer:
      "Depende del tamaño del proyecto. El plazo estimado va en la propuesta y, durante el desarrollo, te muestro avances para que veas cómo va quedando.",
  },
  {
    question: "¿Trabajas con clientes de fuera de Chile?",
    answer:
      "Sí. He trabajado con clientes de Chile, Estados Unidos, España, Francia y Venezuela, de forma remota.",
  },
  {
    question: "¿Necesito saber de tecnología para trabajar contigo?",
    answer:
      "No. Te explico todo en un lenguaje claro y me encargo de las decisiones técnicas. Tú solo me cuentas qué necesita tu negocio.",
  },
  {
    question: "¿Cómo puedo integrar IA en mi negocio?",
    answer:
      "Lo más habitual es un chatbot que atienda consultas de tus clientes o una automatización que ahorre trabajo repetitivo. En la conversación inicial vemos qué tiene sentido para ti.",
  },
  {
    question: "¿Me ayudas después de publicar el proyecto?",
    answer:
      "Sí. Una vez lanzado, sigo disponible para resolver dudas y hacer ajustes.",
  },
];
