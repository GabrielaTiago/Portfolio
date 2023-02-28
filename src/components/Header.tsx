import { use } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "@/Interfaces/sanityInterfaces";
import { fetchSocials } from "@/utils";

export function Header() {
  const {
    props: { socials },
  } = use(getSocialsData());

  return (
    <header className="max-w-7xl mx-auto p-[3%] sticky top-0 flex flex-row justify-between z-20">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        {socials.map((social) => {
          const { _id, url } = social;

          return (
            <SocialIcon
              key={_id}
              className="hover:brightness-125"
              url={url}
              fgColor="gray"
              bgColor="transparent"
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer hover:brightness-125"
          network="email"
          url="http://localhost:3000/#contact"
          fgColor="gray"
          bgColor="transparent"
        />
        <a href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 hover:brightness-90">
            Entre em contato
          </p>
        </a>
      </motion.div>
    </header>
  );
}

async function getSocialsData() {
  const socials: Social[] = await fetchSocials();

  return {
    props: { socials },
  };
}
