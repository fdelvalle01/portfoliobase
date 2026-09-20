import diagram from "../../Assets/Projects/ai-sdd.svg";

export const AI_SDD_SOURCE_REVISION = "eb0bdf3";

export const AI_SDD_CASE = {
  id: "poc-ai-sdd",
  categories: ["personal", "platform", "poc"],
  img: diagram,
  media: "diagram",
  alt: {
    es: "Diagrama conceptual: Brain aporta contexto, OpenSpec las especificaciones y el agente IA la ejecución, con revisión humana y evidencia versionada.",
    en: "Conceptual diagram: Brain provides context, OpenSpec holds specifications and the AI agent executes, guided by human review and versioned evidence.",
  },
  kicker: { es: "EXPERIMENTO PROPIO · POC DOCUMENTADA", en: "PERSONAL EXPERIMENT · DOCUMENTED POC" },
  title: { es: "AI-Assisted Spec-Driven Development", en: "AI-Assisted Spec-Driven Development" },
  summary: {
    es: "De una petición a un cambio verificable: memoria de proyecto, especificaciones y agentes IA coordinados con dos revisiones humanas.",
    en: "From a request to a verifiable change: project memory, specifications and AI agents coordinated through two human reviews.",
  },
  tags: ["OpenSpec", "AI-assisted", "Human-in-the-loop"],
  context: {
    es: "Al desarrollar con IA, el contexto puede perderse entre sesiones y una instrucción precisa puede terminar en código sin revisar sus implicaciones. La POC explora cómo conservar el conocimiento, acordar el comportamiento antes de implementar y vincular los resultados a sus fuentes.",
    en: "When developing with AI, context can be lost between sessions and a precise request can turn into code before its implications are reviewed. This POC explores how to preserve knowledge, agree on behaviour before implementation and trace outcomes to their sources.",
  },
  role: {
    es: "Diseñé y coordiné el flujo, las reglas documentales y las skills de integración. Con asistencia de IA, preparé el instalador y los ensayos locales, revisé las evidencias y apliqué la preparación al monorepo SummitApp.",
    en: "I designed and coordinated the workflow, documentation rules and integration skills. With AI assistance, I prepared the installer and local experiments, reviewed evidence and applied the preparation to the SummitApp monorepo.",
  },
  result: {
    es: "Flujo e instalador disponibles, con pruebas documentadas de preparación, conservación de archivos y coordinación entre repositorios. SummitApp cuenta con contexto y OpenSpec vinculados. La adopción por otro desarrollador y la mejora de productividad siguen por medir.",
    en: "Workflow and installer available, with documented tests for preparation, file preservation and cross-repository coordination. SummitApp has linked context and OpenSpec. Adoption by another developer and productivity gains remain to be measured.",
  },
  stack: ["OpenSpec", "Markdown", "Git", "PowerShell", "Node.js", "Codex", "Claude Code", "Obsidian (optional)"],
  // No public repository link: unauthenticated access returned 404.
  link: "",
};

export const AI_SDD_STEPS = [
  {
    title: { es: "Entender la petición", en: "Understand the request" },
    detail: { es: "Consultar Brain y comprobar código, contratos y fuentes actuales.", en: "Read Brain and check current code, contracts and sources." },
    artifact: { es: "Contexto verificable", en: "Verifiable context" },
  },
  {
    title: { es: "Especificar el comportamiento", en: "Specify behaviour" },
    detail: { es: "Acordar alcance, exclusiones y escenarios de aceptación.", en: "Define scope, exclusions and acceptance scenarios." },
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
    detail: { es: "El agente ejecuta lo autorizado y reporta pruebas y pendientes.", en: "The agent executes authorized work and reports tests and gaps." },
    artifact: { es: "Código + evidencia", en: "Code + evidence" },
  },
  {
    title: { es: "Cerrar y conservar lo aprendido", en: "Close and preserve knowledge" },
    detail: { es: "Con cierre autorizado, archivar el cambio y actualizar el contexto duradero.", en: "After authorized closure, archive the change and update durable context." },
    artifact: { es: "Archivo + Brain", en: "Archive + Brain" },
  },
];
