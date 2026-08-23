import React from "react";
import { I18nProvider } from "./site/context/I18nContext";
import { ThemeProvider } from "./site/context/ThemeContext";
import Site from "./site/Site";
import "./site/styles/site.css";

function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Site />
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
