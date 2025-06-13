// DOM Elements
const body = document.body;
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const themeToggle = document.querySelector('.theme-toggle');
const langToggle = document.querySelector('.lang-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const scrollTopBtn = document.getElementById('scroll-top-btn');
const currentYearEl = document.getElementById('current-year');

// Project data
const projects = [
  {
    id: 1,
    title: 'Landing Page MAXagua',
    year: '2025',
    description: 'Proyecto para la empresa MAXagua. Consiste en una landing page para mostrar quien es la empresa, que hace, que ofrece y como lo hace. Se implemento con HTML, CSS, y conceptos como Responsive Design.',
    image: './assets/img/proyecto-1-maxagua.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    demoUrl: 'https://maxagua-demo.netlify.app/',
    codeUrl: '',
    type: 'frontend'
  },
  {
    id: 2,
    title: 'E-commerce(En proceso)',
    year: '2024',
    description: 'Proyecto fullstack de un ecommerce donde además se utiliza una librería de componentes para React llamada Material UI. El proyecto contará con todas las funcionalidades básicas de un ecommerce.',
    image: './assets/img/proyecto_en_construccion.PNG',
    tags: ['MERN'],
    demoUrl: 'https://coderhouse-fullstack-jv.netlify.app/',
    codeUrl: 'https://github.com/JosueValbuena/CoderHouse-BackEnd-FrontEnd',
    type: 'fullstack'
  },
  {
    id: 3,
    title: 'Proyecto Be Flat Mates (En proceso)',
    year: '2024',
    description: 'Proyecto que consiste en ser una herramienta facil de usar para encontrar roomies en santiago. Se emplea responsive design, mobile first y estara hecho con MERN y Typescript.',
    image: './assets/img/proyecto-3-beflatmates.png',
    tags: ['MERN', 'TypeScript'],
    demoUrl: 'https://beflatmates.netlify.app/',
    codeUrl: '',
    type: 'frontend'
  },
  {
    id: 4,
    title: 'Amazon repricer',
    year: '2025',
    description: 'Proyecto desarrollado para un cliente real a través de Upwork. Se trata de un panel de administración con gestión de inventario para productos en plataformas de comercio electrónico como Amazon y PayPal.',
    image: './assets/img/proyecto-4-amazonrepricer.png',
    tags: ['Typescript', 'ReactJS', 'TailwindCss', 'Shadcn'],
    demoUrl: 'https://upwork-first-project.netlify.app/',
    codeUrl: '',
    type: 'fullstack'
  }
  /* {
    id: 4,
    title: 'Nombre del Proyecto 6',
    year: '2021',
    description: 'Breve descripción del proyecto y las tecnologías utilizadas para su desarrollo.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    codeUrl: '#',
    type: 'fullstack'
  } */
];

// Translations
const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hello!",
    "hero.iam": "I'm",
    "hero.profession": "Web Developer",
    "hero.description": "Passionate about creating modern and functional web experiences. Specialized in full-stack development with JavaScript and its frameworks.",
    "hero.contact": "Contact Me",
    "hero.projects": "View Projects",

    // Skills Section
    "skills.title": "Technologies",
    "skills.subtitle": "Tools and languages I work with",

    // Education Section
    "education.title": "Education",
    "education.subtitle": "Academic background and certifications",
    "education.viewCertificate": "View certificate",
    "education.languages": "Languages",
    "education.spanish": "Spanish",
    "education.spanish.level": "Native",
    "education.english": "English",
    "education.english.level": "Pre-Intermediate",

    // Projects Section
    "projects.title": "Projects",
    "projects.subtitle": "Featured work for real clients",
    "projects.all": "All",
    "projects.frontend": "Frontend",
    "projects.fullstack": "Full Stack",
    "projects.projectName": "Project Name",
    "projects.description": "Brief description of the project and the technologies used for its development.",
    "projects.demo": "Demo",
    "projects.code": "Code",

    // Experience Section
    "experience.title": "Work experience",
    "experience.subtitle": "Companies I have worked with",
    "experience.position": "About position",
    "experience.positionDescription": "Design and development of interactive web interfaces using React.js, HTML5, CSS3, and JavaScript to enhance the user experience on electronic platforms. I work closely with the design team to translate mockups into dynamic and responsive user interfaces, ensuring cross-browser and cross-device compatibility.",
    "experience.technologies": 'Technologies',

    // Contact Section
    "contact.title": "Contact",
    "contact.subtitle": "Interested in working together? Let's talk!",
    "contact.name": "Name",
    "contact.name.placeholder": "Your name",
    "contact.email": "Email",
    "contact.email.placeholder": "your@email.com",
    "contact.message": "Message",
    "contact.message.placeholder": "How can I help you?",
    "contact.send": "Send message",
    "contact.info": "Contact information",
    "contact.availability": "Availability",
    "contact.availability.text": "Currently available for freelance projects.",

    // Footer
    "footer.developer": "Full Stack Web Developer",
    "footer.rights": "All rights reserved."
  },
  es: {
    // Navigation
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.education": "Educación",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.greeting": "¡Hola!",
    "hero.iam": "Soy",
    "hero.profession": "Desarrollador Web",
    "hero.description": "Apasionado por crear experiencias web modernas y funcionales. Especializado en desarrollo full-stack con JavaScript y sus frameworks.",
    "hero.contact": "Contáctame",
    "hero.projects": "Ver Proyectos",

    // Skills Section
    "skills.title": "Tecnologías Manejadas",
    "skills.subtitle": "Herramientas y lenguajes con los que trabajo",

    // Education Section
    "education.title": "Educación",
    "education.subtitle": "Formación académica y certificaciones",
    "education.viewCertificate": "Ver certificado",
    "education.languages": "Idiomas",
    "education.spanish": "Español",
    "education.spanish.level": "Nativo",
    "education.english": "Inglés",
    "education.english.level": "Pre-Intermedio",

    // Projects Section
    "projects.title": "Proyectos",
    "projects.subtitle": "Trabajos destacados para clientes reales",
    "projects.all": "Todos",
    "projects.frontend": "Frontend",
    "projects.fullstack": "Full Stack",
    "projects.projectName": "Nombre del Proyecto",
    "projects.description": "Breve descripción del proyecto y las tecnologías utilizadas para su desarrollo.",
    "projects.demo": "Demo",
    "projects.code": "Código",

    // Experience Section
    "experience.title": "Experiencia laboral",
    "experience.subtitle": "Empresas con las que he trabajado",
    "experience.position": 'Funciones',
    "experience.positionDescription": "Diseño y desarrollo de interfaces web interactivas utilizando React.js, HTML5, CSS3 y JavaScript para mejorar la experiencia de usuario en plataformas electrónicas. Colaboro estrechamente con el equipo de diseño para traducir maquetas en interfaces de usuario dinámicas y responsivas, asegurando la compatibilidad entre navegadores y dispositivos.",
    "experience.technologies": 'Tecnologias',

    // Contact Section
    "contact.title": "Contacto",
    "contact.subtitle": "¿Interesado en trabajar juntos? ¡Hablemos!",
    "contact.name": "Nombre",
    "contact.name.placeholder": "Tu nombre",
    "contact.email": "Email",
    "contact.email.placeholder": "tu@email.com",
    "contact.message": "Mensaje",
    "contact.message.placeholder": "¿En qué puedo ayudarte?",
    "contact.send": "Enviar mensaje",
    "contact.info": "Información de contacto",
    "contact.availability": "Disponibilidad",
    "contact.availability.text": "Actualmente disponible para proyectos freelance.",

    // Footer
    "footer.developer": "Desarrollador Web Full Stack",
    "footer.rights": "Todos los derechos reservados."
  }
};

// Initialize
document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  currentYearEl.textContent = new Date().getFullYear();

  // Initialize projects
  renderProjects();

  // Load saved preferences
  loadThemePreference();
  loadLanguagePreference();

  // Set active section based on scroll position
  updateActiveSection();
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', function () {
  body.classList.toggle('mobile-menu-open');
});

// Theme Toggle
themeToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  saveThemePreference();
});

// Language Toggle
langToggle.addEventListener('click', function () {
  const currentLang = langToggle.querySelector('span').textContent;
  const newLang = currentLang === 'EN' ? 'ES' : 'EN';

  langToggle.querySelector('span').textContent = newLang;
  updateLanguage(newLang.toLowerCase());
  saveLanguagePreference(newLang.toLowerCase());
});

// Navigation Links
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    const sectionId = this.getAttribute('data-section');
    scrollToSection(sectionId);
  });
});

// Tab Buttons
tabBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    const tabId = this.getAttribute('data-tab');

    // Update active tab button
    tabBtns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    // Show corresponding tab content
    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.getAttribute('data-tab') === tabId) {
        content.classList.add('active');
      }
    });
  });
});

// Scroll event for updating active section and showing scroll-to-top button
window.addEventListener('scroll', function () {
  updateActiveSection();
  toggleScrollTopButton();
});

// Scroll to top button
scrollTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Form submitted! This is a demo, so no data was actually sent.');
    this.reset();
  });
}

// Functions
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }

  // Close mobile menu if open
  body.classList.remove('mobile-menu-open');
}

function updateActiveSection() {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100; // Add offset for header

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add active class to corresponding link
      document.querySelectorAll(`.nav-link[data-section="${sectionId}"]`).forEach(link => {
        link.classList.add('active');
      });
    }
  });
}

function toggleScrollTopButton() {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }
}

function saveThemePreference() {
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function loadLanguagePreference() {
  const savedLang = localStorage.getItem('language');
  if (savedLang) {
    updateLanguage(savedLang);
    langToggle.querySelector('span').textContent = savedLang.toUpperCase() === 'ES' ? 'EN' : 'ES';
  }
}

function saveLanguagePreference(lang) {
  localStorage.setItem('language', lang);
}

function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  // Update project content if language changes
  renderProjects(lang);
}

function renderProjects(lang = localStorage.getItem('language') || 'es') {
  // Get all project grid containers
  const allProjectsGrid = document.querySelector('.tab-content[data-tab="all"] .projects-grid');
  const frontendProjectsGrid = document.querySelector('.tab-content[data-tab="frontend"] .projects-grid');
  const fullstackProjectsGrid = document.querySelector('.tab-content[data-tab="fullstack"] .projects-grid');

  // Clear existing projects
  if (allProjectsGrid) allProjectsGrid.innerHTML = '';
  if (frontendProjectsGrid) frontendProjectsGrid.innerHTML = '';
  if (fullstackProjectsGrid) fullstackProjectsGrid.innerHTML = '';

  // Render projects
  projects.forEach(project => {
    const projectCard = createProjectCard(project, lang);

    // Add to all projects tab
    if (allProjectsGrid) {
      allProjectsGrid.appendChild(projectCard.cloneNode(true));
    }

    // Add to specific category tab
    if (project.type === 'frontend' && frontendProjectsGrid) {
      frontendProjectsGrid.appendChild(projectCard.cloneNode(true));
    } else if (project.type === 'fullstack' && fullstackProjectsGrid) {
      fullstackProjectsGrid.appendChild(projectCard.cloneNode(true));
    }
  });
}

function createProjectCard(project, lang) {
  const card = document.createElement('div');
  card.className = 'card project-card';

  const demoText = translations[lang]['projects.demo'] || 'Demo';
  const codeText = translations[lang]['projects.code'] || 'Código';

  card.innerHTML = `
    <div class="project-image-container">
      <img src="${project.image}" alt="${project.title}" class="project-image">
    </div>
    <div class="card-content">
      <div class="project-header">
        <h3 class="project-title">${project.title}</h3>
        <span class="project-year">${project.year}</span>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      <div class="project-actions">
        <a href="${project.demoUrl}" class="btn btn-outline project-btn" rel="noopener noreferrer">${demoText}</a>
        ${project?.codeUrl && `<a href="${project.codeUrl}" class="btn btn-outline project-btn">${codeText}</a>`}
      </div>
    </div>
  `;

  return card;
}