import { StringRule, defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export default defineType({
  name: "header",
  title: "Header",
  type: "object",

  fields: [
    defineField({
      name: "name",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "middleName",
      title: "Middle Name",
      type: "string",
    }),
    defineField({
      name: "surname",
      title: "Surname",
      type: "string",
    }),

    defineField({
      name: "portraits",
      title: "Portrait Images",
      type: "array",
      of: [{ type: "image" }],
      //   options: {
      //     hotspot: true,
      //   },
    }),
  ],
});
