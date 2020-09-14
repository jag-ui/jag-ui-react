const arrow = {
  baseStyle: {
    color: "salmon",
  },
  variants: {
    solid: {
      variantStyle: {},
      // variantColors: { ...alertColors },
    },
  },
  defaultProps: {
    variant: "solid",
  },
};
const container = {
  baseStyle: {
    backgroundColor: "salmon",
  },
};

const popover = {
  baseStyle: {
    border: 0,
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
    backgroundColor: "salmon",
    maxWidth: "80%",
    // '&[data-popper-placement^="top"] > .popover-arrow': {
    //   ":after": { boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" },
    // },
    // '&[data-popper-placement^="bottom"] > .popover-arrow': {
    //   ":after": { boxShadow: "-1px -1px 1px rgba(0, 0, 0, 0.1)" },
    // },
    // '&[data-popper-placement^="left"] > .popover-arrow': {
    //   ":after": { boxShadow: "1px -1px 1px rgba(0, 0, 0, 0.1)" },
    // },
    // '&[data-popper-placement^="right"] > .popover-arrow': {
    //   ":after": { boxShadow: "-1px 1px 1px rgba(0, 0, 0, 0.1)" },
    // },
  },
  variants: {
    solid: {
      variantStyle: {},
      // variantColors: { ...alertColors },
    },
  },
  defaultProps: {
    variant: "solid",
  },
};

export default { root: popover, arrow, container };
