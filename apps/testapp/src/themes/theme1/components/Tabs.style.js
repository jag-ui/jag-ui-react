const a = {
  baseStyle: {
    alignItems: "center",
    borderBottomColor: "#dbdbdb",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    color: "#4a4a4a",
    display: "flex",
    justifyContent: "center",
    marginBottom: "-1px",
    padding: ".5em 1em",
    verticalAlign: "top",
  },
  variants: {
    line: {
      variantStyle: {
        "&.active": {
          borderBottomColor: "primary.main",
          color: "primary.main",
        },
      },
      variantColors: {},
    },
    boxed: {
      variantStyle: {
        border: "1px solid transparent",
        borderRadius: "4px 4px 0 0",
        "&.active": {
          color: "primary.main",
          backgroundColor: "inherit",
          borderColor: "#dbdbdb",
          borderBottomColor: "transparent !important",
        },
      },
      variantColors: {},
    },
    toggle: {
      variantStyle: {
        borderColor: "#dbdbdb",
        borderStyle: "solid",
        borderWidth: "1px",
        marginBottom: "0",
        position: "relative",
        "&.active": {
          backgroundColor: "primary.main",
          borderColor: "primary.main",
          color: "#fff",
          zIndex: "1",
        },
      },
      variantColors: {},
    },
  },
  defaultProps: {
    variant: "line",
  },
};

const li = {
  baseStyle: {
    display: "block",
    backgroundColor: "inherit",
  },
};

const tabLineStyle = {
  alignItems: "center",
  borderBottomColor: "#dbdbdb",
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  display: "flex",
  flexGrow: "1",
  flexShrink: "0",
  justifyContent: "flex-start",
  listStyle: "none",
};

const ul = {
  baseStyle: {
    backgroundColor: "inherit",
  },
  variants: {
    line: {
      variantStyle: {
        ...tabLineStyle,
      },
      variantColors: {},
    },
    boxed: {
      variantStyle: {
        ...tabLineStyle,
        paddingLeft: "10px",
        paddingRight: "10px",
      },
      variantColors: {},
    },
    toggle: {
      variantStyle: {
        ...tabLineStyle,
        display: "inline-flex",
        borderBottom: "none",
        "& > li:first-child a": {
          // borderTopLeftRadius: "4px",
          // borderBottomLeftRadius: "4px",
          borderBottomLeftRadius: "290486px",
          borderTopLeftRadius: "290486px",
          paddingLeft: "1.25em",
        },
        "& > li:last-child a": {
          // borderTopRightRadius: "4px",
          // borderBottomRightRadius: "4px",
          borderBottomRightRadius: "290486px",
          borderTopRightRadius: "290486px",
          paddingRight: "1.25em",
        },
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
  },
  variants: {
    line: {
      variantStyle: {},
      variantColors: {},
    },
    toggle: {
      variantStyle: {
        display: "inline-flex",
      },
      variantColors: {},
    },
  },
  defaultProps: {
    variant: "line",
  },
};

export default { root, ul, li, a };
