import {defineConfig, buildLegacyTheme} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {enableOverlays} from '@sanity/overlays'
import {EditIcon, DesktopIcon, RobotIcon, RocketIcon, UserIcon} from '@sanity/icons'
import {codeInput} from '@sanity/code-input'
import {colorInput} from '@sanity/color-input'
import {schemaTypes} from './schemas'
import './custom.css'

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
  '--my-primary': '#1a2934',
  '--my-secondary': '#510400',
}

export const myFirstTheme = buildLegacyTheme({
  /* Base theme colors */
  // '--black': props['--my-black'],
  // '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-blanc'],
  '--component-text-color': props['--my-primary'],

  /* Brand */
  '--brand-primary': props['--my-primary'], //NOTE: changes background colours of buttons that are active

  // Default button
  '--default-button-color': 'pink',
  '--default-button-primary-color': props['--my-primary'], //NOTE: for the buttons for selecting content types (under content)
  '--default-button-success-color': props['--my-green'], //NOTE: for (notably) the publish button
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-primary'],
  '--main-navigation-color--inverted': props['--my-blanc'],
  '--focus-color': props['--my-primary'],
})

export const mySecondTheme = buildLegacyTheme({
  /* Base theme colors */
  // '--black': props['--my-black'],
  // '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-blanc'],
  '--component-text-color': props['--my-secondary'],

  /* Brand */
  '--brand-primary': props['--my-secondary'], //NOTE: changes background colours of buttons that are active

  // Default button
  '--default-button-color': 'pink',
  '--default-button-primary-color': props['--my-secondary'], //NOTE: for the buttons for selecting content types (under content)
  '--default-button-success-color': props['--my-green'], //NOTE: for (notably) the publish button
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-secondary'],
  '--main-navigation-color--inverted': props['--my-blanc'],
  '--focus-color': props['--my-secondary'],
})

console.log(codeInput())

const SANITY_STUDIO_PREVIEW_URL =
  process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000/blog'

export default defineConfig([
  {
    name: 'production',
    title: 'Production',
    projectId: 'g014cs9v',
    dataset: 'production',
    basePath: '/production',

    plugins: [
      structureTool({
        structure: (S) => {
          return S.list()
            .title("Gil's Content")
            .items([
              S.listItem()
                .title('Posts')
                .icon(EditIcon)
                .child(
                  S.list()
                    .title('Posts')
                    .items([
                      S.listItem()
                        .title('Personal')
                        .icon(UserIcon)
                        .child((categoryId) =>
                          S.documentList()
                            .title('Personal Posts')
                            .filter('_type == "post" && postGenre == "personal"')
                            .params({categoryId}),
                        ),
                      S.listItem()
                        .title('Tech')
                        .icon(DesktopIcon)
                        .child((categoryId) =>
                          S.documentList()
                            .title('Tech Posts')
                            .filter('_type == "post" && postGenre == "tech"')
                            .params({categoryId}),
                        ),
                    ]),
                ),
              // The rest of this document is from the original manual grouping in this series of articles
              //NOTE: ca affiche les autres documents
              ...S.documentTypeListItems().filter(
                (listItem) => !['post'].includes(listItem.getId()),
              ),
            ])
        },
      }),
      visionTool(),
      codeInput(),
      colorInput(),
      presentationTool({
        previewUrl: SANITY_STUDIO_PREVIEW_URL,
      }),
      enableOverlays({
        allowStudioOrigin: 'http://localhost:3333/production/',
      }),
    ],
    icon: RocketIcon,

    schema: {
      types: schemaTypes,
    },

    studio: {
      components: {
        logo: Logo,
      },
    },

    theme: myFirstTheme,
  },

  {
    name: 'staging',
    title: 'Staging',
    projectId: 'g014cs9v',
    dataset: 'staging',
    basePath: '/staging',

    plugins: [
      structureTool(),
      visionTool(),
      codeInput(),
      colorInput(),
      presentationTool({
        previewUrl: SANITY_STUDIO_PREVIEW_URL,
      }),
      enableOverlays({
        allowStudioOrigin: 'http://localhost:3333/production/',
      }),
    ],
    icon: RobotIcon,

    schema: {
      types: schemaTypes,
    },

    studio: {
      components: {
        logo: Logo,
      },
    },

    theme: mySecondTheme,
  },
])

// const disable = enableOverlays({
//   allowStudioOrigin: 'http://localhost:3333/production',
// })
