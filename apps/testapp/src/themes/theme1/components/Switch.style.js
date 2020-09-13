const thumb = {
  baseStyle: {
    // mx: 3,
    // width: 4,
    // height: 4,
    borderColor: "primary.main",
    bg: "background",
  },
};

const root = {
  baseStyle: {
    // width: 16,
    // height: 8,
    color: "primary.main",
    borderColor: "primary.main",
    "&[aria-checked=true]": {
      bg: "primary.main",
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
