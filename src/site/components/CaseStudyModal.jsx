import React, { useCallback, useEffect, useRef, useState } from "react";
import { PiArrowUpRight, PiX } from "react-icons/pi";
import { useI18n } from "../context/I18nContext";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

export default function CaseStudyModal({ project, onClose }) {
  const { t, L } = useI18n();
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      // Foco atrapado dentro del diálogo.
      const nodes = Array.from(panelRef.current.querySelectorAll(FOCUSABLE));
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!project) return undefined;
    setImageIndex(0);
    const previous = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      // Devuelve el foco al botón que abrió el modal.
      if (previous && typeof previous.focus === "function") previous.focus();
    };
  }, [project]);

  if (!project) return null;
  const selectedImage = project.gallery?.[imageIndex] || {
    img: project.img,
    alt: project.alt,
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal"
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
      >
        <div
          className={`modal__media${project.media === "app" ? " modal__media--app" : ""}`}
          style={project.mediaBg ? { background: project.mediaBg } : undefined}
        >
          <img src={selectedImage.img} alt={L(selectedImage.alt)} />
          <button
            type="button"
            ref={closeRef}
            className="modal__close"
            onClick={onClose}
            aria-label={t("projects.close")}
          >
            <PiX />
          </button>
        </div>

        <div className="modal__body">
          {project.gallery && (
            <div className="case-gallery">
              <div className="case-gallery__choices">
                {project.gallery.map((image, i) => (
                  <button
                    type="button"
                    key={image.img}
                    aria-pressed={i === imageIndex}
                    onClick={() => setImageIndex(i)}
                    aria-label={L(image.alt)}
                  >
                    <img src={image.img} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
              <p>{L(selectedImage.alt)}</p>
              <small>{L(project.mediaNote)}</small>
            </div>
          )}
          <div className="modal__kicker">{L(project.kicker)}</div>
          <h3 className="modal__title" id="case-title">
            {L(project.title)}
          </h3>

          <div className="modal__cols">
            <div>
              <div className="modal__label">{t("projects.context")}</div>
              <p className="modal__text">{L(project.context)}</p>
            </div>
            <div>
              <div className="modal__label">{t("projects.role")}</div>
              <p className="modal__text">{L(project.role)}</p>
            </div>
          </div>

          <div className="modal__result">
            <div className="modal__result-label">{t("projects.result")}</div>
            <p className="modal__result-text">{L(project.result)}</p>
          </div>

          <div className="modal__label">STACK</div>
          <div className="modal__stack">
            {project.stack.map((item) => (
              <span className="tag tag--lg" key={item}>
                {item}
              </span>
            ))}
          </div>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-accent btn-lg modal__visit"
            >
              {t(project.linkLabel || "projects.visit")} <PiArrowUpRight />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
