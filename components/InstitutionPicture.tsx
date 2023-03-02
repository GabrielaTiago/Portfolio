import { motion } from "framer-motion";
import { Image } from "../Interfaces/sanityInterfaces";
import { urlFor } from "../pages/api/sanity";

type Props = {
  image: Image;
  name: string
};

export function InstitutionPicture({ image, name }: Props) {
  return (
    <motion.img
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="w-16 h-16 xss:w-20 xss:h-20 rounded-full xl:w-[130px] xl:h-[130px] object-cover object-center"
      src={urlFor(image).url()}
      alt={`${name} logo`}
    />
  );
}
