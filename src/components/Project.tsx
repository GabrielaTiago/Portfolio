import { motion } from "framer-motion";

type Props = {
  index: number;
  numbOfProjects: number;
};

export function Project({ index, numbOfProjects }: Props) {
  return (
    <div className="w-screen h-screen p-[6%] md:p-[12%] flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-5 ">
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://www.v-labs.fr/wp-content/uploads/2020/08/img_ui_ux.png"
        alt="frames"
        className="md:max-w-[400px] md:max-h-[300px] max-w-[225px] max-h-[125px]"
      />
      <div className="max-w-6xl space-y-10 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          <span className="underline decoration-[#34ebcd]/50">
            Projeto {index + 1} de {numbOfProjects}:
          </span>
          {"  teste"}
        </h4>
        <p className="text-md text-center md:text-lg md:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}
