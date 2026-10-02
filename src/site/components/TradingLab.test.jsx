import { fireEvent, render, screen, within, waitFor } from "@testing-library/react";
import { I18nProvider } from "../context/I18nContext";
import TradingLab from "./TradingLab";
import { buildExecutionReport } from "./FixExplorer";
import fixtures from "./fixFixtures.json";

beforeEach(() => {
  localStorage.setItem("fdv-lang", "es");
  window.matchMedia = jest.fn(() => ({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() }));
  Element.prototype.scrollIntoView = jest.fn();
});

function setup() { return render(<I18nProvider><TradingLab /></I18nProvider>); }
function send() { fireEvent.click(screen.getByRole("button", { name: /^Enviar compra/ })); }

test.each(fixtures)("preserves the original FIX raw, BodyLength and CheckSum %#", ({ event, raw }) => {
  expect(buildExecutionReport(event, "ANDES").raw).toBe(raw);
});

test("a deep ask loads the sweep and clears its link after editing or Escape", () => {
  const { container } = setup();
  const row = screen.getByRole("button", { name: "Comprar 46.600 @ 3.453,0 · 3 niveles" });
  fireEvent.mouseEnter(row);
  expect(container.querySelectorAll(".is-hover-sweep")).toHaveLength(2);
  fireEvent.click(row);
  expect(screen.getByLabelText("Cantidad")).toHaveValue("46600");
  expect(screen.getByLabelText("Precio límite · CLP")).toHaveValue("3453");
  expect(row).toHaveAttribute("aria-pressed", "true");
  expect(container.querySelectorAll(".is-swept")).toHaveLength(2);
  fireEvent.change(screen.getByLabelText("Cantidad"), { target: { value: "30000" } });
  expect(row).toHaveAttribute("aria-pressed", "false");
  expect(screen.queryByRole("button", { name: "Quitar vínculo con el libro" })).not.toBeInTheDocument();
  fireEvent.click(row);
  fireEvent.keyDown(row, { key: "Escape" });
  expect(row).toHaveAttribute("aria-pressed", "false");
});

test("the order view includes preceding orders and mode changes unlink the ticket", () => {
  setup();
  fireEvent.click(screen.getByRole("button", { name: "Por orden" }));
  const row = screen.getByRole("button", { name: "Comprar 30.300 @ 3.452,5 · 2 niveles" });
  fireEvent.click(row);
  expect(screen.getByLabelText("Cantidad")).toHaveValue("30300");
  expect(screen.getByText(/Desde el libro: ask.*5 órdenes/)).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Agregado" }));
  expect(screen.queryByRole("button", { name: "Quitar vínculo con el libro" })).not.toBeInTheDocument();
});

test("invalid fields focus the first error and decimal commas still execute", () => {
  setup();
  const price = screen.getByLabelText("Precio límite · CLP");
  const qty = screen.getByLabelText("Cantidad");
  fireEvent.change(price, { target: { value: "0" } });
  fireEvent.change(qty, { target: { value: "1.5" } });
  send();
  expect(price).toHaveFocus();
  expect(price).toHaveAttribute("aria-invalid", "true");
  expect(qty).toHaveAttribute("aria-invalid", "true");
  fireEvent.change(price, { target: { value: "3452,0" } });
  send();
  expect(qty).toHaveFocus();
  fireEvent.change(qty, { target: { value: "5000" } });
  send();
  expect(screen.getByRole("meter")).toHaveAttribute("aria-valuenow", "5000");
  expect(screen.getByText("Ejecutada · #001")).toBeInTheDocument();
});

test.each([
  ["3449", "5000", "En el libro", 0, "5000"],
  ["3452", "30000", "Ejecución parcial", 22400, "7600"],
  ["3453", "46600", "Ejecutada", 46600, "0"],
])("order %s × %s retains matching results", (price, quantity, status, filled, remaining) => {
  const { container } = setup();
  fireEvent.change(screen.getByLabelText("Precio límite · CLP"), { target: { value: price } });
  fireEvent.change(screen.getByLabelText("Cantidad"), { target: { value: quantity } });
  send();
  expect(screen.getByText(`${status} · #001`)).toBeInTheDocument();
  expect(screen.getByRole("meter")).toHaveAttribute("aria-valuenow", String(filled));
  const table = screen.getByRole("table");
  const leavesRow = within(table).getByText("LeavesQty").closest('[role="row"]');
  expect(within(leavesRow).getByText(remaining)).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Ver ExecutionReport ↓" }));
  expect(container.querySelector(".fx")).toHaveFocus();
});

test("a bid prepares a sell and consumes only the bid side", () => {
  setup();
  fireEvent.click(screen.getByRole("button", { name: "Vender 9.400 @ 3.449,0 · 1 niveles" }));
  expect(screen.getByLabelText("Cantidad")).toHaveValue("9400");
  fireEvent.click(screen.getByRole("button", { name: /^Enviar venta/ }));
  expect(screen.getByRole("meter")).toHaveAttribute("aria-valuenow", "9400");
  expect(screen.queryByRole("button", { name: "Vender 9.400 @ 3.449,0 · 1 niveles" })).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Comprar 22.400 @ 3.452,0 · 1 niveles" })).toBeInTheDocument();
});

test("the compact guide starts collapsed and English controls remain translated", () => {
  window.matchMedia = jest.fn(() => ({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() }));
  localStorage.setItem("fdv-lang", "en");
  const { container } = setup();
  const guide = screen.getByRole("button", { name: /How it works/ });
  expect(guide).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(guide);
  expect(guide).toHaveAttribute("aria-expanded", "true");
  expect(container.querySelector('.fx-group[open] summary')).toHaveTextContent("Execution");
  expect(container.querySelectorAll('.fx-group[open]')).toHaveLength(1);
  fireEvent.click(screen.getByRole("button", { name: "Buy 46,600 @ 3,453.0 · 3 levels" }));
  expect(screen.getByRole("button", { name: "Review" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Review" }));
  expect(screen.getByLabelText("Limit price · CLP")).toHaveFocus();
});

test("copy uses real SOH, raw is collapsible, and automation distinguishes demo coverage", async () => {
  const writeText = jest.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
  setup();
  const raw = screen.getByRole("button", { name: "Mensaje raw ⌄" });
  expect(raw).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(raw);
  expect(raw).toHaveAttribute("aria-expanded", "true");
  fireEvent.click(screen.getByRole("button", { name: "Copiar" }));
  await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Copiado"));
  expect(writeText).toHaveBeenCalledWith(fixtures[0].raw);
  fireEvent.click(screen.getByRole("tab", { name: "Automatización" }));
  expect(screen.getAllByText("La demo lo simula")).toHaveLength(2);
  expect(screen.getAllByText("No incluido en la demo")).toHaveLength(2);
  expect(screen.queryByRole("button", { name: "Reproducir ciclo" })).not.toBeInTheDocument();
});

test("copy failure is reported and instrument changes reset the source", async () => {
  Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: jest.fn().mockRejectedValue(new Error("denied")) } });
  setup();
  send();
  fireEvent.click(screen.getByRole("button", { name: "Copiar" }));
  await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("No se pudo copiar"));
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "CORDILLERA" } });
  expect(screen.getByText("Ejemplo")).toBeInTheDocument();
  expect(screen.getByLabelText("Precio límite · USD")).toHaveValue("42.19");
  expect(screen.queryByRole("meter")).not.toBeInTheDocument();
});
