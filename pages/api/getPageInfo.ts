import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { IPageInfo } from "../../models/sanity";

type PageInfoData = {
  pageInfo: IPageInfo;
};

const query = groq`
    *[_type == "pageInfo"][0]
`;

export default async function handlerPageInfos(
  req: NextApiRequest,
  res: NextApiResponse<PageInfoData>
) {
  const pageInfo: IPageInfo = await sanityClient.fetch(query);

  res.status(200).json({ pageInfo });
}
