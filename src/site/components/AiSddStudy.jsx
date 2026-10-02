import React from "react";
import { PiArrowDown, PiCheckCircle, PiUserCircle } from "react-icons/pi";
import { useI18n } from "../context/I18nContext";
import { AI_SDD_SOURCE_REVISION, AI_SDD_STEPS } from "../data/aiSdd";

export default function AiSddStudy() {
  const { L } = useI18n();
  return <section className="sdd-study" aria-labelledby="sdd-study-title">
    <div className="sdd-study__heading">
      <span className="modal__label">{L({ es: "DEL CONTEXTO A LA EVIDENCIA", en: "FROM CONTEXT TO EVIDENCE" })}</span>
      <h4 id="sdd-study-title">{L({ es: "La IA ejecuta. Las personas deciden.", en: "AI executes. People decide." })}</h4>
      <p>{L({ es: "S0 es el repositorio de planificación de un sistema. OpenSpec conserva sus especificaciones y tareas; el agente consulta el código y ejecuta cambios autorizados. El visor de VS Code muestra esos documentos y diagramas en modo lectura.", en: "S0 is a system's planning repository. OpenSpec holds its specifications and tasks; the agent reads code and implements authorized changes. The VS Code viewer displays those documents and diagrams in read-only mode." })}</p>
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
          <li>{L({ es: "Creador y plantilla: 46 comprobaciones documentadas, incluidas conservación de contenido, stores independientes y un ciclo OpenSpec completo con cambio de requisito.", en: "Creator and template: 46 documented checks, including content preservation, independent stores and a complete OpenSpec cycle with a requirement change." })}</li>
          <li>{L({ es: "Visor: 28 pruebas unitarias y 8 comprobaciones en VS Code, además de un recorrido automatizado de interfaz en Edge. Paquete VSIX personal generado.", en: "Viewer: 28 unit tests and 8 checks in VS Code, plus an automated UI walkthrough in Edge. Personal VSIX package generated." })}</li>
          <li>{L({ es: "Pruebas en Windows con perfiles y datos de laboratorio aislados. Las aprobaciones del ciclo son simuladas; no acreditan revisiones humanas reales.", en: "Tests ran on Windows with isolated profiles and lab data. Cycle approvals are simulated; they do not represent actual human reviews." })}</li>
        </ul>
      </div>
      <div>
        <h4>{L({ es: "Qué falta demostrar", en: "What remains to be demonstrated" })}</h4>
        <ul>
          <li>{L({ es: "Adopción por otra persona en su entorno y con revisores reales.", en: "Adoption by another developer in their own environment with real reviewers." })}</li>
          <li>{L({ es: "Mejora de tiempos, coste o calidad: todavía sin línea base comparativa.", en: "Time, cost or quality improvements: no comparative baseline yet." })}</li>
          <li>{L({ es: "Validación en Linux/macOS. Jira y controles obligatorios de PR/CI quedan fuera de esta beta.", en: "Validation on Linux/macOS. Jira and enforced PR/CI controls are outside this beta." })}</li>
        </ul>
      </div>
    </div>
    <p className="sdd-study__note">{L({ es: "Fuente: VALIDACION.md de la distribución personal, pruebas del 1 de octubre de 2026. Estos resultados pertenecen a esa versión y no son una certificación independiente; no se repitieron para actualizar el portafolio.", en: "Source: the personal distribution's VALIDACION.md, tests dated October 1, 2026. Results apply to that version and are not independent certification; they were not rerun for this portfolio update." })}</p>
    <p className="sdd-study__note">{L({ es: "Referencia documental", en: "Documentation reference" })}: <code>{AI_SDD_SOURCE_REVISION}</code>. {L({ es: "El repositorio requiere acceso; este caso presenta un resumen personal, sin publicar los registros de laboratorio.", en: "The repository requires access; this case presents a personal summary without publishing lab logs." })}</p>
  </section>;
}
