import { Box } from "@jag-ui-react/box";
import React from "react";

export const Slider = React.forwardRef((props, ref) => (
  <Box ref={ref} as="input" type="range" {...props} __themeKey="Slider.root" />
));
