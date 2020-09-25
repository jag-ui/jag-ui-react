const ul = {
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

const root = {
  baseStyle: {
    backgroundColor: "inherit",
    overflowX: "auto",
    "::-webkit-scrollbar": {
      height: "1px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "gray.darker",
    },
  },
};

export default { root, ul };
