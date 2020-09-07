import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Flex, Text } from "jag-ui-react";
import React, { useRef, useState } from "react";

const MyDropdown = ({ selectedItem, items, onSelect, defaultTitle, leftIcon }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const buttonRef = useRef(null);
  const handleSelect = (item) => {
    onSelect(item);
    setDropdownActive(false);
  };
  return (
    <Dropdown active={dropdownActive} placement="bottom-end" onOutsideClick={() => setDropdownActive(false)}>
      <DropdownToggle caret>
        <Button
          onClick={() => setDropdownActive(!dropdownActive)}
          ref={buttonRef}
          variant="outline"
          vcolor="primary"
          mr={2}>
          <Flex alignItems="center">
            {leftIcon}
            <Text>{selectedItem ? selectedItem.name : defaultTitle}</Text>
          </Flex>
        </Button>
      </DropdownToggle>
      <DropdownMenu bg="white">
        {items &&
          items.map((item) => (
            <DropdownItem as="button" key={item.id} onClick={() => handleSelect(item)}>
              {item.name}
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
};

MyDropdown.propTypes = {};

export default MyDropdown;
