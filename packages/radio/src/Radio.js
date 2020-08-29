import React from "react";
import { Box } from "@jag-ui-react/box";
import { Svg } from "@jag-ui-react/svg";

const RadioChecked = (props) => (
  <Svg {...props}>
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </Svg>
);

const RadioUnchecked = (props) => (
  <Svg {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </Svg>
);

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
    <Box ref={ref} as="input" type="radio" __themeKey="Radio.radio" {...props} />
    <Box as={RadioIcon} aria-hidden="true" __themeKey="Radio.icon" className={className} />
  </Box>
));
