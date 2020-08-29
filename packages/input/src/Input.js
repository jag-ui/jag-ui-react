import React from "react";
import { Box } from "@jag-ui-react/box";

export const Input = React.forwardRef((props, ref) => <Box ref={ref} as="input" {...props} __themeKey="Input.root" />);
