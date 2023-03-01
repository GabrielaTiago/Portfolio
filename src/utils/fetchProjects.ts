import { Project } from "@/Interfaces/sanityInterfaces";

export const fetchProjects = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
    );

    const data = await response.json();
    const projects: Project[] = data.projects;

    return projects;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch projects data");
  }
};
