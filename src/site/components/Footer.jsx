import React from "react";
import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { LINKS } from "../data/content";
import { useI18n } from "../context/I18nContext";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__copy">
          © {year} Francisco Del Valle · {t("footer.copy")}
        </span>
        <div className="footer__social">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="icon-btn icon-btn--sm"
            aria-label="GitHub"
          >
            <PiGithubLogo />
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="icon-btn icon-btn--sm"
            aria-label="LinkedIn"
          >
            <PiLinkedinLogo />
          </a>
        </div>
      </div>
    </footer>
  );
}
