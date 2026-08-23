import React, { useEffect, useRef, useState } from "react";
import { PiList, PiMoon, PiSun, PiX } from "react-icons/pi";
import logo from "../../Assets/logo.png";
import { NAV } from "../data/content";
import { useI18n } from "../context/I18nContext";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { lang, setLang, t, L } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  // El menú móvil se cierra con Escape y al volver al layout de escritorio.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        if (toggleRef.current) toggleRef.current.focus();
      }
    };
    const media = window.matchMedia("(min-width: 901px)");
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    if (media.addEventListener) media.addEventListener("change", onChange);
    else media.addListener(onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (media.removeEventListener) media.removeEventListener("change", onChange);
      else media.removeListener(onChange);
    };
  }, [open]);

  return (
    <header className="header">
      <nav className="header__nav">
        <a
          href="#inicio"
          className="brand"
          aria-label="Francisco Del Valle"
          onClick={() => setOpen(false)}
        >
          <img src={logo} alt="" className="brand__logo" />
          <span className="brand__name">Francisco Del Valle</span>
        </a>

        <div className={`nav-links${open ? " is-open" : ""}`} id="nav-links">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {L(item)}
            </a>
          ))}
          <a href="#contacto" className="btn-outline-accent nav-links__cta" onClick={() => setOpen(false)}>
            {t("nav.cta")}
          </a>
        </div>

        <div className="header__actions">
          <div className="lang-toggle">
            <button
              type="button"
              className={lang === "es" ? "is-active" : ""}
              onClick={() => setLang("es")}
            >
              ES
            </button>
            <button
              type="button"
              className={lang === "en" ? "is-active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            title={lang === "es" ? "Tema" : "Theme"}
            aria-label={lang === "es" ? "Cambiar tema" : "Toggle theme"}
          >
            {theme === "dark" ? <PiSun color="#c770f0" /> : <PiMoon color="#6d28d9" />}
          </button>

          <a href="#contacto" className="btn-outline-accent header__cta">
            {t("nav.cta")}
          </a>

          <button
            type="button"
            ref={toggleRef}
            className="theme-toggle nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label={open ? t("nav.menuClose") : t("nav.menu")}
          >
            {open ? <PiX /> : <PiList />}
          </button>
        </div>
      </nav>
    </header>
  );
}
