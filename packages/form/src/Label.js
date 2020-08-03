import React from "react";
import { Box } from "@jag-ui-react/core";

export const Label = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="label"
    variant="label"
    {...props}
    __themeKey="forms"
    __css={{
      width: "100%",
      display: "flex",
    }}
  />
));
