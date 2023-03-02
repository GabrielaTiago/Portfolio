import { ISocial } from "../models";

export async function getSocials() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/socials`
  );

  const data = await response.json();
  const socials: ISocial[] = data.socials;

  return socials;
}