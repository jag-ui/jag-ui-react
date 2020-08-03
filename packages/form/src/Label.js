import React from "react";
import { Box, Flex } from "@jag-ui-react/core";

export const Label = React.forwardRef((props, ref) => (
  <Flex ref={ref} as="label" __themeKey="forms" variant="label" {...props} />
));
