import React from "react";
import { Box } from "@jag-ui-react/core";
import { useThemeUI } from "theme-ui";

const defaultBtnsizes = {
  // sm: { px: 2, py: 1 },
  // md: { px: 3, py: 2 },
  // lg: { px: 4, py: 3 },
  // xl: { px: 5, py: 3 },
};

export const Button = React.forwardRef(({ variant = "simple", color = "default", size = "md", ...props }, ref) => {
  const context = useThemeUI();
  let btnSizes = {};
  let btnColors = {};
  if (context && context.theme && context.theme.buttons && context.theme.buttons[variant]) {
    btnSizes = context.theme.buttons[variant].sizes || defaultBtnsizes;
    btnColors = context.theme.buttons[variant].colors || btnColors;
  }
  // console.log("Button", { btnColors, btnSizes, size: btnSizes[size] });
  return (
    <Box
      ref={ref}
      as="button"
      variant={variant}
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
      }}
      __xtras={{ ...btnSizes[size], ...btnColors[color] }}
    />
  );
});
