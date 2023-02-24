"use client";
import { About, Header, Hero } from "@/components";

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
    </>
  );
}
