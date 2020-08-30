import React from "react";
import { Box } from "@jag-ui-react/box";

export const Divider = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="hr"
    __themeKey="Divider.root"
    {...props}
    __css={{
      color: "divider",
      width: "70%",
      m: 0,
      // my: 2,
      border: 0,
      borderBottom: "1px solid",
    }}
  />
));
