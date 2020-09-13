import React from "react";
import { Box } from "@jag-ui-react/box";
import { RadioChecked, RadioUnchecked } from "@jag-ui-react/icons";

const RadioIcon = (props) => (
  <React.Fragment>
    <RadioChecked
      {...props}
      __css={{
        display: "none",
        "input:checked ~ &": {
          display: "block",
        },
      }}
    />
    <RadioUnchecked
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

export const Radio = React.forwardRef(({ className, ...props }, ref) => (
  <Box __themeKey="Radio.root">
    <Box
      {...props}
      ref={ref}
      as="input"
      type="radio"
      __themeKey="Radio.radio"
      __css={{ position: "absolute", opacity: 0, zIndex: -1, width: "inherit", height: "inherit", overflow: "hidden" }}
    />
    <Box as={RadioIcon} aria-hidden="true" __themeKey="Radio.icon" className={className} />
  </Box>
));
