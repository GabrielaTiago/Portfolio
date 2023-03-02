import { IPageInfo } from "../models";

export async function getPageInfo() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/pageInfo`
  );

  const data = await response.json();
  const pageInfo: IPageInfo = data.pageInfo;

  return pageInfo;
}
