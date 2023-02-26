import { Cursor, useTypewriter } from "react-simple-typewriter";

export function Typewriter() {
  const [text] = useTypewriter({
    words: [
      "Olá, meu nome é Gabriela Tiago",
      "<Apaixonada Por Tecnologia />",
    ],
    loop: true,
    typeSpeed: 150,
    delaySpeed: 2000,
  });
  return (
    <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold">
      <span className="">{text}</span>
      <Cursor cursorColor="#32a889" />
    </h1>
  );
}
