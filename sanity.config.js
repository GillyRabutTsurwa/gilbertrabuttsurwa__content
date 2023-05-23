import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {RobotIcon, RocketIcon} from '@sanity/icons'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    name: 'production',
    title: 'Production',

    projectId: 'g014cs9v',
    dataset: 'production',
    basePath: '/prodcution',

    plugins: [deskTool(), visionTool()],
    icon: RocketIcon,

    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'staging',
    title: 'Staging',

    projectId: 'g014cs9v',
    dataset: 'staging',
    basePath: '/staging',

    plugins: [deskTool(), visionTool()],
    icon: RobotIcon,

    schema: {
      types: schemaTypes,
    },
  },
])
