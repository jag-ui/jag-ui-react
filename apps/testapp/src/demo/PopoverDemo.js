import { Divider, Heading } from "@jag-ui-react/components";
import { Box } from "@jag-ui-react/core";
import React, { useState, useRef } from "react";
import { Button, Popover } from "jag-ui-react";

const SamplePopover = () => {
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  return (
    <>
      <Button onClick={() => setShowPopper(!showPopper)} ref={buttonRef}>
        Toggle Popover
      </Button>
      <Popover triggerRef={buttonRef} placement="bottom" active={showPopper}>
        Hello Popover!
      </Popover>
    </>
  );
};

export default function PopoverDemo() {
  return (
    <Box>
      <Heading>Popover Demo</Heading>
      <Divider />
      <Box my={10}>
        <SamplePopover />
      </Box>
    </Box>
  );
}
