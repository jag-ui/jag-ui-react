const arrow = {
  baseStyle: {},
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

// const popoverPosArrowStyle = {
//   '&[data-popper-placement^="top"] > .popover-arrow': {
//     bottom: "5px",
//     ":after": { boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" },
//   },
//   '&[data-popper-placement^="bottom"] > .popover-arrow': {
//     top: "-5px",
//     ":after": { boxShadow: "-1px -1px 1px rgba(0, 0, 0, 0.1)" },
//   },
//   '&[data-popper-placement^="left"] > .popover-arrow': {
//     right: "5px",
//     ":after": { boxShadow: "1px -1px 1px rgba(0, 0, 0, 0.1)" },
//   },
//   '&[data-popper-placement^="right"] > .popover-arrow': {
//     left: "-5px",
//     ":after": { boxShadow: "-1px 1px 1px rgba(0, 0, 0, 0.1)" },
//   },
// };

const popover = {
  baseStyle: {
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
    backgroundColor: "white",
    maxWidth: "80%",
    '&[data-popper-placement^="top"] > .popover-arrow': {
      ":after": { boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" },
    },
    '&[data-popper-placement^="bottom"] > .popover-arrow': {
      ":after": { boxShadow: "-1px -1px 1px rgba(0, 0, 0, 0.1)" },
    },
    '&[data-popper-placement^="left"] > .popover-arrow': {
      ":after": { boxShadow: "1px -1px 1px rgba(0, 0, 0, 0.1)" },
    },
    '&[data-popper-placement^="right"] > .popover-arrow': {
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

export default { root: popover, arrow };
