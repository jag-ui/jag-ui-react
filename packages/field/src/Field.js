import React from "react";
import { Box } from "@jag-ui-react/box";
import { Label } from "@jag-ui-react/text";
import { Input } from "@jag-ui-react/input";
import { getMargin, omitMargin } from "@jag-ui-react/utils";

export const Field = React.forwardRef(({ as: Control = Input, label, name, ...props }, ref) => {
  return (
    <Box {...getMargin(props)}>
      <Label htmlFor={name}>{label}</Label>
      <Control ref={ref} id={name} name={name} {...omitMargin(props)} />
    </Box>
  );
});
