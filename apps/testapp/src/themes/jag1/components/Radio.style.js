export const radio = {
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
    // todo: system props??
    mr: 2,
    borderRadius: 9999,
    color: "gray",
    "input:checked ~ &": {
      color: "primary.main",
    },
    "input:focus ~ &": {
      bg: "highlight",
    },
  },
  variants: {},
  defaultProps: {},
};

export default { radio, icon };
