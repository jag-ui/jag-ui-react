const btnCommonStyles = {
  cursor: "pointer",
  lineHeight: "inherit",
  "&:disabled": {
    opacity: ".65",
    boxShadow: "none",
    transform: "none",
    cursor: "not-allowed",
  },
};

const btnColors = {
  ghost: {
    backgroundColor: "transparent",
    color: "inherit",
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
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    "&:hover": { backgroundColor: "primary.dark" },
    "&:hover&:disabled": { backgroundColor: "primary.main" },
  },
  secondary: {
    backgroundColor: "secondary.main",
    color: "secondary.contrastText",
    "&:hover": { backgroundColor: "secondary.dark" },
    "&:hover&:disabled": { backgroundColor: "secondary.main" },
  },
  white: {
    backgroundColor: "white",
    color: "text",
    "&:hover": { backgroundColor: "transparent" },
    "&:hover&:disabled": { backgroundColor: "muted" },
  },
  success: {
    backgroundColor: "success",
    color: "white",
    "&:hover": { backgroundColor: "successHover" },
    "&:hover&:disabled": { backgroundColor: "success" },
  },
  danger: {
    backgroundColor: "danger",
    color: "white",
    "&:hover": { backgroundColor: "dangerHover" },
    "&:hover&:disabled": { backgroundColor: "danger" },
  },
  info: {
    backgroundColor: "info",
    color: "white",
    "&:hover": { backgroundColor: "infoHover" },
    "&:hover&:disabled": { backgroundColor: "info" },
  },
  warning: {
    backgroundColor: "warning",
    color: "white",
    "&:hover": { backgroundColor: "warningHover" },
    "&:hover&:disabled": { backgroundColor: "warning" },
  },
};

const btnOutlineColors = {
  primary: {
    borderColor: "primary.main",
    color: "primary.main",
    "&:hover": {
      backgroundColor: "primary.dark",
      color: "primary.contrastText",
    },
    "&:hover&:disabled": { backgroundColor: "transparent", borderColor: "primary.main", color: "primary.main" },
  },
  secondary: {
    borderColor: "secondary.main",
    color: "secondary.main",
    "&:hover": {
      backgroundColor: "secondary.dark",
      color: "secondary.contrastText",
    },
    "&:hover&:disabled": { backgroundColor: "transparent", borderColor: "secondary.main", color: "secondary.main" },
  },
  muted: {
    borderColor: "mutedHover",
    color: "mutedHover",
    "&:hover": {
      backgroundColor: "mutedHover",
      color: "white",
    },
    "&:hover&:disabled": { backgroundColor: "transparent", borderColor: "mutedHover", color: "mutedHover" },
  },
  success: {
    borderColor: "success",
    color: "success",
    "&:hover": {
      backgroundColor: "successHover",
      color: "white",
    },
    "&:hover&:disabled": { backgroundColor: "transparent", borderColor: "success", color: "success" },
  },
  danger: {
    borderColor: "danger",
    color: "danger",
    "&:hover": {
      backgroundColor: "dangerHover",
      color: "white",
    },
    "&:hover&:disabled": { backgroundColor: "transparent", borderColor: "danger", color: "danger" },
  },
  info: {
    borderColor: "info",
    color: "info",
    "&:hover": {
      backgroundColor: "infoHover",
      color: "white",
    },
    "&:hover&:disabled": { backgroundColor: "transparent", borderColor: "info", color: "info" },
  },
  warning: {
    borderColor: "warning",
    color: "warning",
    "&:hover": {
      backgroundColor: "warningHover",
      color: "white",
    },
    "&:hover&:disabled": {
      backgroundColor: "transparent",
      borderColor: "warning",
      color: "warning",
    },
  },
};

const btnIconColors = {
  primary: {
    color: "primary.main",
    "&:hover": { color: "primary.dark" },
    "&:hover&:disabled": { color: "primary.main" },
  },
  secondary: {
    color: "secondary",
    "&:hover": { color: "secondary.dark" },
    "&:hover&:disabled": { color: "secondary.main" },
  },
  muted: {
    color: "muted",
    "&:hover": { color: "mutedHover" },
    "&:hover&:disabled": { color: "muted" },
  },
  success: {
    color: "success",
    "&:hover": { color: "successHover" },
    "&:hover&:disabled": { color: "success" },
  },
  danger: {
    color: "danger",
    "&:hover": { color: "dangerHover" },
    "&:hover&:disabled": { color: "danger" },
  },
  info: {
    color: "info",
    "&:hover": { color: "infoHover" },
    "&:hover&:disabled": { color: "info" },
  },
  warning: {
    color: "warning",
    "&:hover": { color: "warningHover" },
    "&:hover&:disabled": { color: "warning" },
  },
};

const btnSizes = {
  none: {},
  sm: { px: 2, py: 1 },
  md: { px: 3, py: 2 },
  lg: { px: 4, py: 3 },
  xl: { px: 5, py: 3 },
};

export const button = {
  baseStyle: {
    ...btnCommonStyles,
    // width: 300,
  },
  variants: {
    solid: {
      variantStyle: {
        boxShadow: 3,
        border: "none",
        fontWeight: "semibold",
        borderRadius: "default",
      },
      variantColors: btnColors,
      variantSizes: btnSizes,
    },
    outline: {
      variantStyle: {
        backgroundColor: "transparent",
        fontWeight: "semibold",
        borderRadius: "default",
        borderWidth: "1px",
        borderStyle: "solid",
        "&:hover": {
          borderColor: "transparent",
        },
      },
      variantColors: btnOutlineColors,
      variantSizes: btnSizes,
    },
    icon: {
      variantStyle: {
        ...btnCommonStyles,
        backgroundColor: "transparent",
        border: "none",
        borderRadius: "default",
      },
      variantColors: btnIconColors,
      variantSizes: btnSizes,
    },
    none: {
      variantStyle: {},
      variantColors: {},
      variantSizes: {},
    },
  },
  defaultProps: {
    variant: "solid",
    vsize: "md",
    vcolor: "ghost",
  },
};

export default { root: button };
