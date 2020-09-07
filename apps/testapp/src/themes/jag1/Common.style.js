const commonInputStyles = {
  py: 2,
  px: 3,
  fontSize: "100%",
  borderRadius: "default",
  appearance: "none",
  lineHeight: "tight",
};

export const inputs = {
  shadow: {
    ...commonInputStyles,
    border: "none",
    color: "gray.7",
    boxShadow: "default",
    "&:focus": {
      outline: "none",
      boxShadow: "outline",
    },
  },
  inline: {
    ...commonInputStyles,
    backgroundColor: "gray.2",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "gray.2",
    color: "gray.7",
    "&:focus": {
      outline: "none",
      borderColor: "primary",
      backgroundColor: "white",
    },
  },
  underline: {
    ...commonInputStyles,
    backgroundColor: "transparent",
    border: "none",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderBottomColor: "primary",
    borderRadius: "0px",
    color: "gray.7",
    "&:focus": {
      outline: "none",
      borderColor: "primary",
      backgroundColor: "white",
    },
  },
};

const input = {
  display: "block",
  width: "100%",
  p: 2,
  appearance: "none",
  bg: "transparent",
  height: "calc(1.5em + 1.25rem + 5px)",
  px: 3,
  py: 2,
  fontSize: 2,
  // fontSize: "0.875rem",
  fontWeight: "body",
  lineHeight: "1.5",
  color: "inputColor",
  backgroundColor: "inputBg",
  backgroundClip: "padding-box",
  borderRadius: "0.25rem",
  boxShadow: "0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02)",
  border: 0,
  transition: "box-shadow .15s ease",
  ":focus": {
    color: "inputFocusColor",
    backgroundColor: "inputFocusBg",
    boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
    outline: "none !important",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "inputFocusBorder",
  },
};

export default { input };
