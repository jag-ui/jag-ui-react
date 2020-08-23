const linkCommonStyles = {
  cursor: `pointer`,
  lineHeight: `inherit`,
  "&:disabled": {
    opacity: ".65",
    boxShadow: "none",
    transform: "none",
    cursor: "not-allowed",
  },
};

export const button = {
  baseStyle: {
    ...linkCommonStyles,
  },
  variants: {
    simple: {
      variantStyle: {
        textDecoration: "none",
        ":hover": {
          textDecoration: "underline",
        },
      },
    },
  },
  defaultProps: {
    variant: "simple",
  },
};

export default { root: button };
