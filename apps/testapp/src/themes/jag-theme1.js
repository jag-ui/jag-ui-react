const theme1 = {
  googleFonts: "https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,700&display=swap",
  colors: {
    text: "#212529",
    background: "#fff",
    primary: "#0A48B3",
    primary0: "#525f7f",
    secondary: "#f7fafc",
    danger: "#f5365c",
    success: "#2dce89",
    muted: "#f6f6f9",
    gray: "#dddddf",
    highlight: "hsla(205, 100%, 40%, 0.125)",
    btnBoxShadow: "0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08)",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
        secondary: "gray",
        btnDefaultHoverBg: "gray",
      },
    },
  },
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

  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  buttons: {
    default: {
      px: 3,
      py: 2,
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
        "color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out",
      // transition: "all .15s ease",

      ":hover": {
        boxShadow: 3,
        transform: "translateY(-1px)",
      },
      ":disabled": {
        opacity: ".65",
        boxShadow: "none",
        transform: "none",
      },
    },
    primary: {
      variant: "buttons.default",
      bg: "primary",
      color: "#fff",
      borderColor: "primary",
      "box-shadow": "0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08)",
    },
    secondary: {
      variant: "buttons.primary",
      bg: "secondary",
      color: "text",
      borderColor: "secondary",
    },
    danger: {
      variant: "buttons.primary",
      bg: "danger",
      borderColor: "danger",
    },
    success: {
      variant: "buttons.primary",
      bg: "success",
      borderColor: "success",
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      bg: "transparent",
      backgroundImage: "none",
      borderWidth: "1px",
      ":hover": {
        color: "#fff",
        bg: "primary",
        borderColor: "primary",
      },
    },
    primaryOutline: {
      variant: "buttons.outline",
      color: "primary",
      borderColor: "primary",
      ":hover": {
        variant: "buttons.primary",
      },
    },
    secondaryOutline: {
      variant: "buttons.outline",
      color: "text",
      borderColor: "secondary",
      ":hover": {
        variant: "buttons.secondary",
      },
    },
    successOutline: {
      variant: "buttons.outline",
      color: "success",
      borderColor: "success",
      ":hover": {
        variant: "buttons.success",
      },
    },
    dangerOutline: {
      variant: "buttons.outline",
      color: "danger",
      borderColor: "danger",
      ":hover": {
        variant: "buttons.danger",
      },
    },
  },

  links: {
    link: {
      color: "primary",
      ":hover": {
        fontWeight: "bold",
      },
    },
    default: {
      variant: "buttons.default",
    },
    primary: {
      variant: "buttons.primary",
    },
    secondary: {
      variant: "buttons.secondary",
    },
    danger: {
      variant: "buttons.danger",
    },
    success: {
      variant: "buttons.success",
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
