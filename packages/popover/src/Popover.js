import { Box } from "@jag-ui-react/box";
import { useOnClickOutside } from "@jag-ui-react/hooks";
import React, { useRef, useState } from "react";
import { usePopper } from "react-popper";

export const Popover = React.forwardRef(
  ({ triggerRef, placement = "top", active, enableArrow = true, onOutsideClick, children, ...props }, ref) => {
    const popperRef = useRef(null);
    const [arrowRef, setArrowRef] = useState(null);

    // enableOutsideClick: only if 'onOutsideClick' prop passed
    useOnClickOutside(!!onOutsideClick, popperRef, onOutsideClick);

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
      <Box ref={popperRef} {...props} __themeKey="Popover.root" style={styles.popper} {...attributes.popper}>
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
