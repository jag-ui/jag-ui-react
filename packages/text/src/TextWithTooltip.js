import { Box } from "@jag-ui-react/box";
import { Tooltip } from "@jag-ui-react/tooltip";
import React, { useRef, useState } from "react";

const truncate = (str, maxLength, truncateType, separator = "...") => {
  let resStr = str;
  if (truncateType === "middle") {
    // truncate: middle
    const charsToShow = maxLength,
      frontChars = Math.ceil(charsToShow / 2),
      backChars = Math.floor(charsToShow / 2);
    resStr = str.substr(0, frontChars) + separator + str.substr(str.length - backChars);
  } else {
    // truncate: end
    resStr = str.substr(0, maxLength) + separator;
  }
  return resStr;
};

export const TextWithTooltip = React.forwardRef(
  ({ maxLength, truncateType, tooltipPlacement, tooltip, children, ...props }, ref) => {
    console.log("TextWithTooltip", { maxLength });
    const [showPopper, setShowPopper] = useState(false);
    const triggerRef = useRef(null);

    const tooltipText = tooltip || children;
    let displayText = children;
    if (typeof displayText === "string" && !!maxLength && displayText.length >= maxLength) {
      displayText = truncate(children, maxLength, truncateType);
    }

    return (
      <Box ref={ref} __themeKey="TextWithTooltip.root">
        <Box
          onMouseEnter={() => setShowPopper(true)}
          onMouseLeave={() => setShowPopper(true)}
          ref={triggerRef}
          __themeKey="TextWithTooltip.text"
          {...props}>
          {displayText}
        </Box>
        <Tooltip triggerRef={triggerRef} placement={tooltipPlacement} active={showPopper}>
          {tooltipText}
        </Tooltip>
      </Box>
    );
  },
);
