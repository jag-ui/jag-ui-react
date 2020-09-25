import React from "react";
import { Svg } from "@jag-ui-react/icon";

export const DropdownCaret = React.forwardRef((props, ref) => (
  <Svg ref={ref} {...props}>
    <path d="M7 10l5 5 5-5z" />
  </Svg>
));
