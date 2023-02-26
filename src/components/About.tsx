import { motion } from "framer-motion";
import { AboutPicture } from "@/components";

export function About() {
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
        <AboutPicture />
        <div className="space-y-3 md:space-y-6">
          <h4 className="text-xl md:text-3xl font-semibold">
            Um{" "}
            <span className="underline decoration-[#32a889]/70">pouquinho</span>{" "}
            sobre mim
          </h4>
          <div className="space-y-3 md:space-y-4">
            <p className="text-[12px] md:text-sm">
              Olá, meu nome é Gabriela Tiago e sou uma desenvolvedora web
              fullstack, atualmente estou graduando na Universidade de Brasília
              (UNB) e com um bootcamp de desenvolvimento web concluído na
              Driven. Eu sou apaixonada por tecnologia e por todo o ambiente de
              desenvolvimento, desde a criação de um projeto até a entrega final
              ao cliente.
            </p>
            <p className="text-[12px] md:text-sm">
              Durante a minha jornada como desenvolvedora web, eu tive a
              oportunidade de trabalhar em diversos projetos interessantes,
              tanto em equipes quanto individualmente. Eu amo a sensação de
              colocar em prática tudo o que aprendi e ver o meu trabalho se
              tornando realidade. Para mim, a programação é uma arte e cada
              linha de código é uma oportunidade para criar algo novo e
              inovador.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
