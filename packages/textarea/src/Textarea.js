import React from "react";
import { Box } from "@jag-ui-react/box";

export const Textarea = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="textarea"
    {...props}
    __themeKey="Textarea.root"
    __css={{
      display: "block",
      width: "100%",
      p: 2,
      appearance: "none",
      fontSize: "inherit",
      lineHeight: "inherit",
      border: "1px solid",
      borderRadius: 4,
      color: "inherit",
    }}
  />
));
