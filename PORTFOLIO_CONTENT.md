# Portfolio — Francisco Del Valle

Contenido editorial vigente del portfolio React. El sitio está disponible en español e inglés y sigue este recorrido: `Hero → Proyectos → Cómo trabajo → Trayectoria → Contacto`. La propuesta al final de este archivo todavía no se renderiza.

## 1. Hero / Inicio

### Español

- **Estado:** Santiago, Chile · disponible para oportunidades remotas e internacionales.
- **Título:** Construyo los sistemas por donde viaja una orden.
- **Descripción:** Senior Software Engineer especializado en Exchange & Trading Systems. Diseño y construyo soluciones de Order Entry, Market Data, conectividad FIX y arquitecturas distribuidas para mercados financieros.
- **Pruebas:**
  - `6+` años en tecnología de mercados de capitales.
  - `REGIONAL` — experiencia en proyectos con alcance regional.
  - `CRÍTICOS` — sistemas en producción y entornos regulados.
- **Acciones:** Ver proyectos · Ver experiencia · Ver/descargar CV · GitHub · LinkedIn.

### English

- **Status:** Santiago, Chile · open to remote and international opportunities.
- **Title:** I build the systems an order travels through.
- **Description:** Senior Software Engineer specializing in Exchange & Trading Systems. I design and build Order Entry, Market Data, FIX connectivity, and distributed architectures for financial markets.
- **Proof:**
  - `6+` years in capital markets technology.
  - `REGIONAL` — experience contributing to projects with regional reach.
  - `CRITICAL` — critical systems in regulated production environments.
- **Actions:** View projects · View experience · View/download CV · GitHub · LinkedIn.

## 2. Proyectos y casos / Projects & cases

- **ES — Título:** Evidencia, no promesas.
- **ES — Introducción:** Contribuciones a sistemas regulados, productos propios y experimentos de ingeniería. En cada proyecto explico el problema, mi rol, el resultado y su alcance.
- **EN — Title:** Evidence, not promises.
- **EN — Introduction:** Contributions to regulated systems, personal products and engineering experiments. Each project explains the problem, my role, the outcome and its scope.

Los casos se pueden filtrar por producción, trading, plataforma, proyectos personales y POC / Ingeniería.

### Sistemas en producción en mercados regulados

#### Plataforma bursátil para el mercado dominicano

- **Categoría:** Trading · 2023.
- **Resumen:** Integración y puesta en operación de la plataforma de trading para BVRD, la bolsa de la República Dominicana.
- **Contexto:** BVRD necesitaba modernizar su operación con una plataforma de negociación al nivel de los mercados de la región.
- **Rol:** Participé en el desarrollo y la integración de la plataforma: adaptación de componentes, ajustes de reglas de negocio locales y puesta en marcha junto al equipo de la bolsa.
- **Resultado:** La plataforma quedó integrada y en operación en el mercado dominicano, con las reglas locales implementadas y el go-live realizado junto al equipo de la bolsa.
- **Stack:** Java, React, SQL Server y REST.
- **Enlace:** https://bvrd.com.do/bvrd-bsc/

#### Gestión de usuarios y entidades de Sebra HT

- **Categoría:** Plataforma · 2022.
- **Resumen:** Desarrollador líder del módulo donde se crean y administran a diario todas las entidades del sistema de trading.
- **Contexto:** La operación depende de administrar usuarios, corredoras, permisos y perfiles de forma centralizada.
- **Rol:** Diseñé el modelo de datos, los servicios y la interfaz de administración, y definí el manejo de permisos y auditoría.
- **Resultado:** Administración centralizada y trazable de las entidades del sistema de trading, con un único punto de verdad y auditoría de los cambios.
- **Stack:** Node.js, LoopBack, React y SQL Server.

### Productos propios, de punta a punta

#### Summit — app outdoor para Chile

- **Categoría:** Producto propio · en curso.
- **Resumen:** Producto full stack propio en Flutter y Spring Boot para descubrir, crear y unirse a salidas de montaña, y coordinarse por chat.
- **Contexto:** Las salidas grupales se coordinan entre WhatsApp e Instagram, con información dispersa, cupos sin control y poca reputación verificable.
- **Rol:** Diseño y desarrollo completo individual: Flutter móvil/web, arquitectura feature-first, API Spring Boot 3 sobre Java 21, JWT, PostgreSQL con Flyway, sistema visual y onboarding.
- **Resultado:** Registro, onboarding, creación, edición, inscripción, cancelación, gestión de participantes y chat por actividad funcionando end-to-end. El producto está en alpha.
- **Stack:** Flutter, Dart, Spring Boot, Java 21, PostgreSQL, Flyway y JWT.
- **Repositorio:** https://github.com/fdelvalle01/SummitAppOutdoor

#### Stock Bar Exchange — un bar operado como bolsa

- **Categoría:** Proyecto propio · demo.
- **Resumen:** Los productos de un bar se negocian como instrumentos financieros sobre un escritorio de trading con ventanas.
- **Contexto:** Llevar infraestructura bursátil a un dominio fácil de explicar: las cervezas suben y bajan de precio según demanda y se compran desde una terminal de operador.
- **Rol:** Proyecto completo individual. React 18, TypeScript y Vite en el frontend; Spring Boot 3 y Java 17 como autoridad de precios; PostgreSQL, Keycloak y Docker Compose.
- **Resultado:** El frontend nunca envía el precio. El backend ejecuta contra el precio vigente, guarda snapshots de la orden y mueve el mercado por demanda, inactividad o intervención administrativa. Es una demo; la venta, el portfolio por usuario y el feed en tiempo real siguen pendientes.
- **Stack:** React 18, TypeScript, Vite, Spring Boot 3, Java 17, PostgreSQL, Keycloak y Docker.
- **Repositorio:** https://github.com/fdelvalle01/stock-bar

**Confidencialidad:** Los casos describen contribuciones públicas y educativas; no exponen arquitectura interna ni información confidencial.

### Laboratorio de ingeniería · beta personal

#### OpenSpec S0 + Viewer

- **Categoría:** Proyecto personal · beta. Disponible en ES/EN y en el filtro POC / Ingeniería.
- **Enlace para compartir:** `/#poc-ai-sdd` abre directamente la ficha.
- **Problema:** Simplificar el uso de especificaciones y agentes IA, mantener el contexto de cada sistema y revisar los cambios antes de programar.
- **Propuesta:** Una plantilla genérica prepara un S0 independiente por sistema. S0 conserva contexto, HU, specs, diseños, tareas y evidencias; el código permanece en sus repositorios. Brain y Obsidian no son requisitos.
- **Rol:** Diseño del flujo y simplificación de la preparación; desarrollo del creador y visor con asistencia de IA, documentación y revisión de las pruebas. Se conservan las skills oficiales de OpenSpec.
- **Uso inicial:** `npm run crear-s0` → abrir el S0 → indicar el proyecto al agente → revisar el mapa. Admite código nuevo o existente, monorepos y multirrepos.
- **Flujo de HU:** Petición → análisis y propuesta/specs → revisión funcional → diseño/tareas → revisión técnica → ejecución autorizada en componentes → pruebas y aceptación → archivo en S0. Un cambio de requisitos renueva las revisiones afectadas.
- **Visor:** Extensión personal de VS Code instalable como VSIX, de sólo lectura: HU, especificaciones, tareas y diagramas Mermaid. Puede abrir un S0 desde la ventana donde está el código. No ejecuta agentes ni registra stores.
- **Visuales:** Portada vectorial conceptual y diagrama responsive con texto accesible. No son capturas ni registros de una ejecución.
- **Evidencia:** `VALIDACION.md` de la distribución personal, revisión `768a64f`, pruebas del 2026-10-01: 46 comprobaciones de creador/plantilla/ciclo OpenSpec, 28 unitarias del visor y 8 en el host VS Code; también recorrido UI y VSIX. Incluye reproceso tras aprobación simulada. No se repitieron esas pruebas para actualizar el sitio.
- **Límites:** Comprobado en Windows con perfiles aislados. Usabilidad con otro desarrollador, validación Linux/macOS e impacto en productividad pendientes. Jira y controles obligatorios PR/CI fuera de esta beta; las revisiones humanas son reglas del flujo, no bloqueos nativos.
- **Fuente editorial del sitio:** `src/site/data/aiSdd.js` y `src/site/components/AiSddStudy.jsx`.
- **Acceso:** La rama personal `feat/s0-template-viewer-personal` de `fdelvalle01/sdd-workspace` devuelve 404 sin autenticación al 2026-10-02. La ficha no ofrece un enlace público inaccesible ni publica los registros originales; la visibilidad del repositorio permanece intacta.

#### Market Depth FIX Lab

- **Categoría:** Proyecto personal · demo educativa. Pertenece a **Laboratorio de ingeniería · beta**, junto a OpenSpec S0 + Viewer.
- **Resumen ES:** Laboratorio interactivo para explorar un libro de órdenes, el calce por prioridad precio-tiempo y los ExecutionReports FIX. Demo independiente que funciona en el navegador con datos sintéticos.
- **Summary EN:** Interactive lab for exploring an order book, price-time matching and FIX ExecutionReports. A standalone browser demo using synthetic data.
- **Rol:** Proyecto personal con motor de calce, codec FIX e interfaz separados. Escenarios deterministas, profundidad agregada o por orden e inspector de mensajes.
- **Resultado:** Demo pública con ejecuciones parciales y completas, remanentes en el libro y cierre de sesión simulada para órdenes DAY. Un instrumento sintético; sin backend, datos en vivo ni sesión FIX real.
- **Stack:** React, TypeScript, Vite, FIXT.1.1, FIX 5.0 SP2 y Vitest.
- **Visual:** Captura del escenario local del proyecto independiente con datos sintéticos, copiada desde su carpeta `preview/`. La tarjeta encuadra la parte superior del libro y el ticket.
- **Demo:** https://market-depth-fix-lab.netlify.app/
- **Código:** https://github.com/fdelvalle01/market-depth-fix-lab
- **Enlace directo en el portafolio:** `/#market-depth-fix-lab`.

## 3. Cómo trabajo / How I work

- **ES — Título:** Trabajar con sistemas que mueven dinero te enseña tres cosas.
- **ES — Introducción:** Son los principios que guían mi trabajo, independientemente del lenguaje o framework utilizado.
- **EN — Title:** Working on systems that move money teaches you three things.
- **EN — Introduction:** These are the principles that guide my work, regardless of the language or framework involved.

### Principios

1. **El modelo de datos viene primero.** Antes de construir una interfaz, hay que entender las entidades, sus relaciones y sus reglas. Un modelo confuso termina convirtiéndose en años de parches.
2. **Todo debe ser trazable.** Quién hizo qué, cuándo y por qué. En un mercado regulado, la auditoría no es una funcionalidad adicional: es parte del diseño.
3. **Cada dato crítico necesita una única autoridad.** El backend debe decidir el precio, el estado y el resultado de una operación. El cliente representa la información; no puede convertirse en su fuente de verdad.

### Tecnologías y capacidades

- **Trading & Financial Systems:** Trading Systems, Capital Markets, FIX Protocol, Market Data, Order Entry, Exchange Connectivity y WebSockets.
- **Backend & Distributed Systems:** Java, Spring Boot, Golang, Apache Kafka, Node.js, REST APIs, Event-Driven Architecture y Distributed Systems.
- **Platform & Data:** Kubernetes, Docker, PostgreSQL, SQL Server, AWS, Keycloak y Git.
- **Frontend & Product:** React, TypeScript, JavaScript, MUI, Flutter, Dart, HTML y CSS.
- **Engineering:** System Design, Software Architecture, Integration Testing, Production Support, Traceability y Technical Analysis.
- **Desarrollo asistido:** Claude Code, agentes de código y contexto para agentes.

### Perfil

- **ES:** Ingeniero en Informática (INACAP), con diplomado en Desarrollo de Aplicaciones Móviles de la Pontificia Universidad Católica de Chile. Español nativo e inglés B2 con certificación IELTS. Viví y estudié inglés durante seis meses en Nueva Zelanda. Fuera del código: montaña, videojuegos y viajar; de ahí salió Summit.
- **EN:** Computer Engineer (INACAP), with a Diploma in Mobile Application Development from Pontificia Universidad Católica de Chile. Native Spanish speaker and English B2 with IELTS certification. I lived and studied English in New Zealand for six months. Outside code: mountains, games, and traveling; that is where Summit came from.

## 4. Trayectoria / Career

- **ES — Título:** De practicante a senior, construyendo cada vez más cerca del core del mercado.
- **ES — Introducción:** Una progresión construida sobre operaciones de mercado, integraciones, sistemas distribuidos y plataformas de trading.
- **EN — Title:** From intern to senior, building closer to the market core at every stage.
- **EN — Introduction:** A progression built on market operations, integrations, distributed systems, and trading platforms.

### Experiencia

- **Senior Software Engineer — Bolsa de Santiago / nuam · agosto 2024–actualidad.** Diseño y desarrollo de plataformas de trading y mercados de capitales, servicios backend distribuidos, Order Entry, Market Data y conectividad con sistemas de negociación.
- **Mid-level Software Engineer — Bolsa de Santiago · noviembre 2021–agosto 2024.** Desarrollo e integración de servicios backend para aplicaciones de mercados de capitales, APIs, sistemas distribuidos, despliegues, pruebas de integración y resolución de problemas productivos.
- **Junior Software Engineer — Bolsa de Santiago · mayo 2020–noviembre 2021.** Desarrollo y mantención de aplicaciones para operaciones del mercado financiero, integraciones, bases de datos y soporte productivo.
- **Práctica Profesional — Bolsa de Santiago · febrero–marzo 2020.**

### Formación

- Ingeniería en Informática · INACAP · marzo 2016–diciembre 2019.
- Diplomado en Desarrollo de Aplicaciones Móviles · PUC Chile · septiembre 2022–abril 2023.
- English Studies · WorldWide School of English, Nueva Zelanda · agosto 2024–febrero 2025.
- Español nativo · Inglés B2 — certificación IELTS.

## 5. Contacto / Contact

- **ES — Título:** El siguiente paso.
- **ES — Descripción:** Estoy abierto a oportunidades senior remotas e internacionales en Exchange & Trading Systems, Backend Engineering, FinTech y Distributed Systems. También evalúo consultoría técnica en integraciones, APIs y sistemas críticos.
- **EN — Title:** The next step.
- **EN — Description:** I am open to senior remote and international opportunities in Exchange & Trading Systems, Backend Engineering, FinTech, and Distributed Systems. I also consider technical consulting engagements involving integrations, APIs, and critical systems.

### Oportunidades laborales / Hiring opportunities

Revisa mi experiencia o escríbeme por LinkedIn.

- CV: `Francisco-Del-Valle-Senior-Backend-Engineer-CV.pdf`
- LinkedIn: https://www.linkedin.com/in/francisco-d-9b6a01134/

### Proyectos y consultoría / Projects & consulting

Hablemos de arquitectura, APIs, integraciones o sistemas que no pueden fallar.

- Email: fdel_valle01@hotmail.com
- GitHub: https://github.com/fdelvalle01

## Propuesta editorial: Sobre mí (pendiente de implementación)

### Diagnóstico

El antiguo recorrido ponía una simulación extensa entre la presentación y los casos. La herramienta
ocupaba el espacio que podría explicar quién es Francisco y cómo se conectan su experiencia y sus
proyectos. Al tener una demo independiente, corresponde presentarla dentro del laboratorio.

Existe `About.jsx`, pero no se renderiza. La biografía hoy está al final de Cómo trabajo y repite
formación e idiomas incluidos en Trayectoria. Incorporar Sobre mí debería trasladar esa información
personal y dejar Cómo trabajo para principios y capacidades; Trayectoria conservaría fechas y formación.

### Recorrido propuesto

`Inicio → Sobre mí → Proyectos y casos → Cómo trabajo → Trayectoria → Contacto`

- **Inicio:** nombre, especialidad, evidencia breve y acceso a proyectos.
- **Sobre mí:** origen de la curiosidad por el software y conexión con la carrera actual. Dos o tres párrafos, sin repetir el CV.
- **Proyectos y casos:** contribuciones profesionales, productos personales y laboratorio de ingeniería, con sus límites y evidencias.
- **Cómo trabajo:** principios de diseño y capacidades técnicas.
- **Trayectoria:** experiencia y formación en orden cronológico.
- **Contacto:** oportunidades profesionales y consultoría.

### Borrador ES

**De la curiosidad por las apps a construir sistemas de mercado.**

Mi interés por la informática empezó entre videojuegos en el computador y conversaciones con amigos
en Discord sobre desarrollo web; por entonces se hablaba mucho de PHP. Mi primer teléfono táctil
y las apps y juegos que descubrí en Android también despertaban preguntas: quería entender cómo se
creaban esas aplicaciones y cómo podían funcionar en dispositivos tan pequeños.

Desde 2020 trabajo en Bolsa de Santiago / nuam. He desarrollado aplicaciones de operación,
integraciones y servicios backend, liderado el módulo de usuarios y entidades de Sebra HT y participado
en la integración de la plataforma de negociación para el mercado dominicano. En ese recorrido,
las reglas de negocio, los permisos y la trazabilidad pasaron a formar parte de mi manera de construir software.

Esa curiosidad también sigue en mis proyectos personales. Mi interés por la montaña dio origen a
Summit; Stock Bar, Trading Workstation y Market Depth FIX Lab son espacios donde exploro ideas propias
y convierto mi experiencia en sistemas que se pueden ver y probar.

### Draft EN

**From curiosity about apps to building market systems.**

My interest in computing began with PC games and conversations with friends on Discord about web
development; PHP came up often at the time. My first touchscreen phone and the apps and games
I discovered on Android also raised questions: how were these applications built, and
how could they run on such small devices?

Since 2020 I have worked at Bolsa de Santiago / nuam. I have developed operational applications,
integrations and backend services, led the Sebra HT user and entity module, and contributed to
integrating the trading platform for the Dominican market. Along the way, business rules, permissions
and traceability became part of how I build software.

That curiosity continues in my personal projects. My interest in the mountains led to Summit;
Stock Bar, Trading Workstation and Market Depth FIX Lab give me room to explore my own ideas and
turn my experience into systems people can see and try.

### Fuentes y datos por conciliar

- El origen personal procede del relato aportado por Francisco en esta conversación el 2026-10-10.
- Los hitos profesionales y proyectos proceden de `src/site/data/content.js`, los casos existentes y el CV oficial de `public/`.
- El alcance del laboratorio se verificó con su README público y la copia local del proyecto.
- El CV y el sitio difieren en fechas de promoción a senior, fin de INACAP, diplomado PUC y estudios de inglés; el sitio también menciona IELTS y el CV no. Este cambio no decide qué fuente tiene las fechas correctas. Antes de editar la cronología, se necesitan los datos confirmados por Francisco.
- La propuesta no atribuye los proyectos a un momento vocacional específico ni incorpora métricas profesionales nuevas.
