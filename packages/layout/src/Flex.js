import { Box } from "@jag-ui-react/box";
import React from "react";

export const Flex = React.forwardRef((props, ref) => <Box ref={ref} {...props} __css={{ display: "flex" }} />);
