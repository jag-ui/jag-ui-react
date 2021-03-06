import { Box } from "@jag-ui-react/box";
import React from "react";

export const Svg = React.forwardRef(({ size = 24, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width={size + "px"}
      height={size + "px"}
      viewBox="0 0 24 24"
      fill="currentcolor"
      {...props}
    />
  );
});
