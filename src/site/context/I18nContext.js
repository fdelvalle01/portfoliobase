import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DICT } from "../data/content";

const I18nContext = createContext({ lang: "es", setLang: () => {}, t: (k) => k, L: (o) => "" });

const STORAGE_KEY = "fdv-lang";

function initialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch (e) {}
  const nav = (typeof navigator !== "undefined" && navigator.language) || "es";
  return nav.toLowerCase().startsWith("es") ? "es" : "en";
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const setLang = useCallback((value) => {
    setLangState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {}
  }, []);

  // Traduce una clave del diccionario.
  const t = useCallback((key) => {
    const entry = DICT[key];
    if (!entry) return key;
    return entry[lang] || entry.es;
  }, [lang]);

  // Resuelve un objeto { es, en } embebido en los datos.
  const L = useCallback((obj) => (obj && (obj[lang] || obj.es)) || "", [lang]);

  const value = useMemo(() => ({ lang, setLang, t, L }), [lang, setLang, t, L]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
