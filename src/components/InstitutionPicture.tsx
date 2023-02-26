import { motion } from "framer-motion";

export function InstitutionPicture() {
  return (
    <motion.img
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="w-16 h-16 xss:w-20 xss:h-20 rounded-full xl:w-[130px] xl:h-[130px] object-cover object-center"
      src="https://meuvestibular.com.br/wp-content/uploads/2018/02/trabalhar-na-UnB-1200x1200.png"
      alt="unb logo"
    />
  );
}
