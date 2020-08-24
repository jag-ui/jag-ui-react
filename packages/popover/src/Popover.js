import { Box } from "@jag-ui-react/box";
import React, { useRef, useState } from "react";
import { usePopper } from "react-popper";

export const Popover = React.forwardRef(
  ({ active, enableArrow = true, triggerRef, placement, children, ...props }, ref) => {
    const popperRef = useRef(null);
    const [arrowRef, setArrowRef] = useState(null);

    let modifiers = [];
    if (enableArrow) {
      // add: arrow modifiers (only if required)
      modifiers = [
        { name: "arrow", options: { element: arrowRef } },
        { name: "offset", options: { offset: [0, 10] } },
      ];
    }

    const { styles, attributes } = usePopper(triggerRef.current, popperRef.current, { placement, modifiers });

    return active ? (
      <Box ref={popperRef} {...props} __themeKey="Popover.root" __css={styles.popper} {...attributes.popper}>
        <Box
          className="popover-arrow"
          ref={setArrowRef}
          __themeKey="Popover.arrow"
          sx={styles.arrow}
          hidden={!enableArrow}></Box>
        <Box __themeKey="Popover.container">{children}</Box>
      </Box>
    ) : null;
  },
);
