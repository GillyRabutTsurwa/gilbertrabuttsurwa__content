import {defineConfig, buildLegacyTheme} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {RobotIcon, RocketIcon} from '@sanity/icons'
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from './schemas'

//lets try this. works
import Logo from './components/Logo'

// try this
const props = {
  '--my-blanc': '#fff',
  '--my-noir': '#1a1a1a',
  '--my-white': '#4285f4',
  '--my-black': '#db4437',
  '--my-blue': '#4285f4',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
  '--my-primary': '#b3531a',
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-blanc'],
  '--component-text-color': props['--my-primary'],

  /* Brand */
  // '--brand-primary': props['--my-blue'],
  '--brand-primary': 'pink',

  // Default button
  '--default-button-color': '#666',
  // '--default-button-primary-color': props['--my-blue'],
  '--default-button-primary-color': props['--my-primary'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-primary'],
  '--main-navigation-text': 'pink',
  // '--main-navigation-color--inverted': props['--my-red'],
  '--main-navigation-color--inverted': props['--my-blanc'],

  '--focus-color': props['--my-primary'],
  '--focus-bg': props['--my-yellow'],
})

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
    studio: {
      components: {
        logo: Logo,
      },
    },
    theme: myTheme,
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
  // {
  //   studio: {
  //     logo: Logo,
  //   },
  // },
])
