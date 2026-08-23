import React from "react";
import { TIMELINE } from "../data/content";
import { useI18n } from "../context/I18nContext";

export default function Timeline() {
  const { t, L } = useI18n();

  return (
    <section id="trayectoria" className="section section--alt">
      <div className="section__inner">
        <div className="kicker">02 — {t("career.kicker")}</div>
        <h3 className="section-title">{t("career.title")}</h3>
        <p className="section-lead">{t("career.lead")}</p>

        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div className="timeline__item" key={i}>
              <span className={`timeline__dot timeline__dot--${item.kind}`} />
              <div className="timeline__head">
                <div className="timeline__range">{L(item.range)}</div>
                <div className="timeline__tag">
                  {item.kind === "work" ? t("career.work") : t("career.education")}
                </div>
              </div>
              <h4 className="timeline__title">{L(item.title)}</h4>
              <div className="timeline__place">
                {typeof item.place === "string" ? item.place : L(item.place)}
              </div>
              {item.desc ? <p className="timeline__desc">{L(item.desc)}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
