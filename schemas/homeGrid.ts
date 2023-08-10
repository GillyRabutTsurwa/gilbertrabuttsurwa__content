import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homeGrid',
  title: 'Home Grid Images',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Portrait Images',
      type: 'string',
    }),
    defineField({
      name: 'gridImages',
      title: 'Grid Portrait Images',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    }),
  ],
})
