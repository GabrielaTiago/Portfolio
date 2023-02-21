import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

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
    <div className="flex">
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#34ebcd" />
      </h1>
    </div>
  );
}
