import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { PageInfo } from "../../Interfaces/sanityInterfaces";

type PageInfoData = {
  pageInfo: PageInfo;
};

const query = groq`
    *[_type == "pageInfo"][0]
`;

export default async function handlerPageInfos(
  req: NextApiRequest,
  res: NextApiResponse<PageInfoData>
) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);

  res.status(200).json({ pageInfo });
}
