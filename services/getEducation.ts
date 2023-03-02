import { IEducation } from "../models";

export async function getEducation() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/education`
  );

  const data = await response.json();
  const education: IEducation[] = data.education;

  return education;
}