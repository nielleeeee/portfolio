import { type SchemaTypeDefinition } from "sanity";
import { heroType } from "@/sanity/schemaTypes/landingPage/heroType";
import { aboutType } from "@/sanity/schemaTypes/landingPage/aboutType";
import { techStackType } from "@/sanity/schemaTypes/landingPage/techStackType";
import { projectType } from "@/sanity/schemaTypes/landingPage/projectType";
import { websiteSettingsType } from "@/sanity/schemaTypes/websiteSettingsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, aboutType, techStackType, projectType, websiteSettingsType],
};
