import { defineField, defineType } from "sanity";

export const techStackType = defineType({
  name: "techStackSection",
  title: "Tech Stack Section",
  type: "document",
  fields: [
    defineField({
      name: "techStacks",
      title: "Tech Stacks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },

            {
              name: "logo",
              title: "Logo",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
});
