export const icon = {
  baseStyle: {
    mr: 2,
    borderRadius: 4,
    color: "gray",
    "input:checked ~ &": {
      color: "primary.main",
    },
    "input:focus ~ &": {
      color: "primary.main",
      bg: "highlight",
    },
  },
  variants: {},
  defaultProps: {},
};

export default { icon };
