import Image from "next/image";
import { IImage } from "../models/sanity";
import { urlFor } from "../pages/api/sanity";

type Props = {
  title: string;
  image: IImage;
  time: string;
};

export function Skill({ title, image, time }: Props) {
  return (
    <div className="relative flex cursor-pointer hover:group group max-w-[50px] max-h-[50px] md:max-w-[70px] md:max-h-[70px]">
      <Image
        src={urlFor(image).url()}
        alt={`${title} icon`}
        className="w-full h-full aspect-square rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
        width={40}
        height={40}
        quality={100}
      />
      <div className="absolute w-full h-full rounded-full opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white z-0 flex items-center justify-center">
        <p className="text-sm font-bold text-gray-700 opacity-100">{time}</p>
      </div>
    </div>
  );
}
