import React from "react";
import { Box } from "@jag-ui-react/core";
import { useThemeUI } from "theme-ui";

const defaultBtnsizes = {
  // sm: { px: 2, py: 1 },
  // md: { px: 3, py: 2 },
  // lg: { px: 4, py: 3 },
  // xl: { px: 5, py: 3 },
};

export const Button = React.forwardRef(
  ({ variant = "simple", xcolor = "default", xsize = "md", textColor, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        as="button"
        variant={variant}
        xcolor={xcolor}
        xsize={xsize}
        {...props}
        __themeKey="buttons"
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
