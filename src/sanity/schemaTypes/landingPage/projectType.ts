import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "projectSection",
  title: "Project Section",
  type: "document",
  fields: [
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

    defineField({
      name: "previewLink",
      title: "Preview Link",
      type: "url",
    }),

    defineField({
      name: "githubLink",
      title: "Github Link",
      type: "url",
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Inactive", value: "inactive" },
          { title: "In Progress", value: "inProgress" },
          { title: "On Hold", value: "onHold" },
          { title: "Completed", value: "completed" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Work", value: "work" },
          { title: "Personal", value: "personal" },
          { title: "Other", value: "other" },
        ],
        layout: "radio",
      },
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
      validation: (Rule) => Rule.required(),
    }),
  ],
});
