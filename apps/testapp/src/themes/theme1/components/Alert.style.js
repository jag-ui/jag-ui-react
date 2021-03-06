const alertColors = {
  default: {
    backgroundColor: "transparent",
    color: "text",
  },
  primary: {
    backgroundColor: "primary.main",
    color: "white",
  },
  secondary: {
    backgroundColor: "secondary",
    color: "text",
  },
  muted: {
    backgroundColor: "muted",
    color: "white",
  },
  success: {
    backgroundColor: "success",
    color: "white",
  },
  danger: {
    backgroundColor: "danger",
    color: "white",
  },
  info: {
    backgroundColor: "info",
    color: "white",
  },
  warning: {
    backgroundColor: "warning",
    color: "white",
  },
};

const alertOutlineColors = {
  primary: {
    borderColor: "primary.main",
    color: "primary.main",
  },
  secondary: {
    borderColor: "text",
    color: "text",
  },
  muted: {
    borderColor: "gray.1",
    color: "gray.7",
  },
  success: {
    borderColor: "success",
    color: "success",
  },
  danger: {
    borderColor: "danger",
    color: "danger",
  },
  info: {
    borderColor: "info",
    color: "info",
  },
  warning: {
    borderColor: "warning",
    color: "warning",
  },
};

export const alert = {
  baseStyle: {
    borderRadius: "default",
  },
  variants: {
    solid: {
      variantStyle: {},
      variantColors: { ...alertColors },
    },
    outline: {
      variantStyle: {
        borderWidth: "1px",
        borderStyle: "solid",
      },
      variantColors: { ...alertOutlineColors },
    },
  },
  defaultProps: {
    variant: "solid",
  },
};

export default { root: alert };
