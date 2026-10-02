import React, { useMemo, useRef, useState } from "react";
import { PiArrowClockwise, PiInfo, PiPulse, PiTrendDown, PiTrendUp, PiX, PiMinus, PiPlus, PiWarningCircle } from "react-icons/pi";
import { useI18n } from "../context/I18nContext";
import FixExplorer from "./FixExplorer";
import useCompactLab from "../hooks/useCompactLab";

let nextTicketId = 0;

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
  kicker: { es: "NO ME CREAS: PRUÉBALO", en: "DON'T TAKE MY WORD FOR IT. TRY IT." },
  title: {
    es: "Envía una orden y observa su recorrido.",
    en: "Send an order and watch its journey.",
  },
  lead: {
    es: "Order Book, profundidad, Order Entry, matching y Drop Copy: el dominio en el que trabajo convertido en una simulación interactiva. Selecciona un precio, ingresa una orden y observa qué ocurre.",
    en: "Order Book, depth, Order Entry, matching, and Drop Copy: the domain I work in, turned into an interactive simulation. Select a price, enter an order, and see what happens.",
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
  partial: { es: "Ejecución parcial", en: "Partially filled" },
  resting: { es: "En el libro", en: "Resting in the book" },
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
  const [errors, setErrors] = useState({});
  const [selection, setSelection] = useState(null);
  const [hover, setHover] = useState(null);
  const [guideOpen, setGuideOpen] = useState(null);
  const compact = useCompactLab();
  const guideExpanded = guideOpen ?? !compact;
  const ticketId = useRef(null);
  if (ticketId.current === null) ticketId.current = ++nextTicketId;
  const priceRef = useRef(null);
  const quantityRef = useRef(null);
  const ticketRef = useRef(null);
  const fixRef = useRef(null);
  const text = (es, en) => lang === "es" ? es : en;
  const unlink = () => { setSelection(null); setHover(null); };
  const edit = (setter, value, field) => { unlink(); setter(value); setErrors(current => ({ ...current, [field]: false })); };
  const showFix = () => { fixRef.current?.scrollIntoView({ behavior: "auto", block: "start" }); fixRef.current?.focus({ preventScroll: true }); };
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
  const changeInstrument = (nextSymbol) => {
    const next = INSTRUMENTS[nextSymbol];
    setSymbol(nextSymbol);
    setBook(cloneBook(next));
    setLastTrade(next.last);
    setSide("buy");
    setPrice(String(next.asks[0].price));
    setEvents([]);
    setErrors({});
    unlink();
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
    setErrors({});
    unlink();
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
    setSelection({ bookSide: nextSide === "buy" ? "ask" : "bid", levelIndex, orderIndex: selectedOrderIndex });
    setHover(null);
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
      const invalidPrice = !Number.isFinite(limitPrice) || limitPrice <= 0;
      setErrors({ price: invalidPrice, qty: !Number.isInteger(requested) || requested <= 0 });
      (invalidPrice ? priceRef : quantityRef).current?.focus();
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
    setErrors({});
    unlink();
    setActiveConcept(executed ? "dropCopy" : "matching");
  };

  const bestBid = book.bids[0]?.price;
  const bestAsk = book.asks[0]?.price;
  const spread = bestBid && bestAsk ? bestAsk - bestBid : 0;
  const visibleBids = visibleLevels(book.bids, mode);
  const visibleAsks = visibleLevels(book.asks, mode);
  const rows = Math.max(visibleBids.length, visibleAsks.length);

  const addCumulative = (levels) => {
    let cum = 0;
    return levels.map(level => ({ ...level, cum: cum += total(level.orders) }));
  };
  const bids = addCumulative(visibleBids);
  const asks = addCumulative(visibleAsks);
  const maxVolume = Math.max(1, ...[...bids, ...asks].map(level => total(level.orders)));
  const selectedRows = selection?.bookSide === "bid" ? bids : asks;
  const selected = selection && selectedRows.find(row => row.levelIndex === selection.levelIndex && row.orderIndex === selection.orderIndex);
  const preview = hover || (selected && { ...selection, ...selected });
  const parsedPrice = Number(String(price).replace(",", "."));
  const validPrice = Number.isFinite(parsedPrice) && parsedPrice > 0;
  const validQty = Number.isInteger(Number(quantity)) && Number(quantity) > 0;
  const oppositePrice = side === "buy" ? bestAsk : bestBid;
  const crosses = oppositePrice != null && (side === "buy" ? parsedPrice >= oppositePrice : parsedPrice <= oppositePrice);
  const rowMatches = (point, bookSide, row) => point?.bookSide === bookSide && point.levelIndex === row.levelIndex && point.orderIndex === row.orderIndex;
  const beforePoint = (point, bookSide, row) => point?.bookSide === bookSide && (row.levelIndex < point.levelIndex || (row.levelIndex === point.levelIndex && point.orderIndex !== null && row.orderIndex < point.orderIndex));
  const renderSide = (bookSide, levels) => <div className={`tl-ladder__${bookSide}s`}>
    <div className="tl-book-label">{bookSide === "bid" ? text("Compradores · bid", "Buyers · bid") : text("Vendedores · ask", "Sellers · ask")}</div>
    <div className="tl-columns">{bookSide === "bid" ? <><span data-col="cum">{text("Acum.", "Cum.")}</span><span>{text("Cant.", "Qty")}</span><span>{text("Precio", "Price")}</span></> : <><span>{text("Precio", "Price")}</span><span>{text("Cant.", "Qty")}</span><span data-col="cum">{text("Acum.", "Cum.")}</span></>}</div>
    {Array.from({ length: rows }).map((_, index) => {
      const row = levels[index];
      if (!row) return <div className="tl-row tl-row--empty" key={index} />;
      const point = { bookSide, ...row };
      const priceBadge = <span className="tl-badge">{formatPrice(row.price)}</span>;
      const qty = <span className="tl-row__qty">{qtyFormatter.format(total(row.orders))}</span>;
      const cum = <span className="tl-row__cum" data-col="cum">{qtyFormatter.format(row.cum)}</span>;
      return <button type="button" key={index} className={`tl-row ${index > 0 && levels[index - 1].levelIndex !== row.levelIndex ? "is-new-level" : ""} ${beforePoint(selection, bookSide, row) ? "is-swept" : ""} ${beforePoint(hover, bookSide, row) ? "is-hover-sweep" : ""}`}
        aria-pressed={rowMatches(selection, bookSide, row)} aria-label={`${bookSide === "ask" ? tr("buy") : tr("sell")} ${qtyFormatter.format(row.cum)} @ ${formatPrice(row.price)} · ${row.levelIndex + 1} ${text("niveles", "levels")}`}
        onMouseEnter={() => setHover(point)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(point)} onBlur={() => setHover(null)}
        onClick={() => loadPrice(bookSide === "ask" ? "buy" : "sell", row.price, row.levelIndex, row.orderIndex)}>
        <span className="tl-row__bar" style={{ width: `${total(row.orders) / maxVolume * 100}%` }} />
        {bookSide === "bid" ? <>{cum}{qty}{priceBadge}</> : <>{priceBadge}{qty}{cum}</>}
      </button>;
    })}
  </div>;
  const selectionDescription = selected ? `${selection.bookSide} ${formatPrice(selected.price)} · ${selected.levelIndex + 1} ${text("niveles", "levels")}${mode === "orders" ? ` · ${selectedRows.slice(0, selectedRows.indexOf(selected) + 1).length} ${text("órdenes", "orders")}` : ""}` : "";
  return <section id="simulador" className="section section--alt trading-lab-section">
    <div className="section__inner">
      <div className="kicker">01 — {tr("kicker")}</div><h3 className="section-title">{tr("title")}</h3><p className="section-lead">{tr("lead")}</p>
      <div className="tl" onKeyDown={event => { if (event.key === "Escape") unlink(); }}>
        <div className="tl-toolbar">
          <label className="tl-instrument"><span>{tr("instrument")}</span><select className="tl-control" value={symbol} onChange={event => changeInstrument(event.target.value)}>{Object.entries(INSTRUMENTS).map(([code, item]) => <option key={code} value={code}>{code} · {L(item.name)}</option>)}</select></label>
          <div className="tl-toolbar-actions"><span className="tl-view-label">{text("Vista", "View")}</span><div className="tl-seg" role="group" aria-label={text("Vista del libro", "Book view")}>{["aggregated", "orders"].map(value => <button type="button" key={value} aria-pressed={mode === value} onClick={() => { setMode(value); unlink(); }}>{tr(value === "orders" ? "byOrder" : "aggregated")}</button>)}</div><button type="button" className="tl-reset tl-control" onClick={reset}><PiArrowClockwise /> {tr("reset")}</button></div>
        </div>
        <div className="tl-main">
          <div className="tl-market">
            <dl className="tl-quote">{[[tr("last"), lastTrade, ""], [text("Mejor bid", "Best bid"), bestBid, "bid"], [text("Mejor ask", "Best ask"), bestAsk, "ask"], [tr("spread"), spread, ""]].map(([label, value, tone]) => <div key={label}><dt>{label}</dt><dd className={`tl-value--${tone}`}>{value != null ? formatPrice(value) : "—"}</dd></div>)}</dl>
            <div className="tl-ladder" role="group" aria-label="Market Depth">{renderSide("bid", bids)}{renderSide("ask", asks)}</div>
            <div className={`tl-hint ${selected ? "is-linked" : ""}`}>{selected && <span className="tl-mark" />}{preview ? <span>{selected && !hover ? text("En el ticket: ", "In the ticket: ") : `${preview.bookSide} → `}{preview.bookSide === "ask" ? tr("buy") : tr("sell")} {qtyFormatter.format(preview.cum)} {text("hasta", "up to")} {formatPrice(preview.price)} · {preview.levelIndex + 1} {text("niveles", "levels")}{selected && !hover ? text(". Esc para quitar.", ". Esc to clear.") : ""}</span> : tr("depthHint")}</div>
            {selected && <div className="tl-orderbar"><span>{side === "buy" ? tr("buy") : tr("sell")} {qtyFormatter.format(Number(quantity))} @ {formatPrice(parsedPrice)}</span><button type="button" onClick={() => { ticketRef.current?.scrollIntoView({ block: "start" }); priceRef.current?.focus({ preventScroll: true }); }}>{text("Revisar", "Review")}</button></div>}
          </div>
          <form ref={ticketRef} className={`tl-ticket tl-ticket--${side}`} onSubmit={submitOrder} noValidate>
            <div className="tl-panel-title"><PiPulse /> {text("Ticket de orden", "Order ticket")} <small>{tr("limit")}</small></div>
            <div className="tl-ticket__body">
              {selected && <div className="tl-link"><span>{text("Desde el libro", "From the book")}: {selectionDescription}</span><button type="button" aria-label={text("Quitar vínculo con el libro", "Unlink from book")} onClick={unlink}><PiX /></button></div>}
              <div className="tl-side" role="group" aria-label={text("Lado de la orden", "Order side")}>{["buy", "sell"].map(value => <button key={value} type="button" data-side={value} aria-pressed={side === value} onClick={() => { setSide(value); unlink(); }}>{value === "buy" ? <PiTrendUp /> : <PiTrendDown />} {tr(value)}</button>)}</div>
              <div className="tl-field"><label htmlFor={`tl-price-${ticketId.current}`}>{tr("price")} · {instrument.currency}</label><div className={`tl-field__control ${errors.price ? "is-error" : ""}`}><button type="button" tabIndex={-1} aria-label={text(`Restar tick ${instrument.tick}`, `Subtract tick ${instrument.tick}`)} onClick={() => edit(setPrice, String(Number((parsedPrice - instrument.tick).toFixed(2))), "price")}><PiMinus /></button><input ref={priceRef} id={`tl-price-${ticketId.current}`} type="text" inputMode="decimal" value={price} aria-invalid={!!errors.price} aria-describedby={`tl-price-help-${ticketId.current}`} onChange={event => edit(setPrice, event.target.value, "price")} /><button type="button" tabIndex={-1} aria-label={text(`Sumar tick ${instrument.tick}`, `Add tick ${instrument.tick}`)} onClick={() => edit(setPrice, String(Number((parsedPrice + instrument.tick).toFixed(2))), "price")}><PiPlus /></button></div>
              <div id={`tl-price-help-${ticketId.current}`} className={errors.price ? "tl-error" : "tl-cross-hint"}>{errors.price ? <><PiWarningCircle /> {text("Ingresa un precio límite mayor que 0.", "Enter a limit price greater than 0.")}</> : validPrice && oppositePrice != null ? `${crosses ? text("→ Cruza", "→ Crosses") : text("No cruza", "Does not cross")} ${side === "buy" ? "ask" : "bid"} (${formatPrice(oppositePrice)}): ${crosses ? text("habrá ejecución.", "it will execute.") : text("quedará en el libro.", "it will rest in the book.")}` : ""}</div></div>
              <div className="tl-field"><label htmlFor={`tl-qty-${ticketId.current}`}>{tr("quantity")}</label><div className={`tl-field__control ${errors.qty ? "is-error" : ""}`}><input ref={quantityRef} id={`tl-qty-${ticketId.current}`} type="text" inputMode="numeric" value={quantity} aria-invalid={!!errors.qty} aria-describedby={errors.qty ? `tl-qty-help-${ticketId.current}` : undefined} onChange={event => edit(setQuantity, event.target.value, "qty")} /></div>{errors.qty && <div id={`tl-qty-help-${ticketId.current}`} className="tl-error"><PiWarningCircle />{text("Ingresa una cantidad entera mayor que 0.", "Enter a whole quantity greater than 0.")}</div>}</div>
              <div className="tl-field"><span>{tr("validity")}</span><div className="tl-seg" role="group" aria-label={tr("validity")}>{["day", "gtc"].map(value => <button key={value} type="button" aria-pressed={validity === value} onClick={() => setValidity(value)}>{tr(value)}</button>)}</div></div>
              <button type="submit" className="tl-submit" data-side={side}>{side === "buy" ? tr("sendBuy") : tr("sendSell")}{validPrice && validQty ? ` · ${qtyFormatter.format(Number(quantity))} @ ${formatPrice(parsedPrice)}` : ""}</button>
            </div>
          </form>
        </div>
        <div className="tl-flow"><div className="tl-panel-title">{tr("eventFlow")}</div><div aria-live="polite" aria-atomic="true" className="tl-live">{events[0] ? `#${String(events[0].id).padStart(3, "0")} · ${tr(events[0].status)} · ${qtyFormatter.format(events[0].executed)} / ${qtyFormatter.format(events[0].requested)}` : ""}</div>
          {events.length ? events.map((item, index) => <article key={item.id} className={index === 0 ? "tl-result" : "tl-previous"}><div><strong>{tr(item.status)} · #{String(item.id).padStart(3, "0")}</strong><p className={`tl-value--${item.side === "buy" ? "bid" : "ask"}`}>{tr(item.side)} {qtyFormatter.format(item.requested)} @ {formatPrice(item.limitPrice)}</p></div><div><span>{qtyFormatter.format(item.executed)} {text("de", "of")} {qtyFormatter.format(item.requested)} {text("ejecutadas", "executed")} ({Math.round(item.executed / item.requested * 100)}%)</span>{index === 0 && <div className="tl-progress" role="meter" aria-label={text("Cantidad ejecutada", "Executed quantity")} aria-valuemin={0} aria-valuemax={item.requested} aria-valuenow={item.executed}><span style={{ width: `${item.executed / item.requested * 100}%` }} /></div>}</div><div>{item.executed > 0 && <span>{text("Promedio", "Average")} {formatPrice(item.averagePrice)}</span>}<p>{qtyFormatter.format(item.remaining)} {text("en el libro", "in the book")}</p></div><div><span className="tl-drop-copy">{text("Drop Copy generada", "Drop Copy issued")}</span>{index === 0 && <button type="button" className="tl-fix-link" onClick={showFix}>{text("Ver ExecutionReport ↓", "View ExecutionReport ↓")}</button>}</div></article>) : <p className="tl-flow-empty">{text("Envía una orden y verás aquí si queda en el libro, se ejecuta en parte o por completo.", "Send an order to see here whether it rests in the book, fills in part or fills completely.")}</p>}
        </div>
        <aside className={`tl-guide ${guideExpanded ? "is-open" : "is-closed"}`}><button type="button" className="tl-guide-toggle" aria-expanded={guideExpanded} aria-controls={`tl-guide-${ticketId.current}`} onClick={() => setGuideOpen(!guideExpanded)}><PiInfo />{text("Cómo funciona", "How it works")} <span>⌄</span></button><div className="tl-guide-content" id={`tl-guide-${ticketId.current}`}><div className="tl-concept-tabs" role="tablist" aria-label={text("Conceptos del mercado", "Market concepts")}>{Object.entries(CONCEPTS).map(([key, concept]) => <button type="button" role="tab" id={`tl-tab-${ticketId.current}-${key}`} aria-controls={`tl-concept-${ticketId.current}`} aria-selected={activeConcept === key} onClick={() => setActiveConcept(key)} key={key}>{L(concept.title)}</button>)}</div><p className="tl-concept-copy" role="tabpanel" id={`tl-concept-${ticketId.current}`} aria-labelledby={`tl-tab-${ticketId.current}-${activeConcept}`}>{L(CONCEPTS[activeConcept].text)}</p></div></aside>
      </div>
      <FixExplorer event={events[0]} symbol={symbol} explorerRef={fixRef} />
      <p className="lab-disclaimer">{tr("disclaimer")}</p>
    </div>
  </section>;
}
