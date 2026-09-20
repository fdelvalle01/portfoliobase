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
      <p>{L({ es: "Brain es la memoria documental; OpenSpec conserva el plan del cambio. El agente consulta ambas fuentes y trabaja dentro del alcance autorizado.", en: "Brain is the documentation memory; OpenSpec holds the change plan. The agent reads both sources and works within the authorized scope." })}</p>
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
          <li>{L({ es: "Preparación probada en proyectos simples, monorepos y multirepos de laboratorio.", en: "Preparation tested with single projects, monorepos and multi-repository lab fixtures." })}</li>
          <li>{L({ es: "Regresión multirepo: 13/13 casos en el informe local. Las revisiones simuladas están identificadas como tales.", en: "Multi-repository regression: 13/13 cases in the local report. Simulated reviews are explicitly identified." })}</li>
          <li>{L({ es: "Ensayos de reproceso conservan el historial y dejan pendientes las aprobaciones afectadas.", en: "Reprocessing experiments preserve history and leave affected approvals pending." })}</li>
        </ul>
      </div>
      <div>
        <h4>{L({ es: "Qué falta demostrar", en: "What remains to be demonstrated" })}</h4>
        <ul>
          <li>{L({ es: "Adopción por otra persona en su entorno y con revisores reales.", en: "Adoption by another developer in their own environment with real reviewers." })}</li>
          <li>{L({ es: "Mejora de tiempos, coste o calidad: todavía sin línea base comparativa.", en: "Time, cost or quality improvements: no comparative baseline yet." })}</li>
          <li>{L({ es: "Controles obligatorios de PR/CI y conexión con Jira; no forman parte de lo validado.", en: "Enforced PR/CI controls and a Jira connection are not part of the validated scope." })}</li>
        </ul>
      </div>
    </div>
    <p className="sdd-study__note">{L({ es: "Fuente: informe de la POC con corte al 17 de septiembre de 2026. Resume ensayos locales, no una certificación independiente; los registros originales permanecen fuera del repositorio. No se repitieron esos ensayos para crear esta presentación.", en: "Source: POC report as of September 17, 2026. It summarizes local experiments, not independent certification; original logs remain outside the repository. These experiments were not rerun to create this presentation." })}</p>
    <p className="sdd-study__note">{L({ es: "Referencia documental", en: "Documentation reference" })}: <code>{AI_SDD_SOURCE_REVISION}</code>. {L({ es: "La documentación completa no tiene acceso público; este resumen no equivale a publicar los registros originales.", en: "Full documentation is not publicly accessible; this summary does not publish the original logs." })}</p>
  </section>;
}
