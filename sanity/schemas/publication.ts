import { defineField, defineType } from "sanity";

export default defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.min(1).required(),
    }),
    defineField({
      name: "venue",
      title: "Journal / Conference",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (rule) => rule.required().integer().min(1900),
    }),
    defineField({
      name: "doi",
      title: "DOI Link",
      type: "url",
    }),
    defineField({
      name: "pdf",
      title: "PDF",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),
    defineField({
      name: "abstract",
      title: "Abstract",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "year",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return { title, subtitle: subtitle ? subtitle.toString() : undefined };
    },
  },
});
