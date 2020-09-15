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
          borderBottomColor: "#3273dc",
          color: "#3273dc",
        },
      },
      variantColors: {},
    },
    boxed: {
      variantStyle: {
        border: "1px solid transparent",
        borderRadius: "4px 4px 0 0",
        "&.active": {
          color: "#3273dc",
          backgroundColor: "#fff",
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
          backgroundColor: "#3273dc",
          borderColor: "#3273dc",
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
  baseStyle: {},
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
      },
      variantColors: {},
    },
    toggle: {
      variantStyle: {
        ...tabLineStyle,
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
  baseStyle: {},
  variants: {
    line: {
      variantStyle: {},
      variantColors: {},
    },
  },
  defaultProps: {
    variant: "line",
  },
};

export default { root, ul, li, a };
