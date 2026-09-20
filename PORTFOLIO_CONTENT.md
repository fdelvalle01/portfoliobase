# Portfolio — Francisco Del Valle

Contenido editorial vigente del portfolio React. El sitio está disponible en español e inglés y sigue este recorrido: `Hero → Simulador → Recorrido de una orden → Casos → Cómo trabajo → Trayectoria → Contacto`.

## 1. Hero / Inicio

### Español

- **Estado:** Santiago, Chile · disponible para oportunidades remotas e internacionales.
- **Título:** Construyo los sistemas por donde viaja una orden.
- **Descripción:** Senior Software Engineer especializado en Exchange & Trading Systems. Diseño y construyo soluciones de Order Entry, Market Data, conectividad FIX y arquitecturas distribuidas para mercados financieros.
- **Pruebas:**
  - `6+` años en tecnología de mercados de capitales.
  - `REGIONAL` — experiencia en proyectos con alcance regional.
  - `CRÍTICOS` — sistemas en producción y entornos regulados.
- **Acciones:** Probar el Trading Lab · Ver experiencia · Ver/descargar CV · GitHub · LinkedIn.

### English

- **Status:** Santiago, Chile · open to remote and international opportunities.
- **Title:** I build the systems an order travels through.
- **Description:** Senior Software Engineer specializing in Exchange & Trading Systems. I design and build Order Entry, Market Data, FIX connectivity, and distributed architectures for financial markets.
- **Proof:**
  - `6+` years in capital markets technology.
  - `REGIONAL` — experience contributing to projects with regional reach.
  - `CRITICAL` — critical systems in regulated production environments.
- **Actions:** Try the Trading Lab · View experience · View/download CV · GitHub · LinkedIn.

## 2. Simulador / Trading Lab

### Presentación

- **ES — Kicker:** NO ME CREAS: PRUÉBALO.
- **ES — Título:** Envía una orden y observa su recorrido.
- **ES — Descripción:** Order Book, profundidad, Order Entry, matching y Drop Copy: el dominio en el que trabajo convertido en una simulación interactiva. Selecciona un precio, ingresa una orden y observa qué ocurre.
- **EN — Kicker:** DON'T TAKE MY WORD FOR IT. TRY IT.
- **EN — Title:** Send an order and watch its journey.
- **EN — Description:** Order Book, depth, Order Entry, matching, and Drop Copy: the domain I work in, turned into an interactive simulation. Select a price, enter an order, and see what happens.

### Funcionalidad

El laboratorio utiliza tres instrumentos ficticios —ANDES, PACIFICO y CORDILLERA— e incluye:

- Market Depth agregado y por orden.
- Último precio, mejor bid, mejor ask y spread.
- Selección de profundidad para cargar precio y cantidad acumulada.
- Órdenes limitadas de compra o venta con vigencia Day o GTC.
- Matching con ejecución total, parcial o ingreso al libro.
- Flujo de eventos y Drop Copy.
- Explicaciones de Market Data, Market Depth, Order Entry, Matching y Execution / Drop Copy.
- Reinicio completo de la simulación.

### FIX Protocol

- **ES — Título:** De la ejecución al mensaje FIX.
- **ES — Descripción:** FIX es un estándar de mensajería para comunicar órdenes, ejecuciones y datos entre participantes del mercado. Aquí puedes inspeccionar una representación educativa del resultado de tu última orden.
- **EN — Title:** From execution to a FIX message.
- **EN — Description:** FIX is a messaging standard used to communicate orders, executions, and data between market participants. Here you can inspect an educational representation of your latest order result.

El explorador genera un `ExecutionReport (35=8)` educativo en FIX 5.0 SP2. Muestra el mensaje completo con `BeginString`, `BodyLength`, encabezado estándar, identificadores, estado, cantidades de ejecución y `CheckSum`. El carácter `␁` representa el delimitador SOH (`0x01`); `8=FIXT.1.1` identifica la capa de transporte y `1128=9` la versión de aplicación.

La pestaña **Automatización** explica este ciclo:

`Market Data → Strategy → Risk Controls → Order Entry → Execution Report`

Un robot de negociación puede reaccionar a Market Data y generar órdenes según reglas o modelos. Antes de llegar al mercado, cada orden debe pasar por límites, controles de riesgo, rate limits y un kill switch. La demostración no envía órdenes ni se conecta a mercados reales.

### Recorrido conceptual

`Order Entry → Validation → FIX Gateway → Matching → Execution / Drop Copy → Market Data`

El flujo es conceptual y educativo; no representa la arquitectura interna de ninguna organización.

### Aviso

- **ES:** Simulación educativa con instrumentos y datos ficticios. No está conectada a un mercado real ni representa sistemas internos de ninguna empresa.
- **EN:** Educational simulation with fictional instruments and data. It is not connected to a real market and does not represent any company's internal systems.

## 3. Casos / Cases

- **ES — Título:** Evidencia, no promesas.
- **ES — Introducción:** La demo explica el dominio. Estos casos muestran contribuciones a sistemas regulados, productos propios y experimentos de ingeniería con resultados y límites explícitos.
- **EN — Title:** Evidence, not promises.
- **EN — Introduction:** The demo explains the domain. These cases show contributions to regulated systems, personal products and engineering experiments with explicit results and limitations.

Los casos se pueden filtrar por producción, trading, plataforma y producto propio.

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

### Laboratorio de ingeniería · POC

#### AI-Assisted Spec-Driven Development

- **Categoría:** Experimento propio · POC documentada. Disponible en ES/EN y en el filtro POC / Ingeniería.
- **Enlace para compartir:** `/#poc-ai-sdd` abre directamente la ficha.
- **Problema:** Conservar contexto entre sesiones de IA y revisar las implicaciones del cambio antes de implementar.
- **Propuesta:** Brain como memoria documental; OpenSpec como fuente del plan; agente como ejecutor; personas como responsables de las decisiones.
- **Flujo:** Contexto → propuesta/specs → revisión funcional → diseño/tareas → revisión técnica → implementación/verificación → cierre autorizado y conocimiento duradero.
- **Visuales:** Portada vectorial conceptual y diagrama responsive con texto accesible. No son capturas ni registros de una ejecución.
- **Evidencia:** Informe de Brain Projects al 2026-09-17, fijado a la revisión `eb0bdf3`; distingue ensayos locales y revisiones simuladas. SummitApp es un caso de preparación vinculada, no una prueba de adopción completa por el equipo.
- **Límites:** Sin mejoras comparativas medidas; adopción por otra persona, controles PR/CI y Jira pendientes de demostrar. Los registros originales de laboratorio no están distribuidos en el repositorio público.
- **Fuente editorial del sitio:** `src/site/data/aiSdd.js` y `src/site/components/AiSddStudy.jsx`.
- **Acceso:** El repositorio documental devuelve 404 sin autenticación. La ficha no incluye enlaces inaccesibles ni publica registros originales; su visibilidad permanece intacta.

## 4. Cómo trabajo / How I work

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

## 5. Trayectoria / Career

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

## 6. Contacto / Contact

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
