const thumb = {
  appearance: "none",
  width: "16px",
  height: "16px",
  bg: "currentcolor",
  border: 0,
  borderRadius: 9999,
  variant: "forms.slider.thumb",
};

export const button = {
  baseStyle: {
    display: "block",
    width: "100%",
    height: "4px",
    my: 2,
    cursor: "pointer",
    appearance: "none",
    borderRadius: 9999,
    color: "inherit",
    bg: "gray",
    ":focus": {
      outline: "none",
      color: "primary",
    },
    "&::-webkit-slider-thumb": thumb,
    "&::-moz-range-thumb": thumb,
    "&::-ms-thumb": thumb,
  },
  variants: {},
  defaultProps: {},
};

export default { root: button };
