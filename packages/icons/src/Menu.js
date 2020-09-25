import React from "react";
import { Svg } from "@jag-ui-react/icon";

export const Menu = React.forwardRef((props, ref) => (
  <Svg ref={ref} {...props}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </Svg>
));
