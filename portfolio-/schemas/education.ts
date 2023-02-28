import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'institutionPicture',
      title: 'InstitutionPicture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string',
    }),
    defineField({
      name: 'course',
      title: 'Course',
      type: 'string',
    }),
    defineField({
      name: 'dateStart',
      title: 'DateStart',
      type: 'date',
    }),
    defineField({
      name: 'dateEnd',
      title: 'DateEnd',
      type: 'date',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
    defineField({
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
