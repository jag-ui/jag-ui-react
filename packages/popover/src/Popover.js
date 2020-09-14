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
      <Box
        ref={popperRef}
        {...props}
        {...attributes.popper}
        style={styles.popper}
        __themeKey="Popover.root"
        __css={{
          backgroundColor: "white",
          maxWidth: "80%",
          '&[data-popper-placement^="top"] > .popover-arrow': {
            bottom: "5px",
          },
          '&[data-popper-placement^="bottom"] > .popover-arrow': {
            top: "-5px",
          },
          '&[data-popper-placement^="left"] > .popover-arrow': {
            right: "5px",
            top: "-5px",
          },
          '&[data-popper-placement^="right"] > .popover-arrow': {
            left: "-5px",
            top: "-5px",
          },
        }}>
        <Box
          ref={setArrowRef}
          sx={styles.arrow}
          hidden={!enableArrow}
          className="popover-arrow"
          __themeKey="Popover.arrow"
          __css={{
            position: "absolute",
            width: "0",
            height: "0",
            backgroundColor: "inherit",
            color: "inherit",
            "&:after": {
              content: '" "',
              backgroundColor: "inherit",
              color: "inherit",
              position: "absolute",
              top: "0",
              left: "0",
              width: "10px",
              height: "10px",
              transform: "rotate(45deg)",
            },
          }}></Box>
        <Box __themeKey="Popover.container">{children}</Box>
      </Box>
    ) : null;
  },
);
