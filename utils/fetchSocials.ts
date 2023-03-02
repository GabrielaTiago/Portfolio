import { Social } from "../Interfaces/sanityInterfaces";

export const fetchSocials = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
  );

  const data = await response.json();
  const socials: Social[] = data.socials;

  return socials;
};
