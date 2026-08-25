import React, { useMemo, useState } from "react";
import { PiArrowRight, PiCode, PiRobot, PiShieldCheck } from "react-icons/pi";
import { useI18n } from "../context/I18nContext";

const AUTOMATION_STEPS = ["Market Data", "Strategy", "Risk Controls", "Order Entry", "Execution Report"];
const SOH = "\u0001";

function fixNumber(value, fallback = "0") {
  if (!Number.isFinite(Number(value))) return fallback;
  return Number(value) === 0 ? "0" : Number(value).toFixed(2);
}

function fixChecksum(message) {
  const total = Array.from(message).reduce((sum, character) => sum + character.charCodeAt(0), 0);
  return String(total % 256).padStart(3, "0");
}

function buildExecutionReport(event, symbol) {
  const sequence = event?.id || 1;
  const identifier = String(sequence).padStart(3, "0");
  const simulatedMinutes = String(Math.floor((sequence - 1) / 60) % 60).padStart(2, "0");
  const simulatedSeconds = String((sequence - 1) % 60).padStart(2, "0");
  const status = event?.status || "resting";
  const ordStatus = status === "filled" ? "2" : status === "partial" ? "1" : "0";
  const execType = status === "resting" ? "0" : "F";
  const executed = event?.executed || 0;
  const remaining = event?.remaining ?? 5000;
  const averagePrice = event?.averagePrice || 0;

  const bodyFields = [
    ["35", "8", "MsgType · ExecutionReport"],
    ["34", String(sequence), "MsgSeqNum"],
    ["49", "SIM_EXCHANGE", "SenderCompID"],
    ["52", `20250101-12:${simulatedMinutes}:${simulatedSeconds}.000`, "SendingTime · simulated"],
    ["56", "PORTFOLIO_CLIENT", "TargetCompID"],
    ["1128", "9", "ApplVerID · FIX 5.0 SP2"],
    ["37", `ORDER-${identifier}`, "OrderID"],
    ["11", `ORD-${identifier}`, "ClOrdID"],
    ["17", `EXEC-${identifier}`, "ExecID"],
    ["150", execType, "ExecType · 0=New, F=Trade"],
    ["39", ordStatus, "OrdStatus · 0=New, 1=Partial, 2=Filled"],
    ["55", symbol, "Symbol"],
    ["54", event?.side === "sell" ? "2" : "1", "Side · 1=Buy, 2=Sell"],
    ["38", String(event?.requested || 5000), "OrderQty"],
    ["40", "2", "OrdType · Limit"],
    ["44", fixNumber(event?.limitPrice, "3452.00"), "Price"],
    ["59", event?.validity === "gtc" ? "1" : "0", "TimeInForce · 0=Day, 1=GTC"],
    ["32", String(executed), "LastQty"],
    ["31", fixNumber(executed ? averagePrice : 0), "LastPx"],
    ["14", String(executed), "CumQty"],
    ["151", String(remaining), "LeavesQty"],
    ["6", fixNumber(averagePrice), "AvgPx"],
  ];
  const body = bodyFields.map(([tag, value]) => `${tag}=${value}${SOH}`).join("");
  const headerFields = [
    ["8", "FIXT.1.1", "BeginString"],
    ["9", String(body.length), "BodyLength"],
  ];
  const messageWithoutChecksum = `${headerFields.map(([tag, value]) => `${tag}=${value}${SOH}`).join("")}${body}`;
  const checksum = fixChecksum(messageWithoutChecksum);

  return {
    fields: [...headerFields, ...bodyFields, ["10", checksum, "CheckSum"]],
    raw: `${messageWithoutChecksum}10=${checksum}${SOH}`,
  };
}

export default function FixExplorer({ event, symbol }) {
  const { lang, L } = useI18n();
  const [tab, setTab] = useState("fix");
  const [cycle, setCycle] = useState(0);
  const message = useMemo(() => buildExecutionReport(event, symbol), [event, symbol]);
  const visibleRaw = message.raw.split(SOH).join("␁");

  return <section className="fix-explorer" aria-labelledby="fix-explorer-title">
    <div className="fix-explorer__intro">
      <div>
        <div className="kicker">FIX PROTOCOL</div>
        <h3 id="fix-explorer-title">{L({ es: "De la ejecución al mensaje FIX.", en: "From execution to a FIX message." })}</h3>
        <p>{L({ es: "FIX es un estándar de mensajería para comunicar órdenes, ejecuciones y datos entre participantes del mercado. Aquí puedes inspeccionar una representación educativa del resultado de tu última orden.", en: "FIX is a messaging standard used to communicate orders, executions, and data between market participants. Here you can inspect an educational representation of your latest order result." })}</p>
      </div>
      <div className="fix-tabs" role="tablist" aria-label="FIX">
        <button type="button" role="tab" aria-selected={tab === "fix"} className={tab === "fix" ? "is-active" : ""} onClick={() => setTab("fix")}><PiCode /> ExecutionReport</button>
        <button type="button" role="tab" aria-selected={tab === "automation"} className={tab === "automation" ? "is-active" : ""} onClick={() => setTab("automation")}><PiRobot /> {lang === "es" ? "Automatización" : "Automation"}</button>
      </div>
    </div>

    {tab === "fix" ? <div className="fix-panel" role="tabpanel">
      <div className="fix-raw">
        <span>FIX 5.0 SP2 · EXECUTION REPORT (35=8)</span>
        <code>{visibleRaw}</code>
        <small>{L({ es: "␁ representa el delimitador SOH (0x01). En FIX 5.0 SP2, FIXT.1.1 identifica la capa de transporte y 1128=9 la versión de aplicación.", en: "␁ represents the SOH delimiter (0x01). In FIX 5.0 SP2, FIXT.1.1 identifies the transport layer and 1128=9 the application version." })}</small>
      </div>
      <div className="fix-fields">{message.fields.map(([tag, value, label]) => <div key={tag}><span>{tag}</span><strong>{value}</strong><small>{label}</small></div>)}</div>
      {!event ? <p className="fix-hint">{lang === "es" ? "Envía una orden en el Trading Lab para actualizar este ExecutionReport." : "Send an order in the Trading Lab to update this ExecutionReport."}</p> : null}
    </div> : <div className="automation-panel" role="tabpanel">
      <div className="automation-flow" key={cycle}>{AUTOMATION_STEPS.map((step, index) => <React.Fragment key={step}><div className="automation-step" style={{ "--automation-step": index }}>{step}</div>{index < AUTOMATION_STEPS.length - 1 ? <PiArrowRight aria-hidden="true" /> : null}</React.Fragment>)}</div>
      <div className="automation-copy"><PiShieldCheck aria-hidden="true" /><p>{L({ es: "Un robot de negociación puede reaccionar a Market Data y generar órdenes según reglas o modelos. Antes de llegar al mercado debe pasar por límites, controles de riesgo, rate limits y un kill switch. Esta vista sólo explica el ciclo: no envía órdenes ni se conecta a un mercado.", en: "A trading bot can react to Market Data and generate orders based on rules or models. Before reaching the market, every order must pass limits, risk controls, rate limits, and a kill switch. This view only explains the cycle; it does not send orders or connect to a market." })}</p></div>
      <button type="button" className="automation-replay" onClick={() => setCycle((value) => value + 1)}>{lang === "es" ? "Reproducir ciclo" : "Replay cycle"}</button>
    </div>}

    <p className="fix-disclaimer">{L({ es: "Mensajes, identificadores y valores ficticios. Representación simplificada con fines educativos; no corresponde a una sesión FIX ni a infraestructura real.", en: "Fictional messages, identifiers, and values. Simplified for educational purposes; this is not a real FIX session or production infrastructure." })}</p>
  </section>;
}
