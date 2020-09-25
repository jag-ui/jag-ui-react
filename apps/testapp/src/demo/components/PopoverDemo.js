import { Box, Button, Divider, Flex, Popover } from "jag-ui-react";
import React, { useRef, useState } from "react";
import { Heading } from "../../components/Heading";
const SamplePopover = ({ placement }) => {
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  return (
    <Flex>
      <Button onClick={() => setShowPopper(!showPopper)} ref={buttonRef} p={3} m={3} vcolor="primary" vsize="sm">
        Popover "{placement}"
      </Button>
      <Popover
        triggerRef={buttonRef}
        placement={placement}
        active={showPopper}
        onOutsideClick={() => setShowPopper(false)}>
        <Box width="200px" p={2}>
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
      <Box mt="200px" mb="500px">
        <Flex justifyContent="space-between">
          <SamplePopover placement="top-start" />
          <SamplePopover placement="top" />
          <SamplePopover placement="top-end" />
        </Flex>
        <Flex mt={3} mb={4} height="250px" justifyContent="space-between">
          <Flex flexDirection="column" justifyContent="space-between" alignItems="flex-start" height="100%" my={10}>
            <SamplePopover placement="right-start" />
            <SamplePopover placement="right" />
            <SamplePopover placement="right-end" />
          </Flex>
          <Flex flexDirection="column" justifyContent="space-between" alignItems="flex-end" height="100%" my={10}>
            <SamplePopover placement="left-start" />
            <SamplePopover placement="left" />
            <SamplePopover placement="left-end" />
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
