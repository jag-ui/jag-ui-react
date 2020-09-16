import React from "react";
import { Box } from "@jag-ui-react/box";

export const TabItem = React.forwardRef(({ active, ...props }, ref) => (
  <Box ref={ref} as="a" className={active && "active"} {...props} __themeKey="TabItem.root" __css={{}} />
));
TabItem.displayName = "TabItem";
