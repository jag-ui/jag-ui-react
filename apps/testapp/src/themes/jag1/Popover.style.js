export const popover = {
  baseStyle: {
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
    backgroundColor: "white",
    padding: "20px",
    textAlign: "center",

    '&[data-popper-placement^="top"] > .popover-arrow': {
      bottom: "5px",
      ":after": { boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" },
    },
    '&[data-popper-placement^="bottom"] > .popover-arrow': {
      top: "-5px",
      ":after": { boxShadow: "-1px -1px 1px rgba(0, 0, 0, 0.1)" },
    },
    '&[data-popper-placement^="left"] > .popover-arrow': {
      right: "5px",
      ":after": { boxShadow: "1px -1px 1px rgba(0, 0, 0, 0.1)" },
    },
    '&[data-popper-placement^="right"] > .popover-arrow': {
      left: "-5px",
      ":after": { boxShadow: "-1px 1px 1px rgba(0, 0, 0, 0.1)" },
    },
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

export const arrow = {
  baseStyle: {
    position: "absolute",
    width: "0",
    height: "0",
    backgroundColor: "inherit",
    "&:after": {
      content: '" "',
      backgroundColor: "inherit",
      position: "absolute",
      top: "0",
      left: "0",
      width: "10px",
      height: "10px",
      transform: "rotate(45deg)",
    },
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

export default { root: popover, arrow };
