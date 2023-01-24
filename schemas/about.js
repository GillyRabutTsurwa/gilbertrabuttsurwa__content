import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutTitle',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutText',
      title: 'Text',
      type: 'blockContent',
    }),
  ],
})
