import React from "react";
import { Box } from "@jag-ui-react/box";

export const Modal = React.forwardRef(({ active, children, onOverlayClick, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      __themeKey="Modal.root"
      __css={{
        display: active ? "flex" : "none",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        top: "0",
        zIndex: "40",
      }}>
      <Box
        __themeKey="Modal.overlay"
        __css={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          top: "0",
          overflow: "hidden",
          bg: "rgba(10, 10, 10, 0.86)",
        }}
        onClick={onOverlayClick}></Box>
      <Box
        {...props}
        __themeKey="Modal.container"
        __css={{
          position: "relative",
          maxHeight: "calc(100vh - 40px)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}>
        {children}
      </Box>
    </Box>
  );
});
