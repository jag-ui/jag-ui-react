import React from "react";
import { Box } from "@jag-ui-react/box";

export const TabItem = React.forwardRef(({ active, ...props }, ref) => (
  <Box ref={ref} as="li" __themeKey="Tabs.li">
    <Box ref={ref} as="a" className={active && "active"} {...props} __themeKey="Tabs.a" __css={{}} />
  </Box>
));
TabItem.displayName = "TabItem";
