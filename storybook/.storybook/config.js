import { addParameters, configure } from "@storybook/react";
import { themes } from "@storybook/theming";

addParameters({
  options: {
    theme: themes.dark,
  },
});

const comps = require.context("jag-ui-react/src", true, /.stories.js$/);

configure(() => {
  comps.keys().forEach((filename) => comps(filename));
}, module);
