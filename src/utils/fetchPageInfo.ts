import { PageInfo } from "@/Interfaces/sanityInterfaces";

export const fetchPageInfo = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );

    const data = await response.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch pageInfo data");
  }
};
