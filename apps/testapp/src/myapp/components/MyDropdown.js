import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Flex, Text, Icon } from "jag-ui-react";
import React, { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const MyDropdown = ({ selectedItem, items, onSelect, defaultTitle, leftIcon, ...props }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const buttonRef = useRef(null);
  const handleSelect = (item) => {
    onSelect(item);
    setDropdownActive(false);
  };
  return (
    <Dropdown active={dropdownActive} placement="bottom-end" onOutsideClick={() => setDropdownActive(false)} {...props}>
      <DropdownToggle>
        <Button onClick={() => setDropdownActive(!dropdownActive)} ref={buttonRef} variant="outline" vcolor="primary">
          <Flex alignItems="center">
            {leftIcon}
            <Text>{selectedItem ? selectedItem.name : defaultTitle}</Text>
            <Icon icon={<FaChevronDown />} ml={2} />
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
