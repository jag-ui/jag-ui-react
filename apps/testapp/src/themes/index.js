import notheme from "./notheme";
import theme1 from "./theme1";
import theme2 from "./theme2";

export const themeStyles = {
  notheme,
  theme1,
  theme2,
};

export const themes = [
  { id: "notheme", name: "No Theme" },
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
