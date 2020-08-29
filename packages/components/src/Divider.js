import React from "react";
import { Box } from "@jag-ui-react/box";

export const Divider = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="hr"
    variant="styles.hr"
    {...props}
    __css={{
      color: "divider",
      m: 0,
      my: 2,
      border: 0,
      borderBottom: "1px solid",
    }}
  />
));
