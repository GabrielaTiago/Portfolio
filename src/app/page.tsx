"use client";
import { Header, Hero } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </>
  );
}
