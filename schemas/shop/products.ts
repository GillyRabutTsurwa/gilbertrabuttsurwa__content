import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      description: 'For now, add cents as zeroes, ie 500 = $5',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      description: "Keep this 'usd' for the purposes of this tutorial",
      type: 'string',
    }),
  ],

  initialValue: {
    currency: 'usd',
  },

  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {name} = selection
      return {...selection, subtitle: name}
    },
  },
})
