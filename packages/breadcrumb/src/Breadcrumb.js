import React from "react";
import { Box } from "@jag-ui-react/box";

export const Breadcrumb = React.forwardRef(({ children, variant, delimiter, delimiterColor, ...props }, ref) => {
  let tabItems = [];

  React.Children.forEach(children, (child) => {
    if (child.type.displayName === "BreadcrumbItem") {
      const TabItem = React.cloneElement(child, { variant, delimiter, delimiterColor, ...child.props });
      tabItems.push(TabItem);
    }
  });

  return (
    <Box ref={ref} {...props} as="div" variant={variant} __themeKey="Breadcrumb.root" __css={{ display: "flex" }}>
      {tabItems}
    </Box>
  );
});
