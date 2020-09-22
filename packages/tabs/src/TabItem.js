import React from "react";
import { Box } from "@jag-ui-react/box";

export const TabItem = React.forwardRef(({ as = "button", active, ...props }, ref) => (
  <Box
    ref={ref}
    as={as}
    className={active && "active"}
    {...props}
    __themeKey="TabItem.root"
    __css={{
      display: "flex",
      alignItems: "center",
      alignSelf: "stretch",
      color: "inherit",
      backgroundColor: "inherit",
      cursor: "pointer",
      flexShrink: 0,
    }}
  />
));
TabItem.displayName = "TabItem";
