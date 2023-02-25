"use client";
import { About, Education, Header, Hero, Skills } from "@/components";

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
    </>
  );
}
