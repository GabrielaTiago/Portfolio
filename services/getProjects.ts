import { IProject } from "../models";

export async function getProjects() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`
  );

  const data = await response.json();
  const projects: IProject[] = data.projects;

  return projects;
}