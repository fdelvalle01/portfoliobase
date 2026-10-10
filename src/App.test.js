import { render, screen, waitFor, within } from "@testing-library/react";
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
    .toEqual(["inicio", "sobre-mi", "casos", "como-trabajo", "trayectoria", "contacto"]);
  const story = screen.getByRole("region", { name: /De la curiosidad por las apps/ });
  expect(within(story).getByText(/videojuegos en el computador.*Discord.*PHP.*Android 2\.1/)).toBeInTheDocument();
  expect(within(story).getByText(/Lideré el desarrollo del módulo de usuarios y entidades de Sebra HT/)).toBeInTheDocument();
  expect(within(story).getByText(/Summit conecta mi interés por las aplicaciones móviles con la montaña/)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Sobre mí" })).toHaveAttribute("href", "#sobre-mi");
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
  const story = screen.getByRole("region", { name: /From curiosity about apps/ });
  expect(within(story).getByText(/PC games.*Discord.*PHP.*Android 2\.1/)).toBeInTheDocument();
  expect(within(story).getByText(/I led development of the Sebra HT/)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "About me" })).toHaveAttribute("href", "#sobre-mi");
  expect(localStorage.getItem("fdv-lang")).toBe("en");
});

test("connects story milestones to their actual project cases", async () => {
  render(<App />);
  const milestones = screen.getByRole("navigation", { name: "Proyectos que conectan mi historia" });
  const cases = [
    { link: /Sebra HT/, heading: "Gestión de usuarios y entidades de Sebra HT", hash: "#sebra-ht" },
    { link: /Mercado dominicano/, heading: "Plataforma bursátil para el mercado dominicano", hash: "#mercado-dominicano" },
    { link: /Summit/, heading: "Summit — app outdoor para Chile", hash: "#summit" },
  ];
  for (const project of cases) {
    const opener = within(milestones).getByRole("link", { name: project.link });
    userEvent.click(opener);
    const dialog = await screen.findByRole("dialog");
    await waitFor(() => expect(within(dialog).getByRole("button", { name: "Cerrar" })).toHaveFocus());
    expect(window.location.hash).toBe(project.hash);
    expect(within(dialog).getByRole("heading", { name: project.heading })).toBeInTheDocument();
    userEvent.click(within(dialog).getByRole("button", { name: "Cerrar" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(window.location.hash).toBe("#casos");
    await waitFor(() => expect(opener).toHaveFocus());
    expect(document.body.style.overflow).not.toBe("hidden");
  }
});
