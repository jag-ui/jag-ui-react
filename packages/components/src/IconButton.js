import React from "react";
import { Box } from "@jag-ui-react/core";

export const IconButton = React.forwardRef(({ size = 32, ...props }, ref) => (
  <Box
    ref={ref}
    as="button"
    variant="icon"
    {...props}
    __themeKey="buttons"
    __css={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      lineHeight: "inherit",
      fontSize: "inherit",
      border: 0,
      color: "inherit",
      bg: "transparent",
      cursor: "pointer",
      appearance: "none",
      textDecoration: "none",
      width: size,
      height: size,
      padding: 1,
    }}
  />
));
