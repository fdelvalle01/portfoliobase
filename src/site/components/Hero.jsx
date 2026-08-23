import React from "react";
import { PiDownloadSimple, PiGithubLogo, PiLinkedinLogo, PiReadCvLogo } from "react-icons/pi";
import avatar from "../../Assets/avatar.svg";
import { CV_FILENAME, HERO_CHIPS, LINKS } from "../data/content";
import { useI18n } from "../context/I18nContext";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="inicio" className="hero">
      <div>
        <div className="status-pill">
          <span className="status-pill__dot" />
          <span>{t("hero.status")}</span>
        </div>

        <h1 className="hero__hello">
          {t("hero.hello")}
          <span className="hero__wave" role="img" aria-label="wave">
            👋🏻
          </span>
        </h1>

        <h2 className="hero__name">
          Francisco
          <br />
          <span className="hero__name-gradient">Del Valle</span>
        </h2>

        <p className="hero__lead">{t("hero.lead")}</p>

        <div className="chip-row">
          {HERO_CHIPS.map((chip) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>

        <div className="hero__ctas">
          <a href="#proyectos" className="btn-outline-accent btn-lg">
            {t("hero.projects")}
          </a>
          <a href={LINKS.cv} target="_blank" rel="noreferrer" className="btn-outline-line">
            <PiReadCvLogo />
            {t("hero.cv")}
          </a>
          <a
            href={LINKS.cv}
            download={CV_FILENAME}
            className="hero__download"
            aria-label={t("hero.cvDownload")}
            title={t("hero.cvDownload")}
          >
            <PiDownloadSimple />
            {t("hero.download")}
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
