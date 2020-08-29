import React from "react";
import { Box } from "@jag-ui-react/box";
import { TextWithTooltip } from "./TextWithTooltip";

export const Text = React.forwardRef(({ maxLength, children, ...props }, ref) => {
  if (typeof children === "string" && !!maxLength && children.length >= maxLength) {
    return <TextWithTooltip as="span" maxLength={maxLength} children={children} {...props} />;
  }
  return <Box ref={ref} as="span" __themeKey="Text.root" children={children} {...props} />;
});
