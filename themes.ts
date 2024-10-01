import {buildLegacyTheme} from "sanity";
// try this
const props = {
  "--my-blanc": "#fff",
  "--my-noir": "#1a1a1a",
  "--my-white": "#4285f4",
  "--my-black": "#db4437",
  "--my-blue": "#4285f4",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
  "--my-primary": "#1a2934",
  "--my-secondary": "#510400",
};

export const production = buildLegacyTheme({
  /* Base theme colors */
  // '--black': props['--my-black'],
  // '--white': props['--my-white'],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-blanc"],
  "--component-text-color": props["--my-primary"],

  /* Brand */
  "--brand-primary": props["--my-primary"], //NOTE: changes background colours of buttons that are active

  // Default button
  "--default-button-color": "pink",
  "--default-button-primary-color": props["--my-primary"], //NOTE: for the buttons for selecting content types (under content)
  "--default-button-success-color": props["--my-green"], //NOTE: for (notably) the publish button
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--my-blue"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-primary"],
  "--main-navigation-color--inverted": props["--my-blanc"],
  "--focus-color": props["--my-primary"],
});

export const staging = buildLegacyTheme({
  /* Base theme colors */
  // '--black': props['--my-black'],
  // '--white': props['--my-white'],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-blanc"],
  "--component-text-color": props["--my-secondary"],

  /* Brand */
  "--brand-primary": props["--my-secondary"], //NOTE: changes background colours of buttons that are active

  // Default button
  "--default-button-color": "pink",
  "--default-button-primary-color": props["--my-secondary"], //NOTE: for the buttons for selecting content types (under content)
  "--default-button-success-color": props["--my-green"], //NOTE: for (notably) the publish button
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--my-blue"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-secondary"],
  "--main-navigation-color--inverted": props["--my-blanc"],
  "--focus-color": props["--my-secondary"],
});

export default {
  production: production,
  staging: staging,
};
