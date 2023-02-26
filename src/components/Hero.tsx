import Link from "next/link";
import { BackgroundCircles, Picture, Typewriter } from "../components";

export function Hero() {
  return (
    <div className="h-screen px-[3%] flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Picture />
      <div className="flex flex-col mt-4 gap-2 z-20">
        <h2 className="uppercase text-sm text-gray-500 tracking-[9px]  md:tracking-[11px]">
          Desenvolvedora Web Fullstack JR
        </h2>
        <Typewriter />
        <nav className="flex flex-col items-center justify-center md:flex-row">
          <Link href="#about">
            <button className="heroButton">Sobre</button>
          </Link>
          <Link href="#education">
            <button className="heroButton">Educação</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Habilidades</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projetos</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
