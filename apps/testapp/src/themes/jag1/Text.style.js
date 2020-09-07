const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
  mb: 1,
};
const body = {
  fontFamily: "body",
  fontWeight: "body",
  lineHeight: "body",
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
        ...body,
        fontSize: 1,
      },
    },

    muted: {
      variantStyle: {
        ...body,
        fontSize: 1,
        color: "muted",
      },
    },
    title: {
      variantStyle: {
        ...body,
        fontSize: 3,
      },
    },
    display: {
      variantStyle: {
        ...body,
        fontSize: [6, 7],
      },
    },

    caps: {
      variantStyle: {
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        fontSize: 1,
      },
    },
  },
  defaultProps: {
    variant: "body",
  },
};

export default { root };
