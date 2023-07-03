import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {RobotIcon, RocketIcon} from '@sanity/icons'
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from './schemas'

console.log(codeInput())

export default defineConfig([
  {
    name: 'production',
    title: 'Production',

    projectId: 'g014cs9v',
    dataset: 'production',
    basePath: '/production',

    plugins: [deskTool(), visionTool(), codeInput()],
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

    plugins: [deskTool(), visionTool(), codeInput()],
    icon: RobotIcon,

    schema: {
      types: schemaTypes,
    },
  },
])
