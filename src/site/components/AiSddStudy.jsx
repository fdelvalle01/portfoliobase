import React from "react";
import { PiArrowDown, PiCheckCircle, PiUserCircle } from "react-icons/pi";
import architecture from "../../Assets/Projects/ai-sdd.svg";
import { useI18n } from "../context/I18nContext";
import { AI_SDD_SOURCE_REVISION, AI_SDD_TEMPLATE_REVISION, AI_SDD_STEPS } from "../data/aiSdd";

const architectureParts = [
  {
    name: { es: "SDD Workspace · preparar", en: "SDD Workspace · prepare" },
    detail: { es: "La plantilla y el creador generan un S0 independiente para cada sistema, con sus guías y CLI de conocimiento.", en: "The template and creator generate an independent S0 for each system, including its guides and knowledge CLI." },
  },
  {
    name: { es: "S0 · planificar", en: "S0 · plan" },
    detail: { es: "Versiona contexto, HU, specs, decisiones, tareas y evidencias. El código conserva sus propios repositorios.", en: "Versions context, user stories, specifications, decisions, tasks and evidence. Code keeps its own repositories." },
  },
  {
    name: { es: "Agente autorizado · implementar", en: "Authorized agent · implement" },
    detail: { es: "Codex o Claude consultan S0 y código. Tras la revisión funcional y técnica, ejecutan cambios en los repositorios autorizados y registran evidencia en S0.", en: "Codex or Claude read S0 and code. After functional and technical review, they implement changes in authorized repositories and record evidence in S0." },
  },
  {
    name: { es: "Viewer 0.3.2 · leer", en: "Viewer 0.3.2 · read" },
    detail: { es: "Una extensión independiente de VS Code lee el S0 local. Su motor incluido deriva el grafo y permite abrir las fuentes de cada relación.", en: "An independent VS Code extension reads local S0 files. Its bundled engine derives the graph and lets you open each relationship's source." },
  },
];

export default function AiSddStudy() {
  const { L } = useI18n();
  return <section className="sdd-study" aria-labelledby="sdd-study-title">
    <div className="sdd-study__heading">
      <span className="modal__label">{L({ es: "DEL CONTEXTO A LA EVIDENCIA", en: "FROM CONTEXT TO EVIDENCE" })}</span>
      <h4 id="sdd-study-title">{L({ es: "La IA ejecuta. Las personas deciden.", en: "AI executes. People decide." })}</h4>
      <p>{L({ es: "S0 es el repositorio de planificación de un sistema. OpenSpec conserva sus especificaciones y tareas; el agente consulta el código y ejecuta cambios autorizados. El visor de VS Code permite leer esos documentos y explorar sus relaciones.", en: "S0 is a system's planning repository. OpenSpec holds its specifications and tasks; the agent reads code and implements authorized changes. The VS Code viewer lets you read those documents and explore their relationships." })}</p>
    </div>
    <div className="sdd-architecture" aria-labelledby="sdd-architecture-title">
      <span className="modal__label">{L({ es: "ARQUITECTURA ACTUAL", en: "CURRENT ARCHITECTURE" })}</span>
      <h4 id="sdd-architecture-title">{L({ es: "Dos distribuciones, un S0 por sistema", en: "Two distributions, one S0 per system" })}</h4>
      <figure className="sdd-architecture__figure">
        <img src={architecture} loading="lazy" alt={L({ es: "Arquitectura: SDD Workspace crea el S0; un agente autorizado trabaja con S0 y los repositorios de código tras revisión humana; OpenSpec Viewer 0.3.2 lee S0 mediante su motor incluido.", en: "Architecture: SDD Workspace creates S0; an authorized agent works with S0 and code repositories after human review; OpenSpec Viewer 0.3.2 reads S0 using its bundled engine." })} />
        <figcaption>{L({ es: "Las flechas continuas muestran preparación e implementación; la flecha discontinua muestra la lectura local del Viewer. La plantilla y el visor se mantienen y distribuyen por separado.", en: "Solid arrows show preparation and implementation; the dashed arrow shows the Viewer's local reads. The template and viewer are maintained and distributed separately." })}</figcaption>
      </figure>
      <dl className="sdd-architecture__parts">
        {architectureParts.map(part => <div key={part.name.en}>
          <dt>{L(part.name)}</dt>
          <dd>{L(part.detail)}</dd>
        </div>)}
      </dl>
      <p className="sdd-architecture__note">{L({ es: "El Viewer funciona sin cuenta IA, OpenSpec CLI ni servidor. Es de solo lectura y no ejecuta scripts del S0. El archivo histórico y las menciones inferidas se incluyen sólo al activar sus filtros.", en: "The Viewer works without an AI account, OpenSpec CLI or a server. It is read-only and never runs S0 scripts. History and inferred mentions are included only when their filters are enabled." })}</p>
    </div>
    <div className="sdd-study__heading">
      <h4>{L({ es: "De la propuesta al cambio verificado", en: "From proposal to verified change" })}</h4>
      <p>{L({ es: "Para empezar: crear S0 con npm run crear-s0, abrirlo, indicar el proyecto al agente y revisar el mapa antes de la primera HU. La plantilla sirve para proyectos nuevos o existentes; el visor es opcional.", en: "To start: create S0 with npm run crear-s0, open it, tell the agent which project to use and review the map before the first user story. The template supports new or existing projects; the viewer is optional." })}</p>
    </div>
    <figure className="sdd-flow">
      <ol aria-label={L({ es: "Flujo de desarrollo con dos revisiones humanas", en: "Development workflow with two human reviews" })}>
        {AI_SDD_STEPS.map((step, index) => <li key={step.title.en}>
          <div className="sdd-flow__step">
            <span className="sdd-flow__number" aria-hidden="true">0{index + 1}</span>
            <div><h5>{L(step.title)}</h5><p>{L(step.detail)}</p><span className="sdd-flow__artifact">{L(step.artifact)}</span></div>
          </div>
          {step.review && <div className="sdd-flow__review"><PiUserCircle aria-hidden="true" /><strong>{L(step.review)}</strong></div>}
          {index < AI_SDD_STEPS.length - 1 && <PiArrowDown className="sdd-flow__arrow" aria-hidden="true" />}
        </li>)}
      </ol>
      <figcaption>{L({ es: "Diagrama del flujo previsto, no un registro de ejecución. Si cambia el alcance o el diseño, se renueva la revisión afectada antes de continuar. Estas pausas son reglas del equipo, no bloqueos técnicos nativos de OpenSpec.", en: "Diagram of the intended workflow, not an execution log. Scope or design changes require renewing the affected review before continuing. These pauses are team rules, not native OpenSpec enforcement." })}</figcaption>
    </figure>
    <div className="sdd-study__evidence">
      <div>
        <h4><PiCheckCircle aria-hidden="true" />{L({ es: "Evidencia documentada", en: "Documented evidence" })}</h4>
        <ul>
          <li>{L({ es: "SDD Workspace · 10 de octubre de 2026: 10 pruebas del creador y 106 de la plantilla. Incluyen generación de S0 independientes y consulta de conocimiento sin instalar el Viewer.", en: "SDD Workspace · October 10, 2026: 10 creator tests and 106 template tests. They cover independent S0 generation and knowledge queries without installing the Viewer." })}</li>
          <li>{L({ es: "Viewer independiente 0.3.2 · 8 de octubre de 2026: 110 pruebas unitarias, 31 comprobaciones de interfaz en Edge y 16 en VS Code real. VSIX inspeccionado con motor incluido y procedencia registrada.", en: "Independent Viewer 0.3.2 · October 8, 2026: 110 unit tests, 31 UI checks in Edge and 16 in real VS Code. Inspected VSIX with its bundled engine and recorded provenance." })}</li>
          <li>{L({ es: "Pruebas en Windows con perfiles y datos de laboratorio aislados. Las aprobaciones del ciclo OpenSpec son simuladas; no acreditan revisiones humanas reales.", en: "Tests ran on Windows with isolated profiles and lab data. OpenSpec cycle approvals are simulated; they do not represent actual human reviews." })}</li>
        </ul>
      </div>
      <div>
        <h4>{L({ es: "Qué falta demostrar", en: "What remains to be demonstrated" })}</h4>
        <ul>
          <li>{L({ es: "Adopción por otra persona en su entorno y con revisores reales.", en: "Adoption by another developer in their own environment with real reviewers." })}</li>
          <li>{L({ es: "Mejora de tiempos, coste o calidad: todavía sin línea base comparativa.", en: "Time, cost or quality improvements: no comparative baseline yet." })}</li>
          <li>{L({ es: "Validación en Linux/macOS y comportamiento de los agentes en proyectos reales.", en: "Validation on Linux/macOS and agent behavior in real projects." })}</li>
        </ul>
      </div>
    </div>
    <p className="sdd-study__note">{L({ es: "Fuentes: VALIDACION.md de SDD Workspace y la validación del repositorio oficial del Viewer. Estos resultados corresponden a sus distribuciones y fechas; no se repitieron las pruebas para actualizar el portafolio.", en: "Sources: SDD Workspace's VALIDACION.md and the official Viewer repository's validation. Results apply to their distributions and dates; the tests were not rerun for this portfolio update." })} {" "}<a href={`https://github.com/fdelvalle01/sdd-openspec-view/blob/${AI_SDD_SOURCE_REVISION}/docs/validacion.md`} target="_blank" rel="noreferrer">{L({ es: "Consultar validación del Viewer", en: "Read the Viewer validation" })}</a>.</p>
    <p className="sdd-study__note">{L({ es: "Referencias documentales", en: "Documentation references" })}: Viewer <code>{AI_SDD_SOURCE_REVISION}</code> · {L({ es: "plantilla", en: "template" })} <code>{AI_SDD_TEMPLATE_REVISION}</code>.</p>
  </section>;
}
