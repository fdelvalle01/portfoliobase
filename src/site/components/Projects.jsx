import React, { useState } from "react";
import { PiArrowRight } from "react-icons/pi";
import { CASES } from "../data/content";
import { useI18n } from "../context/I18nContext";
import CaseStudyModal from "./CaseStudyModal";

export default function Projects() {
  const { t, L } = useI18n();
  const [open, setOpen] = useState(null);

  return (
    <section id="proyectos" className="section">
      <div className="section__inner">
        <div className="kicker">03 — {t("projects.kicker")}</div>
        <h3 className="section-title">{t("projects.title")}</h3>
        <p className="section-lead">{t("projects.lead")}</p>

        <div className="cards-grid">
          {CASES.map((project, i) => (
            <button
              type="button"
              className="project-card"
              key={project.img}
              onClick={() => setOpen(i)}
            >
              <div
                className={`project-card__media${
                  project.media === "app" ? " project-card__media--app" : ""
                }`}
                style={project.mediaBg ? { background: project.mediaBg } : undefined}
              >
                <img src={project.img} alt={L(project.alt)} />
              </div>
              <div className="project-card__body">
                <div className="project-card__kicker">{L(project.kicker)}</div>
                <h4 className="project-card__title">{L(project.title)}</h4>
                <p className="project-card__desc">{L(project.summary)}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="project-card__more">
                  {t("projects.view")} <PiArrowRight />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={open === null ? null : CASES[open]}
        onClose={() => setOpen(null)}
      />
    </section>
  );
}
