import React from "react";
import { Box } from "@jag-ui-react/box";

export const Link = React.forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      as="a"
      variant="solid"
      {...props}
      __css={{
        display: "inline-flex",
        alignItems: "center",
      }}
      __themeKey="Link.root"
    />
  );
});
