import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Flex, Text, Icon, Box } from "jag-ui-react";
import React, { useRef, useState } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";

const MyDropdownItem = ({ item, selectedItem, onSelect }) => {
  return (
    <DropdownItem as="button" key={item.id} onClick={() => onSelect(item)}>
      <Box as="span" width="1.5rem" color="primary.main">
        {selectedItem && selectedItem.id === item.id && <FaCheck />}
      </Box>
      {item.name}
    </DropdownItem>
  );
};

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
          {leftIcon}
          <Text flexShrink={0}>{selectedItem ? selectedItem.name : defaultTitle}</Text>
          <Icon icon={<FaChevronDown />} ml={2} />
        </Button>
      </DropdownToggle>
      <DropdownMenu bg="white" width={200}>
        {items &&
          items.map((item) => <MyDropdownItem item={item} selectedItem={selectedItem} onSelect={handleSelect} />)}
      </DropdownMenu>
    </Dropdown>
  );
};

MyDropdown.propTypes = {};

export default MyDropdown;
