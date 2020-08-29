export const checkbox = {
  baseStyle: {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
    width: "inherit",
    height: "inherit",
    overflow: "hidden",
  },
  variants: {},
  defaultProps: {},
};
export const icon = {
  baseStyle: {
    mr: 2,
    borderRadius: 4,
    color: "gray",
    "input:checked ~ &": {
      color: "primary",
    },
    "input:focus ~ &": {
      color: "primary",
      bg: "highlight",
    },
  },
  variants: {},
  defaultProps: {},
};

export default { checkbox, icon };
