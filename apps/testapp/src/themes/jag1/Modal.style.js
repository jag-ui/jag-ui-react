const btnColors = {
  default: {
    backgroundColor: "bg1",
  },
  primary: {
    backgroundColor: `primaryHover`,
    color: `white`,
  },
  secondary: {
    backgroundColor: `secondaryHover`,
    color: `text`,
  },
  success: {
    backgroundColor: `successHover`,
    color: `white`,
  },
  danger: {
    backgroundColor: `dangerHover`,
    color: `white`,
  },
  info: {
    backgroundColor: `infoHover`,
    color: `white`,
  },
  warning: {
    backgroundColor: `warningHover`,
    color: `white`,
  },
};

const btnSizes = {
  xs: { width: "35%", height: "15%" },
  sm: { width: "40%", height: "30%" },
  md: { width: "60%", height: "50%" },
  lg: { width: "80%", height: "60%" },
  xl: { width: "90%", height: "90%" },
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
