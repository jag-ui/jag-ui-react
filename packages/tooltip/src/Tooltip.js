import { Popover } from "@jag-ui-react/popover";
import React from "react";

export const Tooltip = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <Popover
      {...props}
      enableArrow={true}
      __css={{
        bg: "#fff",
        mx: 2,
        p: 2,
      }}>
      {children}
    </Popover>
  );
});
