import React from "react";
import { Box } from "@jag-ui-react/core";
import { Button } from "@jag-ui-react/button";

export const Link = React.forwardRef(({ kind = "link", ...props }, ref) => {
  if (kind === "button") {
    return <Button ref={ref} as="a" {...props} />;
  }
  return <Box ref={ref} as="a" variant="simple" {...props} __themeKey="links" />;
});
