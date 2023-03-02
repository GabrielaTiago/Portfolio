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
    <article className="w-[250px] md:w-[550px] xl:w-[800px] h-min p-4 flex flex-col flex-shrink-0 items-center space-y-2 rounded-lg snap-center bg-[#292929] hover:cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-200">
      <InstitutionPicture image={institutionPicture} name={institution} />

      <div className="space-y-4">
        <div className="space-y-1">
          <h4 className="text-xl xss:text-2xl md:text-3xl font-light">
            {institution}
          </h4>
          <h5 className="test-lg xs:text-1xl md:text-xl font-bold">
            {course}
          </h5>
        </div>

        <div className="max-h-[35px] xss:max-h-[70px] xsss:max-h-full overflow-y-scroll flex flex-wrap space-x-2 lg:scrollbar-none">
          {technologies.map((technologie) => {
            const { _id, title, image } = technologie;
            return (
              <Image
                key={_id}
                src={urlFor(image).url()}
                alt={`${title} icon`}
                width={30}
                height={30}
              />
            );
          })}
        </div>

        <p className="uppercase text-gray-400 text-sm xl:text-1lg">
          {`Início ${formatDate(dateStart)} - Final ${formatDate(dateEnd)}`}
        </p>

        <Slider topics={topics} />
      </div>
    </article>
  );
}
