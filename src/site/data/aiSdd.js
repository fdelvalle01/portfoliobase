import diagram from "../../Assets/Projects/ai-sdd.svg";

export const AI_SDD_SOURCE_REVISION = "768a64f";

export const AI_SDD_CASE = {
  id: "poc-ai-sdd",
  categories: ["personal", "platform", "poc"],
  img: diagram,
  media: "diagram",
  alt: {
    es: "Diagrama conceptual: una plantilla prepara el S0 del sistema; la IA implementa en los repositorios tras revisión humana y un visor local permite leer los documentos de S0.",
    en: "Conceptual diagram: a template prepares the system's S0; AI implements in code repositories after human review, while a local viewer displays S0 documents.",
  },
  kicker: { es: "PROYECTO PERSONAL · BETA", en: "PERSONAL PROJECT · BETA" },
  title: { es: "OpenSpec S0 + Viewer", en: "OpenSpec S0 + Viewer" },
  summary: {
    es: "Una plantilla para planificar cambios antes de programar y un visor de VS Code para explorar sus especificaciones, tareas y diagramas.",
    en: "A template to plan changes before coding and a VS Code viewer to explore their specifications, tasks and diagrams.",
  },
  tags: ["OpenSpec", "VS Code", "Human-in-the-loop"],
  context: {
    es: "Quería hacer más sencillo el trabajo con especificaciones y agentes IA. Cada sistema tiene un S0: su repositorio de planificación con contexto, HU, especificaciones y tareas. El código conserva su ubicación, sea un proyecto simple, un monorepo o varios repositorios. No requiere Brain ni Obsidian.",
    en: "I wanted to make specifications and AI agents easier to work with. Each system has an S0: its planning repository for context, user stories, specifications and tasks. Code stays in its existing location, whether in a single project, a monorepo or several repositories. Brain and Obsidian are not required.",
  },
  role: {
    es: "Diseñé el flujo y simplifiqué la preparación por proyecto. Con asistencia de IA, desarrollé el creador de S0 y el visor local, adapté la documentación y revisé las pruebas. La integración conserva las skills oficiales de OpenSpec y las revisiones humanas antes de implementar.",
    en: "I designed the workflow and simplified project setup. With AI assistance, I developed the S0 creator and local viewer, adapted the documentation and reviewed the tests. The integration preserves official OpenSpec skills and human reviews before implementation.",
  },
  result: {
    es: "Beta personal con plantilla genérica, creación de S0 independientes y visor instalable como VSIX. Validación en Windows con perfiles aislados y un ciclo OpenSpec que incluye cambio de requisito. La usabilidad con otro desarrollador y el impacto en productividad siguen por medir.",
    en: "Personal beta with a generic template, independent S0 creation and an installable VSIX viewer. Validated on Windows with isolated profiles and an OpenSpec cycle that includes a requirement change. Usability with another developer and productivity impact remain to be measured.",
  },
  stack: ["OpenSpec 1.13.2", "Node.js", "Markdown", "Git", "VS Code Extension API", "Mermaid", "Codex", "Claude Code"],
  // No public repository link: unauthenticated access returned 404.
  link: "",
};

export const AI_SDD_STEPS = [
  {
    title: { es: "Preparar S0 y conocer el proyecto", en: "Prepare S0 and understand the project" },
    detail: { es: "Crear S0 desde la plantilla, indicar el código al agente y revisar el mapa que documenta con fuentes comprobadas.", en: "Create S0 from the template, point the agent to the code and review the map it documents from verified sources." },
    artifact: { es: "S0 + contexto + repositorios vinculados", en: "S0 + context + linked repositories" },
  },
  {
    title: { es: "Especificar el comportamiento", en: "Specify behaviour" },
    detail: { es: "Ingresar una HU y analizar código y contratos pertinentes para acordar alcance, exclusiones y aceptación.", en: "Submit a user story and examine relevant code and contracts to agree on scope, exclusions and acceptance." },
    artifact: { es: "Propuesta + specs", en: "Proposal + specs" },
    review: { es: "Revisión funcional explícita", en: "Explicit functional review" },
  },
  {
    title: { es: "Diseñar y planificar", en: "Design and plan" },
    detail: { es: "Definir solución, dependencias, tareas y cómo comprobarlas.", en: "Define the solution, dependencies, tasks and checks." },
    artifact: { es: "Diseño + tareas", en: "Design + tasks" },
    review: { es: "Revisión técnica explícita", en: "Explicit technical review" },
  },
  {
    title: { es: "Implementar y verificar", en: "Implement and verify" },
    detail: { es: "Tras las revisiones, pedir al agente la ejecución en los repositorios autorizados y registrar pruebas y pendientes en S0.", en: "After review, ask the agent to implement in authorized repositories and record tests and gaps in S0." },
    artifact: { es: "Código + evidencia", en: "Code + evidence" },
  },
  {
    title: { es: "Aceptar y archivar en S0", en: "Accept and archive in S0" },
    detail: { es: "Con evidencias y aceptación, archivar el cambio. El visor permite consultar los documentos durante todo el recorrido.", en: "With evidence and acceptance, archive the change. The viewer lets you read the documents throughout the workflow." },
    artifact: { es: "Specs consolidadas + historial del cambio", en: "Consolidated specs + change history" },
  },
];
