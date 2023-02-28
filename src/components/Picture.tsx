import Image from "next/image";
import { Image as TImage } from "@/Interfaces/sanityInterfaces";
import { urlFor } from "@/pages/api/sanity";

type Props = {
  image: TImage;
};

export function Picture({ image }: Props) {
  return (
    <Image
      className="w-32 h-32 mt-4 rounded-full object-cover"
      src={urlFor(image).url()}
      alt="Gabriela, a woman with curly hair, wearing a pink jacket"
      width={200}
      height={200}
    />
  );
}
