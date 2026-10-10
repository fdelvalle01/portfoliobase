import React from "react";
import { PiEnvelopeSimple, PiFilePdf, PiGithubLogo } from "react-icons/pi";
import { LINKS } from "../data/content";
import { useI18n } from "../context/I18nContext";

export default function Contact() {
  const { t } = useI18n();

  return <section id="contacto" className="section contact-section">
    <div className="contact">
      <div className="contact__intro">
        <div className="kicker">04 — {t("contact.kicker")}</div>
        <h2 className="contact__title">{t("contact.title")}</h2>
        <p className="contact__lead">{t("contact.summary")}</p>
      </div>

      <div className="contact-routes">
        <article className="contact-route">
          <PiFilePdf className="contact-route__icon" aria-hidden="true" />
          <h3>{t("contact.hiringTitle")}</h3>
          <p>{t("contact.hiringLead")}</p>
          <div className="contact-route__actions">
            <a href={LINKS.cv} target="_blank" rel="noreferrer">{t("hero.cv")}</a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">{t("contact.linkedin")}</a>
          </div>
        </article>
        <article className="contact-route">
          <PiEnvelopeSimple className="contact-route__icon" aria-hidden="true" />
          <h3>{t("contact.consultingTitle")}</h3>
          <p>{t("contact.consultingLead")}</p>
          <div className="contact-route__actions">
            <a href={`mailto:${LINKS.email}`}>{t("contact.email")}</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer"><PiGithubLogo aria-hidden="true" /> GitHub</a>
          </div>
        </article>
      </div>
    </div>
  </section>;
}
