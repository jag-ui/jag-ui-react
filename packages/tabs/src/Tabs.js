import React from "react";
import { Box } from "@jag-ui-react/box";

export const Tabs = React.forwardRef(({ as = "ul", children, variant, vsize, ...props }, ref) => {
  let tabItems = [];

  React.Children.forEach(children, (child) => {
    // if (child.type.displayName === "TabItem") {
    const TabItem = React.cloneElement(child, { variant, vsize, ...child.props });
    tabItems.push(TabItem);
    // }
  });

  return (
    <Box ref={ref} {...props} as="div" variant={variant} __themeKey="Tabs.root" __css={{}}>
      <Box ref={ref} {...props} as={as} variant={variant} __themeKey="Tabs.ul" __css={{}}>
        {tabItems}
      </Box>
    </Box>
  );
});
