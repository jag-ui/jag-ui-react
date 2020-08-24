const bsPopover = {
  ".popover": {
    top: "0",
    left: "0",
    zIndex: "1060",
    maxWidth: "276px",
    fontFamily: "Open Sans,sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.5",
    textAlign: ["left", "start"],
    textDecoration: "none",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    whiteSpace: "normal",
    lineBreak: "auto",
    fontSize: ".875rem",
    wordWrap: "break-word",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid rgba(0,0,0,.05)",
    borderRadius: ".4375rem",
    boxShadow: "0 .5rem 2rem 0 rgba(0,0,0,.2)",
  },
  ".popover,.popover .arrow": { position: "absolute", display: "block" },
  ".popover .arrow": {
    width: "1.5rem",
    height: ".75rem",
    margin: "0 .4375rem",
  },
  ".popover .arrow:after,.popover .arrow:before": {
    position: "absolute",
    display: "block",
    content: '""',
    borderColor: "transparent",
    borderStyle: "solid",
  },
  ".bs-popover-auto[x-placement^=top],.bs-popover-top": {
    marginBottom: ".75rem",
  },
  ".bs-popover-auto[x-placement^=top] .arrow,.bs-popover-top .arrow": {
    bottom: "calc((.75rem + 1px) * -1)",
  },
  ".bs-popover-auto[x-placement^=top] .arrow:after,.bs-popover-auto[x-placement^=top] .arrow:before,.bs-popover-top .arrow:after,.bs-popover-top .arrow:before": {
    borderWidth: ".75rem .75rem 0",
  },
  ".bs-popover-auto[x-placement^=top] .arrow:before,.bs-popover-top .arrow:before": {
    bottom: "0",
    borderTopColor: "transparent",
  },
  ".bs-popover-auto[x-placement^=top] .arrow:after,.bs-popover-top .arrow:after": {
    bottom: "1px",
    borderTopColor: "#fff",
  },

  ".bs-popover-auto[x-placement^=right],.bs-popover-right": {
    marginLeft: ".75rem",
  },
  ".bs-popover-auto[x-placement^=right] .arrow,.bs-popover-right .arrow": {
    left: "calc((.75rem + 1px) * -1)",
    width: ".75rem",
    height: "1.5rem",
    margin: ".4375rem 0",
  },
  ".bs-popover-auto[x-placement^=right] .arrow:after,.bs-popover-auto[x-placement^=right] .arrow:before,.bs-popover-right .arrow:after,.bs-popover-right .arrow:before": {
    borderWidth: ".75rem .75rem .75rem 0",
  },
  ".bs-popover-auto[x-placement^=right] .arrow:before,.bs-popover-right .arrow:before": {
    left: "0",
    borderRightColor: "transparent",
  },
  ".bs-popover-auto[x-placement^=right] .arrow:after,.bs-popover-right .arrow:after": {
    left: "1px",
    borderRightColor: "#fff",
  },

  ".bs-popover-auto[x-placement^=bottom],.bs-popover-bottom": {
    marginTop: ".75rem",
  },
  ".bs-popover-auto[x-placement^=bottom] .arrow,.bs-popover-bottom .arrow": {
    top: "calc((.75rem + 1px) * -1)",
  },
  ".bs-popover-auto[x-placement^=bottom] .arrow:after,.bs-popover-auto[x-placement^=bottom] .arrow:before,.bs-popover-bottom .arrow:after,.bs-popover-bottom .arrow:before": {
    borderWidth: "0 .75rem .75rem",
  },
  ".bs-popover-auto[x-placement^=bottom] .arrow:before,.bs-popover-bottom .arrow:before": {
    top: "0",
    borderBottomColor: "transparent",
  },
  ".bs-popover-auto[x-placement^=bottom] .arrow:after,.bs-popover-bottom .arrow:after": {
    top: "1px",
    borderBottomColor: "#fff",
  },
  ".bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before": {
    position: "absolute",
    top: "0",
    left: "50%",
    display: "block",
    width: "1.5rem",
    marginLeft: "-.75rem",
    content: '""',
    borderBottom: "1px solid #fff",
  },
  ".bs-popover-auto[x-placement^=left],.bs-popover-left": {
    marginRight: ".75rem",
  },
  ".bs-popover-auto[x-placement^=left] .arrow,.bs-popover-left .arrow": {
    right: "calc((.75rem + 1px) * -1)",
    width: ".75rem",
    height: "1.5rem",
    margin: ".4375rem 0",
  },
  ".bs-popover-auto[x-placement^=left] .arrow:after,.bs-popover-auto[x-placement^=left] .arrow:before,.bs-popover-left .arrow:after,.bs-popover-left .arrow:before": {
    borderWidth: ".75rem 0 .75rem .75rem",
  },
  ".bs-popover-auto[x-placement^=left] .arrow:before,.bs-popover-left .arrow:before": {
    right: "0",
    borderLeftColor: "transparent",
  },
  ".bs-popover-auto[x-placement^=left] .arrow:after,.bs-popover-left .arrow:after": {
    right: "1px",
    borderLeftColor: "#fff",
  },
  ".popover-header": {
    padding: ".5rem .95rem",
    marginBottom: "0",
    fontSize: "1rem",
    color: "#32325d",
    backgroundColor: "#fff",
    borderBottom: "1px solid #f2f2f2",
    borderTopLeftRadius: "calc(.4375rem - 1px)",
    borderTopRightRadius: "calc(.4375rem - 1px)",
  },
  ".popover-header:empty": { display: "none" },
  ".popover-body": { padding: ".5rem .95rem", color: "#525f7f" },
};

export const popover11 = {
  baseStyle: {
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
    backgroundColor: "white",
    padding: "20px",
    textAlign: "center",
    '&[data-popper-placement^="top"] > #arrow': {
      bottom: "-30px",
      ":after": { boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" },
    },
    '&[data-popper-placement^="bottom"] > #arrow': {
      top: "-30px",
      ":after": { boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" },
    },
    '&[data-popper-placement^="right"] > #arrow': {
      left: "-30px",
      ":after": { left: "25px", boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" },
    },
    '&[data-popper-placement^="left"] > #arrow': {
      right: "-30px",
      ":after": { boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" },
    },
  },
  variants: {
    solid: {
      variantStyle: {},
      // variantColors: { ...alertColors },
    },
  },
  defaultProps: {
    variant: "solid",
  },
};

export const popover = {
  baseStyle: {
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
    backgroundColor: "white",
    padding: "20px",
    textAlign: "center",
    '&[data-popper-placement^="top"] > #arrow': {
      bottom: "-30px",
      ":after": { top: "-25px", boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.1)" },
    },
    '&[data-popper-placement^="bottom"] > #arrow': {
      ":after": { top: "-25px", boxShadow: "-1px -1px 1px 1px rgba(0, 0, 0, 0.1)" },
    },
    '&[data-popper-placement^="left"] > #arrow': {
      right: "30px",
      ":after": { left: "36px", boxShadow: "1px -1px 1px 1px rgba(0, 0, 0, 0.1)" },
    },
    '&[data-popper-placement^="right"] > #arrow': {
      ":after": { left: "-25px", boxShadow: "-1px 1px 1px 1px rgba(0, 0, 0, 0.1)" },
    },
  },
  variants: {
    solid: {
      variantStyle: {},
      // variantColors: { ...alertColors },
    },
  },
  defaultProps: {
    variant: "solid",
  },
};

export const arrow = {
  baseStyle: {
    position: "absolute",
    width: "10px",
    height: "10px",
    backgroundColor: "inherit",
    "&:after": {
      content: '" "',
      backgroundColor: "inherit",
      position: "absolute",
      top: "0",
      left: "0",
      transform: "rotate(45deg)",
      width: "10px",
      height: "10px",
    },
  },
  variants: {
    solid: {
      variantStyle: {},
      // variantColors: { ...alertColors },
    },
  },
  defaultProps: {
    variant: "solid",
  },
};

export default { root: popover, arrow };
