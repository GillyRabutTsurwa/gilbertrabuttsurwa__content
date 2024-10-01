import { StringRule, defineField, defineType } from "sanity";
import { EditIcon } from "@sanity/icons";

export default defineType({
  name: "about",
  title: "About",
  type: "object",
  icon: EditIcon,

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
});
