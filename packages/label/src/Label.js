import { Flex } from "@jag-ui-react/box";
import React from "react";

export const Label = React.forwardRef((props, ref) => <Flex ref={ref} as="label" __themeKey="Label.root" {...props} />);
