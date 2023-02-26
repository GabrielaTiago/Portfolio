import { motion } from "framer-motion";
import { EducationCard } from "@/components";

export function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="relative h-screen mx-auto px-[3%] flex flex-col items-center justify-evenly md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Educação
      </h3>

      <div className="w-full flex space-x-5 snap-x snap-mandatory overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#32a889]/40">
        <EducationCard />
        <EducationCard />
        <EducationCard />
      </div>
    </motion.div>
  );
}
