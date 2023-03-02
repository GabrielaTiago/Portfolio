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
    <div className="w-screen h-screen p-[6%] md:p-[12%] flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-5 ">
      <a href={`${link}`}>
        <motion.img
          initial={{ y: -300, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          src={urlFor(image).url()}
          alt={`picture of the project ${title}`}
          className="md:max-w-[400px] md:max-h-[300px] max-w-[225px] max-h-[125px]"
        />
      </a>
      <a href={`${link}`}>
        <div className="max-w-6xl space-y-2 xs:space-y-10 px-0 md:px-10">
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
                  width={40}
                  height={40}
                />
              );
            })}
          </div>

          <p className="text-sm xs:text-md text-center md:text-lg md:text-left">
            {sumary}
          </p>
        </div>
      </a>
    </div>
  );
}
