import { motion } from "framer-motion";
import { Skill } from "@/components";

export function Skills() {
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
      <div className="max-w-[370px] max-h-[350px] md:max-w-fit md:max-h-[480px] grid gap-5 grid-cols-5 md:grid-cols-6">
        <Skill /> <Skill /> <Skill /> <Skill />
        <Skill /> <Skill /> <Skill /> <Skill />
        <Skill /> <Skill /> <Skill /> <Skill />
        <Skill /> <Skill /> <Skill /> <Skill />
        <Skill /> <Skill /> <Skill /> <Skill />
        <Skill /> <Skill /> <Skill /> <Skill />
        <Skill /> <Skill /> <Skill /> <Skill />
        <Skill /> <Skill /> <Skill /> <Skill />
        <Skill /> <Skill /> <Skill />
      </div>
    </motion.div>
  );
}
