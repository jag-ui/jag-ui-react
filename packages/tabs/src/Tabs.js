import React from "react";
import { Box } from "@jag-ui-react/box";

export const Tabs = React.forwardRef(({ children, variant, ...props }, ref) => {
  let tabItems = [];

  React.Children.forEach(children, (child) => {
    if (child.type.displayName === "TabItem") {
      const TabItem = React.cloneElement(child, { variant, ...child.props });
      tabItems.push(TabItem);
    }
  });

  return (
    <Box
      ref={ref}
      as="div"
      variant={variant}
      __themeKey="Tabs.root"
      __css={{
        alignItems: "stretch",
        display: "flex",
        fontSize: "1rem",
        justifyContent: "space-between",
        overflow: "hidden",
        overflowX: "auto",
        whiteSpace: "nowrap",
        userSelect: "none",
      }}>
      <Box
        ref={ref}
        as="ul"
        variant={variant}
        {...props}
        __themeKey="Tabs.ul"
        __css={{
          alignItems: "center",
          borderBottomColor: "#dbdbdb",
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          display: "flex",
          flexGrow: "1",
          flexShrink: "0",
          justifyContent: "flex-start",
        }}>
        {tabItems}
      </Box>
    </Box>
  );
});
