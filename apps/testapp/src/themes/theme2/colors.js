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

const primary = {
  main: "#6264a7",
  light: "rgb(226, 226, 246)",
  dark: "#464775",
  darker: "rgb(51 52 74)",
  contrastText: baseColors.white,
};

const secondary = {
  main: "rgb(255, 255, 255)",
  light: "rgb(255, 255, 255)",
  dark: "rgb(237, 235, 233)",
  darker: "rgb(237, 235, 233)",
  contrastText: "rgb(37, 36, 36)",
};

export const colors = {
  // ...baseColors,

  gray: baseColors.gray,

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
  divider: "rgb(160 174 192 / 20%)",
  tooltipBg: "rgb(0 0 0 / 90%)",
  tooltipText: "white",
  sideNav: baseColors.blue[8],
  sideNavHover: "rgb(0 0 0 / 0.25)",
  sideNavText: baseColors.white,

  inputBg: baseColors.white,
  inputColor: baseColors.gray[7],
  inputFocusBg: baseColors.white,
  inputFocusColor: baseColors.blue[7],
  inputFocusBorder: baseColors.blue[7],

  // ALL-COLORS:
  primary,
  secondary,

  gray: {
    main: baseColors.gray[1],
    light: baseColors.gray[2],
    dark: baseColors.gray[3],
    contrastText: baseColors.white,
  },
  // primary: baseColors.blue[7],
  // primaryHover: baseColors.blue[8],

  // secondary: baseColors.gray[1],
  // secondaryHover: baseColors.gray[3],
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
    darkBlue: {
      // TEXT:
      text: baseColors.gray[6],

      // BG:
      background: "rgb(23, 43, 58)",
      bg1: "rgba(15, 32, 45, 0.50)",
      bg2: "rgb(15, 32, 45)",
      bg3: "rgba(9, 20, 28)",
      bg4: "rgb(9, 20, 28, 0.30)",

      // COMP:
      divider: "rgba(255, 255, 255, 0.06)",
      tooltipBg: "rgb(255, 255, 255 / 90%)",
      tooltipText: "white",
      sideNav: "rgba(15, 32, 45, 0.50)",
      sideNavHover: "rgb(0 0 0 / 0.25)",
      sideNavText: baseColors.gray[6],

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
