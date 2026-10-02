export const FIX_GROUPS = [
  { key: "header", tags: ["8", "9", "35", "34", "49", "52", "56", "1128"], title: { es: "Cabecera", en: "Header" } },
  { key: "order", tags: ["37", "11", "17", "55", "54", "38", "40", "44", "59"], title: { es: "Identificación de la orden", en: "Order identification" } },
  { key: "exec", tags: ["150", "39", "32", "31", "14", "151", "6"], title: { es: "Ejecución", en: "Execution" } },
  { key: "trailer", tags: ["10"], title: { es: "Cierre", en: "Trailer" } },
];

export const FIX_NAMES = {
  "8": "BeginString", "9": "BodyLength", "35": "MsgType", "34": "MsgSeqNum", "49": "SenderCompID",
  "52": "SendingTime", "56": "TargetCompID", "1128": "ApplVerID", "37": "OrderID", "11": "ClOrdID",
  "17": "ExecID", "150": "ExecType", "39": "OrdStatus", "55": "Symbol", "54": "Side", "38": "OrderQty",
  "40": "OrdType", "44": "Price", "59": "TimeInForce", "32": "LastQty", "31": "LastPx", "14": "CumQty",
  "151": "LeavesQty", "6": "AvgPx", "10": "CheckSum",
};

export function fixMeaning(tag, value, lang, ctx) {
  const es = lang !== "en";
  const pick = (a, b) => (es ? a : b);
  switch (tag) {
    case "8": return pick("Transporte FIXT 1.1, el que usa FIX 5.0 SP2", "FIXT 1.1 transport, as used by FIX 5.0 SP2");
    case "9": return pick(`Largo del cuerpo: ${value} caracteres, desde 35= hasta antes de 10=`, `Body length: ${value} characters, from 35= up to 10=`);
    case "35": return pick("ExecutionReport: informa el estado de una orden", "ExecutionReport: reports an order's status");
    case "34": return pick("Número de secuencia del mensaje", "Message sequence number");
    case "49": return pick("Emisor: el mercado simulado", "Sender: the simulated exchange");
    case "52": return pick("Hora de envío, simulada", "Sending time, simulated");
    case "56": return pick("Destinatario: este portafolio como cliente", "Recipient: this portfolio as a client");
    case "1128": return pick("Versión de aplicación: FIX 5.0 SP2", "Application version: FIX 5.0 SP2");
    case "37": return pick("ID que asigna el mercado a la orden", "ID the exchange assigns to the order");
    case "11": return ctx && ctx.orderNo
      ? pick(`ID de la orden del cliente: tu orden #${ctx.orderNo}`, `Client order ID: your order #${ctx.orderNo}`)
      : pick("ID de la orden del cliente (ejemplo)", "Client order ID (example)");
    case "17": return pick("ID único de este reporte", "Unique ID of this report");
    case "150": return value === "F" ? pick("F = Trade: hubo ejecución", "F = Trade: there was a fill") : pick("0 = New: la orden fue aceptada", "0 = New: the order was accepted");
    case "39": return value === "2" ? pick("2 = Filled: ejecutada por completo", "2 = Filled: fully executed")
      : value === "1" ? pick("1 = Partially filled: ejecutada en parte", "1 = Partially filled") : pick("0 = New: en el libro, sin ejecuciones", "0 = New: resting, no fills");
    case "55": return pick("Instrumento ficticio", "Fictional instrument");
    case "54": return value === "2" ? pick("2 = Sell: venta", "2 = Sell") : pick("1 = Buy: compra", "1 = Buy");
    case "38": return pick("Cantidad solicitada", "Requested quantity");
    case "40": return pick("2 = Limit: orden límite", "2 = Limit order");
    case "44": return pick("Precio límite", "Limit price");
    case "59": return value === "1" ? pick("1 = GTC: vigente hasta cancelar", "1 = GTC: good till cancelled") : pick("0 = Day: vence al cierre del día", "0 = Day: expires at the close");
    case "32": return pick("Cantidad ejecutada que informa este reporte", "Executed quantity reported here");
    case "31": return pick("Precio de esa ejecución (promedio en esta demo)", "Price of that fill (average in this demo)");
    case "14": return pick("Total ejecutado hasta ahora", "Total executed so far");
    case "151": return pick("Cantidad que sigue en el libro", "Quantity still resting in the book");
    case "6": return pick("Precio promedio de lo ejecutado", "Average price of executed quantity");
    case "10": return pick("Suma de control: suma de caracteres módulo 256", "Checksum: sum of characters modulo 256");
    default: return "";
  }
}
