import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "../context/I18nContext";
import Projects from "./Projects";
import { CASES } from "../data/content";

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem("fdv-lang", "es");
  window.history.replaceState(null, "", "/");
});

afterEach(() => window.history.replaceState(null, "", "/"));

function renderProjects() {
  return render(<I18nProvider><Projects /></I18nProvider>);
}

test("adds a POC without removing the existing cases or the Trading Workstation gallery", () => {
  renderProjects();
  expect(screen.getByRole("heading", { name: /Trading Workstation/ })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Summit —/ })).toBeInTheDocument();
  expect(CASES).toHaveLength(6);
  expect(CASES[4].gallery).toHaveLength(3);
  userEvent.click(screen.getByRole("button", { name: "POC / Ingeniería" }));
  expect(screen.getByRole("heading", { name: "OpenSpec S0 + Viewer" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: /Summit —/ })).not.toBeInTheDocument();
});

test("opens a shareable POC with both reviews, evidence and limitations; Escape returns focus", () => {
  renderProjects();
  const opener = screen.getByRole("button", { name: /PROYECTO PERSONAL · BETA/ });
  userEvent.click(opener);
  const dialog = screen.getByRole("dialog");
  expect(window.location.hash).toBe("#poc-ai-sdd");
  const steps = within(dialog).getByRole("list", { name: /Flujo de desarrollo/ });
  expect(within(steps).getAllByRole("listitem")).toHaveLength(5);
  expect(within(steps).getByText("Revisión funcional explícita")).toBeInTheDocument();
  expect(within(steps).getByText("Revisión técnica explícita")).toBeInTheDocument();
  expect(within(dialog).getByText(/todavía sin línea base comparativa/)).toBeInTheDocument();
  expect(within(dialog).getByText("768a64f")).toBeInTheDocument();
  expect(within(dialog).getByText(/El repositorio requiere acceso/)).toBeInTheDocument();
  expect(within(dialog).queryByRole("link")).not.toBeInTheDocument();
  fireEvent.keyDown(dialog, { key: "Escape" });
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(window.location.hash).toBe("#casos");
  expect(opener).toHaveFocus();
  expect(document.body.style.overflow).not.toBe("hidden");
});

test("opens the direct link in English and closes when the hash changes", () => {
  localStorage.setItem("fdv-lang", "en");
  window.history.replaceState(null, "", "#poc-ai-sdd");
  renderProjects();
  const dialog = screen.getByRole("dialog");
  expect(within(dialog).getByText("AI executes. People decide.")).toBeInTheDocument();
  expect(within(dialog).getByText("Explicit functional review")).toBeInTheDocument();
  expect(within(dialog).getByText("Explicit technical review")).toBeInTheDocument();
  expect(within(dialog).getByText("What remains to be demonstrated")).toBeInTheDocument();
  expect(within(dialog).getByText(/The repository requires access/)).toBeInTheDocument();
  window.history.replaceState(null, "", "#casos");
  fireEvent(window, new HashChangeEvent("hashchange"));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

test("keeps keyboard focus within the POC dialog", () => {
  window.history.replaceState(null, "", "#poc-ai-sdd");
  renderProjects();
  const dialog = screen.getByRole("dialog");
  const close = within(dialog).getByRole("button");
  expect(close).toHaveFocus();
  fireEvent.keyDown(close, { key: "Tab", shiftKey: true });
  expect(close).toHaveFocus();
  fireEvent.keyDown(close, { key: "Tab" });
  expect(close).toHaveFocus();
});
