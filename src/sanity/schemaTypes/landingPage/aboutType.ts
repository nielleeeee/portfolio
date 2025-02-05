import { defineField, defineType } from "sanity";

export const aboutType = defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        },

        {
          name: "slug",
          title: "Slug",
          type: "slug",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
  ],
});
