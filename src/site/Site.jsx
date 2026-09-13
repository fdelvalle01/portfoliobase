import React from "react";
import ParticlesCanvas from "./components/ParticlesCanvas";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OrderFlow from "./components/OrderFlow";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import TradingLab from "./components/TradingLab";
import HowIWork from "./components/HowIWork";
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
          <TradingLab />
          <OrderFlow />
          <Projects />
          <HowIWork />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
