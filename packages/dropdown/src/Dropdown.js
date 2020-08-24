import React, { useRef } from "react";
import { Box } from "@jag-ui-react/box";
import { Popover } from "@jag-ui-react/popover";
import { Divider } from "@jag-ui-react/components";

export const DropdownToggle = React.forwardRef((props, ref) => {
  return <Box ref={ref} {...props} __themeKey="Dropdown.toggle"></Box>;
});
DropdownToggle.displayName = "DropdownToggle";

export const DropdownMenu = React.forwardRef((props, ref) => {
  return <Box ref={ref} {...props} __themeKey="Dropdown.menu"></Box>;
});
DropdownMenu.displayName = "DropdownMenu";

export const DropdownItem = React.forwardRef(({ header, disabled, divider, ...props }, ref) => {
  if (header) {
    return (
      <Box
        ref={ref}
        {...props}
        __themeKey="Dropdown.menuItem.header"
        __css={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          bg: "inherit",
          color: "inherit",
          lineHeight: "inherit",
          border: 0,
          cursor: "not-allowed",
          appearance: "none",
          opacity: ".65",
          boxShadow: "none",
          transform: "none",
        }}></Box>
    );
  } else if (disabled) {
    return (
      <Box
        ref={ref}
        {...props}
        __themeKey="Dropdown.menuItem.disabled"
        __css={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          bg: "inherit",
          color: "inherit",
          lineHeight: "inherit",
          fontSize: "inherit",
          border: 0,
          cursor: "not-allowed",
          appearance: "none",
          opacity: ".65",
          boxShadow: "none",
          transform: "none",
        }}></Box>
    );
  } else if (divider) {
    return <Divider ref={ref} {...props} __themeKey="Dropdown.menuItem.divider" />;
  }
  return (
    <Box
      ref={ref}
      {...props}
      __themeKey="Dropdown.menuItem.root"
      __css={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        bg: "inherit",
        color: "inherit",
        lineHeight: "inherit",
        fontSize: "inherit",
        border: 0,
        cursor: "pointer",
        appearance: "none",
        textDecoration: "none",
        flexGrow: 1,
      }}></Box>
  );
});
DropdownItem.displayName = "DropdownItem";

export const Dropdown = React.forwardRef(({ active, placement, enableArrow = false, children, ...props }, ref) => {
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
      <Popover
        triggerRef={buttonRef}
        placement={placement}
        active={active}
        enableArrow={enableArrow}
        {...DropdownMenuProps}>
        {DropdownMenu}
      </Popover>
    </Box>
  );
});
