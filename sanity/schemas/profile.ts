import { defineField, defineType } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "nickname",
      title: "Nickname / Short Name",
      type: "string",
    }),
    defineField({
      name: "greeting",
      title: "Greeting",
      type: "string",
      description: "e.g., Hi, I am",
    }),
    defineField({
      name: "designation",
      title: "Designation / Title",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company / Organization",
      type: "string",
    }),
    defineField({
      name: "companyUrl",
      title: "Company URL",
      type: "url",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summaryPoints",
      title: "Summary Points",
      type: "array",
      of: [{ type: "string" }],
      description: "Short bullet points about yourself",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "resume",
      title: "Resume / CV",
      type: "file",
      options: { accept: "application/pdf" },
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "array",
      of: [
        defineField({
          name: "socialLink",
          title: "Social Link",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "url", title: "URL", type: "url" }),
            defineField({ name: "icon", title: "Icon (Font Awesome class)", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "researchInterests",
      title: "Research Interests",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "designation",
      media: "photo",
    },
  },
});
