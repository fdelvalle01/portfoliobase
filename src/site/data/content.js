import sebraht from "../../Assets/Projects/sebraht.png";
import sebrahtSiadus from "../../Assets/Projects/sebraht_siadus.png";
import summitapp from "../../Assets/Projects/summitapp.png";
import stockbar from "../../Assets/Projects/stockbar.png";

/* CV oficial servido como archivo estático desde public/, no empaquetado. */
export const CV_FILENAME = "Francisco-Del-Valle-Senior-Backend-Engineer-CV.pdf";

export const LINKS = {
  github: "https://github.com/fdelvalle01",
  linkedin: "https://www.linkedin.com/in/francisco-d-9b6a01134/",
  email: "fdel_valle01@hotmail.com",
  cv: `${process.env.PUBLIC_URL}/${CV_FILENAME}`,
};

export const NAV = [
  { href: "#sobre-mi", es: "Sobre mí", en: "About" },
  { href: "#trayectoria", es: "Trayectoria", en: "Career" },
  { href: "#proyectos", es: "Proyectos", en: "Projects" },
  { href: "#stack", es: "Stack", en: "Stack" },
  { href: "#contacto", es: "Contacto", en: "Contact" },
];

export const HERO_CHIPS = ["Java", "Spring Boot", "Node.js", "React", "SQL Server", "AWS/Kubernetes"];

export const STATS = [
  { value: "6+", es: "años en infraestructura bursátil", en: "years in exchange infrastructure" },
  {
    value: "4",
    es: "mercados: Chile, Perú, Colombia y Rep. Dominicana",
    en: "markets: Chile, Peru, Colombia and Dominican Rep.",
  },
  { value: "3", es: "roles en Bolsa de Santiago / nuam", en: "roles at Bolsa de Santiago / nuam" },
  { value: "24/7", es: "sistemas en producción y soporte", en: "systems live in production" },
];

export const TIMELINE = [
  {
    kind: "work",
    range: { es: "2022 — ACTUALIDAD", en: "2022 — PRESENT" },
    title: { es: "Senior Software Engineer", en: "Senior Software Engineer" },
    place: "Bolsa de Santiago / nuam exchange · Santiago, Chile",
    desc: {
      es: "Desarrollo end-to-end sobre la plataforma de trading Sebra HT: servicios, modelos de datos e interfaces de administración.",
      en: "End-to-end development on the Sebra HT trading platform: services, data models and admin interfaces.",
    },
  },
  {
    kind: "education",
    range: { es: "2024 — 2025", en: "2024 — 2025" },
    title: {
      es: "6 meses de inglés en Nueva Zelanda",
      en: "Six months of English in New Zealand",
    },
    place: { es: "WorldWide School · Nueva Zelanda", en: "WorldWide School · New Zealand" },
  },
  {
    kind: "education",
    range: { es: "2022 — 2023", en: "2022 — 2023" },
    title: {
      es: "Diplomado en Desarrollo de Aplicaciones Móviles",
      en: "Diploma in Mobile Application Development",
    },
    place: "Pontificia Universidad Católica de Chile · Santiago",
  },
  {
    kind: "education",
    range: { es: "2021 — 2022", en: "2021 — 2022" },
    title: { es: "Inglés Elemental A2", en: "Elementary English A2" },
    place: "Santiago, Chile",
  },
  {
    kind: "work",
    range: { es: "2020 — 2022", en: "2020 — 2022" },
    title: { es: "Programador", en: "Programmer" },
    place: "Bolsa de Santiago · Santiago, Chile",
  },
  {
    kind: "work",
    range: { es: "2020", en: "2020" },
    title: { es: "Práctica profesional", en: "Professional practice" },
    place: "Bolsa de Santiago · Santiago, Chile",
  },
  {
    kind: "education",
    range: { es: "2016 — 2020", en: "2016 — 2020" },
    title: { es: "Ingeniería en Informática", en: "Informatics Engineering" },
    place: "INACAP · Santiago, Chile",
  },
];

export const CASES = [
  {
    img: sebraht,
    alt: {
      es: "Plataforma de trading de la Bolsa y Mercado de Valores de la República Dominicana",
      en: "Trading platform of the Dominican Republic stock exchange",
    },
    kicker: { es: "TRADING · 2023", en: "TRADING · 2023" },
    title: {
      es: "Plataforma bursátil para el mercado dominicano",
      en: "Stock trading platform for the Dominican market",
    },
    summary: {
      es: "Integración y puesta en operación de la plataforma de trading para BVRD, la bolsa de la República Dominicana.",
      en: "Integration and go-live of the trading platform for BVRD, the Dominican Republic's stock exchange.",
    },
    tags: ["Java", "React", "SQL Server"],
    context: {
      es: "La Bolsa y Mercado de Valores de la República Dominicana (BVRD) necesitaba modernizar su operación con una plataforma de negociación al nivel de los mercados de la región.",
      en: "The Dominican Republic's stock exchange (BVRD) needed to modernise its operation with a trading platform on par with regional markets.",
    },
    role: {
      es: "Participé en el desarrollo y la integración de la plataforma: adaptación de componentes, ajustes de reglas de negocio locales y puesta en marcha junto al equipo de la bolsa.",
      en: "I took part in developing and integrating the platform: adapting components, tuning local business rules and going live alongside the exchange team.",
    },
    result: {
      es: "La plataforma quedó integrada y en operación en el mercado dominicano, con las reglas de negocio locales implementadas y la puesta en marcha realizada junto al equipo de la bolsa.",
      en: "The platform was integrated and put into operation in the Dominican market, with local business rules implemented and go-live carried out alongside the exchange team.",
    },
    stack: ["Java", "React", "SQL Server", "REST"],
    link: "https://bvrd.com.do/bvrd-bsc/",
  },
  {
    img: sebrahtSiadus,
    alt: {
      es: "Módulo de gestión de usuarios y entidades de la plataforma Sebra HT",
      en: "User and entity management module of the Sebra HT platform",
    },
    kicker: { es: "PLATAFORMA · 2022", en: "PLATFORM · 2022" },
    title: {
      es: "Gestión de usuarios y entidades de Sebra HT",
      en: "User & entity management for Sebra HT",
    },
    summary: {
      es: "Desarrollador líder del módulo donde se crean y administran a diario todas las entidades del sistema de trading.",
      en: "Lead developer of the module where every trading entity is created and managed daily.",
    },
    tags: ["Node.js", "LoopBack", "React"],
    context: {
      es: "Toda la operación de la plataforma de trading depende de un módulo donde se crean y administran diariamente las entidades del sistema: usuarios, corredoras, permisos y perfiles.",
      en: "The whole trading platform depends on one module where system entities — users, brokers, permissions and profiles — are created and managed every day.",
    },
    role: {
      es: "Desarrollador líder: diseñé el modelo de datos, los servicios y la interfaz de administración, y definí el manejo de permisos y auditoría.",
      en: "Lead developer: I designed the data model, the services and the admin interface, and defined permissions and audit handling.",
    },
    result: {
      es: "Administración centralizada y trazable de todas las entidades del sistema de trading, con un punto único de verdad y auditoría de los cambios.",
      en: "Centralised and traceable administration of every trading-system entity, with a single source of truth and an audit trail of changes.",
    },
    stack: ["Node.js", "LoopBack", "React", "SQL Server"],
    link: "",
  },
  {
    img: summitapp,
    media: "app",
    mediaBg: "#151725",
    alt: {
      es: "Pantalla de inicio de Summit en tema claro y oscuro, con actividades de montaña",
      en: "Summit home screen in light and dark themes, showing mountain activities",
    },
    kicker: { es: "PRODUCTO PROPIO · EN CURSO", en: "OWN PRODUCT · ONGOING" },
    title: {
      es: "Summit — app outdoor para Chile",
      en: "Summit — outdoor app for Chile",
    },
    summary: {
      es: "Producto full stack propio: Flutter + Spring Boot para descubrir, crear y unirse a salidas de montaña, y coordinarse por chat.",
      en: "My own full stack product: Flutter + Spring Boot to discover, create and join mountain outings, and coordinate over chat.",
    },
    tags: ["Flutter", "Spring Boot", "PostgreSQL"],
    context: {
      es: "Salir a la montaña en Chile se coordina hoy en grupos de WhatsApp e Instagram: cupos que nadie controla, información dispersa y cero reputación verificable de quien organiza. Summit nace para que una salida grupal sea confiable de punta a punta.",
      en: "Mountain outings in Chile are coordinated over WhatsApp and Instagram groups: uncontrolled spots, scattered information and no verifiable reputation for whoever organises. Summit exists to make a group outing trustworthy end to end.",
    },
    role: {
      es: "Diseño y desarrollo completo, solo: app Flutter (móvil y web) con arquitectura feature-first, API Spring Boot 3 sobre Java 21 con autenticación JWT, y PostgreSQL con migraciones versionadas en Flyway. También el sistema visual oscuro y el onboarding.",
      en: "Full design and development, solo: a Flutter app (mobile and web) with feature-first architecture, a Spring Boot 3 API on Java 21 with JWT authentication, and PostgreSQL with versioned Flyway migrations. Also the dark design system and the onboarding flow.",
    },
    result: {
      es: "Núcleo social funcionando end-to-end: registro con JWT, onboarding de perfil, actividades reales con creación, edición, inscripción y cancelación, gestión de participantes y chat por actividad. Hoy en alpha, con el roadmap apuntando a progresión verificable por participación real.",
      en: "A social core working end to end: JWT sign-up, profile onboarding, real activities with creation, editing, join and cancel, participant management and per-activity chat. Currently in alpha, with the roadmap aiming at progression verified by real participation.",
    },
    stack: ["Flutter", "Dart", "Spring Boot", "Java 21", "PostgreSQL", "Flyway", "JWT"],
    link: "https://github.com/fdelvalle01/SummitAppOutdoor",
    linkLabel: "projects.repo",
  },
  {
    img: stockbar,
    media: "app",
    mediaBg: "#120f0d",
    alt: {
      es: "Trading desktop de Stock Bar Exchange con las ventanas Market Board, Product Detail y Order Ticket",
      en: "Stock Bar Exchange trading desktop with the Market Board, Product Detail and Order Ticket windows",
    },
    kicker: { es: "PROYECTO PROPIO · DEMO", en: "OWN PROJECT · DEMO" },
    title: {
      es: "Stock Bar Exchange — un bar operado como bolsa",
      en: "Stock Bar Exchange — a bar traded like an exchange",
    },
    summary: {
      es: "Demo full stack donde los productos de un bar se negocian como instrumentos financieros, sobre un escritorio de trading con ventanas.",
      en: "Full stack demo where a bar's products are traded like financial instruments, on a windowed trading desktop.",
    },
    tags: ["React", "Spring Boot", "Keycloak"],
    context: {
      es: "Quería llevar lo que hago a diario en infraestructura bursátil a un dominio que se explica en una frase: las cervezas de un bar suben y bajan de precio según la demanda real, y se compran desde una terminal como la de un operador.",
      en: "I wanted to take what I do daily in exchange infrastructure into a domain that explains itself in one sentence: a bar's beers rise and fall in price with real demand, and are bought from a trader-style terminal.",
    },
    role: {
      es: "Proyecto completo, solo. Frontend React 18 + TypeScript sobre Vite, con un Trading Desktop de ventanas movibles donde corren Market Board, Order Ticket, Product Detail, My Orders y los controles de administración. Backend Spring Boot 3 / Java 17 como única autoridad de precios, con motor de precios por schedulers, historial y bitácora de eventos. Keycloak con roles VIEWER / TRADER / ADMIN_BAR y todo el entorno levantado con Docker Compose.",
      en: "Whole project, solo. React 18 + TypeScript frontend on Vite, with a Trading Desktop of movable windows running Market Board, Order Ticket, Product Detail, My Orders and the admin controls. Spring Boot 3 / Java 17 backend as the single pricing authority, with a scheduler-driven price engine, price history and an event log. Keycloak with VIEWER / TRADER / ADMIN_BAR roles, and the whole environment brought up with Docker Compose.",
    },
    result: {
      es: "Circuito cerrado de punta a punta: el frontend nunca envía el precio — el backend ejecuta contra el precio vigente, lo guarda como snapshot de la orden y mueve el mercado por demanda, por inactividad o por intervención del administrador (crash, boom, reset). Es una demo de portafolio, no un producto: quedan pendientes la venta, el portafolio por usuario y el feed en tiempo real.",
      en: "A closed end-to-end loop: the frontend never sends a price — the backend executes against the live price, stores it as an order snapshot and moves the market by demand, by inactivity or by admin intervention (crash, boom, reset). It's a portfolio demo, not a product: selling, per-user portfolios and a real-time feed are still pending.",
    },
    stack: ["React 18", "TypeScript", "Vite", "Spring Boot 3", "Java 17", "PostgreSQL", "Keycloak", "Docker"],
    link: "https://github.com/fdelvalle01/stock-bar",
    linkLabel: "projects.repo",
  },
];

/* Niveles declarados: agrupan la tecnología por cómo la uso, sin puntajes. */
export const LEVELS = ["daily", "production", "complementary"];

export const STACK = {
  frontend: [
    { name: "React", level: "daily", icon: "react" },
    { name: "JavaScript", level: "daily", icon: "javascript" },
    { name: "HTML / CSS", level: "daily", icon: "html5" },
    { name: "MUI", level: "production", icon: "mui" },
  ],
  backend: [
    { name: "Node.js", level: "daily", icon: "nodejs" },
    { name: "Java", level: "production", icon: "java" },
    { name: "Spring Boot", level: "production", icon: "springboot" },
    { name: "Go", level: "production", icon: "go" },
    { name: "LoopBack", level: "production", icon: "loopback" },
    { name: "Kafka", level: "production", icon: "kafka" },
    { name: "Python", level: "complementary", icon: "python" },
  ],
  tools: [
    { name: "SQL Server", level: "daily", icon: "sqlserver" },
    { name: "Git", level: "daily", icon: "git" },
    { name: "PostgreSQL", level: "production", icon: "postgresql" },
    { name: "AWS", level: "production", icon: "aws" },
    { name: "Kubernetes", level: "production", icon: "kubernetes" },
    { name: "Firebase", level: "production", icon: "firebase" },
    { name: "Linux", level: "complementary", icon: "linux" },
  ],
  ai: [
    { name: "Claude Code", level: "daily", icon: "claudecode" },
    { name: { es: "Agentes de código", en: "Coding agents" }, level: "daily", icon: "agents" },
    { name: { es: "Contexto para agentes", en: "Agent context" }, level: "daily", icon: "context" },
    {
      name: { es: "Base de conocimiento", en: "Knowledge base" },
      level: "production",
      icon: "obsidian",
    },
  ],
};

/* Diccionario de textos sueltos de la interfaz. */
export const DICT = {
  "nav.cta": { es: "Hablemos", en: "Get in touch" },
  "nav.menu": { es: "Abrir menú", en: "Open menu" },
  "nav.menuClose": { es: "Cerrar menú", en: "Close menu" },

  "hero.status": {
    es: "Santiago, Chile · disponible para roles remotos en backend, full stack y fintech",
    en: "Santiago, Chile · open to remote backend, full stack and fintech roles",
  },
  "hero.hello": { es: "Hola ", en: "Hi there " },
  "hero.lead": {
    es: "Senior Software Engineer especializado en sistemas de trading e infraestructura bursátil. Diseño servicios, modelos de datos e interfaces que operan diariamente en mercados latinoamericanos.",
    en: "Senior Software Engineer specialising in trading systems and exchange infrastructure. I design services, data models and interfaces used daily across Latin American markets.",
  },
  "hero.projects": { es: "Ver proyectos", en: "See projects" },
  "hero.cv": { es: "Ver CV", en: "View CV" },
  "hero.download": { es: "Descargar", en: "Download" },
  "hero.cvDownload": { es: "Descargar CV en PDF", en: "Download CV as PDF" },

  "about.kicker": { es: "SOBRE MÍ", en: "ABOUT" },
  "about.title": { es: "Backend serio, frontend cuidado.", en: "Serious backend, careful frontend." },
  "about.p1": {
    es: "Ingeniero en Informática (INACAP) con diplomado en Desarrollo de Aplicaciones Móviles (Pontificia Universidad Católica de Chile). Desde 2020 trabajo en Bolsa de Santiago / nuam exchange, donde pasé de práctica profesional a Senior Software Engineer.",
    en: "Computer Engineer (INACAP) with a diploma in Mobile Application Development (Pontificia Universidad Católica de Chile). Since 2020 I've worked at Bolsa de Santiago / nuam exchange, moving from intern to Senior Software Engineer.",
  },
  "about.p2": {
    es: "Me interesa el software donde un error cuesta: reglas de negocio explícitas, trazabilidad y datos consistentes. Fuera del código: videojuegos, trekking y viajar.",
    en: "I like software where mistakes are expensive: explicit business rules, traceability and consistent data. Outside code: games, hiking and travelling.",
  },
  "about.currently": { es: "Actualmente", en: "Currently" },
  "about.languages": { es: "Idiomas", en: "Languages" },
  "about.languagesValue": {
    es: "Español (nativo) · Inglés B2 (IELTS)",
    en: "Spanish (native) · English B2 (IELTS)",
  },

  "career.kicker": { es: "TRAYECTORIA", en: "CAREER" },
  "career.title": { es: "Una sola línea de tiempo", en: "One single timeline" },
  "career.lead": {
    es: "Trabajo y formación en el mismo eje, en orden cronológico inverso.",
    en: "Work and education on the same axis, newest first.",
  },
  "career.work": { es: "TRABAJO", en: "WORK" },
  "career.education": { es: "FORMACIÓN", en: "EDUCATION" },

  "projects.kicker": { es: "PROYECTOS", en: "PROJECTS" },
  "projects.title": { es: "Trabajo reciente", en: "Recent work" },
  "projects.lead": {
    es: "Cada tarjeta abre un caso: contexto, mi rol, stack y resultado.",
    en: "Each card opens a case study: context, my role, stack and outcome.",
  },
  "projects.view": { es: "Ver caso", en: "View case" },
  "projects.context": { es: "CONTEXTO", en: "CONTEXT" },
  "projects.role": { es: "MI ROL", en: "MY ROLE" },
  "projects.result": { es: "RESULTADO", en: "OUTCOME" },
  "projects.visit": { es: "Ver el producto", en: "Visit the product" },
  "projects.repo": { es: "Ver el repositorio", en: "View the repository" },
  "projects.close": { es: "Cerrar", en: "Close" },

  "stack.title": { es: "Con qué trabajo", en: "What I work with" },
  "stack.lead": {
    es: "Agrupado según cómo lo uso realmente, no según cursos.",
    en: "Grouped by how I actually use it, not by courses.",
  },
  "stack.frontend": { es: "FRONTEND", en: "FRONTEND" },
  "stack.backend": { es: "BACKEND", en: "BACKEND" },
  "stack.tools": { es: "DATOS Y HERRAMIENTAS", en: "DATA & TOOLS" },
  "stack.ai": { es: "IA Y AGENTES", en: "AI & AGENTS" },
  "stack.level.daily": { es: "Uso diario", en: "Daily" },
  "stack.level.production": { es: "Experiencia en producción", en: "Production experience" },
  "stack.level.complementary": { es: "Complementario", en: "Complementary" },

  "contact.kicker": { es: "CONTACTO", en: "CONTACT" },
  "contact.title": { es: "¿Trabajamos juntos?", en: "Let's work together" },
  "contact.lead": {
    es: "Abierto a roles senior remotos y proyectos freelance. Respondo en menos de 48 horas.",
    en: "Open to remote senior engineering roles and freelance projects. I reply within 48 hours.",
  },
  "contact.name": { es: "Nombre", en: "Name" },
  "contact.company": { es: "Empresa (opcional)", en: "Company (optional)" },
  "contact.message": { es: "Mensaje", en: "Message" },
  "contact.send": { es: "Enviar mensaje", en: "Send message" },
  "contact.sent": { es: "Abriendo tu aplicación de correo…", en: "Opening your email app…" },
  "contact.subject": { es: "Contacto desde el portafolio", en: "Contact from your portfolio" },

  "footer.copy": {
    es: "Diseñado y desarrollado en Santiago",
    en: "Designed and developed in Santiago",
  },
};
