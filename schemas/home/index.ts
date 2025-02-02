import { StringRule, defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,

  groups: [
    {
      title: "Header",
      name: "header",
      default: true,
    },
    {
      title: "About",
      name: "about",
    },
  ],

  fields: [
    defineField({
      name: "header",
      title: "Header",
      type: "header",
      group: "header",
    }),
    defineField({
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "about" }],
      group: "about",
    }),
  ],

  preview: {
    select: {
      title: "header.name",
      // media: "mainImage",
    },
    prepare(selection) {
      // console.log(selection);
      const { title } = selection;
      // console.log(selection);
      return { ...selection, title: title };
    },
  },
});
