import { Project } from "../components";
import { Project as TProject } from "../Interfaces/sanityInterfaces";

type Props = {
  projects: TProject[];
};

export function Projects({ projects }: Props) {
  return (
    <div className="relative max-w-full h-screen px-[3%] mx-auto flex flex-col items-center justify-evenly text-left md:flex-row z-0 overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projetos
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#32a889]/40">
        {projects.map((project, index) => {
          const { _id, image, link, sumary, title, technologies } = project;

          return (
            <Project
              key={_id}
              index={index}
              numbOfProjects={projects.length}
              image={image}
              link={link}
              sumary={sumary}
              title={title}
              technologies={technologies}
            />
          );
        })}
      </div>
      <div className="absolute w-full h-[500px] top-[30%] bg-[#32a889]/10 left-0 -skew-y-12"></div>
    </div>
  );
}
