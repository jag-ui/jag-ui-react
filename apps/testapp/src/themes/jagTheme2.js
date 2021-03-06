// Based on https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
// and https://tailwindcss.com/components

export const borderWidths = {
  px: "1px",
  "0": "0",
  "2": "2px",
  "4": "4px",
  "8": "8px",
};

export const breakpoints = ["640px", "768px", "1024px", "1280px"];

export const baseColors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  gray: [null, "#f7fafc", "#edf2f7", "#e2e8f0", "#cbd5e0", "#a0aec0", "#718096", "#4a5568", "#2d3748", "#1a202c"],
  gray1: [
    "#f6f9fc",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#8898aa", // Line footer color
    "#525f7f", // Line p color
    "#32325d", // Line heading color
    "#212529",
  ],
  red: [null, "#fff5f5", "#fed7d7", "#feb2b2", "#fc8181", "#f56565", "#e53e3e", "#c53030", "#9b2c2c", "#742a2a"],
  orange: [null, "#fffaf0", "#feebc8", "#fbd38d", "#f6ad55", "#ed8936", "#dd6b20", "#c05621", "#9c4221", "#7b341e"],
  yellow: [null, "#fffff0", "#fefcbf", "#faf089", "#f6e05e", "#ecc94b", "#d69e2e", "#b7791f", "#975a16", "#744210"],
  green: [null, "#f0fff4", "#c6f6d5", "#9ae6b4", "#68d391", "#48bb78", "#38a169", "#2f855a", "#276749", "#22543d"],
  teal: [null, "#e6fffa", "#b2f5ea", "#81e6d9", "#4fd1c5", "#38b2ac", "#319795", "#2c7a7b", "#285e61", "#234e52"],
  blue: [null, "#ebf8ff", "#bee3f8", "#90cdf4", "#63b3ed", "#4299e1", "#3182ce", "#2b6cb0", "#2c5282", "#2a4365"],
  indigo: [null, "#ebf4ff", "#c3dafe", "#a3bffa", "#7f9cf5", "#667eea", "#5a67d8", "#4c51bf", "#434190", "#3c366b"],
  purple: [null, "#faf5ff", "#e9d8fd", "#d6bcfa", "#b794f4", "#9f7aea", "#805ad5", "#6b46c1", "#553c9a", "#44337a"],
  pink: [null, "#fff5f7", "#fed7e2", "#fbb6ce", "#f687b3", "#ed64a6", "#d53f8c", "#b83280", "#97266d", "#702459"],
};

const btnCommonStyles = {
  cursor: `pointer`,
  fontSize: `100%`,
  lineHeight: `inherit`,
  "&:disabled": {
    opacity: ".65",
    boxShadow: "none",
    transform: "none",
    cursor: "not-allowed",
  },
};

const btnColors = {
  default: {
    backgroundColor: "transparent",
    color: "text",
    boxShadow: "none",
    "&:hover": {
      boxShadow: 3,
      transform: "translateY(-1px)",
    },
    "&:hover&:disabled": {
      boxShadow: "none",
      transform: "none",
    },
  },
  primary: {
    backgroundColor: `primary`,
    color: `white`,
    "&:hover": { backgroundColor: `primaryHover` },
    "&:hover&:disabled": { backgroundColor: "primary" },
  },
  secondary: {
    backgroundColor: `secondary`,
    color: `text`,
    "&:hover": { backgroundColor: `secondaryHover` },
    "&:hover&:disabled": { backgroundColor: "secondary" },
  },
  muted: {
    backgroundColor: `muted`,
    color: `white`,
    "&:hover": { backgroundColor: `mutedHover` },
    "&:hover&:disabled": { backgroundColor: "muted" },
  },
  success: {
    backgroundColor: `success`,
    color: `white`,
    "&:hover": { backgroundColor: `successHover` },
    "&:hover&:disabled": { backgroundColor: "success" },
  },
  danger: {
    backgroundColor: `danger`,
    color: `white`,
    "&:hover": { backgroundColor: `dangerHover` },
    "&:hover&:disabled": { backgroundColor: "danger" },
  },
  info: {
    backgroundColor: `info`,
    color: `white`,
    "&:hover": { backgroundColor: `infoHover` },
    "&:hover&:disabled": { backgroundColor: "info" },
  },
  warning: {
    backgroundColor: `warning`,
    color: `white`,
    "&:hover": { backgroundColor: `warningHover` },
    "&:hover&:disabled": { backgroundColor: "warning" },
  },
};

const btnOutlineColors = {
  primary: {
    borderColor: `primary`,
    color: `primary`,
    "&:hover": {
      backgroundColor: `primaryHover`,
      color: `white`,
    },
    "&:hover&:disabled": { backgroundColor: "transparent", borderColor: `primary`, color: `primary` },
  },
  secondary: {
    borderColor: `text`,
    color: `text`,
    "&:hover": {
      backgroundColor: `secondaryHover`,
      color: `text`,
    },
    "&:hover&:disabled": { backgroundColor: "transparent", borderColor: `secondary`, color: `text` },
  },
  muted: {
    borderColor: `mutedHover`,
    color: `mutedHover`,
    "&:hover": {
      backgroundColor: `mutedHover`,
      color: `white`,
    },
    "&:hover&:disabled": { backgroundColor: "transparent", borderColor: `mutedHover`, color: `mutedHover` },
  },
  success: {
    borderColor: `success`,
    color: `success`,
    "&:hover": {
      backgroundColor: `successHover`,
      color: `white`,
    },
    "&:hover&:disabled": { backgroundColor: "transparent", borderColor: `success`, color: `success` },
  },
  danger: {
    borderColor: `danger`,
    color: `danger`,
    "&:hover": {
      backgroundColor: `dangerHover`,
      color: `white`,
    },
    "&:hover&:disabled": { backgroundColor: "transparent", borderColor: `danger`, color: `danger` },
  },
  info: {
    borderColor: `info`,
    color: `info`,
    "&:hover": {
      backgroundColor: `infoHover`,
      color: `white`,
    },
    "&:hover&:disabled": { backgroundColor: "transparent", borderColor: `info`, color: `info` },
  },
  warning: {
    borderColor: `warning`,
    color: `warning`,
    "&:hover": {
      backgroundColor: `warningHover`,
      color: `white`,
    },
    "&:hover&:disabled": {
      backgroundColor: "transparent",
      borderColor: `warning`,
      color: `warning`,
    },
  },
};

const btnIconColors = {
  primary: {
    color: `primary`,
    "&:hover": { color: `primaryHover` },
    "&:hover&:disabled": { color: `primary` },
  },
  secondary: {
    color: `secondary`,
    "&:hover": { color: `secondaryHover` },
    "&:hover&:disabled": { color: `secondary` },
  },
  muted: {
    color: `muted`,
    "&:hover": { color: `mutedHover` },
    "&:hover&:disabled": { color: `muted` },
  },
  success: {
    color: `success`,
    "&:hover": { color: `successHover` },
    "&:hover&:disabled": { color: `success` },
  },
  danger: {
    color: `danger`,
    "&:hover": { color: `dangerHover` },
    "&:hover&:disabled": { color: `danger` },
  },
  info: {
    color: `info`,
    "&:hover": { color: `infoHover` },
    "&:hover&:disabled": { color: `info` },
  },
  warning: {
    color: `warning`,
    "&:hover": { color: `warningHover` },
    "&:hover&:disabled": { color: `warning` },
  },
};

const btnSizes = {
  none: {},
  sm: { px: 2, py: 1 },
  md: { px: 3, py: 2 },
  lg: { px: 4, py: 3 },
  xl: { px: 5, py: 3 },
};

export const buttons = {
  solid: {
    styles: {
      ...btnCommonStyles,
      boxShadow: 3,
      border: `none`,
      fontWeight: `bold`,
      borderRadius: `default`,
    },
    colors: { ...btnColors },
    sizes: { ...btnSizes },
  },
  rounded: {
    styles: {
      ...btnCommonStyles,
      boxShadow: "btn",
      border: `none`,
      fontWeight: `bold`,
      borderRadius: `full`,
    },
    colors: { ...btnColors },
    sizes: { ...btnSizes },
  },
  outline: {
    styles: {
      ...btnCommonStyles,
      backgroundColor: `transparent`,
      fontWeight: `semibold`,
      borderRadius: `default`,
      borderWidth: `1px`,
      borderStyle: `solid`,
      "&:hover": {
        borderColor: `transparent`,
      },
    },
    colors: { ...btnOutlineColors },
    sizes: { ...btnSizes },
  },
  icon: {
    styles: {
      ...btnCommonStyles,
      backgroundColor: `transparent`,
      border: `none`,
      borderRadius: `default`,
    },
    colors: { ...btnIconColors },
    // sizes: { ...btnSizes },
  },
};

const linkCommonStyles = {
  cursor: `pointer`,
  lineHeight: `inherit`,
  "&:disabled": {
    opacity: ".65",
    boxShadow: "none",
    transform: "none",
    cursor: "not-allowed",
  },
};

const links = {
  solid: {
    ...linkCommonStyles,
    // color: "primary",
    textDecoration: "none",
    ":hover": {
      // fontWeight: "bold",
      textDecoration: "underline",
    },
  },
  icon: {
    ...linkCommonStyles,
  },
};

const alertColors = {
  default: {
    backgroundColor: "transparent",
    color: "text",
  },
  primary: {
    backgroundColor: `primary`,
    color: `white`,
  },
  secondary: {
    backgroundColor: `secondary`,
    color: `text`,
  },
  muted: {
    backgroundColor: `muted`,
    color: `white`,
  },
  success: {
    backgroundColor: `success`,
    color: `white`,
  },
  danger: {
    backgroundColor: `danger`,
    color: `white`,
  },
  info: {
    backgroundColor: `info`,
    color: `white`,
  },
  warning: {
    backgroundColor: `warning`,
    color: `white`,
  },
};

const alertOutlineColors = {
  primary: {
    borderColor: `primary`,
    color: `primary`,
  },
  secondary: {
    borderColor: `text`,
    color: `text`,
  },
  muted: {
    borderColor: `gray.1`,
    color: `gray.7`,
  },
  success: {
    borderColor: `success`,
    color: `success`,
  },
  danger: {
    borderColor: `danger`,
    color: `danger`,
  },
  info: {
    borderColor: `info`,
    color: `info`,
  },
  warning: {
    borderColor: `warning`,
    color: `warning`,
  },
};

const alerts = {
  base: {},
  solid: {
    styles: {
      borderRadius: `default`,
    },
    colors: { ...alertColors },
    // sizes: { ...btnSizes },
  },
  outline: {
    styles: {
      borderRadius: `default`,
      borderWidth: `1px`,
      borderStyle: `solid`,
    },
    colors: { ...alertOutlineColors },
    // sizes: { ...btnSizes },
  },
};

const forms = {
  input: {
    display: "block",
    width: "100%",
    height: "calc(1.5em + 1.25rem + 5px)",
    px: 3,
    py: 2,
    fontSize: 2,
    // fontSize: "0.875rem",
    fontWeight: "body",
    lineHeight: "1.5",
    color: "inputColor",
    backgroundColor: "inputBg",
    backgroundClip: "padding-box",
    borderRadius: "0.25rem",
    boxShadow: "0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02)",
    border: 0,
    transition: "box-shadow .15s ease",
    ":focus": {
      color: "inputFocusColor",
      backgroundColor: "inputFocusBg",
      boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
      outline: "none !important",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "inputFocusBorder",
    },
  },
  textarea: {
    variant: "forms.input",
  },
  select: {
    variant: "forms.input",
  },
};

export const colors = {
  ...baseColors,

  // TEXT:
  text: baseColors.gray[7],
  textMuted: baseColors.gray[6],

  // BG:
  background: baseColors.white,
  // background: baseColors.gray[2],
  bg1: baseColors.white,
  bg2: baseColors.gray[1],
  bg3: baseColors.gray[3],
  bg4: baseColors.gray[6],

  // COMP:
  divider: "rgba(255, 255, 255, 0.12)",

  inputBg: baseColors.white,
  inputColor: baseColors.gray[7],
  inputFocusBg: baseColors.white,
  inputFocusColor: baseColors.blue[7],
  inputFocusBorder: baseColors.blue[7],

  // ALL-COLORS:
  primary: baseColors.blue[7],
  primaryHover: baseColors.blue[8],
  secondary: baseColors.gray[1],
  secondaryHover: baseColors.gray[3],
  muted: baseColors.gray[6],
  mutedHover: baseColors.gray[7],
  success: baseColors.green[7],
  successHover: baseColors.green[8],
  danger: baseColors.red[7],
  dangerHover: baseColors.red[8],
  info: baseColors.blue[5],
  infoHover: baseColors.blue[8],
  warning: baseColors.yellow[7],
  warningHover: baseColors.yellow[8],

  modes: {
    dark: {
      // TEXT:
      text: baseColors.gray[6],

      // BG:
      background: "rgb(23, 43, 58)",
      bg1: "rgba(15, 32, 45, 0.50)",
      bg2: "rgb(15, 32, 45)",
      bg3: "rgba(9, 20, 28, 0.50)",
      bg4: "rgb(9, 20, 28)",

      // COMP:
      divider: "rgba(255, 255, 255, 0.06)",

      // INPUT:
      inputBg: "rgb(23, 43, 58)",
      inputColor: "baseColors.gray[6]",
      inputFocusBg: "rgb(23, 43, 58)",
      inputFocusColor: baseColors.white,
      inputFocusBorder: baseColors.white,

      // BTN:
      secondary: "rgb(15, 32, 45)",
      secondaryHover: "rgb(9, 20, 28)",
    },
  },
};

export const baseFonts = {
  sans:
    'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  serif: 'Georgia,Cambria,"Times New Roman",Times,serif',
  mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
};

export const fonts = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: "inherit",
  monospace: baseFonts.mono,
};

export const fontSizes = ["0.875rem", "1rem", "1.25rem", "1.5rem", "1.875rem", "2.25rem", "3rem", "4rem", "4.5rem"];

export const baseFontWeights = {
  hairline: "100",
  thin: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

export const fontWeights = {
  ...baseFontWeights,
  body: baseFontWeights.normal,
  heading: baseFontWeights.bold,
};

const commonInputStyles = {
  py: 2,
  px: 3,
  fontSize: `100%`,
  borderRadius: `default`,
  appearance: `none`,
  lineHeight: `tight`,
};

export const inputs = {
  shadow: {
    ...commonInputStyles,
    border: `none`,
    color: `gray.7`,
    boxShadow: `default`,
    "&:focus": {
      outline: `none`,
      boxShadow: `outline`,
    },
  },
  inline: {
    ...commonInputStyles,
    backgroundColor: `gray.2`,
    borderWidth: `2px`,
    borderStyle: `solid`,
    borderColor: `gray.2`,
    color: `gray.7`,
    "&:focus": {
      outline: `none`,
      borderColor: `primary`,
      backgroundColor: `white`,
    },
  },
  underline: {
    ...commonInputStyles,
    backgroundColor: `transparent`,
    border: `none`,
    borderBottomWidth: `2px`,
    borderBottomStyle: `solid`,
    borderBottomColor: `primary`,
    borderRadius: `0px`,
    color: `gray.7`,
    "&:focus": {
      outline: `none`,
      borderColor: `primary`,
      backgroundColor: `white`,
    },
  },
};

export const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

export const baseLineHeights = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
};

export const lineHeights = {
  ...baseLineHeights,
  body: baseLineHeights.relaxed,
  heading: baseLineHeights.tight,
};

export const radii = {
  none: "0",
  sm: "0.125rem",
  default: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  full: "9999px",
};

const tailwindSpacing = {
  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
};

const tailwindMaxWidth = {
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
};

const tailwindWidth = {
  "1": "100%",
  "1/2": "50%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
};

export const sizes = {
  ...tailwindSpacing,
  ...tailwindMaxWidth,
  ...tailwindWidth,
  full: "100%",
  screenHeight: "100vh",
  screenWidth: "100vw",
};

export const shadows = {
  // xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  // sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  //
  // md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  // lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  // xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  // "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",

  0: "none",
  1: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  2: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  3: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  4: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  5: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  6: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
  none: "none",
  btn: "0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08)",
};

export const space = [0, "0.25rem", "0.5rem", "1rem", "2rem", "4rem", "8rem", "16rem", "32rem"];

export const zIndices = {
  auto: "auto",
  "0": "0",
  "10": "10",
  "20": "20",
  "30": "30",
  "40": "40",
  "50": "50",
};

const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
  m: 0,
  mb: 1,
};

export const styles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
    fontSize: 1,
    maxWidth: "100%",
    overflowX: "hidden",
    overflowY: "auto",
  },
  a: {
    color: "primary",
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
  h1: {
    ...heading,
    fontSize: 6,
    mt: 2,
  },
  h2: {
    ...heading,
    fontSize: 5,
    mt: 2,
  },
  h3: {
    ...heading,
    fontSize: 4,
    mt: 3,
  },
  h4: {
    ...heading,
    fontSize: 3,
  },
  h5: {
    ...heading,
    fontSize: 2,
  },
  h6: {
    ...heading,
    fontSize: 1,
    mb: 2,
  },
  code: {},
  pre: {},
  hr: {
    bg: "divider",
    border: 0,
    height: "1px",
  },
};

export const transforms = {
  transformOrigin: {
    center: "center",
    top: "top",
    "top-right": "top right",
    right: "right",
    "bottom-right": "bottom right",
    bottom: "bottom",
    "bottom-left": "bottom left",
    left: "left",
    "top-left": "top left",
  },
  translate: {
    ...tailwindSpacing,
    "-full": "-100%",
    "-1/2": "-50%",
    "1/2": "50%",
    full: "100%",
  },
  scale: {
    "0": "0",
    "50": ".5",
    "75": ".75",
    "90": ".9",
    "95": ".95",
    "100": "1",
    "105": "1.05",
    "110": "1.1",
    "125": "1.25",
    "150": "1.5",
  },
  rotate: {
    "-180": "-180deg",
    "-90": "-90deg",
    "-45": "-45deg",
    "0": "0",
    "45": "45deg",
    "90": "90deg",
    "180": "180deg",
  },
  skew: {
    "-12": "-12deg",
    "-6": "-6deg",
    "-3": "-3deg",
    "0": "0",
    "3": "3deg",
    "6": "6deg",
    "12": "12deg",
  },
};

export const transitions = {
  property: {
    none: "none",
    all: "all",
    default: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform",
  },
  timingFunction: {
    linear: "linear",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  duration: {
    "75": "75ms",
    "100": "100ms",
    "150": "150ms",
    "200": "200ms",
    "300": "300ms",
    "500": "500ms",
    "700": "700ms",
    "1000": "1000ms",
  },
};

const text = {
  heading: {
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    color: "text",
  },
  display: {
    fontFamily: "heading",
    fontWeight: "heading",
    lineHeight: "heading",
    fontSize: [6, 7],
    color: "text",
  },
  caps: {
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "text",
  },
};

export const tailwind = {
  borderWidths,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  sizes,
  shadows,
  space,
  radii,
  zIndices,
  styles,
  buttons,
  alerts,
  forms,
  text,
  links,
  inputs,
  transforms,
  transitions,
};

export default tailwind;
