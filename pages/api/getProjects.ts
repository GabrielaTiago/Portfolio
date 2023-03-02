import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { Project } from "../../Interfaces/sanityInterfaces";

type ProjectData = {
  projects: Project[];
};

const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`;

export default async function handlerProjects(
  req: NextApiRequest,
  res: NextApiResponse<ProjectData>
) {
  const projects: Project[] = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
