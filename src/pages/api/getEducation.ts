import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { Education } from "../../Interfaces/sanityInterfaces";

type EducationData = {
  educations: Education[];
};

const query = groq`
    *[_type == "education"] {
        ...,
        technologies[]->
    }
`;

export default async function handlerEducations(
  req: NextApiRequest,
  res: NextApiResponse<EducationData>
) {
  const educations: Education[] = await sanityClient.fetch(query);

  res.status(200).json({ educations });
}
