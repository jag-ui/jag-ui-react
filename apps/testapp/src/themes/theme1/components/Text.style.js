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
        fontSize: "3xl",
      },
    },

    h2: {
      variantStyle: {
        ...heading,
        fontSize: "2xl",
      },
    },

    h3: {
      variantStyle: {
        ...heading,
        fontSize: "xl",
      },
    },

    h4: {
      variantStyle: {
        ...heading,
        fontSize: "lg",
      },
    },

    h5: {
      variantStyle: {
        ...heading,
        fontSize: "md",
      },
    },

    h6: {
      variantStyle: {
        ...heading,
        fontSize: "sm",
      },
    },

    // BASIC:
    body: {
      variantStyle: {
        ...body,
        fontSize: "md",
      },
    },

    muted: {
      variantStyle: {
        ...body,
        fontSize: "md",
        color: "muted",
      },
    },
    title: {
      variantStyle: {
        ...body,
        fontSize: "lg",
      },
    },
    caps: {
      variantStyle: {
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        fontSize: "md",
      },
    },
  },
  defaultProps: {
    variant: "body",
  },
};

export default { root };
