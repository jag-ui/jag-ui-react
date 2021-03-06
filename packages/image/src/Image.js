import React from "react";
import { Box } from "@jag-ui-react/box";

export const Image = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="img"
    {...props}
    __themeKey="Image.root"
    __css={{
      maxWidth: "100%",
      height: "auto",
      ...props.__css,
    }}
  />
));
