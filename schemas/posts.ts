import {StringRule, defineField, defineType} from 'sanity'
import {EditIcon} from '@sanity/icons'

export default defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon: EditIcon,

  groups: [
    {
      title: 'Main',
      name: 'main',
      default: true,
    },
    {
      title: 'Images',
      name: 'images',
    },
    {
      title: 'Body',
      name: 'body',
    },
  ],

  fields: [
    defineField({
      name: 'postGenre',
      title: 'Post Genre',
      type: 'string',
      group: 'main',
      validation: (Rule: StringRule) => Rule.required(),
      options: {
        list: [
          {
            title: 'Personal',
            value: 'personal',
          },
          {
            title: 'Tech / Professional',
            value: 'tech',
          },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'main',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'main',
      to: {type: 'author'},
      // NEWPASS: works perfectly. quand je fais un nouveau document, il aura une valeur de defaut d'auteur (qui sera moi, bien-sûr)
      initialValue: {
        _ref: '9e5346d6-6fea-4d06-a2db-07a1a74468fb',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date Published',
      type: 'datetime',
      group: 'main',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'main',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      group: 'images',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      group: 'images',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'body',
    }),
    defineField({
      name: 'needsAuthentication',
      title: 'Needs Authentication To Read?',
      type: 'boolean',
      group: 'main',
      hidden: (settings) => {
        console.log(settings.currentUser)
        console.log(settings.value)
        console.log(settings.parent)
        return settings.parent?.postGenre === 'personal' ? false : true
      },
    }),
    defineField({
      name: 'colourPrimary',
      title: 'Primary Colour',
      type: 'color',
    }),
    defineField({
      name: 'colourSecondary',
      title: 'Secondary Colour',
      type: 'color',
      // hidden: (settings) => {
      //   console.log(settings.currentUser)
      //   console.log(settings.value)
      //   console.log(settings.parent)
      // },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      console.log(selection)
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
