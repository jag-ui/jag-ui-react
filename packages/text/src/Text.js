import React from "react";
import { Box } from "@jag-ui-react/box";
import { TextWithTooltip } from "./TextWithTooltip";

export const Text = React.forwardRef(({ maxLength, enableTooltip, children, ...props }, ref) => {
  if (enableTooltip || (typeof children === "string" && !!maxLength && children.length >= maxLength)) {
    return <TextWithTooltip as="p" maxLength={maxLength} children={children} {...props} />;
  }
  return <Box ref={ref} as="p" __themeKey="Text.root" children={children} {...props} />;
});
