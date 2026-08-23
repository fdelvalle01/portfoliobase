import React from "react";
import { PiGraph, PiRobot, PiTerminalWindow } from "react-icons/pi";
import {
  SiAmazonaws,
  SiApachekafka,
  SiFirebase,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiLoopback,
  SiMicrosoftsqlserver,
  SiMui,
  SiNodedotjs,
  SiObsidian,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
} from "react-icons/si";
import { LEVELS, STACK } from "../data/content";
import { useI18n } from "../context/I18nContext";

const ICONS = {
  react: SiReact,
  javascript: SiJavascript,
  html5: SiHtml5,
  mui: SiMui,
  nodejs: SiNodedotjs,
  java: SiOpenjdk,
  springboot: SiSpringboot,
  go: SiGo,
  loopback: SiLoopback,
  kafka: SiApachekafka,
  python: SiPython,
  sqlserver: SiMicrosoftsqlserver,
  postgresql: SiPostgresql,
  git: SiGit,
  aws: SiAmazonaws,
  kubernetes: SiKubernetes,
  firebase: SiFirebase,
  linux: SiLinux,
  // Sin logo de marca disponible en react-icons: iconos semánticos de Phosphor.
  claudecode: PiTerminalWindow,
  agents: PiRobot,
  context: PiGraph,
  obsidian: SiObsidian,
};

function StackColumn({ title, items, t, L }) {
  return (
    <div className="stack-col">
      <h4 className="stack-col__title">{title}</h4>
      {LEVELS.map((level) => {
        const group = items.filter((item) => item.level === level);
        if (!group.length) return null;
        return (
          <div className="stack-group" key={level}>
            <div className="stack-group__label">{t(`stack.level.${level}`)}</div>
            <ul className="stack-group__list">
              {group.map((item, i) => {
                const Icon = ICONS[item.icon];
                return (
                  <li className="stack-item" key={i}>
                    {Icon ? <Icon className="stack-item__icon" aria-hidden="true" /> : null}
                    <span>{typeof item.name === "string" ? item.name : L(item.name)}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default function Stack() {
  const { t, L } = useI18n();

  return (
    <section id="stack" className="section section--alt">
      <div className="section__inner">
        <div className="kicker">04 — STACK</div>
        <h3 className="section-title">{t("stack.title")}</h3>
        <p className="section-lead">{t("stack.lead")}</p>

        <div className="stack-grid">
          <StackColumn title={t("stack.frontend")} items={STACK.frontend} t={t} L={L} />
          <StackColumn title={t("stack.backend")} items={STACK.backend} t={t} L={L} />
          <StackColumn title={t("stack.tools")} items={STACK.tools} t={t} L={L} />
          <StackColumn title={t("stack.ai")} items={STACK.ai} t={t} L={L} />
        </div>
      </div>
    </section>
  );
}
