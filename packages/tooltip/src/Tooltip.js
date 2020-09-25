import { Box } from "@jag-ui-react/box";
import { Popover } from "@jag-ui-react/popover";
import React from "react";

export const Tooltip = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <Popover {...props} enableArrow={true} __component="Tooltip" popoverColor="#000">
      <Box
        __themeKey="Tooltip.container"
        __css={{
          bg: "#000",
          color: "#fff",
          p: 2,
        }}>
        {children}
      </Box>
    </Popover>
  );
});
