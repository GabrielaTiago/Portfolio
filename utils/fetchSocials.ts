import { ISocial } from "../models/sanity";

export const fetchSocials = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
  );

  const data = await response.json();
  const socials: ISocial[] = data.socials;

  return socials;
};
