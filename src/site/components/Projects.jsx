import React, { useEffect, useMemo, useState } from "react";
import { PiArrowRight } from "react-icons/pi";
import { CASE_GROUPS, CASES } from "../data/content";
import { useI18n } from "../context/I18nContext";
import CaseStudyModal from "./CaseStudyModal";

const FILTERS = ["all", "production", "trading", "platform", "personal", "poc"];

function caseFromHash() {
  const index = CASES.findIndex((project) => project.id && `#${project.id}` === window.location.hash);
  return index === -1 ? null : index;
}

export default function Projects() {
  const { t, L } = useI18n();
  const [open, setOpen] = useState(caseFromHash);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const handleHash = () => setOpen(caseFromHash());
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  function openCase(index) {
    setOpen(index);
    if (CASES[index].id) window.history.replaceState(null, "", `#${CASES[index].id}`);
  }

  function closeCase() {
    setOpen(null);
    if (caseFromHash() !== null) window.history.replaceState(null, "", "#casos");
  }
  const visibleCases = useMemo(
    () => CASES.map((project, index) => ({ project, index })).filter(({ project }) => filter === "all" || project.categories.includes(filter)),
    [filter]
  );

  return <section id="casos" className="section cases-section">
    <div className="section__inner">
      <div className="kicker">01 — {t("projects.kicker")}</div>
      <h2 className="section-title">{t("projects.title")}</h2>
      <p className="section-lead">{t("projects.lead")}</p>
      <div className="case-filters" role="group" aria-label={t("projects.kicker")}>
        {FILTERS.map((item) => <button type="button" key={item} className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>{t(`projects.${item}`)}</button>)}
      </div>

      <div className="cards-grid">
        {visibleCases.map(({ project, index }) => <React.Fragment key={project.title.es}>
          {filter === "all" && CASE_GROUPS.find((group) => group.indexes[0] === index) ? <div className="case-group__label">{L(CASE_GROUPS.find((group) => group.indexes[0] === index).label)}</div> : null}
          <button type="button" className="project-card" onClick={() => openCase(index)}>
            <div className={`project-card__media${project.media === "app" ? " project-card__media--app" : ""}${project.media === "diagram" ? " project-card__media--diagram" : ""}`} style={project.mediaBg ? { background: project.mediaBg } : undefined}>
              <img src={project.img} alt={L(project.alt)} style={project.mediaPosition ? { objectPosition: project.mediaPosition } : undefined} />
            </div>
            <div className="project-card__body">
              <div className="project-card__kicker">{L(project.kicker)}</div>
              <h3 className="project-card__title">{L(project.title)}</h3>
              <p className="project-card__desc">{L(project.summary)}</p>
              <div className="project-card__evidence"><span>{t("projects.role")}</span><p>{L(project.role)}</p></div>
              <div className="project-card__evidence"><span>{t("projects.result")}</span><p>{L(project.result)}</p></div>
              <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              <span className="project-card__more">{t("projects.view")} <PiArrowRight /></span>
            </div>
          </button>
        </React.Fragment>)}
      </div>
      <p className="cases-disclaimer">{t("projects.confidentiality")}</p>
    </div>
    <CaseStudyModal project={open === null ? null : CASES[open]} onClose={closeCase} />
  </section>;
}
