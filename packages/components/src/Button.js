import React from "react";
import { Box } from "@jag-ui-react/box";

export const Button = React.forwardRef(
  ({ variant = "solid", vcolor = "default", vsize = "md", textColor, ...props }, ref) => {
    console.log("Button22");

    return (
      <Box
        ref={ref}
        as="button"
        variant={variant}
        vcolor={vcolor}
        vsize={vsize}
        {...props}
        __themeKey="buttons111"
        __css={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          lineHeight: "inherit",
          fontSize: "inherit",
          border: 0,
          cursor: "pointer",
          appearance: "none",
          textDecoration: "none",
          color: textColor,
        }}
      />
    );
  },
);
