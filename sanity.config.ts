import { defineConfig } from "sanity";
import { settings } from "./config.define";
import { RobotIcon, RocketIcon } from "@sanity/icons";
import themes from "./themes";

export default defineConfig([settings("production", "g014cs9v", themes.production, RocketIcon), settings("staging", "g014cs9v", themes.staging, RobotIcon)]);
