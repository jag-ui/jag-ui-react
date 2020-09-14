import { Box } from "@jag-ui-react/box";
import { useOnClickOutside } from "@jag-ui-react/hooks";
import React, { useRef, useState } from "react";
import { usePopper } from "react-popper";
import { rootStyle, arrowStyle } from "./PopoverStyles";

const Example = () => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  return (
    <>
      <button type="button" ref={setReferenceElement}>
        Reference element
      </button>

      <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        Popper element
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </>
  );
};

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
      ...props
    },
    ref,
  ) => {
    const [popperRef, setPopperElement] = useState(null);
    const [arrowRef, setArrowElement] = useState(null);

    // enableOutsideClick: only if 'onOutsideClick' prop passed
    useOnClickOutside(!!onOutsideClick, popperRef, onOutsideClick);

    let modifiers = [];
    if (enableArrow) {
      // add: arrow modifiers (only if required)
      modifiers = [
        { name: "arrow", options: { element: arrowRef } },
        // { name: "offset", options: { offset: [0, 10] } },
      ];
    }

    const { styles, attributes } = usePopper(triggerRef && triggerRef.current, popperRef, { placement, modifiers });
    console.log("usePopper", { styles, attributes });

    return active ? (
      <Box
        ref={setPopperElement}
        {...props}
        {...attributes.popper}
        style={styles.popper}
        __themeKey="Popover.root"
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
          __themeKey="Popover.arrow"
          __css={{
            ...arrowStyle,
            color: popoverColor,
          }}
        />
        <Box __themeKey="Popover.container" bg="inherit">
          {children}
        </Box>
      </Box>
    ) : null;
  },
);
