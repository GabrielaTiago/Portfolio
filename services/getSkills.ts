import { ISkill } from "../models";

export async function getSkills() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`
  );

  const data = await response.json();
  const skills: ISkill[] = data.skills;

  return skills;
}