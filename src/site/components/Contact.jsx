import React, { useState } from "react";
import { PiEnvelopeSimple, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { LINKS } from "../data/content";
import { useI18n } from "../context/I18nContext";

export default function Contact() {
  const { t } = useI18n();
  const [opening, setOpening] = useState(false);

  /**
   * Sin backend ni servicio externo: el envío abre el cliente de correo del
   * visitante con el mensaje ya redactado.
   */
  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name") || "";
    const email = form.get("email") || "";
    const company = form.get("company") || "";
    const message = form.get("message") || "";

    const subject = `${t("contact.subject")} — ${name}`;
    const body = [
      `${t("contact.name")}: ${name}`,
      `Email: ${email}`,
      `${t("contact.company")}: ${company}`,
      "",
      `${t("contact.message")}:`,
      message,
    ].join("\n");

    setOpening(true);
    window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contacto" className="section">
      <div className="contact">
        <div>
          <div className="kicker">06 — {t("contact.kicker")}</div>
          <h3 className="contact__title">{t("contact.title")}</h3>
          <p className="contact__lead">{t("contact.lead")}</p>

          <div className="contact__list">
            <a href={`mailto:${LINKS.email}`} className="contact__row">
              <PiEnvelopeSimple className="contact__row-icon" />
              <span>{LINKS.email}</span>
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="contact__row">
              <PiLinkedinLogo className="contact__row-icon" />
              <span>linkedin.com/in/francisco-d</span>
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="contact__row">
              <PiGithubLogo className="contact__row-icon" />
              <span>github.com/fdelvalle01</span>
            </a>
          </div>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <div className="form__pair">
            <label>
              <span>{t("contact.name")}</span>
              <input type="text" name="name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" required />
            </label>
          </div>
          <label>
            <span>{t("contact.company")}</span>
            <input type="text" name="company" />
          </label>
          <label>
            <span>{t("contact.message")}</span>
            <textarea name="message" rows="5" required />
          </label>
          <div className="form__actions">
            <button type="submit" className="form__submit">
              {t("contact.send")}
            </button>
            <span className="form__sent" role="status" aria-live="polite">
              {opening ? t("contact.sent") : ""}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
