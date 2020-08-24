import { Divider, Heading } from "@jag-ui-react/components";
import { Box, Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Flex } from "jag-ui-react";
import React, { useRef, useState } from "react";

const SamplePopover = ({ placement }) => {
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  return (
    <Flex>
      <Dropdown active={showPopper} placement={placement}>
        <DropdownToggle caret>
          <Button onClick={() => setShowPopper(!showPopper)} ref={buttonRef} vcolor="primary" vsize="sm">
            Dropdown "{placement}"
          </Button>
        </DropdownToggle>
        <DropdownMenu bg="primary" color="white">
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Flex>
  );
};

export default function DropdownDemo() {
  return (
    <Box>
      <Heading>Dropdown Demo</Heading>
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
