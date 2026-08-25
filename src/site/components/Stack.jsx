import React, { useState } from "react";
import { AI_TOOLS, CAPABILITIES } from "../data/content";
import { useI18n } from "../context/I18nContext";

export default function Stack({ embedded = false }) {
  const { t, L } = useI18n();
  const [active, setActive] = useState(CAPABILITIES[0].key);
  const current = CAPABILITIES.find((group) => group.key === active);
  const content = <>
    <h3 className="how-i-work__stack-title">{t("stack.title")}</h3>
    <p className="section-lead">{t("stack.lead")}</p>
    <div className="capability-tabs" role="tablist" aria-label={t("stack.title")}>
      {CAPABILITIES.map((group) => <button type="button" role="tab" aria-selected={group.key === active} className={group.key === active ? "is-active" : ""} key={group.key} onClick={() => setActive(group.key)}>{L(group.title)}</button>)}
    </div>
    <div className="capability-panel" role="tabpanel">
      <h4>{L(current.title)}</h4>
      <div className="capability-chips">{current.items.map((item) => <span key={item}>{item}</span>)}</div>
    </div>
    <div className="ai-tools">
      <div className="ai-tools__label">{t("stack.aiTools")}</div>
      {AI_TOOLS.map((item) => <span key={typeof item === "string" ? item : item.en}>{typeof item === "string" ? item : L(item)}</span>)}
    </div>
  </>;
  if (embedded) return <div className="how-i-work__stack">{content}</div>;
  return <section id="stack" className="section section--alt"><div className="section__inner">{content}</div></section>;
}
