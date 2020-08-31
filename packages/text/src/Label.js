import { Box } from "@jag-ui-react/box";
import React from "react";

export const Label = React.forwardRef((props, ref) => <Box ref={ref} as="label" __themeKey="Label.root" {...props} />);
