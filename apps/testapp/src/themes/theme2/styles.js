const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
  m: 0,
};

export const styles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
    fontSize: "inherit",
    maxWidth: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  a: {
    color: "primary.main",
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
  h1: {
    ...heading,
    fontSize: 6,
    mt: 2,
  },
  h2: {
    ...heading,
    fontSize: 5,
    mt: 2,
  },
  h3: {
    ...heading,
    fontSize: 4,
    mt: 3,
  },
  h4: {
    ...heading,
    fontSize: 3,
  },
  h5: {
    ...heading,
    fontSize: 2,
  },
  h6: {
    ...heading,
    fontSize: 1,
    mb: 2,
  },

  code: {},
  pre: {},
  hr: {
    bg: "divider",
    border: 0,
    height: "1px",
  },
};
