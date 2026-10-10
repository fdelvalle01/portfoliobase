import React from "react";
import { PRINCIPLES } from "../data/content";
import { useI18n } from "../context/I18nContext";
import Stack from "./Stack";

export default function HowIWork() {
  const { L } = useI18n();
  return <section id="como-trabajo" className="section section--alt how-i-work">
    <div className="section__inner">
      <div className="kicker">02 — {L({ es: "CÓMO TRABAJO", en: "HOW I WORK" })}</div>
      <h2 className="section-title">{L({ es: "Trabajar con sistemas que mueven dinero te enseña tres cosas.", en: "Working on systems that move money teaches you three things." })}</h2>
      <p className="section-lead">{L({ es: "Son los principios que guían mi trabajo, independientemente del lenguaje o framework utilizado.", en: "These are the principles that guide my work, regardless of the language or framework involved." })}</p>
      <div className="principles-grid">
        {PRINCIPLES.map((principle) => <article className="principle" key={principle.number}><span className="principle__number">{principle.number}</span><h3>{L(principle.title)}</h3><p>{L(principle.text)}</p></article>)}
      </div>
      <Stack embedded />
      <div className="how-i-work__bio">
        <div><div className="kicker">{L({ es: "PERFIL", en: "PROFILE" })}</div><h3>{L({ es: "Una base técnica, aplicada a sistemas críticos.", en: "A technical foundation applied to critical systems." })}</h3></div>
        <div>
          <p>{L({ es: "Ingeniero en Informática (INACAP), con diplomado en Desarrollo de Aplicaciones Móviles de la Pontificia Universidad Católica de Chile. Español nativo e inglés B2 con certificación IELTS.", en: "Computer Engineer (INACAP), with a Diploma in Mobile Application Development from Pontificia Universidad Católica de Chile. Native Spanish speaker and English B2 with IELTS certification." })}</p>
          <p>{L({ es: "Viví y estudié inglés durante seis meses en Nueva Zelanda. Fuera del código: montaña, videojuegos y viajar; de ahí salió Summit.", en: "I lived and studied English in New Zealand for six months. Outside code: mountains, games, and traveling; that is where Summit came from." })}</p>
        </div>
      </div>
    </div>
  </section>;
}
