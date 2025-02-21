import { defineField, defineType } from "sanity";

export const websiteSettingsType = defineType({
  name: "websiteSettings",
  title: "Website Settings",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "logoFooter",
      title: "Logo Footer",
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
      name: "contactNumber",
      title: "Contact Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "resume",
      title: "Resume",
      type: "file",
      options: {
        accept: ".pdf",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "facebook",
      title: "Facebook",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "github",
      title: "Github",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "linkedin",
      title: "Linkedin",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "footerDescription",
      title: "Footer Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "metaTags",
      title: "Meta Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
