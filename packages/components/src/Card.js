import React from "react";
import { Box } from "@jag-ui-react/core";

export const Card = React.forwardRef((props, ref) => (
  <Box ref={ref} variant="primary" boxShadow="3" {...props} __themeKey="cards" />
));
