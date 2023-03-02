import Image from "next/image";
import { InstitutionPicture, Slider } from "../components";
import { IImage, ISkill } from "../models/sanity";
import { urlFor } from "../pages/api/sanity";
import { formatDate } from "../utils";

type Props = {
  institutionPicture: IImage;
  institution: string;
  course: string;
  technologies: ISkill[];
  dateStart: Date;
  dateEnd: Date;
  topics: string[];
};

export function EducationCard({
  institutionPicture,
  institution,
  course,
  technologies,
  dateStart,
  dateEnd,
  topics,
}: Props) {
  return (
    <article className="w-[250px] md:w-[550px] xl:w-[800px] h-min p-4  flex flex-col flex-shrink-0 items-center space-y-7 rounded-lg snap-center bg-[#292929] hover:cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-200">
      <InstitutionPicture image={institutionPicture} name={institution} />

      <div className="space-y-5">
        <div className="space-y-1">
          <h4 className="text-xl xss:text-2xl  md:text-4xl font-light">
            {institution}
          </h4>
          <h5 className="test-lg xs:text-1xl md:text-2xl font-bold">
            {course}
          </h5>
        </div>

        <div className=" flex flex-wrap space-x-2">
          {technologies.map((technologie) => {
            const { _id, title, image } = technologie;
            return (
              <Image
                key={_id}
                src={urlFor(image).url()}
                alt={`${title} icon`}
                width={40}
                height={40}
              />
            );
          })}
        </div>

        <p className="uppercase text-gray-400 text-sm xl:text-lg">
          {`Início ${formatDate(dateStart)} - Final ${formatDate(dateEnd)}`}
        </p>

        <Slider topics={topics} />
      </div>
    </article>
  );
}
