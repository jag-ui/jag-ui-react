import React from "react";
import { Text } from "jag-ui-react";

export const Heading = ({ variant = "h3", as = "h3", ...props }) => <Text variant={variant} as={as} {...props} />;
