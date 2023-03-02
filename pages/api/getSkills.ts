import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { ISkill } from "../../models/sanity";

type SkillData = {
  skills: ISkill[];
};

const query = groq`
    *[_type == "skill"]
`;

export default async function handlerSkills(
  req: NextApiRequest,
  res: NextApiResponse<SkillData>
) {
  const skills: ISkill[] = await sanityClient.fetch(query);

  res.status(200).json({ skills });
}
