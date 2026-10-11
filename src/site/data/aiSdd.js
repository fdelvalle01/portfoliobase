import viewerHome from "../../Assets/Projects/openspec-viewer-home.png";
import viewerGraph from "../../Assets/Projects/openspec-viewer-graph.png";

export const AI_SDD_SOURCE_REVISION = "913f984";
export const AI_SDD_TEMPLATE_REVISION = "a4610cf";

const homeAlt = {
  es: "Inicio de OpenSpec Viewer con las HU, specs, contexto y archivo de una demo ficticia.",
  en: "OpenSpec Viewer home showing user stories, specs, context and archives from a fictional demo.",
};
const graphAlt = {
  es: "Grafo del S0 demo con las relaciones entre HU, specs, contexto, componentes y plantilla.",
  en: "Demo S0 graph showing relationships between user stories, specs, context, components and template.",
};

export const AI_SDD_CASE = {
  id: "poc-ai-sdd",
  categories: ["personal", "platform", "poc"],
  img: viewerHome,
  media: "viewer",
  alt: homeAlt,
  gallery: [
    { img: viewerHome, alt: homeAlt },
    { img: viewerGraph, alt: graphAlt },
  ],
  fullSizeMedia: true,
  mediaNote: {
    es: "Capturas originales de OpenSpec Viewer 0.3.2, aportadas el 11 de octubre de 2026. La demo usa datos ficticios; el grafo es una vista derivada de sus documentos.",
    en: "Original OpenSpec Viewer 0.3.2 screenshots, supplied on October 11, 2026. The demo uses fictional data; the graph is a view derived from its documents.",
  },
  kicker: { es: "PROYECTO PERSONAL · BETA", en: "PERSONAL PROJECT · BETA" },
  title: { es: "OpenSpec S0 + Viewer", en: "OpenSpec S0 + Viewer" },
  summary: {
    es: "Un S0 por sistema para planificar cambios y un visor independiente de VS Code para explorar HU, especificaciones, tareas y relaciones documentales.",
    en: "One S0 per system for planning changes, with an independent VS Code viewer for exploring user stories, specifications, tasks and document relationships.",
  },
  tags: ["OpenSpec", "VS Code", "Human-in-the-loop"],
  context: {
    es: "Quería hacer más sencillo el trabajo con especificaciones y agentes IA. SDD Workspace prepara un S0 por sistema con contexto, HU, especificaciones y tareas. El código conserva su ubicación, sea un proyecto simple, un monorepo o varios repositorios. OpenSpec Viewer permite consultar ese S0 desde VS Code y se distribuye por separado.",
    en: "I wanted to make specifications and AI agents easier to work with. SDD Workspace prepares one S0 per system with context, user stories, specifications and tasks. Code stays in its existing location, whether in a single project, a monorepo or several repositories. OpenSpec Viewer lets you read that S0 in VS Code and is distributed separately.",
  },
  role: {
    es: "Diseñé el flujo y el creador de S0. Con asistencia de IA, desarrollé el visor, la búsqueda local y el grafo documental, y separé la extensión en su propio repositorio con motor y VSIX. Revisé la documentación y las pruebas, conservando las revisiones humanas antes de implementar.",
    en: "I designed the workflow and S0 creator. With AI assistance, I developed the viewer, local search and document graph, and separated the extension into its own repository with its engine and VSIX. I reviewed documentation and tests while preserving human reviews before implementation.",
  },
  result: {
    es: "Beta personal con plantilla genérica y OpenSpec Viewer 0.3.2 instalable como VSIX: navegación de HU y specs, búsqueda local, Mermaid y grafo del S0. El visor lee archivos locales y funciona sin cuenta IA ni servidor. La validación documentada usa Windows y perfiles aislados; la adopción y el impacto en productividad siguen por medir.",
    en: "Personal beta with a generic template and OpenSpec Viewer 0.3.2 installable as a VSIX: user-story and spec navigation, local search, Mermaid and an S0 graph. The viewer reads local files and works without an AI account or server. Documented validation uses Windows and isolated profiles; adoption and productivity impact remain to be measured.",
  },
  stack: ["OpenSpec 1.13.2", "OpenSpec Viewer 0.3.2", "Node.js", "Markdown", "Git", "VS Code Extension API", "Mermaid", "Codex", "Claude Code"],
  link: "https://github.com/fdelvalle01/sdd-openspec-view",
  linkLabel: "projects.repo",
};

export const AI_SDD_STEPS = [
  {
    title: { es: "Preparar S0 y conocer el proyecto", en: "Prepare S0 and understand the project" },
    detail: { es: "Crear S0 con la plantilla de SDD Workspace, indicar el código al agente y revisar el mapa que documenta con fuentes comprobadas.", en: "Create S0 with the SDD Workspace template, point the agent to the code and review the map it documents from verified sources." },
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
