import { ISkill } from "../models/sanity";

export const fetchSkills = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
  );

  const data = await response.json();
  const skills: ISkill[] = data.skills;

  return skills;
};
