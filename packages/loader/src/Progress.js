import React from "react";
import { Box } from "@jag-ui-react/box";

export const Progress = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="progress"
    __themeKey="Progress.root"
    {...props}
    __css={{
      display: "block",
      width: "100%",
      height: "4px",
      margin: 0,
      padding: 0,
      overflow: "hidden",
      appearance: "none",
      color: "primary",
      bg: "gray",
      borderRadius: 9999,
      border: "none",
      "&::-webkit-progress-bar": {
        bg: "transparent",
      },
      "&::-webkit-progress-value": {
        bg: "currentcolor",
      },
      "&::-moz-progress-bar": {
        bg: "currentcolor",
      },
    }}
  />
));
