import { Box, Button, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Flex, Icon } from "jag-ui-react";
import React, { useRef, useState } from "react";
import { FaCog } from "react-icons/fa";
import { Heading } from "../../components/Heading";

const SampleDropdown = ({ placement }) => {
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  return (
    <Flex>
      <Dropdown active={showPopper} placement={placement} onOutsideClick={() => setShowPopper(false)}>
        <DropdownToggle caret>
          <Button onClick={() => setShowPopper(!showPopper)} ref={buttonRef} vcolor="primary" vsize="sm">
            Dropdown {placement && `"${placement}"`}
          </Button>
        </DropdownToggle>
        <DropdownMenu bg="white">
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem as="button">Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem as="a" href="http://www.jagadeeshpalaniappan.com" target="_blank">
            Menu Item (Anchor)
          </DropdownItem>
          <DropdownItem as="button">Bar Action</DropdownItem>
          <DropdownItem as="button">Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Flex>
  );
};

const IconDropdown = ({ placement }) => {
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  return (
    <Flex>
      <Dropdown active={showPopper} placement={placement} onOutsideClick={() => setShowPopper(false)}>
        <DropdownToggle caret>
          <Button variant="icon" vcolor="primary" mr={3} onClick={() => setShowPopper(!showPopper)} ref={buttonRef}>
            <Icon icon={<FaCog />} />
          </Button>
        </DropdownToggle>
        <DropdownMenu bg="white">
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem as="button">Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem as="a" href="http://www.jagadeeshpalaniappan.com" target="_blank">
            Menu Item (Anchor)
          </DropdownItem>
          <DropdownItem as="button">Bar Action</DropdownItem>
          <DropdownItem as="button">Quo Action</DropdownItem>
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

      <Heading>Dropdown</Heading>
      <Divider />
      <Flex mb={5} justifyContent="space-around">
        <SampleDropdown placement="bottom-start" />
        <SampleDropdown />
        <SampleDropdown placement="bottom-end" />
      </Flex>

      <Heading>Icon Dropdown</Heading>
      <Divider />
      <Flex mb={5} justifyContent="space-around">
        <IconDropdown placement="bottom-start" />
        <IconDropdown />
        <IconDropdown placement="bottom-end" />
      </Flex>

      <Heading>Dropdown (All Placements)</Heading>
      <Box m="12.5rem">
        <Flex justifyContent="space-between">
          <SampleDropdown placement="top-start" />
          <SampleDropdown placement="top" />
          <SampleDropdown placement="top-end" />
        </Flex>
        <Flex mt={3} mb={4} height="250px" justifyContent="space-between">
          <Flex flexDirection="column" justifyContent="space-between" alignItems="flex-start" height="100%" my={10}>
            <SampleDropdown placement="left-start" />
            <SampleDropdown placement="left" />
            <SampleDropdown placement="left-end" />
          </Flex>
          <Flex flexDirection="column" justifyContent="space-between" alignItems="flex-end" height="100%" my={10}>
            <SampleDropdown placement="right-start" />
            <SampleDropdown placement="right" />
            <SampleDropdown placement="right-end" />
          </Flex>
        </Flex>
        <Flex justifyContent="space-between">
          <SampleDropdown placement="bottom-start" />
          <SampleDropdown placement="bottom" />
          <SampleDropdown placement="bottom-end" />
        </Flex>
      </Box>
    </Box>
  );
}
