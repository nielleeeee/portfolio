import { type SchemaTypeDefinition } from "sanity";
import { heroType } from "@/sanity/schemaTypes/landingPage/heroType";
import { aboutType } from "@/sanity/schemaTypes/landingPage/aboutType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, aboutType],
};
