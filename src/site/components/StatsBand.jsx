import React from "react";
import { STATS } from "../data/content";
import { useI18n } from "../context/I18nContext";

export default function StatsBand() {
  const { L } = useI18n();

  return (
    <section className="band">
      <div className="band__inner">
        {STATS.map((stat) => (
          <div key={stat.value}>
            <div className="band__value">{stat.value}</div>
            <div className="band__label">{L(stat)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
