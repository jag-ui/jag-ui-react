import { Box } from "@jag-ui-react/box";
import React, { forwardRef } from "react";
export const Switch = forwardRef(({ checked, ...props }, ref) => (
  <Box
    ref={ref}
    {...props}
    aria-checked={checked}
    as="button"
    type="button"
    role="switch"
    __themeKey="Switch.root"
    __css={{
      m: 0,
      p: 0,
      width: "40px",
      height: "24px",
      bg: "transparent",
      appearance: "none",
      border: "1px solid",
      borderRadius: "9999px",
    }}>
    <Box
      aria-hidden
      style={{
        transform: checked ? "translateX(16px)" : "translateX(0)",
      }}
      __themeKey="Switch.thumb"
      __css={{
        mt: "-1px",
        ml: "-1px",
        width: "24px",
        height: "24px",
        transitionProperty: "transform",
        transitionTimingFunction: "ease-out",
        transitionDuration: "0.1s",
        borderRadius: 9999,
        border: "1px solid",
      }}
    />
  </Box>
));
