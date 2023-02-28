import { createClient } from "next-sanity";
import createImageBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "production";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;
const useCdn = process.env.NODE_ENV === "production";

const config = {
  dataset,
  projectId,
  apiVersion,
  useCdn,
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageBuilder(config).image(source);
