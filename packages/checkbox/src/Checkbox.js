import { Box } from "@jag-ui-react/box";
import { CheckboxChecked, CheckboxUnchecked } from "@jag-ui-react/icons";
import React from "react";

const CheckboxIcon = (props) => (
  <React.Fragment>
    <CheckboxChecked
      {...props}
      __css={{
        display: "none",
        "input:checked ~ &": {
          display: "block",
        },
      }}
    />
    <CheckboxUnchecked
      {...props}
      __css={{
        display: "block",
        "input:checked ~ &": {
          display: "none",
        },
      }}
    />
  </React.Fragment>
);

export const Checkbox = React.forwardRef(({ variant, children, ...props }, ref) => (
  <Box __themeKey="Checkbox.root">
    <Box ref={ref} as="input" type="checkbox" variant={variant} __themeKey="Checkbox.checkbox" {...props} />
    <Box as={CheckboxIcon} aria-hidden="true" variant={variant} __themeKey="Checkbox.icon" />
    {children}
  </Box>
));
