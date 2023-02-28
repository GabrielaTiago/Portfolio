"use client";
import { About, Contact, Education, Header, Hero, Projects, Skills } from "@/components";

export default function Home() {
  return (
    <div className="h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory z-0 overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#32a889]/40">
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
    </div>
  );
}
