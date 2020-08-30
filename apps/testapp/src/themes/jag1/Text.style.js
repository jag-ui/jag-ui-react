const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
  mb: 1,
};

export const root = {
  baseStyle: {
    m: 0,
    p: 0,
  },
  variants: {
    // HEADING:
    h1: {
      variantStyle: {
        ...heading,
        fontSize: 6,
      },
    },

    h2: {
      variantStyle: {
        ...heading,
        fontSize: 5,
      },
    },

    h3: {
      variantStyle: {
        ...heading,
        fontSize: 4,
      },
    },

    h4: {
      variantStyle: {
        ...heading,
        fontSize: 3,
      },
    },

    h5: {
      variantStyle: {
        ...heading,
        fontSize: 2,
      },
    },

    h6: {
      variantStyle: {
        ...heading,
        fontSize: 1,
      },
    },

    // BASIC:
    body: {
      variantStyle: {
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
        fontSize: 1,
      },
    },

    muted: {
      variantStyle: {
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
        fontSize: 0,
        color: "muted",
      },
    },

    display: {
      variantStyle: {
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
        fontSize: [6, 7],
      },
    },

    caps: {
      variantStyle: {
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      },
    },
  },
  defaultProps: {
    variant: "body",
  },
};

export default { root };
