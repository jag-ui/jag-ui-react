import React, { useRef } from "react";
import { Box } from "@jag-ui-react/box";
import { Popover } from "@jag-ui-react/popover";

export const DropdownToggle = React.forwardRef((props, ref) => {
  return <Box ref={ref} {...props} __themeKey="Dropdown.toggle"></Box>;
});
DropdownToggle.displayName = "DropdownToggle";

export const DropdownMenu = React.forwardRef((props, ref) => {
  return <Box ref={ref} {...props} __themeKey="Dropdown.menu"></Box>;
});
DropdownMenu.displayName = "DropdownMenu";

export const DropdownItem = React.forwardRef((props, ref) => {
  return <Box ref={ref} {...props} __themeKey="Dropdown.menuItem"></Box>;
});
DropdownItem.displayName = "DropdownItem";

export const Dropdown = React.forwardRef(({ placement, active, children, ...props }, ref) => {
  const buttonRef = useRef(null);

  let DropdownToggle = null;
  let DropdownMenu = null;
  let DropdownMenuProps = {};

  React.Children.forEach(children, (child) => {
    // TODO: Change the name prop to this.props.name
    switch (child.type.displayName) {
      case "DropdownToggle": {
        DropdownToggle = child;
        break;
      }
      case "DropdownMenu": {
        // takeout: props from 'DropdownMenu' and assign it to 'Popover'
        const { children, ...rest } = child.props;
        DropdownMenu = React.cloneElement(child, { children });
        DropdownMenuProps = rest;
        break;
      }
      default:
        console.error("Dropdown: Invalid Child Component");
    }
  });

  return (
    <Box ref={ref} {...props}>
      <Box ref={buttonRef}>{DropdownToggle}</Box>
      <Popover triggerRef={buttonRef} placement={placement} active={active} disableArrow {...DropdownMenuProps}>
        {DropdownMenu}
      </Popover>
    </Box>
  );
});
