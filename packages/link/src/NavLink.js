import React from "react";
import { Link } from "./Link";

export const NavLink = React.forwardRef((props, ref) => (
  <Link
    ref={ref}
    __themeKey="NavLink.root"
    {...props}
    __css={{
      color: "inherit",
      textDecoration: "none",
      fontWeight: "bold",
      display: "inline-block",
      "&:hover, &:focus, &.active": {
        color: "primary",
      },
    }}
  />
));
