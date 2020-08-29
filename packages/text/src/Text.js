import React from "react";
import { Box } from "@jag-ui-react/box";

export const Text = React.forwardRef((props, ref) => <Box ref={ref} __themeKey="Text.root" {...props} />);
