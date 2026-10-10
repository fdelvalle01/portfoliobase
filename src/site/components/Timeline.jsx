import React from "react";
import { EDUCATION, TIMELINE } from "../data/content";
import { useI18n } from "../context/I18nContext";

export default function Timeline() {
  const { t, L } = useI18n();
  return <section id="trayectoria" className="section career-section">
    <div className="section__inner">
      <div className="kicker">03 — {t("career.kicker")}</div>
      <h2 className="section-title">{t("career.title")}</h2>
      <p className="section-lead">{t("career.lead")}</p>
      <div className="timeline">
        {TIMELINE.map((item, index) => <article className="timeline__item timeline__item--reveal" style={{ "--delay": `${index * 90}ms` }} key={item.title.en}>
          <span className="timeline__dot timeline__dot--work" />
          <div className="timeline__head"><div className="timeline__range">{L(item.range)}</div><div className="timeline__tag">{t("career.work")}</div></div>
          <h3 className="timeline__title">{L(item.title)}</h3>
          <div className="timeline__place">{typeof item.place === "string" ? item.place : L(item.place)}</div>
          {item.desc ? <p className="timeline__desc">{L(item.desc)}</p> : null}
        </article>)}
      </div>
      <div className="education-summary"><div className="education-summary__label">{t("career.education")}</div>{EDUCATION.map((item) => <p key={item.en}>{L(item)}</p>)}</div>
    </div>
  </section>;
}
