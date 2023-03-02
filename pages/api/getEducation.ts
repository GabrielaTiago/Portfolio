import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { IEducation, EducationData } from "../../models";

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
  const education: IEducation[] = await sanityClient.fetch(query);

  res.status(200).json({ education });
}
