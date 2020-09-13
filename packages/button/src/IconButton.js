import React from "react";
import { Box } from "@jag-ui-react/box";
import { Icon } from "@jag-ui-react/icon";

export const IconButton = React.forwardRef(({ size = 5, icon, ...props }, ref) => (
  <Box
    ref={ref}
    as="button"
    {...props}
    __themeKey="IconButton.root"
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
    }}>
    <Icon icon={icon} />
  </Box>
));
