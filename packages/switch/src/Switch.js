import { Box } from "@jag-ui-react/box";
import React, { forwardRef } from "react";
export const Switch = forwardRef(({ checked, ...props }, ref) => (
  <Box ref={ref} as="button" type="button" role="switch" __themeKey="Switch.root" aria-checked={checked} {...props}>
    <Box
      aria-hidden
      __themeKey="Switch.thumb"
      style={{
        transform: checked ? "translateX(16px)" : "translateX(0)",
      }}
    />
  </Box>
));
