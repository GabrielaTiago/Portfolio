import { motion } from "framer-motion";
import { IImage, ISkill } from "../models/sanity";
import { urlFor } from "../pages/api/sanity";
import Image from "next/image";

type Props = {
  index: number;
  numbOfProjects: number;
  image: IImage;
  link: string;
  sumary: string;
  title: string;
  technologies: ISkill[];
};

export function Project({
  index,
  numbOfProjects,
  image,
  link,
  sumary,
  title,
  technologies,
}: Props) {
  return (
    <div className="w-screen h-screen p-[6%] md:p-[12%] flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-3">
      <a href={`${link}`}>
        <motion.img
          initial={{ y: -300, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          src={urlFor(image).url()}
          alt={`picture of the project ${title}`}
          className="md:max-w-[390px] md:max-h-[270px] max-w-[220px] max-h-[120px]"
        />
      </a>
      <a href={`${link}`}>
        <div className="max-w-8xl space-y-2 xs:space-y-[2%] px-0 md:px-[2%]">
          <h4 className="text-lg xs:text-2xl md:text-4xl font-semibold text-center">
            <span className="underline decoration-[#32a889]/50">
              {`Projeto ${index + 1} de ${numbOfProjects}:`}
            </span>
            {` ${title}`}
          </h4>

          <div className="flex items-center space-x-2 justify-center">
            {technologies.map((technologie) => {
              const { _id, title, image } = technologie;
              return (
                <Image
                  key={_id}
                  src={urlFor(image).url()}
                  alt={`${title} icon`}
                  width={35}
                  height={35}
                />
              );
            })}
          </div>

          <p className="text-[11px] xs:text-md text-center md:text-[16px] md:text-left">
            {sumary}
          </p>
        </div>
      </a>
    </div>
  );
}
