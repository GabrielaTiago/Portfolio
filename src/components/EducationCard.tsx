import Image from "next/image";
import { InstitutionPicture, Slider } from "@/components";

export function EducationCard() {
  return (
    <article className="w-[250px] md:w-[550px] xl:w-[800px] h-min p-4  flex flex-col flex-shrink-0 items-center space-y-7 rounded-lg snap-center bg-[#292929] hover:cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-200">
      <InstitutionPicture />

      <div className="space-y-5">
        <div className="space-y-1">
          <h4 className="text-2xl md:text-4xl font-light">
            Universidade de Brasília
          </h4>
          <h5 className="text-1xl md:text-2xl font-bold">
            Engenharia de Software
          </h5>
        </div>

        <div className="flex space-x-2">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
            alt="icon"
            width={40}
            height={40}
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="icon"
            width={40}
            height={40}
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="icon"
            width={40}
            height={40}
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
            alt="icon"
            width={40}
            height={40}
          />
        </div>

        <p className="uppercase text-gray-400 text-sm xl:text-lg">
          Início 06/22 - Final 12/26
        </p>

        <Slider />
      </div>
    </article>
  );
}
