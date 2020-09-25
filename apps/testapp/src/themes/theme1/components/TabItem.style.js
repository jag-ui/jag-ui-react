const btnSizes = {
  none: {},
  xs: { px: 2, py: 0.5 },
  sm: { px: 2, py: 1 },
  md: { px: 2, py: 1.5 },
  lg: { px: 2, py: 2 },
  xl: { px: 2, py: 2.5 },
};

const root = {
  baseStyle: {},
  variants: {
    line: {
      variantStyle: {
        marginRight: "1px",
        "&.active": {
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "primary.main",
          color: "primary.main",
          marginBottom: "-1px",
        },
      },
      variantColors: {},
      variantSizes: btnSizes,
    },
    boxed: {
      variantStyle: {
        marginRight: "1px",
        "&.active": {
          color: "primary.main",
          marginBottom: "-1px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "divider",
          borderRadius: "4px 4px 0 0",
          borderBottomColor: "rgba(0,0,0,0) !important",
          backgroundColor: "inherit",
        },
      },
      variantColors: {},
      variantSizes: btnSizes,
    },
    toggle: {
      variantStyle: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "inherit",
        borderLeftWidth: "0",
        "&:first-child": {
          borderLeftWidth: "1px",
          // borderTopLeftRadius: "4px",
          // borderBottomLeftRadius: "4px",
          borderBottomLeftRadius: "290486px",
          borderTopLeftRadius: "290486px",
        },
        "&:last-child": {
          // borderTopRightRadius: "4px",
          // borderBottomRightRadius: "4px",
          borderBottomRightRadius: "290486px",
          borderTopRightRadius: "290486px",
        },
        "&.active": {
          backgroundColor: "primary.main",
          borderColor: "primary.main",
          color: "#fff",
          zIndex: "1",
        },
      },
      variantColors: {},
      variantSizes: btnSizes,
    },
  },
  defaultProps: {
    variant: "line",
    vsize: "md",
  },
};

export default { root };
