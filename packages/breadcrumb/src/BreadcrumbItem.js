import React from "react";
import { Box } from "@jag-ui-react/box";
import { Text } from "@jag-ui-react/text";

export const BreadcrumbItem = React.forwardRef(({ as = "a", delimiter = "/", delimiterColor, active, ...props }) => {
  if (active) {
    return (
      <Text
        {...props}
        __css={{
          display: "inline-flex",
          alignItems: "center",
        }}
      />
    );
  }
  return (
    <React.Fragment>
      <Box
        as={as}
        {...props}
        __themeKey="BreadcrumbItem.root"
        __css={{
          color: "primary.main",
          display: "inline-flex",
          alignItems: "center",
          ":hover": {
            color: "primary.dark",
          },
        }}
      />
      <Box
        className="BreadcrumbItem"
        as="span"
        __css={{
          "&::after": {
            content: `"${delimiter}"`,
            color: delimiterColor,
            position: "relative",
            display: "block",
            mx: 2,
          },
        }}></Box>
    </React.Fragment>
  );
});

BreadcrumbItem.displayName = "BreadcrumbItem";
