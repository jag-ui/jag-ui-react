import { Box } from "@jag-ui-react/box";
import { useOnClickOutside } from "@jag-ui-react/hooks";
import React, { useState } from "react";
import { usePopper } from "react-popper";
import { arrowStyle, rootStyle } from "./PopoverStyles";

export const Popover = React.forwardRef(
  (
    {
      triggerRef,
      placement = "top",
      active,
      enableArrow = true,
      onOutsideClick,
      children,
      popoverColor = "inherit",
      __component = "Popover",
      ...props
    },
    ref,
  ) => {
    const [popperRef, setPopperElement] = useState(null);
    const [arrowRef, setArrowElement] = useState(null);

    // enableOutsideClick: only if 'onOutsideClick' prop passed
    useOnClickOutside(!!onOutsideClick && active, popperRef, onOutsideClick);

    let modifiers = [];
    if (enableArrow) {
      // add: arrow modifiers (only if required)
      modifiers = [
        { name: "arrow", options: { element: arrowRef } },
        // { name: "offset", options: { offset: [0, 10] } },
      ];
    }

    const { styles, attributes } = usePopper(triggerRef && triggerRef.current, popperRef, { placement, modifiers });
    // console.log("usePopper", { styles, attributes });

    return active ? (
      <Box
        ref={setPopperElement}
        {...props}
        {...attributes.popper}
        style={styles.popper}
        __themeKey={`${__component}.root`}
        __css={{
          ...rootStyle,
          // zIndex: "1060",
          // maxWidth: "276px",
          backgroundColor: popoverColor,
        }}>
        <Box
          ref={setArrowElement}
          {...attributes.arrow}
          style={styles.arrow}
          data-popper-arrow
          className="popover-arrow"
          __themeKey={`${__component}.arrow`}
          __css={{
            ...arrowStyle,
            color: popoverColor,
          }}
        />

        {__component === "Popover" ? (
          <Box __themeKey={`${__component}.container`} bg="inherit">
            {children}
          </Box>
        ) : (
          children
        )}
      </Box>
    ) : null;
  },
);
