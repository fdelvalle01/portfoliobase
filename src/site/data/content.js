import workstation from "../../Assets/Projects/trading-workstation.png";
import workstationLight from "../../Assets/Projects/trading-workstation-light.png";
import workstationTicket from "../../Assets/Projects/trading-workstation-ticket.png";
import sebraht from "../../Assets/Projects/sebraht.png";
import sebrahtSiadus from "../../Assets/Projects/sebraht_siadus.png";
import summitapp from "../../Assets/Projects/summitapp.png";
import stockbar from "../../Assets/Projects/stockbar.png";
import marketDepthLab from "../../Assets/Projects/market-depth-fix-lab.png";
import { AI_SDD_CASE } from "./aiSdd";

/* CV oficial servido como archivo estático desde public/, no empaquetado. */
export const CV_FILENAME = "Francisco-Del-Valle-Senior-Backend-Engineer-CV.pdf";

export const LINKS = {
  github: "https://github.com/fdelvalle01",
  linkedin: "https://www.linkedin.com/in/francisco-d-9b6a01134/",
  email: "fdel_valle01@hotmail.com",
  cv: `${process.env.PUBLIC_URL}/${CV_FILENAME}`,
};

export const NAV = [
  { href: "#casos", es: "Proyectos", en: "Projects" },
  { href: "#como-trabajo", es: "Cómo trabajo", en: "How I work" },
  { href: "#trayectoria", es: "Trayectoria", en: "Career" },
  { href: "#contacto", es: "Contacto", en: "Contact" },
];

export const STATS = [
  { value: "6+", es: "años en tecnología de mercados de capitales", en: "years in capital markets technology" },
  {
    value: "REGIONAL",
    es: "experiencia en proyectos con alcance regional",
    en: "experience contributing to projects with regional reach",
  },
  { value: "CRÍTICOS", es: "sistemas en producción y entornos regulados", en: "critical systems in regulated production environments" },
];

export const TIMELINE = [
  {
    kind: "work",
    range: { es: "AGOSTO 2024 — ACTUALIDAD", en: "AUGUST 2024 — PRESENT" },
    title: { es: "Senior Software Engineer", en: "Senior Software Engineer" },
    place: "Bolsa de Santiago / nuam · Santiago, Chile",
    desc: {
      es: "Diseño y desarrollo de plataformas de trading y mercados de capitales, servicios backend distribuidos, Order Entry, Market Data y conectividad con sistemas de negociación.",
      en: "Design and development of trading and capital markets platforms, distributed backend services, Order Entry, Market Data, and connectivity with trading systems.",
    },
  },
  {
    kind: "work",
    range: { es: "NOVIEMBRE 2021 — AGOSTO 2024", en: "NOVEMBER 2021 — AUGUST 2024" },
    title: { es: "Mid-level Software Engineer", en: "Mid-level Software Engineer" },
    place: "Bolsa de Santiago · Santiago, Chile",
    desc: {
      es: "Desarrollo e integración de servicios backend para aplicaciones de mercados de capitales, APIs, sistemas distribuidos, despliegues, pruebas de integración y resolución de problemas productivos.",
      en: "Development and integration of backend services for capital markets applications, APIs, distributed systems, deployments, integration testing, and production issue resolution.",
    },
  },
  {
    kind: "work",
    range: { es: "MAYO 2020 — NOVIEMBRE 2021", en: "MAY 2020 — NOVEMBER 2021" },
    title: { es: "Junior Software Engineer", en: "Junior Software Engineer" },
    place: "Bolsa de Santiago · Santiago, Chile",
    desc: {
      es: "Desarrollo y mantención de aplicaciones para operaciones del mercado financiero, integraciones, bases de datos y soporte productivo.",
      en: "Development and maintenance of applications for financial-market operations, integrations, databases, and production support.",
    },
  },
  {
    kind: "work",
    range: { es: "FEBRERO 2020 — MARZO 2020", en: "FEBRUARY 2020 — MARCH 2020" },
    title: { es: "Práctica Profesional", en: "Software Engineering Internship" },
    place: "Bolsa de Santiago · Santiago, Chile",
  },
];

export const EDUCATION = [
  { es: "Ingeniería en Informática · INACAP · marzo 2016 — diciembre 2019", en: "Computer Engineering · INACAP · March 2016 — December 2019" },
  { es: "Diplomado en Desarrollo de Aplicaciones Móviles · PUC Chile · septiembre 2022 — abril 2023", en: "Diploma in Mobile Application Development · PUC Chile · September 2022 — April 2023" },
  { es: "English Studies · WorldWide School of English, Nueva Zelanda · agosto 2024 — febrero 2025", en: "English Studies · WorldWide School of English, New Zealand · August 2024 — February 2025" },
  { es: "Español nativo · Inglés B2 — certificación IELTS", en: "Native Spanish · English B2 — IELTS certification" },
];

export const PRINCIPLES = [
  {
    number: "01",
    title: { es: "El modelo de datos viene primero", en: "The data model comes first" },
    text: {
      es: "Antes de construir una interfaz, hay que entender las entidades, sus relaciones y sus reglas. Un modelo confuso termina convirtiéndose en años de parches.",
      en: "Before building an interface, understand the entities, relationships, and rules. A confusing model turns into years of patches.",
    },
  },
  {
    number: "02",
    title: { es: "Todo debe ser trazable", en: "Everything must be traceable" },
    text: {
      es: "Quién hizo qué, cuándo y por qué. En un mercado regulado, la auditoría no es una funcionalidad adicional: es parte del diseño.",
      en: "Who did what, when, and why. In a regulated market, auditability is not an optional feature; it is part of the design.",
    },
  },
  {
    number: "03",
    title: { es: "Cada dato crítico necesita una única autoridad", en: "Every critical fact needs a single authority" },
    text: {
      es: "El backend debe decidir el precio, el estado y el resultado de una operación. El cliente representa la información; no puede convertirse en su fuente de verdad.",
      en: "The backend decides the price, state, and result of an operation. The client presents information; it must not become its source of truth.",
    },
  },
];

export const CASES = [
  {
    img: sebraht,
    categories: ["production", "trading"],
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
      en: "The Dominican Republic's stock exchange (BVRD) needed to modernize its operation with a trading platform on par with regional markets.",
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
    categories: ["production", "platform"],
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
    categories: ["personal"],
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
    categories: ["personal", "trading"],
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
  {
    categories: ["personal", "trading", "platform"],
    img: workstation,
    media: "app",
    mediaBg: "#111316",
    alt: {
      es: "Trading Workstation en Obsidiana: profundidad de COPEC, watchlist e ingreso de órdenes en el laboratorio local",
      en: "Trading Workstation in Obsidiana: COPEC market depth, watchlist and order entry in the local lab",
    },
    kicker: { es: "PROYECTO PROPIO · POC", en: "OWN PROJECT · POC" },
    title: { es: "Trading Workstation — plataforma de trading desde cero", en: "Trading Workstation — a trading platform built from scratch" },
    summary: {
      es: "POC full stack diseñada desde cero con Claude Design y SDD: un escritorio de trading con widgets vinculados, profundidad en tiempo real y motor de calce local.",
      en: "Full stack POC designed from scratch with Claude Design and SDD: a trading desktop with linked widgets, live market depth and a local matching engine.",
    },
    tags: ["React", "Spring Boot", "SDD"],
    context: {
      es: "Convertir mi experiencia en sistemas bursátiles en una plataforma propia para explorar el ciclo completo de una orden: desde el ticket y el libro hasta el backend y el calce. Un laboratorio local donde probar decisiones de arquitectura y de interacción con datos simulados.",
      en: "Turn my experience in exchange systems into a platform of my own to explore an order's full lifecycle: from the ticket and order book to the backend and matching. A local lab for testing architecture and interaction decisions with simulated data.",
    },
    role: {
      es: "Diseño y desarrollo de punta a punta. Usé Claude Design para explorar el sistema visual y SDD (Spec-Driven Development) para guiar la implementación desde especificaciones, historias de usuario y criterios de aceptación. Revisé las propuestas, adapté el diseño a componentes reutilizables y validé el comportamiento con pruebas automatizadas y recorridos de navegador. Documenté las decisiones y el avance en Obsidian.",
      en: "End-to-end design and development. I used Claude Design to explore the visual system and SDD (Spec-Driven Development) to guide implementation through specifications, user stories and acceptance criteria. I reviewed the proposals, adapted the design into reusable components and validated behaviour with automated tests and browser walkthroughs. Decisions and progress are documented in Obsidian.",
    },
    result: {
      es: "POC operativa: workspaces con ventanas ancladas y flotantes, widgets sincronizados por color, libro agregado o por orden y ticket integrado o independiente que conserva el borrador al redimensionar. Temas Obsidiana y Claro, autenticación Keycloak y servicios Java con PostgreSQL y WebSocket. El cierre documentado de esta iteración pasó 459 pruebas y compilación. Kafka, replay durable y Kubernetes son próximos hitos; la POC usa un mercado simulado local.",
      en: "Working POC: workspaces with docked and floating windows, colour-linked widgets, aggregated or order-by-order depth, and embedded or standalone tickets that preserve drafts while resizing. Obsidiana and light themes, Keycloak authentication, and Java services with PostgreSQL and WebSocket. The documented iteration passed 459 tests and a production build. Kafka, durable replay and Kubernetes are next milestones; the POC uses a local simulated market.",
    },
    stack: ["React", "TypeScript", "Dockview", "Spring Boot", "Java", "PostgreSQL", "Keycloak", "WebSocket", "Docker Compose", "Claude Design", "SDD", "Playwright"],
    gallery: [
      { img: workstation, alt: { es: "Escritorio Obsidiana con profundidad, watchlist y ticket independiente", en: "Obsidiana desktop with depth, watchlist and standalone ticket" } },
      { img: workstationLight, alt: { es: "El mismo workspace con el tema Claro", en: "The same workspace in the light theme" } },
      { img: workstationTicket, alt: { es: "Ingreso de órdenes integrado en el widget de profundidad", en: "Order entry embedded in the market depth widget" } },
    ],
    mediaNote: { es: "Capturas reales del laboratorio local · datos simulados · septiembre de 2026", en: "Real screenshots from the local lab · simulated data · September 2026" },
    link: "https://github.com/fdelvalle01/trading-workstation-platform/tree/feat/workstation-v2",
    linkLabel: "projects.repo",
  },
  AI_SDD_CASE,
  {
    id: "market-depth-fix-lab",
    categories: ["personal", "trading", "poc"],
    img: marketDepthLab,
    mediaPosition: "top",
    mediaBg: "#090b0d",
    alt: {
      es: "Market Depth FIX Lab: libro de órdenes de NOVA, ticket límite y ejecuciones con datos sintéticos",
      en: "Market Depth FIX Lab: NOVA order book, limit ticket and executions with synthetic data",
    },
    kicker: { es: "PROYECTO PERSONAL · DEMO EDUCATIVA", en: "PERSONAL PROJECT · EDUCATIONAL DEMO" },
    title: { es: "Market Depth FIX Lab", en: "Market Depth FIX Lab" },
    summary: {
      es: "Laboratorio interactivo para explorar un libro de órdenes, el calce por prioridad precio-tiempo y los ExecutionReports FIX. Demo independiente que funciona en el navegador con datos sintéticos.",
      en: "Interactive lab for exploring an order book, price-time matching and FIX ExecutionReports. A standalone browser demo using synthetic data.",
    },
    tags: ["React", "TypeScript", "FIX"],
    context: {
      es: "Hacer observable el ciclo de una orden sin depender de una plataforma real: cómo cambia la profundidad, qué se ejecuta y cómo ese resultado se representa en FIX. El laboratorio vive como proyecto independiente, accesible desde este portafolio.",
      en: "Make an order's lifecycle observable without relying on a real platform: how depth changes, what gets filled and how that outcome is represented in FIX. The lab is an independent project accessible from this portfolio.",
    },
    role: {
      es: "Proyecto personal con motor de calce, codec FIX e interfaz separados. Escenarios deterministas, libro agregado o por orden, ticket límite y un inspector que genera y valida ExecutionReports, incluidos BodyLength y CheckSum.",
      en: "Personal project with separate matching engine, FIX codec and interface. Deterministic scenarios, aggregate or order-by-order depth, a limit ticket and an inspector that generates and validates ExecutionReports, including BodyLength and CheckSum.",
    },
    result: {
      es: "Demo pública con ejecuciones parciales y completas, remanentes en el libro y cierre de sesión simulada para órdenes DAY. Alcance educativo: un instrumento sintético, sin backend, datos de mercado en vivo ni sesión FIX real.",
      en: "Public demo with partial and complete fills, resting remainders and simulated session close for DAY orders. Educational scope: one synthetic instrument, with no backend, live market data or real FIX session.",
    },
    stack: ["React", "TypeScript", "Vite", "FIXT.1.1", "FIX 5.0 SP2", "Vitest"],
    mediaNote: {
      es: "Captura del proyecto independiente · escenario local con datos sintéticos",
      en: "Screenshot from the standalone project · local scenario with synthetic data",
    },
    demoLink: "https://market-depth-fix-lab.netlify.app/",
    link: "https://github.com/fdelvalle01/market-depth-fix-lab",
    linkLabel: "projects.repo",
  },
];

export const CASE_GROUPS = [
  {
    label: { es: "SISTEMAS EN PRODUCCIÓN EN MERCADOS REGULADOS", en: "PRODUCTION SYSTEMS IN REGULATED MARKETS" },
    indexes: [0, 1],
  },
  {
    label: { es: "PRODUCTOS PROPIOS, DE PUNTA A PUNTA", en: "MY OWN PRODUCTS, END TO END" },
    indexes: [2, 3, 4],
  },
  {
    label: { es: "LABORATORIO DE INGENIERÍA · BETA", en: "ENGINEERING LAB · BETA" },
    indexes: [5, 6],
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

export const CAPABILITIES = [
  { key: "trading", title: { es: "Trading & Financial Systems", en: "Trading & Financial Systems" }, items: ["Trading Systems", "Capital Markets", "FIX Protocol", "Market Data", "Order Entry", "Exchange Connectivity", "WebSockets"] },
  { key: "backend", title: { es: "Backend & Distributed Systems", en: "Backend & Distributed Systems" }, items: ["Java", "Spring Boot", "Golang", "Apache Kafka", "Node.js", "REST APIs", "Event-Driven Architecture", "Distributed Systems"] },
  { key: "platform", title: { es: "Platform & Data", en: "Platform & Data" }, items: ["Kubernetes", "Docker", "PostgreSQL", "SQL Server", "AWS", "Keycloak", "Git"] },
  { key: "frontend", title: { es: "Frontend & Product", en: "Frontend & Product" }, items: ["React", "TypeScript", "JavaScript", "MUI", "Flutter", "Dart", "HTML", "CSS"] },
  { key: "engineering", title: { es: "Engineering", en: "Engineering" }, items: ["System Design", "Software Architecture", "Integration Testing", "Production Support", "Traceability", "Technical Analysis"] },
];

export const AI_TOOLS = ["Claude Code", { es: "Agentes de código", en: "Coding agents" }, { es: "Contexto para agentes", en: "Agent context" }];

/* Diccionario de textos sueltos de la interfaz. */
export const DICT = {
  "nav.cta": { es: "Hablemos", en: "Get in touch" },
  "nav.menu": { es: "Abrir menú", en: "Open menu" },
  "nav.menuClose": { es: "Cerrar menú", en: "Close menu" },

  "hero.status": {
    es: "Santiago, Chile · disponible para oportunidades remotas e internacionales",
    en: "Santiago, Chile · open to remote and international opportunities",
  },
  "hero.hello": { es: "Hola ", en: "Hi there " },
  "hero.lead": {
    es: "Senior Software Engineer especializado en Exchange & Trading Systems. Diseño y construyo soluciones de Order Entry, Market Data, conectividad FIX y arquitecturas distribuidas para mercados financieros.",
    en: "Senior Software Engineer specializing in Exchange & Trading Systems. I design and build Order Entry, Market Data, FIX connectivity, and distributed architectures for financial markets.",
  },
  "hero.title": {
    es: "Construyo los sistemas por donde viaja una orden.",
    en: "I build the systems an order travels through.",
  },
  "hero.projects": { es: "Ver proyectos", en: "View projects" },
  "hero.experience": { es: "Ver experiencia", en: "View experience" },
  "hero.cv": { es: "Ver CV", en: "View CV" },
  "hero.download": { es: "Descargar", en: "Download" },
  "hero.cvDownload": { es: "Descargar CV en PDF", en: "Download CV as PDF" },

  "about.kicker": { es: "SOBRE MÍ", en: "ABOUT" },
  "about.title": { es: "Backend sólido, frontend pulido.", en: "Solid backend, polished frontend." },
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
    es: "Español (nativo) · Inglés B2",
    en: "Spanish (native) · English B2",
  },

  "career.kicker": { es: "TRAYECTORIA", en: "CAREER" },
  "career.title": { es: "De practicante a senior, construyendo cada vez más cerca del core del mercado.", en: "From intern to senior, building closer to the market core at every stage." },
  "career.lead": {
    es: "Una progresión construida sobre operaciones de mercado, integraciones, sistemas distribuidos y plataformas de trading.",
    en: "A progression built on market operations, integrations, distributed systems, and trading platforms.",
  },
  "career.work": { es: "TRABAJO", en: "WORK" },
  "career.education": { es: "FORMACIÓN", en: "EDUCATION" },

  "projects.kicker": { es: "PROYECTOS Y CASOS", en: "PROJECTS & CASES" },
  "projects.title": { es: "Evidencia, no promesas.", en: "Evidence, not promises." },
  "projects.lead": {
    es: "Contribuciones a sistemas regulados, productos propios y experimentos de ingeniería. En cada proyecto explico el problema, mi rol, el resultado y su alcance.",
    en: "Contributions to regulated systems, personal products and engineering experiments. Each project explains the problem, my role, the outcome and its scope.",
  },
  "projects.all": { es: "Todos", en: "All" },
  "projects.production": { es: "Producción", en: "Production" },
  "projects.trading": { es: "Trading", en: "Trading" },
  "projects.platform": { es: "Plataforma", en: "Platform" },
  "projects.personal": { es: "Proyectos personales", en: "Personal projects" },
  "projects.poc": { es: "POC / Ingeniería", en: "POC / Engineering" },
  "projects.confidentiality": { es: "Los casos describen contribuciones públicas y educativas; no exponen arquitectura interna ni información confidencial.", en: "Cases describe public and educational contributions; they do not expose internal architecture or confidential information." },
  "projects.view": { es: "Ver caso", en: "View case" },
  "projects.context": { es: "CONTEXTO", en: "CONTEXT" },
  "projects.role": { es: "MI ROL", en: "MY ROLE" },
  "projects.result": { es: "RESULTADO", en: "OUTCOME" },
  "projects.visit": { es: "Ver el producto", en: "Visit the product" },
  "projects.repo": { es: "Ver el repositorio", en: "View the repository" },
  "projects.demo": { es: "Abrir demo", en: "Open demo" },
  "projects.close": { es: "Cerrar", en: "Close" },

  "stack.title": { es: "Tecnologías y capacidades", en: "Technologies & capabilities" },
  "stack.lead": {
    es: "Organizado por las capacidades que aplico al diseñar, integrar y soportar sistemas de mercado.",
    en: "Organized by the capabilities I apply when designing, integrating, and supporting market systems.",
  },
  "stack.frontend": { es: "FRONTEND", en: "FRONTEND" },
  "stack.backend": { es: "BACKEND", en: "BACKEND" },
  "stack.tools": { es: "DATOS Y HERRAMIENTAS", en: "DATA & TOOLS" },
  "stack.ai": { es: "IA Y AGENTES", en: "AI & AGENTS" },
  "stack.level.daily": { es: "Uso diario", en: "Daily" },
  "stack.level.production": { es: "Experiencia en producción", en: "Production experience" },
  "stack.level.complementary": { es: "Complementario", en: "Complementary" },
  "stack.aiTools": { es: "Herramientas de desarrollo asistido", en: "AI-assisted development tools" },

  "contact.kicker": { es: "CONTACTO", en: "CONTACT" },
  "contact.title": {
    es: "El siguiente paso.",
    en: "The next step.",
  },
  "contact.lead": {
    es: "Disponible para proyectos freelance remotos y consultoría técnica en backend, fintech e integraciones de trading. Puedo ayudarte a revisar arquitectura, diseñar APIs y conexiones, mejorar sistemas existentes o convertir una idea en una solución funcional.",
    en: "Available for remote freelance projects and technical consulting in backend, fintech and trading integrations. I can help review architecture, design APIs and connections, improve existing systems or turn an idea into a working solution.",
  },
  "contact.name": { es: "Nombre", en: "Name" },
  "contact.company": { es: "Empresa (opcional)", en: "Company (optional)" },
  "contact.message": { es: "Mensaje", en: "Message" },
  "contact.send": { es: "Enviar mensaje", en: "Send message" },
  "contact.sent": { es: "Abriendo tu aplicación de correo…", en: "Opening your email app…" },
  "contact.subject": { es: "Contacto desde el portafolio", en: "Contact from your portfolio" },

  "contact.summary": {
    es: "Estoy abierto a oportunidades senior remotas e internacionales en Exchange & Trading Systems, Backend Engineering, FinTech y Distributed Systems. También evalúo consultoría técnica en integraciones, APIs y sistemas críticos.",
    en: "I am open to senior remote and international opportunities in Exchange & Trading Systems, Backend Engineering, FinTech, and Distributed Systems. I also consider technical consulting engagements involving integrations, APIs, and critical systems.",
  },
  "contact.hiringTitle": { es: "Oportunidades laborales", en: "Hiring opportunities" },
  "contact.hiringLead": { es: "Revisa mi experiencia o escríbeme por LinkedIn.", en: "Review my experience or contact me on LinkedIn." },
  "contact.consultingTitle": { es: "Proyectos y consultoría", en: "Projects & consulting" },
  "contact.consultingLead": { es: "Hablemos de arquitectura, APIs, integraciones o sistemas que no pueden fallar.", en: "Let's discuss architecture, APIs, integrations or systems that cannot fail." },
  "contact.linkedin": { es: "Contactar por LinkedIn", en: "Contact on LinkedIn" },
  "contact.email": { es: "Escribir por email", en: "Write an email" },

  "footer.copy": {
    es: "Diseñado y desarrollado en Santiago",
    en: "Designed and developed in Santiago",
  },
};
