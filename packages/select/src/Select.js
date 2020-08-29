import { Box } from "@jag-ui-react/box";
import { DropdownCaret } from "@jag-ui-react/icons";
import { getMargin, omitMargin } from "@jag-ui-react/utils";
import React from "react";

export const Select = React.forwardRef((props, ref) => (
  <Box __themeKey="Select.root" __css={{ display: "flex" }} {...getMargin(props)}>
    <Box
      ref={ref}
      as="select"
      variant="select"
      {...omitMargin(props)}
      __themeKey="Select.select"
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
        bg: "transparent",
      }}
    />
    <DropdownCaret
      __themeKey="Select.caret"
      sx={{
        ml: -28,
        alignSelf: "center",
        pointerEvents: "none",
      }}
    />
  </Box>
));
