import React from "react";
import { PRINCIPLES } from "../data/content";
import { useI18n } from "../context/I18nContext";
import Stack from "./Stack";

export default function HowIWork() {
  const { L } = useI18n();
  return <section id="como-trabajo" className="section section--alt how-i-work">
    <div className="section__inner">
      <div className="kicker">03 — {L({ es: "CÓMO TRABAJO", en: "HOW I WORK" })}</div>
      <h2 className="section-title">{L({ es: "Trabajar con sistemas que mueven dinero te enseña tres cosas.", en: "Working on systems that move money teaches you three things." })}</h2>
      <p className="section-lead">{L({ es: "Son los principios que guían mi trabajo, independientemente del lenguaje o framework utilizado.", en: "These are the principles that guide my work, regardless of the language or framework involved." })}</p>
      <div className="principles-grid">
        {PRINCIPLES.map((principle) => <article className="principle" key={principle.number}><span className="principle__number">{principle.number}</span><h3>{L(principle.title)}</h3><p>{L(principle.text)}</p></article>)}
      </div>
      <Stack embedded />
    </div>
  </section>;
}
