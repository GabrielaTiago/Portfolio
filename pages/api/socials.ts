import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { ISocial, SocialData } from "../../models";

const query = groq`
    *[_type == "social"]
`;

export default async function handlerSocials(
  req: NextApiRequest,
  res: NextApiResponse<SocialData>
) {
  const socials: ISocial[] = await sanityClient.fetch(query);

  res.status(200).json({ socials });
}
