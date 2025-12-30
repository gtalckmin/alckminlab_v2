import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Company / Organization",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "companyUrl",
      title: "Company URL",
      type: "url",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "overview",
      title: "Company Overview",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "position",
      title: "Position / Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "string",
      description: "e.g., August 2021",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "string",
      description: "Leave blank if current position",
    }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "position",
      subtitle: "company",
    },
  },
});
