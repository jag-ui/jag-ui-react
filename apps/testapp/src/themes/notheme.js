import {
  borderWidths,
  breakpoints,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  transforms,
  transitions,
  zIndices,
} from "./base";
import components from "./theme1/components";

const notheme = {
  borderWidths,
  breakpoints,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  sizes,
  shadows,
  space,
  radii,
  zIndices,
  transforms,
  transitions,
  colors: {
    background: "#fff",
    text: "#000",
  },
  ...components,
};

export default notheme;
