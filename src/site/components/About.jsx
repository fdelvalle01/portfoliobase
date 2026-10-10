import React from "react";
import { PiArrowRight } from "react-icons/pi";
import { ABOUT_MILESTONES } from "../data/content";
import { useI18n } from "../context/I18nContext";

export default function About() {
  const { t, L } = useI18n();

  return (
    <section id="sobre-mi" className="section section--alt about-section" aria-labelledby="about-title">
      <div className="section__inner">
        <div className="about-story">
          <div className="about-story__intro">
            <div className="kicker">01 — {t("about.kicker")}</div>
            <h2 className="section-title" id="about-title">{t("about.title")}</h2>
          </div>
          <div className="about-story__body">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
        </div>
        <nav className="about-milestones" aria-label={t("about.milestones")}>
          {ABOUT_MILESTONES.map((milestone) => (
            <a className="about-milestone" href={`#${milestone.caseId}`} key={milestone.caseId}>
              <strong>{L(milestone.title)}</strong>
              <span className="about-milestone__detail">{L(milestone.detail)}</span>
              <span className="about-milestone__more">{t("projects.view")} <PiArrowRight aria-hidden="true" /></span>
            </a>
          ))}
        </nav>
        <p className="about-outside">{t("about.outside")}</p>
      </div>
    </section>
  );
}
