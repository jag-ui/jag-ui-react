// import { darken, lighten } from "@theme-ui/color";
import { darken } from "@theme-ui/color";

// materialUi: jagTheme // for sample
const palatte1 = {
  common: {
    black: "#000",
    white: "#fff",
  },
  type: "dark",
  primary: {
    main: "#2196f3",
    light: "#64b5f6",
    dark: "#1976d2",
    contrastText: "#fff",
  },
  secondary: {
    light: "#ff4081",
    main: "#f50057",
    dark: "#c51162",
    contrastText: "#fff",
  },
  error: {
    light: "#e57373",
    main: "#f44336",
    dark: "#d32f2f",
    contrastText: "#fff",
  },
  warning: {
    light: "#ffb74d",
    main: "#ff9800",
    dark: "#f57c00",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  info: {
    light: "#64b5f6",
    main: "#2196f3",
    dark: "#1976d2",
    contrastText: "#fff",
  },
  success: {
    light: "#81c784",
    main: "#4caf50",
    dark: "#388e3c",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  grey: {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#eeeeee",
    "300": "#e0e0e0",
    "400": "#bdbdbd",
    "500": "#9e9e9e",
    "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161",
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  text: {
    primary: "#fff",
    secondary: "#757575",
    disabled: "rgba(255, 255, 255, 0.5)",
    hint: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)",
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#212121",
    default: "#303030",
  },
  action: {
    active: "#fff",
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};

// material: blue (color palette)
const mcolors = {
  blue: {
    "50": "#e3f2fd",
    "100": "#bbdefb",
    "200": "#90caf9",
    "300": "#64b5f6",
    "400": "#42a5f5",
    "500": "#2196f3",
    "600": "#1e88e5",
    "700": "#1976d2",
    "800": "#1565c0",
    "900": "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  pink: {
    "50": "#fce4ec",
    "100": "#f8bbd0",
    "200": "#f48fb1",
    "300": "#f06292",
    "400": "#ec407a",
    "500": "#e91e63",
    "600": "#d81b60",
    "700": "#c2185b",
    "800": "#ad1457",
    "900": "#880e4f",
    A100: "#ff80ab",
    A200: "#ff4081",
    A400: "#f50057",
    A700: "#c51162",
  },
  grey: {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#eeeeee",
    "300": "#e0e0e0",
    "400": "#bdbdbd",
    "500": "#9e9e9e",
    "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161",
  },
  blueGrey: {
    "50": "#eceff1",
    "100": "#cfd8dc",
    "200": "#b0bec5",
    "300": "#90a4ae",
    "400": "#78909c",
    "500": "#607d8b",
    "600": "#546e7a",
    "700": "#455a64",
    "800": "#37474f",
    "900": "#263238",
    A100: "#cfd8dc",
    A200: "#b0bec5",
    A400: "#78909c",
    A700: "#455a64",
  },
  green: {
    "50": "#e8f5e9",
    "100": "#c8e6c9",
    "200": "#a5d6a7",
    "300": "#81c784",
    "400": "#66bb6a",
    "500": "#4caf50",
    "600": "#43a047",
    "700": "#388e3c",
    "800": "#2e7d32",
    "900": "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  red: {
    "50": "#ffebee",
    "100": "#ffcdd2",
    "200": "#ef9a9a",
    "300": "#e57373",
    "400": "#ef5350",
    "500": "#f44336",
    "600": "#e53935",
    "700": "#d32f2f",
    "800": "#c62828",
    "900": "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
};

const common = {
  black: "#000",
  white: "#fff",
};

const palette = {
  common,
  background: {
    paper: "#212121",
    default: "#303030",
  },
  text: {
    primary: "#fff",
    secondary: "#757575",
    disabled: "rgba(255, 255, 255, 0.5)",
    hint: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)",
  },
  divider: "rgba(255, 255, 255, 0.12)",
  primary: {
    main: mcolors.blue["800"],
    light: "#64b5f6",
    dark: mcolors.blue["900"],
    contrastText: common.white,
  },
  secondary: {
    main: mcolors.grey["100"],
    light: mcolors.grey["A100"],
    dark: mcolors.grey["300"],
    contrastText: mcolors.grey["900"],
  },
  // secondary: {
  //   main: mcolors.grey["700"],
  //   light: mcolors.grey["A100"],
  //   dark: mcolors.grey["900"],
  //   contrastText: common.white,
  // },
  success: {
    main: mcolors.green["800"],
    light: mcolors.green["100"],
    dark: mcolors.green["900"],
    contrastText: common.white,
  },
  danger: {
    main: mcolors.red["800"],
    light: mcolors.red["100"],
    dark: mcolors.red["900"],
    contrastText: common.white,
  },
  info: {
    light: "#64b5f6",
    main: "#2196f3",
    dark: "#1976d2",
    contrastText: "#fff",
  },
  grey: {
    main: mcolors.grey["800"],
    light: mcolors.grey["100"],
    dark: mcolors.grey["900"],
    contrastText: common.white,
  },
};

const colors = {
  palette,
  white: "#fff",
  // gray: "#8898aa",
  // grayDark: "#32325d",
  gray: [
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

  // blue: "#0A48B3",
  // indigo: "#5603ad",
  // purple: "#8965e0",
  // pink: "#f3a4b5",
  // red: "#f5365c",
  // orange: "#fb6340",
  // yellow: "#ffd600",
  // green: "#2dce89",
  // teal: "#11cdef",
  // cyan: "#2bffc6",

  // light: "#adb5bd",
  light: "#ced4da", // gray.3
  lighter: "#e9ecef", // gray.2
  dark: "gray.2", // gray.2
  // darker: "#000",
  darker: darken("#212529", 0.15), // gray.8

  // base: colors
  text: "#212529",
  background: "#fff",
  default: "#172b4d",
  neutral: "#fff",
  muted: "#f6f6f9",

  // variants: colors
  primary: palette.primary.main,
  secondary: palette.secondary.contrastText,
  success: palette.success.main,
  danger: palette.danger.main,
  info: palette.info.main,

  // old
  // primary: "#0A48B3",
  // primary0: "#525f7f",
  // secondary: "#f7fafc",
  // danger: "#f5365c",
  // success: "#2dce89",
  // gray: "#dddddf",

  highlight: "hsla(205, 100%, 40%, 0.125)",
  btnBoxShadow: "0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08)",
  modes: {
    dark: {
      text: "#fff",
      background: "#000",
      primary: "salmon",
      secondary: "gray",
      btnDefaultHoverBg: "gray",
    },
  },
};

const theme1 = {
  googleFonts: "https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,700&display=swap",
  colors,
  fonts: {
    body: "Roboto, sans-serif",
    heading: "inherit",
    monospace: '"Roboto Mono", monospace',
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 34, 48, 60, 96],
  fontWeights: {
    body: 400,
    heading: 400,
    btn: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    icon: 24,
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
    btn: ".25rem",
  },
  shadows: {
    1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    3: "0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08)", // btnBoxShadow
    4: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    5: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    6: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  },
  // jagUI variants
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [6, 7],
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
  variants: {
    avatar: {
      width: "avatar",
      height: "avatar",
      borderRadius: "circle",
    },
    card: {
      p: 2,
      bg: "background",
      boxShadow: 1,
    },
    link: {
      color: "primary",
    },
    nav: {
      fontSize: 1,
      fontWeight: "bold",
      display: "inline-block",
      p: 2,
      color: "inherit",
      textDecoration: "none",
      ":hover,:focus,.active": {
        color: "primary",
      },
    },
  },

  alerts: {
    base: {},
    primary: {
      variant: "alerts.base",
      bg: "palette.primary.main",
      color: "palette.primary.contrastText",
    },
    secondary: {
      variant: "alerts.base",
      bg: "palette.secondary.main",
      color: "secondary",
    },
    success: {
      variant: "alerts.base",
      bg: "palette.success.main",
      color: "palette.success.contrastText",
    },
    danger: {
      variant: "alerts.base",
      bg: "palette.danger.main",
      color: "palette.danger.contrastText",
    },
    info: {
      variant: "alerts.base",
      bg: "palette.info.main",
      color: "palette.info.contrastText",
    },

    baseOutline: {
      variant: "alerts.base",
      bg: "transparent",
      borderWidth: "1px",
      borderStyle: "solid",
    },
    primaryOutline: {
      variant: "alerts.baseOutline",
      color: "palette.primary.main",
      borderColor: "palette.primary.main",
    },
    secondaryOutline: {
      variant: "alerts.baseOutline",
      color: "secondary",
      borderColor: "secondary",
    },
    successOutline: {
      variant: "alerts.baseOutline",
      color: "palette.success.main",
      borderColor: "palette.success.main",
    },
    errorOutline: {
      variant: "alerts.baseOutline",
      color: "palette.danger.main",
      borderColor: "palette.danger.main",
    },
    infoOutline: {
      variant: "alerts.baseOutline",
      color: "palette.info.main",
      borderColor: "palette.primary.main",
    },
  },

  images: {
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 99999,
    },
  },

  buttons: {
    sizes: {
      sm: { px: 2, py: 1 },
      md: { px: 3, py: 2 },
      lg: { px: 4, py: 3 },
      xl: { px: 5, py: 3 },
    },
    base: {
      // px: 3,
      // py: 2,
      // bg: "primary",
      color: "primary0",
      border: "1px solid transparent",
      borderRadius: "btn",
      lineHeight: "1.5",

      // fontSize: "inherit",
      fontSize: 2,
      fontWeight: "btn",
      letterSpacing: ".025em",

      transition:
        "color 0.15s ease-in-out,background-color 0.05s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out",
      // transition: "all .15s ease",

      ":hover": {
        boxShadow: 3,
        // transform: "translateY(-1px)",
      },
      ":disabled": {
        opacity: ".65",
        boxShadow: "none",
        transform: "none",
        cursor: "not-allowed",
      },
    },
    primary: {
      variant: "buttons.base",
      bg: "palette.primary.main",
      color: "palette.primary.contrastText",
      borderColor: "palette.primary.main",
      "box-shadow": "0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08)",
      "&:hover": {
        bg: "palette.primary.dark",
        borderColor: "palette.primary.dark",
      },
      "&:disabled": {
        bg: "palette.primary.main",
      },
    },
    secondary: {
      variant: "buttons.base",
      bg: "palette.secondary.main",
      color: "secondary",
      borderColor: "palette.secondary.main",
      "box-shadow": "0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08)",
      "&:hover": {
        bg: "palette.secondary.dark",
        borderColor: "palette.secondary.dark",
      },
      "&:disabled": {
        bg: "palette.secondary.main",
      },
    },
    danger: {
      variant: "buttons.base",
      bg: "palette.danger.main",
      color: "palette.danger.contrastText",
      borderColor: "palette.danger.main",
      "box-shadow": "0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08)",
      "&:hover": {
        bg: "palette.danger.dark",
        borderColor: "palette.danger.dark",
      },
      "&:disabled": {
        bg: "palette.danger.main",
      },
    },
    success: {
      variant: "buttons.base",
      bg: "palette.success.main",
      color: "palette.success.contrastText",
      borderColor: "palette.success.main",
      "box-shadow": "0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08)",
      "&:hover": {
        bg: "palette.success.dark",
        borderColor: "palette.success.dark",
      },
      "&:disabled": {
        bg: "palette.success.main",
      },
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      bg: "transparent",
      backgroundImage: "none",
      borderWidth: "1px",
      ":hover": {
        // color: "#fff",
        // bg: "primary",
        // borderColor: "primary",
      },
      // "&:disabled": {
      //   variant: "buttons.secondary",
      // },
    },
    primaryOutline: {
      variant: "buttons.outline",
      color: "palette.primary.main",
      borderColor: "palette.primary.main",
      "&:hover": {
        bg: "palette.primary.dark",
        borderColor: "palette.primary.dark",
        color: "palette.primary.contrastText",
      },
      "&:disabled": {
        backgroundColor: "transparent",
        color: "palette.primary.main",
      },
    },
    secondaryOutline: {
      variant: "buttons.outline",
      color: "palette.grey.dark",
      borderColor: "palette.grey.main",
      "&:hover": {
        bg: "palette.secondary.dark",
        borderColor: "palette.secondary.dark",
        color: "secondary",
      },
      "&:disabled": {
        backgroundColor: "transparent",
        color: "palette.grey.dark",
        borderColor: "palette.grey.main",
      },
    },
    successOutline: {
      variant: "buttons.outline",
      color: "palette.success.main",
      borderColor: "palette.success.main",
      "&:hover": {
        bg: "palette.success.dark",
        borderColor: "palette.success.dark",
        color: "palette.success.contrastText",
      },
      "&:disabled": {
        backgroundColor: "transparent",
        color: "palette.success.main",
      },
    },
    dangerOutline: {
      variant: "buttons.outline",
      color: "palette.danger.main",
      borderColor: "palette.danger.main",
      "&:hover": {
        bg: "palette.danger.dark",
        borderColor: "palette.danger.dark",
        color: "palette.danger.contrastText",
      },
      "&:disabled": {
        backgroundColor: "transparent",
        color: "palette.danger.main",
      },
    },
  },

  links: {
    base: {
      // color: "primary",
      textDecoration: "none",
      ":hover": {
        // fontWeight: "bold",
        textDecoration: "underline",
      },
    },
    primary: {
      variant: "links.base",
      color: "primary",
    },
    secondary: {
      variant: "links.base",
      color: "secondary",
    },
    danger: {
      variant: "links.base",
      color: "danger",
    },
    success: {
      variant: "links.base",
      color: "success",
    },
  },

  forms: {
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
      color: "#8898aa",
      backgroundColor: "#fff",
      backgroundClip: "padding-box",
      border: "1px solid #dee2e6",
      borderRadius: "0.25rem",
      boxShadow: "0 3px 2px rgba(233, 236, 239, 0.05)",
      transition: "all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      // fontSize: "0.875rem",
      // transition: 'all 0.15s ease-in-out',
      ":focus": {
        color: "#8898aa",
        backgroundColor: "#fff",
        borderColor: "#0A48B3",
        outline: "0",
        boxShadow: "0 3px 9px rgba(50, 50, 9, 0), 3px 4px 8px rgba(10, 72, 179, 0.1)",
      },
    },
    shadowInput: {
      variant: "forms.input",
      boxShadow: "0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02)",
      border: "0",
      transition: "box-shadow .15s ease",
      ":focus": {
        boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
      },
    },
    textarea: {
      variant: "forms.input",
    },
    shadowTextarea: {
      variant: "forms.shadowInput",
    },
    select: {
      variant: "forms.input",
    },
    shadowSelect: {
      variant: "forms.shadowInput",
    },
  },

  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
  },
};

export default theme1;
