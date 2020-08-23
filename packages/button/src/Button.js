import React from "react";
import { Box } from "@jag-ui-react/box";

export const Button = React.forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      as="button"
      {...props}
      __themeKey="Button.root"
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
    />
  );
});
