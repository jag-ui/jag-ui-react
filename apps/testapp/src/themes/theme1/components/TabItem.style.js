const btnSizes = {
  none: {},
  xs: { px: 1, py: 1 },
  sm: { px: 2, py: 1 },
  md: { px: 3, py: 2 },
  lg: { px: 4, py: 3 },
  xl: { px: 5, py: 3 },
};

const root = {
  baseStyle: {
    cursor: "pointer",
  },
  variants: {
    line: {
      variantStyle: {
        display: "flex",
        alignItems: "center",
        alignSelf: "stretch",
        color: "inherit",
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
        display: "flex",
        alignItems: "center",
        alignSelf: "stretch",
        color: "inherit",
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
        borderColor: "inherit",
        borderStyle: "solid",
        borderWidth: "1px",
        borderLeftWidth: "0",
        marginBottom: "0",
        position: "relative",
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
