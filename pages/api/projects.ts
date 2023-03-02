import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { IProject, ProjectsData } from "../../models";

const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`;

export default async function handlerProjects(
  req: NextApiRequest,
  res: NextApiResponse<ProjectsData>
) {
  const projects: IProject[] = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
