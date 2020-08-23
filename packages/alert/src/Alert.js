import React from "react";
import { Box } from "@jag-ui-react/box";

export const Alert = React.forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      {...props}
      __themeKey="Alert.root"
      __css={{
        display: "flex",
        alignItems: "center",
        px: 3,
        py: 2,
      }}
    />
  );
});
