export const radio = {
  baseStyle: {},
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
      bg: "primary.main",
    },
  },
  variants: {},
  defaultProps: {},
};

export default { radio, icon };
