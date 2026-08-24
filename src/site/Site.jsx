import React from "react";
import ParticlesCanvas from "./components/ParticlesCanvas";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBand from "./components/StatsBand";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import TradingLab from "./components/TradingLab";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Site() {
  return (
    <div className="site">
      <ParticlesCanvas />

      <div className="site__content">
        <Header />
        <main>
          <Hero />
          <StatsBand />
          <About />
          <Timeline />
          <Projects />
          <TradingLab />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
