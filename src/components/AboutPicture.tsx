import { motion } from "framer-motion";

export function AboutPicture() {
  return (
    <motion.img
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      src="https://avatars.githubusercontent.com/u/77814822?v=4"
      className="hidden xs:block w-[120px] min-h-[120px] flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
    />
  );
}
