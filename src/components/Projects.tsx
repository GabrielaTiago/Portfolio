import { Project } from "./Project";

export function Projects() {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="relative max-w-full h-screen px-[3%] mx-auto flex flex-col items-center justify-evenly text-left md:flex-row z-0 overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projetos
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => {
          return (
            <Project
              key={project}
              index={index}
              numbOfProjects={projects.length}
            />
          );
        })}
      </div>
      <div className="absolute w-full h-[500px] top-[30%] bg-[#34ebcd]/10 left-0 -skew-y-12"></div>
    </div>
  );
}
