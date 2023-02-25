"use client";
import { About, Contact, Education, Header, Hero, Projects, Skills } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="education" className="snap-center">
        <Education />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </>
  );
}
