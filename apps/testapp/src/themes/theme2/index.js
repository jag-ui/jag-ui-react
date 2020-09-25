import {
  borderWidths,
  breakpoints,
  fonts as baseFonts,
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
} from "../base";
import { colors } from "./colors";
import { styles } from "./styles";
import components from "../theme1/components";

const base = {
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
};

export const fonts = {
  body: `Roboto,${baseFonts.sans}`,
  heading: "inherit",
  monospace: `"Roboto Mono",${baseFonts.mono}`,
};

const theme2 = {
  ...base,
  googleFonts: "https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,700&display=swap",
  fonts,
  colors,
  styles,
  ...components,
};

export default theme2;
