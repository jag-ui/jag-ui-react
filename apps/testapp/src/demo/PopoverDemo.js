import { Divider, Heading } from "@jag-ui-react/components";
import React, { useState, useRef } from "react";
import { Box, Flex, Button, Popover } from "jag-ui-react";

const SamplePopover = ({ placement }) => {
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  return (
    <Flex>
      <Button onClick={() => setShowPopper(!showPopper)} ref={buttonRef} mr={3} vcolor="primary">
        Popover "{placement}"
      </Button>
      <Popover triggerRef={buttonRef} placement={placement} active={showPopper} bg="primary" color="white">
        <Box width="200px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida,
          nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
          sollicitudin vel erat vel, interdum mattis neque.
        </Box>
      </Popover>
    </Flex>
  );
};

export default function PopoverDemo() {
  return (
    <Box>
      <Heading>Popover Demo</Heading>
      <Divider />
      <Box m="14rem">
        <Flex justifyContent="space-between">
          <SamplePopover placement="top-start" />
          <SamplePopover placement="top" />
          <SamplePopover placement="top-end" />
        </Flex>
        <Flex mt={3} mb={4} height="250px" justifyContent="space-between">
          <Flex flexDirection="column" justifyContent="space-between" alignItems="flex-start" height="100%" my={10}>
            <SamplePopover placement="left-start" />
            <SamplePopover placement="left" />
            <SamplePopover placement="left-end" />
          </Flex>
          <Flex flexDirection="column" justifyContent="space-between" alignItems="flex-end" height="100%" my={10}>
            <SamplePopover placement="right-start" />
            <SamplePopover placement="right" />
            <SamplePopover placement="right-end" />
          </Flex>
        </Flex>
        <Flex justifyContent="space-between">
          <SamplePopover placement="bottom-start" />
          <SamplePopover placement="bottom" />
          <SamplePopover placement="bottom-end" />
        </Flex>
      </Box>
    </Box>
  );
}
