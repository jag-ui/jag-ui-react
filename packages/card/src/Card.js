import React from "react";
import { Box } from "@jag-ui-react/box";

// TODO: we can delete this
export const Card = React.forwardRef((props, ref) => (
  <Box ref={ref} variant="primary" boxShadow="default" {...props} __themeKey="Card.root" />
));
