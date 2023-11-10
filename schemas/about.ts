import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: HomeIcon,

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
