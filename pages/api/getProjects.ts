import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { IProject } from "../../models/sanity";

type ProjectData = {
  projects: IProject[];
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
  const projects: IProject[] = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
