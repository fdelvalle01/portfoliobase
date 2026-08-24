import React, { useMemo, useRef, useState } from "react";
import { PiArrowClockwise, PiInfo, PiPulse, PiTrendDown, PiTrendUp } from "react-icons/pi";
import { useI18n } from "../context/I18nContext";

const INSTRUMENTS = {
  ANDES: {
    name: { es: "Andes Tecnología", en: "Andes Technology" },
    currency: "CLP",
    last: 3450.5,
    tick: 0.5,
    bids: [
      { price: 3449, orders: [2200, 3100, 4100] },
      { price: 3448.5, orders: [6800, 15300] },
      { price: 3448, orders: [7200, 14900] },
      { price: 3447.5, orders: [2500, 4300] },
      { price: 3447, orders: [12000, 19000] },
      { price: 3446.5, orders: [3500, 9000] },
    ],
    asks: [
      { price: 3452, orders: [5400, 8200, 8800] },
      { price: 3452.5, orders: [2100, 5800] },
      { price: 3453, orders: [4100, 12200] },
      { price: 3453.5, orders: [2400, 3000] },
      { price: 3454, orders: [9000, 19900] },
      { price: 3454.5, orders: [2800, 6300] },
    ],
  },
  PACIFICO: {
    name: { es: "Pacífico Energía", en: "Pacific Energy" },
    currency: "CLP",
    last: 1285,
    tick: 1,
    bids: [
      { price: 1284, orders: [1200, 3800] },
      { price: 1283, orders: [2500, 6100] },
      { price: 1282, orders: [7000, 4200] },
      { price: 1281, orders: [3300, 2900] },
      { price: 1280, orders: [11000, 4800] },
    ],
    asks: [
      { price: 1286, orders: [1800, 3600] },
      { price: 1287, orders: [4100, 2200] },
      { price: 1288, orders: [2800, 7500] },
      { price: 1289, orders: [3900, 3100] },
      { price: 1290, orders: [8900, 6400] },
    ],
  },
  CORDILLERA: {
    name: { es: "Cordillera Retail", en: "Cordillera Retail" },
    currency: "USD",
    last: 42.18,
    tick: 0.01,
    bids: [
      { price: 42.17, orders: [500, 900, 1200] },
      { price: 42.16, orders: [1500, 700] },
      { price: 42.15, orders: [800, 2400] },
      { price: 42.14, orders: [1100, 600] },
      { price: 42.13, orders: [3200, 1400] },
    ],
    asks: [
      { price: 42.19, orders: [400, 1100] },
      { price: 42.2, orders: [800, 1300] },
      { price: 42.21, orders: [1700, 900] },
      { price: 42.22, orders: [1200, 2100] },
      { price: 42.23, orders: [3000, 750] },
    ],
  },
};

const COPY = {
  kicker: { es: "ESPACIO BURSÁTIL", en: "TRADING SYSTEMS LAB" },
  title: {
    es: "Explora cómo viaja una orden por el mercado.",
    en: "Explore how an order moves through the market.",
  },
  lead: {
    es: "Una simulación sencilla de Market Data, profundidad, ingreso de órdenes y ejecuciones, basada en mi experiencia desarrollando soluciones fintech y bursátiles.",
    en: "A simple Market Data, depth, order entry and execution simulation, based on my experience building fintech and trading solutions.",
  },
  instrument: { es: "Instrumento", en: "Instrument" },
  aggregated: { es: "Agregado", en: "Aggregated" },
  byOrder: { es: "Por orden", en: "By order" },
  last: { es: "Último", en: "Last" },
  spread: { es: "Spread", en: "Spread" },
  buyQty: { es: "Cant. compra", en: "Buy qty" },
  sellQty: { es: "Cant. venta", en: "Sell qty" },
  buy: { es: "Comprar", en: "Buy" },
  sell: { es: "Vender", en: "Sell" },
  ticket: { es: "Ingreso de órdenes", en: "Order entry" },
  orderType: { es: "Tipo de orden", en: "Order type" },
  limit: { es: "Límite", en: "Limit" },
  validity: { es: "Vigencia", en: "Validity" },
  day: { es: "Día", en: "Day" },
  gtc: { es: "Hasta cancelar", en: "Good till cancelled" },
  price: { es: "Precio límite", en: "Limit price" },
  quantity: { es: "Cantidad", en: "Quantity" },
  depthHint: {
    es: "Selecciona un precio para cargar la cantidad acumulada hasta ese nivel.",
    en: "Select a price to load the cumulative quantity up to that level.",
  },
  sendBuy: { es: "Enviar compra", en: "Send buy order" },
  sendSell: { es: "Enviar venta", en: "Send sell order" },
  invalid: { es: "Ingresa un precio y una cantidad válidos.", en: "Enter a valid price and quantity." },
  eventFlow: { es: "Flujo de eventos", en: "Event flow" },
  empty: { es: "Envía una orden para ver su recorrido.", en: "Send an order to see its journey." },
  filled: { es: "Ejecutada", en: "Filled" },
  partial: { es: "Parcial y en libro", en: "Partial and resting" },
  resting: { es: "Aceptada en el libro", en: "Accepted into the book" },
  reset: { es: "Reiniciar", en: "Reset" },
  education: { es: "¿Qué estás viendo?", en: "What are you looking at?" },
  disclaimer: {
    es: "Simulación educativa con instrumentos y datos ficticios. No está conectada a un mercado real ni representa sistemas internos de ninguna empresa.",
    en: "Educational simulation with fictional instruments and data. It is not connected to a real market and does not represent any company's internal systems.",
  },
};

const CONCEPTS = {
  marketData: {
    title: { es: "Market Data", en: "Market Data" },
    text: {
      es: "Es el flujo de precios, cantidades y operaciones que describe el estado actual del mercado. Aquí alimenta el último precio y la profundidad.",
      en: "It is the flow of prices, quantities and trades describing the current market. Here it feeds the last price and market depth.",
    },
  },
  depth: {
    title: { es: "Market Depth", en: "Market Depth" },
    text: {
      es: "Agrupa las intenciones de compra y venta por nivel de precio. El mejor bid y el mejor ask forman la punta del libro.",
      en: "It groups buy and sell interest by price level. The best bid and best ask form the top of the book.",
    },
  },
  orderEntry: {
    title: { es: "Order Entry", en: "Order Entry" },
    text: {
      es: "Es el canal por el que una orden entra al mercado. Una orden límite indica el peor precio que estás dispuesto a aceptar.",
      en: "It is the channel through which an order enters the market. A limit order sets the worst price you are willing to accept.",
    },
  },
  matching: {
    title: { es: "Matching", en: "Matching" },
    text: {
      es: "El motor busca contrapartes compatibles. Si una compra cruza el mejor ask —o una venta el mejor bid— se genera una ejecución.",
      en: "The engine looks for compatible orders. If a buy crosses the best ask — or a sell crosses the best bid — a trade is generated.",
    },
  },
  dropCopy: {
    title: { es: "Execution & Drop Copy", en: "Execution & Drop Copy" },
    text: {
      es: "El resultado informa si la orden fue aceptada o ejecutada. Drop Copy entrega una copia independiente del evento para control y conciliación.",
      en: "The result reports whether the order was accepted or filled. Drop Copy provides an independent event copy for control and reconciliation.",
    },
  },
};

const cloneBook = (instrument) => ({
  bids: instrument.bids.map((level) => ({ ...level, orders: [...level.orders] })),
  asks: instrument.asks.map((level) => ({ ...level, orders: [...level.orders] })),
});

const total = (orders) => orders.reduce((sum, value) => sum + value, 0);

function visibleLevels(levels, mode) {
  if (mode === "aggregated") {
    return levels.map((level, levelIndex) => ({ ...level, levelIndex, orderIndex: null }));
  }
  return levels.flatMap((level, levelIndex) =>
    level.orders.map((size, orderIndex) => ({
      price: level.price,
      orders: [size],
      levelIndex,
      orderIndex,
    }))
  );
}

function consumeLevel(level, amount) {
  let remaining = amount;
  const nextOrders = [];
  level.orders.forEach((size) => {
    if (remaining <= 0) {
      nextOrders.push(size);
      return;
    }
    const used = Math.min(size, remaining);
    remaining -= used;
    if (size > used) nextOrders.push(size - used);
  });
  return { remaining, orders: nextOrders };
}

export default function TradingLab() {
  const { lang, L } = useI18n();
  const tr = (key) => COPY[key][lang] || COPY[key].es;
  const [symbol, setSymbol] = useState("ANDES");
  const instrument = INSTRUMENTS[symbol];
  const [book, setBook] = useState(() => cloneBook(INSTRUMENTS.ANDES));
  const [lastTrade, setLastTrade] = useState(INSTRUMENTS.ANDES.last);
  const [mode, setMode] = useState("aggregated");
  const [side, setSide] = useState("buy");
  const [price, setPrice] = useState(String(INSTRUMENTS.ANDES.asks[0].price));
  const [quantity, setQuantity] = useState("5000");
  const [validity, setValidity] = useState("day");
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [activeConcept, setActiveConcept] = useState("marketData");
  const orderId = useRef(1);

  const priceFormatter = useMemo(
    () => new Intl.NumberFormat(lang === "es" ? "es-CL" : "en-US", {
      minimumFractionDigits: instrument.tick < 0.1 ? 2 : 1,
      maximumFractionDigits: instrument.tick < 0.1 ? 2 : 1,
    }),
    [instrument.tick, lang]
  );
  const qtyFormatter = useMemo(() => new Intl.NumberFormat(lang === "es" ? "es-CL" : "en-US"), [lang]);
  const formatPrice = (value) => priceFormatter.format(value);
  const formatOrders = (orders) =>
    mode === "aggregated" ? qtyFormatter.format(total(orders)) : orders.map(qtyFormatter.format).join(" · ");

  const changeInstrument = (nextSymbol) => {
    const next = INSTRUMENTS[nextSymbol];
    setSymbol(nextSymbol);
    setBook(cloneBook(next));
    setLastTrade(next.last);
    setSide("buy");
    setPrice(String(next.asks[0].price));
    setEvents([]);
    setError("");
    setActiveConcept("marketData");
  };

  const reset = () => {
    setBook(cloneBook(instrument));
    setLastTrade(instrument.last);
    setPrice(String(instrument.asks[0].price));
    setQuantity("5000");
    setSide("buy");
    setValidity("day");
    setEvents([]);
    setError("");
    setActiveConcept("marketData");
  };

  const loadPrice = (nextSide, nextPrice, levelIndex, selectedOrderIndex) => {
    /* Seleccionar un nivel profundo prepara un sweep real: la cantidad incluye
       toda la liquidez desde la punta hasta el nivel u orden elegidos. */
    const opposite = nextSide === "buy" ? book.asks : book.bids;
    const previousLevels = opposite
      .slice(0, levelIndex)
      .reduce((sum, level) => sum + total(level.orders), 0);
    const selectedLevel = opposite[levelIndex];
    const selectedQuantity = selectedOrderIndex === null
      ? total(selectedLevel.orders)
      : total(selectedLevel.orders.slice(0, selectedOrderIndex + 1));
    const cumulativeQuantity = previousLevels + selectedQuantity;
    setSide(nextSide);
    setPrice(String(nextPrice));
    setQuantity(String(cumulativeQuantity));
    setActiveConcept("orderEntry");
  };

  const submitOrder = (event) => {
    event.preventDefault();
    const limitPrice = Number(String(price).replace(",", "."));
    const requested = Number(quantity);
    if (!Number.isFinite(limitPrice) || limitPrice <= 0 || !Number.isInteger(requested) || requested <= 0) {
      setError(tr("invalid"));
      return;
    }

    const next = {
      bids: book.bids.map((level) => ({ ...level, orders: [...level.orders] })),
      asks: book.asks.map((level) => ({ ...level, orders: [...level.orders] })),
    };
    const opposite = side === "buy" ? next.asks : next.bids;
    let remaining = requested;
    let executed = 0;
    let executionValue = 0;
    let lastExecutionPrice = null;

    while (opposite.length && remaining > 0) {
      const level = opposite[0];
      const crosses = side === "buy" ? level.price <= limitPrice : level.price >= limitPrice;
      if (!crosses) break;
      const before = remaining;
      const consumed = consumeLevel(level, remaining);
      const filledHere = before - consumed.remaining;
      remaining = consumed.remaining;
      executed += filledHere;
      executionValue += filledHere * level.price;
      if (filledHere > 0) lastExecutionPrice = level.price;
      if (consumed.orders.length) level.orders = consumed.orders;
      else opposite.shift();
    }

    if (remaining > 0) {
      const ownSide = side === "buy" ? next.bids : next.asks;
      const existing = ownSide.find((level) => level.price === limitPrice);
      if (existing) existing.orders.push(remaining);
      else ownSide.push({ price: limitPrice, orders: [remaining] });
      ownSide.sort((a, b) => (side === "buy" ? b.price - a.price : a.price - b.price));
    }

    const status = executed === requested ? "filled" : executed > 0 ? "partial" : "resting";
    const averagePrice = executed ? executionValue / executed : null;
    const nextEvent = {
      id: orderId.current,
      side,
      requested,
      executed,
      remaining,
      limitPrice,
      averagePrice,
      status,
      validity,
    };
    orderId.current += 1;
    setBook(next);
    if (lastExecutionPrice !== null) setLastTrade(lastExecutionPrice);
    setEvents((current) => [nextEvent, ...current].slice(0, 4));
    setError("");
    setActiveConcept(executed ? "dropCopy" : "matching");
  };

  const bestBid = book.bids[0]?.price;
  const bestAsk = book.asks[0]?.price;
  const spread = bestBid && bestAsk ? bestAsk - bestBid : 0;
  const visibleBids = visibleLevels(book.bids, mode);
  const visibleAsks = visibleLevels(book.asks, mode);
  const rows = Math.max(visibleBids.length, visibleAsks.length);

  return (
    <section id="espacio-bursatil" className="section section--alt trading-lab-section">
      <div className="section__inner">
        <div className="kicker">04 — {tr("kicker")}</div>
        <h3 className="section-title">{tr("title")}</h3>
        <p className="section-lead">{tr("lead")}</p>

        <div className="trading-lab">
          <div className="market-terminal">
            <div className="market-toolbar">
              <label className="market-symbol">
                <span>{tr("instrument")}</span>
                <select value={symbol} onChange={(event) => changeInstrument(event.target.value)}>
                  {Object.entries(INSTRUMENTS).map(([code, item]) => (
                    <option value={code} key={code}>{code} · {L(item.name)}</option>
                  ))}
                </select>
              </label>
              <div className="book-mode" role="group" aria-label={lang === "es" ? "Vista del libro" : "Book view"}>
                <button type="button" className={mode === "aggregated" ? "is-active" : ""} onClick={() => setMode("aggregated")}>{tr("aggregated")}</button>
                <button type="button" className={mode === "orders" ? "is-active" : ""} onClick={() => setMode("orders")}>{tr("byOrder")}</button>
              </div>
              <button type="button" className="terminal-reset" onClick={reset}><PiArrowClockwise /> {tr("reset")}</button>
            </div>

            <div className="market-strip">
              <span>{tr("last")} <strong>{formatPrice(lastTrade)}</strong></span>
              <span>BID <strong className="market-buy-text">{bestBid ? formatPrice(bestBid) : "—"}</strong></span>
              <span>ASK <strong className="market-sell-text">{bestAsk ? formatPrice(bestAsk) : "—"}</strong></span>
              <span>{tr("spread")} <strong>{formatPrice(spread)}</strong></span>
            </div>

            <div className="depth-table" aria-label="Market Depth">
              <div className="depth-head">
                <span>{tr("buyQty")}</span><span>BID</span><span>ASK</span><span>{tr("sellQty")}</span>
              </div>
              {Array.from({ length: rows }).map((_, index) => {
                const bid = visibleBids[index];
                const ask = visibleAsks[index];
                const bidWidth = bid ? Math.min(100, (total(bid.orders) / 32000) * 100) : 0;
                const askWidth = ask ? Math.min(100, (total(ask.orders) / 32000) * 100) : 0;
                return (
                  <div className="depth-row" key={`${bid?.price || "b"}-${bid?.levelIndex ?? "x"}-${bid?.orderIndex ?? "all"}-${ask?.price || "a"}-${ask?.levelIndex ?? "x"}-${ask?.orderIndex ?? "all"}`}>
                    <span className="depth-qty depth-qty--bid" style={{ "--depth": `${bidWidth}%` }}>{bid ? formatOrders(bid.orders) : ""}</span>
                    <button type="button" className="depth-price depth-price--bid" disabled={!bid} title={tr("depthHint")} onClick={() => bid && loadPrice("sell", bid.price, bid.levelIndex, bid.orderIndex)}>{bid ? formatPrice(bid.price) : ""}</button>
                    <button type="button" className="depth-price depth-price--ask" disabled={!ask} title={tr("depthHint")} onClick={() => ask && loadPrice("buy", ask.price, ask.levelIndex, ask.orderIndex)}>{ask ? formatPrice(ask.price) : ""}</button>
                    <span className="depth-qty depth-qty--ask" style={{ "--depth": `${askWidth}%` }}>{ask ? formatOrders(ask.orders) : ""}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <form className={`order-ticket order-ticket--${side}`} onSubmit={submitOrder}>
            <div className="order-ticket__title"><PiPulse /> {tr("ticket")}</div>
            <div className="side-toggle" role="group" aria-label={lang === "es" ? "Lado de la orden" : "Order side"}>
              <button type="button" className={side === "buy" ? "is-active" : ""} onClick={() => setSide("buy")}><PiTrendUp /> {tr("buy")}</button>
              <button type="button" className={side === "sell" ? "is-active" : ""} onClick={() => setSide("sell")}><PiTrendDown /> {tr("sell")}</button>
            </div>
            <div className="ticket-pair">
              <label><span>{tr("orderType")}</span><strong>{tr("limit")}</strong></label>
              <label><span>{tr("validity")}</span><select value={validity} onChange={(event) => setValidity(event.target.value)}><option value="day">{tr("day")}</option><option value="gtc">{tr("gtc")}</option></select></label>
            </div>
            <label className="ticket-field"><span>{tr("price")} · {instrument.currency}</span><input type="number" min={instrument.tick} step={instrument.tick} value={price} onChange={(event) => setPrice(event.target.value)} /></label>
            <label className="ticket-field"><span>{tr("quantity")}</span><input type="number" min="1" step="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} /></label>
            {error ? <div className="ticket-error" role="alert">{error}</div> : null}
            <button type="submit" className="ticket-submit">{side === "buy" ? tr("sendBuy") : tr("sendSell")}</button>
          </form>

          <div className="lab-events">
            <div className="lab-panel-title">{tr("eventFlow")}</div>
            {events.length ? events.map((item) => (
              <article className="execution-event" key={item.id}>
                <div><span className={`event-side event-side--${item.side}`}>{item.side === "buy" ? tr("buy") : tr("sell")}</span><strong> #{String(item.id).padStart(3, "0")}</strong></div>
                <div>{qtyFormatter.format(item.requested)} @ {formatPrice(item.limitPrice)}</div>
                <div className="event-result">{tr(item.status)}{item.executed ? ` · ${qtyFormatter.format(item.executed)} @ ${formatPrice(item.averagePrice)}` : ""}</div>
                <span className="drop-copy-badge">DROP COPY</span>
              </article>
            )) : <div className="lab-events__empty">{tr("empty")}</div>}
          </div>

          <aside className="market-education">
            <div className="lab-panel-title"><PiInfo /> {tr("education")}</div>
            <div className="concept-tabs" role="tablist">
              {Object.entries(CONCEPTS).map(([key, concept]) => (
                <button type="button" role="tab" aria-selected={activeConcept === key} className={activeConcept === key ? "is-active" : ""} onClick={() => setActiveConcept(key)} key={key}>{L(concept.title)}</button>
              ))}
            </div>
            <div className="concept-copy" role="tabpanel">
              <h4>{L(CONCEPTS[activeConcept].title)}</h4>
              <p>{L(CONCEPTS[activeConcept].text)}</p>
            </div>
          </aside>
        </div>

        <p className="lab-disclaimer">{tr("disclaimer")}</p>
      </div>
    </section>
  );
}
