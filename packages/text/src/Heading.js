import React from "react";
import { Text } from "./Text";

export const Heading = React.forwardRef((props, ref) => (
  <Text ref={ref} as="h2" {...props} __themeKey="Heading.root" />
));
