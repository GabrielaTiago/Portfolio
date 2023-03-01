import { motion } from "framer-motion";
import { use } from "react";
import { AboutPicture } from "@/components";
import { PageInfo } from "@/Interfaces/sanityInterfaces";
import { fetchPageInfo } from "@/utils";

async function getPageInfoData() {
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    pageInfo,
  };
}

const data = getPageInfoData();

export function About() {
  const { pageInfo } = use(data);

  const { backgroundInfo, profilePicture } = pageInfo;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="relative h-screen px-[3%] mx-auto flex flex-col items-center justify-evenly text-center md:text-left"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Sobre
      </h3>
      <div className="h-full pt-[22%] xss:pt-0 flex flex-col items-center justify-center gap-5 md:flex-row">
        <AboutPicture image={profilePicture} />
        <div className="space-y-3 md:space-y-6">
          <h4 className="text-xl md:text-3xl font-semibold">
            Um{" "}
            <span className="underline decoration-[#32a889]/70">pouquinho</span>{" "}
            sobre mim
          </h4>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-3 md:space-y-4"
          >
            {backgroundInfo.map((info, index) => (
              <p key={index} className="text-[12px] md:text-sm">
                {info}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
