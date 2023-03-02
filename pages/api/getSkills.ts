import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { Skill } from "../../Interfaces/sanityInterfaces";

type SkillData = {
  skills: Skill[];
};

const query = groq`
    *[_type == "skill"]
`;

export default async function handlerSkills(
  req: NextApiRequest,
  res: NextApiResponse<SkillData>
) {
  const skills: Skill[] = await sanityClient.fetch(query);

  res.status(200).json({ skills });
}
