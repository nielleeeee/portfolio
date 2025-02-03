import { type SchemaTypeDefinition } from "sanity";
import { heroType } from "@/sanity/schemaTypes/landingPage/heroType";
import { aboutType } from "@/sanity/schemaTypes/landingPage/aboutType";
import { techStackType } from "@/sanity/schemaTypes/landingPage/techStackType";
import { projectType } from "@/sanity/schemaTypes/landingPage/projectType";
import { websiteSettingsType } from "@/sanity/schemaTypes/websiteSettingsType";
import { experienceType } from "@/sanity/schemaTypes/landingPage/experienceType";
import { contactType } from "@/sanity/schemaTypes/landingPage/contactType";
import { certificateType } from "@/sanity/schemaTypes/landingPage/certificateType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroType,
    aboutType,
    techStackType,
    projectType,
    websiteSettingsType,
    experienceType,
    contactType,
    certificateType,
  ],
};
