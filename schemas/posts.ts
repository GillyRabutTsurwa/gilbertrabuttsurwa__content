import { StringRule, TextRule, defineField, defineType } from "sanity";
import { EditIcon } from "@sanity/icons";

export default defineType({
  name: "post",
  title: "Posts",
  type: "document",
  icon: EditIcon,

  groups: [
    {
      title: "Main",
      name: "main",
      default: true,
    },
    {
      title: "Decore",
      name: "decore",
    },
    {
      title: "Body",
      name: "body",
    },
    {
      title: "Colours",
      name: "colours",
    },
  ],

  fields: [
    defineField({
      name: "postGenre",
      title: "Post Genre",
      type: "string",
      group: "main",
      validation: (rule: StringRule) => rule.required(),
      options: {
        list: [
          {
            title: "Personal",
            value: "personal",
          },
          {
            title: "Tech / Professional",
            value: "tech",
          },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "main",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "main",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      group: "main",
      to: { type: "author" },
      // NEWPASS: works perfectly. quand je fais un nouveau document, il aura une valeur de defaut d'auteur (qui sera moi, bien-sûr)
      initialValue: {
        _ref: "9e5346d6-6fea-4d06-a2db-07a1a74468fb",
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Date Published",
      type: "datetime",
      group: "main",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      group: "main",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      group: "decore",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      group: "decore",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "colourPrimary",
      title: "Primary Colour",
      type: "color",
      group: "decore",
      options: {
        colorList: [{ hex: "#FCB900" }, { r: 123, g: 220, b: 181 }, { r: 0, g: 208, b: 132, a: 0.5 }, { h: 203, s: 95, l: 77, a: 1 }, { h: 202, s: 95, l: 46, a: 0.5 }, { h: 345, s: 43, v: 97 }, { h: 344, s: 91, v: 92, a: 0.5 }],
      },
    }),
    defineField({
      name: "colourSecondary",
      title: "Secondary Colour",
      type: "color",
      group: "decore",
      options: {
        colorList: [{ hex: "#FCB900" }, { r: 123, g: 220, b: 181 }, { r: 0, g: 208, b: 132, a: 0.5 }, { h: 203, s: 95, l: 77, a: 1 }, { h: 202, s: 95, l: 46, a: 0.5 }, { h: 345, s: 43, v: 97 }, { h: 344, s: 91, v: 92, a: 0.5 }],
      },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      group: "body",
      rows: 4,
      validation: (rule: TextRule) => rule.max(890).warning("Plus court, c'est mieux"),
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      group: "body",
    }),
    defineField({
      name: "needsAuthentication",
      title: "Needs Authentication To Read?",
      type: "boolean",
      group: "main",
      hidden: (settings) => {
        return settings.parent?.postGenre === "personal" ? false : true;
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      // console.log(selection);
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
