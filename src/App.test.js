import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem("fdv-lang", "es");
  window.history.replaceState(null, "", "/");
});

test("presents the narrative in the intended order with direct contact routes", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /Construyo los sistemas/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Ver proyectos/i })).toHaveAttribute("href", "#casos");
  expect(Array.from(document.querySelectorAll("main > section"), (section) => section.id))
    .toEqual(["inicio", "casos", "como-trabajo", "trayectoria", "contacto"]);
  expect(document.querySelector("#simulador")).toBeNull();
  expect(screen.queryByRole("heading", { name: /Envía una orden y observa/i })).not.toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: /De la ejecución al mensaje FIX/i })).not.toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: /El recorrido conceptual de una orden/i })).not.toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Market Depth FIX Lab" })).toBeInTheDocument();
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
  expect(screen.getByRole("link", { name: "View projects" })).toHaveAttribute("href", "#casos");
  expect(localStorage.getItem("fdv-lang")).toBe("en");
});
