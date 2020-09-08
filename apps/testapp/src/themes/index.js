import jag1 from "../themes/jag1";
import jagTheme1 from "../themes/jagTheme1";
import jagTheme2 from "../themes/jagTheme2";

export const themeStyles = {
  theme0: {},
  theme1: jag1,
  theme2: jagTheme2,
};

export const themes = [
  { id: "theme0", name: "No Theme" },
  {
    id: "theme1",
    name: "Theme 1",
    colorModes: [
      { id: "lightBlue", name: "Light - Blue" },
      { id: "darkBlue", name: "Dark - Blue" },
    ],
  },
  {
    id: "theme2",
    name: "Theme 2",
    colorModes: [{ id: "lightBlue", name: "Light - Blue" }],
  },
];
