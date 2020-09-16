const root = {
  baseStyle: {
    display: "flex",
    whiteSpace: "nowrap",
    userSelect: "none",
    alignItems: "center",
  },
  variants: {
    boxed: {
      variantStyle: {
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "divider",
        backgroundColor: "inherit",
      },
      variantColors: {},
    },
    line: {
      variantStyle: {
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "divider",
        backgroundColor: "inherit",
      },
      variantColors: {},
    },
    toggle: {
      variantStyle: {
        display: "flex",
        color: "primary.main",
      },
      variantColors: {},
    },
  },
  defaultProps: {
    variant: "line",
  },
};

export default { root };
