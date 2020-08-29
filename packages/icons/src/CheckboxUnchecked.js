import React from "react";
import { Svg } from "@jag-ui-react/icon";

export const CheckboxUnchecked = React.forwardRef((props, ref) => (
  <Svg ref={ref} {...props}>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </Svg>
));
