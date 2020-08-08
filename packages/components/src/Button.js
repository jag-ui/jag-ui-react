import React from "react";
import { Box } from "@jag-ui-react/core";
import { useThemeUI } from "theme-ui";

const defaultBtnsizes = {
  sm: { px: 2, py: 1 },
  md: { px: 3, py: 2 },
  lg: { px: 4, py: 3 },
  xl: { px: 5, py: 3 },
};

export const Button = React.forwardRef(({ size = "md", ...props }, ref) => {
  const context = useThemeUI();
  const btnSizes = (context && context.theme && context.theme.buttons.sizes) || defaultBtnsizes;
  return (
    <Box
      ref={ref}
      as="button"
      variant="primary"
      {...props}
      __themeKey="buttons"
      __css={{
        display: "inline-block",
        textAlign: "center",
        lineHeight: "inherit",
        fontSize: "inherit",
        border: 0,
        cursor: "pointer",
        appearance: "none",
        textDecoration: "none",
        ...btnSizes[size],
      }}
    />
  );
});
