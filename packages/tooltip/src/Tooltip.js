import { Popover } from "@jag-ui-react/popover";
import React from "react";

export const Tooltip = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <Popover bg="tooltipBg" color="tooltipText" enableArrow={true} p={2} {...props}>
      {children}
    </Popover>
  );
});
