import { Divider, Heading } from "@jag-ui-react/components";
import { Box } from "@jag-ui-react/core";
import React, { useState, useRef } from "react";
import { Button, Popover } from "jag-ui-react";

const SamplePopover = ({ placement }) => {
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  return (
    <>
      <Button onClick={() => setShowPopper(!showPopper)} ref={buttonRef} mr={3} vcolor="primary">
        Toggle Popover
      </Button>
      <Popover triggerRef={buttonRef} placement={placement} active={showPopper} bg="primary">
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
        <SamplePopover placement="top" />
        <SamplePopover placement="bottom" />
        <SamplePopover placement="right" />
        <SamplePopover placement="left" />
      </Box>
    </Box>
  );
}
