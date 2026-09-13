import React from "react";
import { PiBriefcase, PiDownloadSimple, PiGithubLogo, PiLinkedinLogo, PiReadCvLogo } from "react-icons/pi";
import avatar from "../../Assets/avatar.svg";
import { LINKS, STATS } from "../data/content";
import { useI18n } from "../context/I18nContext";

export default function Hero() {
  const { t, L } = useI18n();

  return (
    <section id="inicio" className="hero">
      <div>
        <div className="status-pill">
          <span className="status-pill__dot" />
          <span>{t("hero.status")}</span>
        </div>

        <p className="hero__hello">
          {t("hero.hello")}
          <span className="hero__wave" role="img" aria-label="wave">
            👋🏻
          </span>
        </p>

        <h1 className="hero__name">{t("hero.title")}</h1>

        <p className="hero__lead">{t("hero.lead")}</p>

        <div className="hero__stats" aria-label={t("hero.lead")}>
          {STATS.map((stat) => (
            <div className="hero-stat" key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{L(stat)}</span>
            </div>
          ))}
        </div>

        <div className="hero__ctas">
          <a href="#simulador" className="btn-outline-accent btn-lg">
            {t("hero.projects")}
          </a>
          <a href="#trayectoria" className="btn-outline-line">
            <PiBriefcase />
            {t("hero.experience")}
          </a>
          <a href={LINKS.cv} target="_blank" rel="noreferrer" className="btn-outline-line">
            <PiReadCvLogo />
            {t("hero.cv")}
          </a>
          <a href={LINKS.cv} download className="hero__download" aria-label={t("hero.cvDownload")} title={t("hero.cvDownload")}>
            <PiDownloadSimple />
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label="GitHub"
          >
            <PiGithubLogo />
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label="LinkedIn"
          >
            <PiLinkedinLogo />
          </a>
        </div>
      </div>

      <div className="hero__art">
        <div className="hero__glow" />
        <img src={avatar} alt="" className="hero__img" />
      </div>
    </section>
  );
}
