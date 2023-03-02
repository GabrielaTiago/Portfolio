import { IProject } from "../models/sanity";

export const fetchProjects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );

  const data = await response.json();
  const projects: IProject[] = data.projects;

  return projects;
};
