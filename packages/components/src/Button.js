import React from "react";
import { Box } from "@jag-ui-react/core";

export const Button = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="button"
    variant="primary"
    {...props}
    __themeKey="buttons"
    __css={{
      display: "inline-block",
      textAlign: "center",
      lineHeight: "inherit",
      fontSize: "inherit",
      border: 0,
      cursor: "pointer",
      appearance: "none",
      textDecoration: "none",
    }}
  />
));
