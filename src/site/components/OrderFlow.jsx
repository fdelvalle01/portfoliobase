import React, { useState } from "react";
import { PiArrowRight, PiArrowClockwise } from "react-icons/pi";
import { useI18n } from "../context/I18nContext";

const STEPS = ["Order Entry", "Validation", "FIX Gateway", "Matching", "Execution / Drop Copy", "Market Data"];

export default function OrderFlow() {
  const { lang, L } = useI18n();
  const [run, setRun] = useState(0);
  const restart = () => setRun((value) => value + 1);

  return <section className="order-flow" aria-labelledby="order-flow-title">
    <div className="order-flow__card">
      <div className="order-flow__head">
        <div>
          <h2 id="order-flow-title">{lang === "es" ? "El recorrido conceptual de una orden." : "The conceptual journey of an order."}</h2>
        </div>
        <button type="button" className="order-flow__restart" onClick={restart} aria-label={lang === "es" ? "Reiniciar animación del flujo" : "Restart flow animation"}>
          <PiArrowClockwise /> {lang === "es" ? "Reiniciar" : "Restart"}
        </button>
      </div>
      <div className="order-flow__steps" key={run} onMouseEnter={restart} onFocus={restart} tabIndex="0">
        {STEPS.map((step, index) => <React.Fragment key={step}>
          <div className="order-flow__step" style={{ "--step": index }}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>
          {index < STEPS.length - 1 ? <PiArrowRight className="order-flow__arrow" aria-hidden="true" /> : null}
        </React.Fragment>)}
        <span className="order-flow__token" aria-hidden="true" />
      </div>
      <p className="order-flow__note">{L({ es: "Flujo conceptual y educativo. No representa la arquitectura interna de ninguna organización.", en: "Conceptual and educational flow. It does not represent any organization's internal architecture." })}</p>
    </div>
  </section>;
}
