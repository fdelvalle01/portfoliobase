import React, { useEffect, useMemo, useRef, useState } from "react";
import { PiCode, PiRobot, PiShieldCheck, PiCopy, PiCheck } from "react-icons/pi";
import { useI18n } from "../context/I18nContext";

import useCompactLab from "../hooks/useCompactLab";
import { FIX_GROUPS, FIX_NAMES, fixMeaning } from "../data/fixPresentation";

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

export function buildExecutionReport(event, symbol) {
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

export default function FixExplorer({ event, symbol, explorerRef }) {
  const { lang, L } = useI18n();
  const text = (es, en) => lang === "es" ? es : en;
  const [tab, setTab] = useState("fix");
  const compact = useCompactLab();
  const [groupsOpen, setGroupsOpen] = useState({ exec: true });
  const [rawOpen, setRawOpen] = useState(false);
  const [copied, setCopied] = useState("");
  const [hoverTag, setHoverTag] = useState(null);
  const copyTimer = useRef(null);
  const copyVersion = useRef(0);
  useEffect(() => () => { clearTimeout(copyTimer.current); copyVersion.current += 1; }, []);
  useEffect(() => { setTab("fix"); setCopied(""); clearTimeout(copyTimer.current); copyVersion.current += 1; }, [event, symbol]);
  const message = useMemo(() => buildExecutionReport(event, symbol), [event, symbol]);
  const fields = Object.fromEntries(message.fields.map(([tag, value]) => [tag, value]));
  const copy = async () => {
    const version = ++copyVersion.current;
    try { await navigator.clipboard.writeText(message.raw); if (version !== copyVersion.current) return; setCopied("ok"); }
    catch { if (version !== copyVersion.current) return; setCopied("error"); }
    clearTimeout(copyTimer.current); copyTimer.current = setTimeout(() => setCopied(""), 1800);
  };
  const number = value => new Intl.NumberFormat(lang === "es" ? "es-CL" : "en-US", { maximumFractionDigits: 2 }).format(Number(value));
  const status = fields["39"] === "2" ? text("Ejecutada", "Filled") : fields["39"] === "1" ? text("Ejecución parcial", "Partially filled") : text("En el libro", "Resting in the book");
  return <section ref={explorerRef} tabIndex={-1} className="fix-explorer fx" aria-labelledby="fix-explorer-title">
    <div className="fx-intro"><div className="kicker">FIX PROTOCOL</div><h3 id="fix-explorer-title">{text("De la ejecución al mensaje FIX.", "From execution to a FIX message.")}</h3><p>{text("Inspecciona el resultado de tu última orden: su estado, cantidades y campos del ExecutionReport educativo.", "Inspect your latest order result: its status, quantities and fields in the educational ExecutionReport.")}</p><div className="fx-tabs" role="tablist" aria-label="FIX">{["fix", "automation"].map(value => <button type="button" role="tab" id={`fx-tab-${value}`} aria-controls="fx-panel" key={value} aria-selected={tab === value} onClick={() => setTab(value)}>{value === "fix" ? <><PiCode />ExecutionReport</> : <><PiRobot />{text("Automatización", "Automation")}</>}</button>)}</div></div>
    <div id="fx-panel" role="tabpanel" aria-labelledby={`fx-tab-${tab}`}>
      {tab === "fix" ? <>
        <div className="fx-source"><div><span className={`fx-source-badge ${event ? "is-order" : ""}`}>{event ? `${text("Orden", "Order")} #${String(event.id).padStart(3, "0")}` : text("Ejemplo", "Example")}</span><span>{event ? "FIX 5.0 SP2 · ExecutionReport (35=8)" : text("Mensaje de ejemplo: todavía no envías una orden.", "Example message: you haven't sent an order yet.")}</span></div><div className="fx-source-actions"><button type="button" aria-expanded={rawOpen} aria-controls="fx-raw" onClick={() => setRawOpen(!rawOpen)}>{text("Mensaje raw", "Raw message")} {rawOpen ? "⌃" : "⌄"}</button><button type="button" onClick={copy}>{copied === "ok" ? <PiCheck /> : <PiCopy />}{text("Copiar", "Copy")}</button></div><span className="fx-copy-state" role="status">{copied === "ok" ? text("Copiado", "Copied") : copied === "error" ? text("No se pudo copiar", "Could not copy") : ""}</span></div>
        {rawOpen && <div id="fx-raw" className="fx-raw"><code>{message.fields.map(([tag, value]) => <span key={tag} className={hoverTag === tag ? "is-highlighted" : ""}>{tag}={value}<span className="fx-soh">␁</span></span>)}</code><p>{text("␁ representa SOH (0x01). Copiar conserva el delimitador real. FIXT.1.1 identifica el transporte y 1128=9 la aplicación FIX 5.0 SP2.", "␁ represents SOH (0x01). Copy preserves the real delimiter. FIXT.1.1 identifies transport and 1128=9 the FIX 5.0 SP2 application.")}</p></div>}
        <dl className="fx-summary">{[[text("Instrumento", "Instrument"), fields["55"], ""], [text("Lado", "Side"), fields["54"] === "2" ? text("Vender", "Sell") : text("Comprar", "Buy"), `54=${fields["54"]}`], [text("Estado", "Status"), status, `39=${fields["39"]} · 150=${fields["150"]}`], [text("Cantidad", "Quantity"), number(fields["38"]), `${number(fields["14"])} ${text("ejecutadas", "filled")} · ${number(fields["151"])} ${text("en libro", "resting")}`], [text("Precio límite", "Limit price"), number(fields["44"]), `${text("Promedio", "Average")} ${number(fields["6"])}`]].map(([label, value, detail]) => <div key={label}><dt>{label}</dt><dd>{value}</dd><small>{detail}</small></div>)}</dl>
        <div className="fx-table" role="table" aria-label={text("Campos FIX agrupados", "Grouped FIX fields")}><div className="fx-table-head" role="row"><span role="columnheader">Tag</span><span role="columnheader">{text("Campo", "Field")}</span><span role="columnheader">{text("Valor", "Value")}</span><span role="columnheader">{text("Significado", "Meaning")}</span></div>{FIX_GROUPS.map(group => <details className="fx-group" key={group.key} open={!compact || !!groupsOpen[group.key]} onToggle={event => { if (compact) { const open = event.currentTarget.open; setGroupsOpen(current => current[group.key] === open ? current : { ...current, [group.key]: open }); } }}><summary onClick={event => { if (!compact) event.preventDefault(); }}>{L(group.title)} <span>{group.tags.length} {text("campos", "fields")}</span></summary><div className="fx-group-rows" role="rowgroup">{group.tags.map(tag => <div className="fx-field" role="row" key={tag} onMouseEnter={() => setHoverTag(tag)} onMouseLeave={() => setHoverTag(null)}><span role="cell">{tag}</span><span role="cell">{FIX_NAMES[tag]}</span><strong role="cell">{fields[tag]}</strong><span role="cell">{fixMeaning(tag, fields[tag], lang, { orderNo: event && String(event.id).padStart(3, "0") })}</span></div>)}</div></details>)}</div>
      </> : <div className="fx-automation"><ol>{AUTOMATION_STEPS.map((step, index) => <li key={step} className={index > 2 ? "is-simulated" : index > 0 ? "is-excluded" : ""}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong><p>{index > 2 ? text("La demo lo simula", "Simulated by the demo") : index > 0 ? text("No incluido en la demo", "Not included in the demo") : text("Datos fijos", "Fixed data")}</p></li>)}</ol><div className="fx-automation-copy"><PiShieldCheck /><p>{text("Una estrategia puede reaccionar a Market Data y generar órdenes. Antes de llegar al mercado debe pasar por controles de riesgo, límites y un kill switch. Esta demo simula Order Entry y ExecutionReport con datos fijos.", "A strategy can react to Market Data and generate orders. Before reaching the market, orders must pass risk controls, limits and a kill switch. This demo simulates Order Entry and ExecutionReport with fixed data.")}</p></div></div>}
    </div>
    <p className="fx-disclaimer">{text("Mensajes, identificadores y valores ficticios. Representación simplificada con fines educativos; no corresponde a una sesión FIX ni a infraestructura real.", "Fictional messages, identifiers and values. Simplified for educational purposes; this is not a real FIX session or production infrastructure.")}</p>
  </section>;
}
