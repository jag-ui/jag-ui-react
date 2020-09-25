import React from "react";
import { Box } from "@jag-ui-react/box";

export const Container = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    {...props}
    __themeKey="Container.root"
    __css={{
      width: "100%",
      maxWidth: "container",
      mx: "auto",
    }}
  />
));
