import { Box } from "@jag-ui-react/box";
import { Svg } from "@jag-ui-react/svg";
import React from "react";

const CheckboxChecked = (props) => (
  <Svg {...props}>
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </Svg>
);

const CheckboxUnchecked = (props) => (
  <Svg {...props}>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </Svg>
);

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
