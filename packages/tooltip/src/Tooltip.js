import { Popover } from "@jag-ui-react/popover";
import React from "react";

export const Tooltip = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <Popover enableArrow={true} bg="tooltipBg" color="tooltipText" mx={2} p={2} {...props}>
      {children}
    </Popover>
  );
});
