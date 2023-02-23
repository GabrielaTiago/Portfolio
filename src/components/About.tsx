import { motion } from "framer-motion";
import { AboutPicture } from "@/components";

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="relative h-screen px-10 mx-auto flex flex-col items-center justify-evenly text-center md:text-left md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Sobre
      </h3>
      <AboutPicture />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Um{" "}
          <span className="underline decoration-[#32a889]/70">pouquinho</span>{" "}
          sobre mim
        </h4>
        <div className="space-y-3">
          <p className="text-sm">
            Olá, meu nome é Gabriela Tiago e sou uma desenvolvedora web
            fullstack, atualmente estou graduando na Universidade de Brasília
            (UNB) e com um bootcamp de desenvolvimento web concluído na Driven.
            Eu sou apaixonada por tecnologia e por todo o ambiente de
            desenvolvimento, desde a criação de um projeto até a entrega final
            ao cliente.
          </p>
          <p className="text-sm">
            Durante a minha jornada como desenvolvedora web, eu tive a
            oportunidade de trabalhar em diversos projetos interessantes, tanto
            em equipes quanto individualmente. Eu amo a sensação de colocar em
            prática tudo o que aprendi e ver o meu trabalho se tornando
            realidade. Para mim, a programação é uma arte e cada linha de código
            é uma oportunidade para criar algo novo e inovador.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
