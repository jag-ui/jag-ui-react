import React, { useRef, useState } from "react";
import { Box } from "@jag-ui-react/box";
import { Icon } from "@jag-ui-react/icon";
import { Tooltip } from "@jag-ui-react/tooltip";

export const IconButton = React.forwardRef(({ size = 5, icon, tooltip, tooltipProps, ...props }, ref) => {
  const buttonRef = useRef(null);
  const [showTooltip, setTooltip] = useState(false);
  return (
    <Box
      ref={ref}
      {...props}
      __themeKey="IconButton.root"
      __css={{
        display: "inline-flex",
      }}>
      <Box
        ref={buttonRef}
        as="button"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        __themeKey="IconButton.button"
        __css={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          lineHeight: "inherit",
          fontSize: "inherit",
          border: 0,
          color: "inherit",
          bg: "transparent",
          cursor: "pointer",
          appearance: "none",
          textDecoration: "none",
          // width: size,
          //height: size,
        }}>
        <Icon icon={icon} __themeKey="IconButton.icon" />
      </Box>

      {tooltip && (
        <Tooltip triggerRef={buttonRef} active={showTooltip} {...tooltipProps}>
          {tooltip}
        </Tooltip>
      )}
    </Box>
  );
});
