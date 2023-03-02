import { Education } from "../models/sanity";

export const fetchEducation = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducation`
  );

  const data = await response.json();
  const education: Education[] = data.educations;

  return education;
};
