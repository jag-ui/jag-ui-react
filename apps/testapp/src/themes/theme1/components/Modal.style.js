const btnColors = {
  default: {
    backgroundColor: "bg.card",
  },
  primary: {
    backgroundColor: "primary.dark",
    color: "primary.contrastText",
  },
  secondary: {
    backgroundColor: "secondary.dark",
    color: "text",
  },
  success: {
    backgroundColor: "successHover",
    color: "white",
  },
  danger: {
    backgroundColor: "dangerHover",
    color: "white",
  },
  info: {
    backgroundColor: "infoHover",
    color: "white",
  },
  warning: {
    backgroundColor: "warningHover",
    color: "white",
  },
};

const btnSizes = {
  xs: { width: "45%", height: "25%" },
  sm: { width: "50%", height: "40%" },
  md: { width: "70%", height: "60%" },
  lg: { width: "90%", height: "70%" },
  xl: { width: "95%", height: "80%" },
};

export const modalContainer = {
  baseStyle: {
    m: 2,
  },
  variants: {
    default: {
      variantStyle: {
        boxShadow: 3,
        border: "none",
        borderRadius: "default",
      },
      variantColors: btnColors,
      variantSizes: btnSizes,
    },
  },
  defaultProps: {
    variant: "default",
    vsize: "md",
    vcolor: "default",
  },
};

export default { container: modalContainer };
