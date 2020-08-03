import React from "react";
import { Box } from "@jag-ui-react/core";

export const Link = React.forwardRef((props, ref) => (
  <Box ref={ref} as="a" variant="styles.a" {...props} __themeKey="links" />
));
