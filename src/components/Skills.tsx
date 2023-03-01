import { motion } from "framer-motion";
import { use } from "react";
import { Skill } from "@/components";
import { fetchSkills } from "@/utils";
import { Skill as TSkill } from "@/Interfaces/sanityInterfaces";

async function getSkillsData() {
  const skills: TSkill[] = await fetchSkills();

  return {
    skills,
  };
}

const data = getSkillsData();

export function Skills() {
  const { skills } = use(data);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="relative h-screen px-[3%] mx-auto flex flex-col items-center justify-evenly text-center md:text-left md:flex-row xl:space-y-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl md:tracking-[20px]">
        Habilidades
      </h3>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="max-w-[260px] h-min max-h-80 xss::max-w-[420px] xss:max-h-[350px] md:max-w-fit md:max-h-[580px] grid gap-3 xs:gap-5 grid-cols-5 xss:grid-cols-6 overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#32a889]/40"
      >
        {skills.map((skill) => {
          const { _id, title, image, time } = skill;
          return <Skill key={_id} title={title} image={image} time={time} />;
        })}
      </motion.div>
    </motion.div>
  );
}
