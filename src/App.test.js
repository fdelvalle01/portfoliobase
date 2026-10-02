import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem("fdv-lang", "es");
});

test("presents the narrative in the intended order with direct contact routes", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /Construyo los sistemas/i })).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: /Probar el Trading Lab/i })[0]).toHaveAttribute("href", "#simulador");
  expect(screen.getByRole("heading", { name: /Envía una orden y observa/i })).toBeInTheDocument();
  expect(screen.getByText(/SISTEMAS EN PRODUCCIÓN EN MERCADOS REGULADOS/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Trabajar con sistemas que mueven dinero/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /De practicante a senior, construyendo/i })).toBeInTheDocument();
  expect(document.querySelector("#contacto form")).toBeNull();
  expect(screen.getByRole("link", { name: /Contactar por LinkedIn/i })).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
  expect(screen.getByRole("link", { name: /Escribir por email/i })).toHaveAttribute("href", expect.stringContaining("mailto:"));
});

test("switches the narrative to English", () => {
  render(<App />);
  userEvent.click(screen.getByRole("button", { name: "EN" }));
  expect(screen.getByRole("heading", { name: /I build the systems/i })).toBeInTheDocument();
  expect(localStorage.getItem("fdv-lang")).toBe("en");
});

test("renders a structurally complete FIX 5.0 SP2 ExecutionReport", () => {
  render(<App />);

  const flowCard = document.querySelector(".order-flow__card");
  userEvent.click(screen.getByRole("button", { name: /Mensaje raw/ }));
  const visibleMessage = document.querySelector(".fx-raw code").textContent;
  const fixMessage = visibleMessage.split("␁").join("\u0001");
  const bodyLength = Number(fixMessage.match(/\u00019=(\d+)\u0001/)[1]);
  const bodyStart = fixMessage.indexOf("35=8\u0001");
  const checksumStart = fixMessage.lastIndexOf("10=");
  const declaredChecksum = fixMessage.slice(checksumStart + 3, checksumStart + 6);
  const calculatedChecksum = String(Array.from(fixMessage.slice(0, checksumStart))
    .reduce((sum, character) => sum + character.charCodeAt(0), 0) % 256).padStart(3, "0");

  expect(flowCard).toBeInTheDocument();
  expect(fixMessage).toMatch(/^8=FIXT\.1\.1\u00019=\d+\u000135=8\u0001/);
  expect(fixMessage.slice(bodyStart, checksumStart).length).toBe(bodyLength);
  expect(declaredChecksum).toBe(calculatedChecksum);
});
