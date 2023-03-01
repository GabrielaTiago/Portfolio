import { Skill } from "@/Interfaces/sanityInterfaces";

export const fetchSkills = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
    );

    const data = await response.json();
    const skills: Skill[] = data.skills;

    return skills;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch skills data");
  }
};
