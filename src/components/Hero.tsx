import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "./BackgroundCircles";

export function Hero() {
  const [text] = useTypewriter({
    words: [
      "Olá, meu nome é Gabriela Tiago",
      "Sou uma desenvolvedora web fullstack",
      "<Apaixonada por tecnologia />",
    ],
    loop: true,
    typeSpeed: 150,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-5 text-center overflow-hidden">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#ffffff" />
      </h1>
    </div>
  );
}
