const arrowSize = "6px";

export const rootStyle = {
  position: "absolute",
  display: "block",
  top: "0",
  left: "0",
  lineBreak: "auto",
  wordWrap: "break-word",
  backgroundClip: "padding-box",

  // TOP:
  "&[data-popper-placement^=top]": { marginBottom: arrowSize },
  "&[data-popper-placement^=top] .popover-arrow": {
    bottom: `calc((${arrowSize} + 1px) * -1)`,
  },
  "&[data-popper-placement=top-start] .popover-arrow": { left: "0" },
  "&[data-popper-placement=top-end] .popover-arrow": { right: "0" },

  "&[data-popper-placement^=top] .popover-arrow:after, &[data-popper-placement^=top] .popover-arrow:before": {
    borderWidth: `${arrowSize} ${arrowSize} 0`,
  },
  "&[data-popper-placement^=top] .popover-arrow:before": {
    bottom: "0",
    borderTopColor: "transparent",
  },
  "&[data-popper-placement^=top] .popover-arrow:after": {
    bottom: "1px",
    borderTopColor: "inherit",
  },

  // BOTTOM:
  "&[data-popper-placement^=bottom]": { marginTop: arrowSize },
  "&[data-popper-placement^=bottom] .popover-arrow": {
    top: `calc((${arrowSize} + 1px) * -1)`,
  },
  "&[data-popper-placement^=bottom] .popover-arrow:after, &[data-popper-placement^=bottom] .popover-arrow:before": {
    borderWidth: `0 ${arrowSize} ${arrowSize}`,
  },
  "&[data-popper-placement^=bottom] .popover-arrow:before": {
    top: "0",
    borderBottomColor: "transparent",
  },
  "&[data-popper-placement^=bottom] .popover-arrow:after": {
    top: "1px",
    borderBottomColor: "inherit",
  },

  // LEFT

  "&[data-popper-placement^=left]": { marginRight: arrowSize },
  "&[data-popper-placement^=left] .popover-arrow": {
    right: `calc((${arrowSize} + 1px) * -1)`,
    width: "10px",
    height: "10px",
  },
  "&[data-popper-placement^=left] .popover-arrow:after, &[data-popper-placement^=left] .popover-arrow:before": {
    borderWidth: `${arrowSize} 0 ${arrowSize} ${arrowSize}`,
  },
  "&[data-popper-placement^=left] .popover-arrow:before": {
    right: "0",
    borderLeftColor: "transparent",
  },
  "&[data-popper-placement^=left] .popover-arrow:after": {
    right: "1px",
    borderLeftColor: "inherit",
  },

  // RIGHT

  "&[data-popper-placement^=right]": { marginLeft: arrowSize },
  "&[data-popper-placement^=right] .popover-arrow": {
    left: `calc((${arrowSize} + 1px) * -1)`,
  },
  "&[data-popper-placement^=right] .popover-arrow:after, &[data-popper-placement^=right] .popover-arrow:before": {
    borderWidth: `${arrowSize} ${arrowSize} ${arrowSize} 0`,
  },
  "&[data-popper-placement^=right] .popover-arrow:before": {
    left: "0",
    borderRightColor: "transparent",
  },
  "&[data-popper-placement^=right] .popover-arrow:after": {
    left: "1px",
    borderRightColor: "inherit",
  },

  // COMMON
  "&[data-popper-placement=left-end] .popover-arrow, &[data-popper-placement=right-end] .popover-arrow": {
    margin: `calc((${arrowSize} + 1px) * -1) 0`,
  },
  "&[data-popper-placement=left] .popover-arrow, &[data-popper-placement=right] .popover-arrow": {
    margin: "calc((4px + 1px) * -1) 0",
  },
};

export const arrowStyle = {
  position: "absolute",
  display: "block",
  width: arrowSize,
  height: arrowSize,
  ":after,:before": {
    position: "absolute",
    display: "block",
    content: '""',
    borderColor: "transparent",
    borderStyle: "solid",
  },
};
