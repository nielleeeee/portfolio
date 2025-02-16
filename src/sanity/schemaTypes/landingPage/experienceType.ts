import { defineField, defineType } from "sanity";

export const experienceType = defineType({
  name: "experienceSection",
  title: "Experience Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "experienceList",
      title: "Experience List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description: "Job title or course",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "organization",
              title: "Organization",
              description:
                "The name of the organization or company or school name.",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "date",
              title: "Date",
              type: "string",
              description: "The date of the job or course.",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "array",
              description:
                "A description of the job or course. List of achievements.",
              of: [{ type: "block" }],
              validation: (Rule) => Rule.required(),
            }),

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
            }),
          ],
        },
      ],
    }),
  ],
});
