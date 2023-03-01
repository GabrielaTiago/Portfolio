import { Education } from "@/Interfaces/sanityInterfaces";

export const fetchEducation = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducation`
    );

    const data = await response.json();
    const education: Education[] = data.educations;

    return education;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch education data");
  }
};
