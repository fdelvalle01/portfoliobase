import React from "react";
import aboutImg from "../../Assets/about.png";
import { useI18n } from "../context/I18nContext";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="sobre-mi" className="about">
      <div>
        <div className="kicker">01 — {t("about.kicker")}</div>
        <h3 className="about__title">{t("about.title")}</h3>
        <p className="about__p">{t("about.p1")}</p>
        <p className="about__p">{t("about.p2")}</p>

        <div className="about__cards">
          <div className="mini-card">
            <div className="mini-card__label">{t("about.currently")}</div>
            <div className="mini-card__value">Senior Software Engineer · nuam exchange</div>
          </div>
          <div className="mini-card">
            <div className="mini-card__label">{t("about.languages")}</div>
            <div className="mini-card__value">{t("about.languagesValue")}</div>
          </div>
        </div>
      </div>

      <div className="about__art">
        <img src={aboutImg} alt="" />
      </div>
    </section>
  );
}
