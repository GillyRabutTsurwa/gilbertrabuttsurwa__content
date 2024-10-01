import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./config.define";

export default defineCliConfig({
  api: {
    projectId: "g014cs9v",
    dataset: "production",
  },
  studioHost: "gilbertrabuttsurwa",
});
