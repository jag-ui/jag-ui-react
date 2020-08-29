const thumb = {
  baseStyle: {
    mt: "-1px",
    ml: "-1px",
    width: "24px",
    height: "24px",

    // mx: 3,
    // width: 4,
    // height: 4,
    borderRadius: 9999,
    border: "1px solid",
    borderColor: "primary",
    bg: "background",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    transitionDuration: "0.1s",
  },
};

const root = {
  baseStyle: {
    appearance: "none",
    m: 0,
    p: 0,
    width: "40px",
    height: "24px",
    // width: 16,
    // height: 8,
    color: "primary",
    bg: "transparent",
    border: "1px solid",
    borderColor: "primary",
    borderRadius: 9999,
    "&[aria-checked=true]": {
      bg: "primary",
    },
    ":focus": {
      outline: "none",
      boxShadow: "0 0 0 2px",
    },
  },
  variants: {},
  defaultProps: {},
};

export default { root, thumb };
