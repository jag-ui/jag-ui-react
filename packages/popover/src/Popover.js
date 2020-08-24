import React, { useState, useRef, Fragment } from "react";
import { usePopper } from "react-popper";
import { Box } from "@jag-ui-react/box";
// import styled from "@emotion/styled";
// const PopperContainer = styled.div`
//   /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
//   border-radius: 5px;
//   background-color: white;
//   padding: 20px;
//   text-align: center; */

//   #arrow {
//     position: absolute;
//     width: 10px;
//     height: 10px;
//     &:after {
//       content: " ";
//       background-color: white;
//       box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
//       position: absolute;
//       top: -25px; // padding + popper height
//       left: 0;
//       transform: rotate(45deg);
//       width: 10px;
//       height: 10px;
//     }
//   }

//   &[data-popper-placement^="top"] > #arrow {
//     bottom: -30px;
//     :after {
//       box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
//     }
//   }
// `;

export const Popover = React.forwardRef(({ active, triggerRef, placement, children, ...props }, ref) => {
  // const buttonRef = useRef(null);
  const popperRef = useRef(null);
  // the ref for the arrow must be a callback ref
  const [arrowRef, setArrowRef] = useState(null);

  const { styles, attributes } = usePopper(triggerRef.current, popperRef.current, {
    placement,
    modifiers: [
      { name: "arrow", options: { element: arrowRef } },
      { name: "offset", options: { offset: [0, 10] } },
    ],
  });

  return active ? (
    <Box ref={popperRef} {...props} __themeKey="Popover.root" __css={styles.popper} {...attributes.popper}>
      <Box id="arrow" ref={setArrowRef} __themeKey="Popover.arrow" __css={styles.arrow}></Box>
      <Box __themeKey="Popover.container">{children}</Box>
    </Box>
  ) : null;
});
