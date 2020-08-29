import React from "react";
import { Box } from "@jag-ui-react/box";
import { Button } from "@jag-ui-react/button";

export const Link = React.forwardRef(({ kind = "link", ...props }, ref) => {
  if (kind === "button") {
    return <Button ref={ref} as="a" {...props} />;
  }
  return <Box ref={ref} as="a" variant="solid" {...props} __themeKey="links" />;
});
