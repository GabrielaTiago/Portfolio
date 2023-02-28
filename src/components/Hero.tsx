import { use } from "react";
import { PageInfo } from "@/Interfaces/sanityInterfaces";
import { fetchPageInfo } from "@/utils";
import { BackgroundCircles, Picture, Typewriter } from "../components";

export function Hero() {
  const {
    props: { pageInfo },
  } = use(getPageInfoData());

  const { name, role, heroImage } = pageInfo;

  return (
    <div className="h-screen px-[3%] flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Picture image={heroImage} />
      <div className="flex flex-col mt-4 gap-2 z-20">
        <h2 className="uppercase text-sm text-gray-500 tracking-[9px]  md:tracking-[11px]">
          {role}
        </h2>
        <Typewriter name={name} />
        <nav className="flex flex-col items-center justify-center md:flex-row">
          <a href="#about">
            <button className="heroButton">Sobre</button>
          </a>
          <a href="#education">
            <button className="heroButton">Educação</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Habilidades</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projetos</button>
          </a>
        </nav>
      </div>
    </div>
  );
}

async function getPageInfoData() {
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: { pageInfo },
  };
}
