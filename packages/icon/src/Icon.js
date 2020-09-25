import React from "react";
import { Box } from "@jag-ui-react/box";

export const Icon = React.forwardRef(({ size = 32, icon, ...props }, ref) => (
  <Box
    ref={ref}
    as="span"
    children={icon}
    {...props}
    __themeKey="buttons"
    __css={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      lineHeight: "inherit",
      fontSize: "inherit",
      // width: size,
      // height: size,
      // color: "inherit",
      // bg: "transparent",
      // appearance: "none",
      // textDecoration: "none",
    }}
  />
));
