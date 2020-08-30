import {
  Box,
  Flex,
  Icon,
  Link,
  Text,
  Divider,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Popover,
} from "jag-ui-react";
import React, { useState, useRef } from "react";
import {
  FaAsterisk,
  FaCogs,
  FaList,
  FaQuestion,
  FaShapes,
  FaTheaterMasks,
  FaUserCircle,
  FaEllipsisH,
} from "react-icons/fa";

const SideNavItemDropdown = ({ icon, placement }) => {
  const [showPopper, setShowPopper] = useState(false);
  const triggerRef = useRef(null);
  return (
    <Flex>
      <Dropdown active={showPopper} placement="right" onOutsideClick={() => setShowPopper(false)} width="full">
        <DropdownToggle caret>
          <SideNavItem ref={triggerRef} onClick={() => setShowPopper(!showPopper)} icon={icon} active={showPopper}>
            Themes
          </SideNavItem>
        </DropdownToggle>
        <DropdownMenu bg="white" color="text">
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

const sidenavItemStyles = {
  display: "flex",
  flexDirection: "column",
  height: "60px",
  mb: 1,
  userSelect: "none",
  "&:hover": {
    bg: "rgb(0 0 0 / 0.25)",
  },
};

const sidenavItemActiveStyles = {
  ...sidenavItemStyles,
  bg: "rgb(0 0 0 / 0.25)",
  borderLeft: "2px solid",
};
const SideNavItem = React.forwardRef(({ active, icon, children, onClick }, ref) => {
  return (
    <Link
      ref={ref}
      variant="none"
      kind="button"
      sx={active ? sidenavItemActiveStyles : sidenavItemStyles}
      onClick={onClick}>
      <Icon py={1} icon={icon} />
      <Text maxLength={12} tooltipPlacement="right" fontSize="0.65rem">
        {children}
      </Text>
    </Link>
  );
});

const SideNavItemDropdown11 = ({ active, icon, children }) => {
  const [showPopper, setShowPopper] = useState(false);
  const triggerRef = useRef(null);
  return (
    <>
      <SideNavItem ref={triggerRef} onClick={() => setShowPopper(!showPopper)} icon={<FaTheaterMasks size={20} />}>
        Themes
      </SideNavItem>
      <Popover
        triggerRef={triggerRef}
        placement="right"
        enableArrow={false}
        active={showPopper}
        onOutsideClick={() => setShowPopper(false)}
        p={2}>
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
      </Popover>
    </>
  );
};

const Logo = () => {
  return (
    <Link variant="none" kind="button" href="/">
      <Text
        variant="caps"
        sx={{
          fontWeight: "bold",
          fontSize: 0,
          userSelect: "none",
          py: 2,
        }}>
        jag-ui
      </Text>
    </Link>
  );
};

function SideNav(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bg: "primary",
        color: "white",
        width: "70px",
        maxWidth: "70px",
        flexShrink: 0,
        overflowX: "hidden",
        overflowY: "hidden",
      }}>
      <Logo />
      <Divider />
      <Flex flexDirection="column" width="full" flexGrow={1}>
        <SideNavItem icon={<FaAsterisk size={20} />}>Learn</SideNavItem>
        <SideNavItem icon={<FaShapes size={20} />} active>
          Components
        </SideNavItem>
        <SideNavItem icon={<FaTheaterMasks size={20} />}>Themes</SideNavItem>
        <SideNavItem icon={<FaList size={20} />}>API</SideNavItem>
        <SideNavItemDropdown icon={<FaEllipsisH size={20} />}></SideNavItemDropdown>
      </Flex>
      <Flex flexDirection="column" width="full">
        <SideNavItem icon={<FaQuestion size={20} />}>Help</SideNavItem>
        <SideNavItem icon={<FaCogs size={20} />}>Settings</SideNavItem>
        <SideNavItem icon={<FaUserCircle size={25} />}></SideNavItem>
      </Flex>
    </Box>
  );
}

SideNav.propTypes = {};

export default SideNav;
