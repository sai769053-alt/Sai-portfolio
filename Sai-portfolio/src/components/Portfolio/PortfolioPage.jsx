import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function PortfolioPage() {
  return (
    <main className="container">
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
