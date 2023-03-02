import { motion } from "framer-motion";
import { IImage } from "../models/sanity";
import { urlFor } from "../pages/api/sanity";

type Props = {
  image: IImage;
};

export function AboutPicture({ image }: Props) {
  return (
    <motion.img
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      src={urlFor(image).url()}
      className="hidden xs:block w-[120px] min-h-[120px] flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[380px] xl:h-[450px]"
    />
  );
}
