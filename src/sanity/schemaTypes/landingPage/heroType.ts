import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
