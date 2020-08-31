import {
  Box,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Flex,
  Icon,
  Button,
  Text,
} from "jag-ui-react";
import React, { useRef, useState } from "react";
import {
  FaAsterisk,
  FaCogs,
  FaEllipsisH,
  FaList,
  FaQuestion,
  FaShapes,
  FaTheaterMasks,
  FaUserCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideNavItemDropdown = ({ icon, children }) => {
  const [showPopper, setShowPopper] = useState(false);
  const triggerRef = useRef(null);
  return (
    <Flex>
      <Dropdown active={showPopper} placement="right" onOutsideClick={() => setShowPopper(false)} width="full">
        <DropdownToggle caret>
          <SideNavItem
            ref={triggerRef}
            onClick={() => setShowPopper(!showPopper)}
            icon={icon}
            active={showPopper}
            border={0}>
            {children}
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
  transition: "background 0.8s",
  "&:hover": {
    bg: "rgb(0 0 0 / 0.25)",
  },
  "&.active": {
    bg: "rgb(0 0 0 / 0.25)",
    borderLeft: "2px solid",
  },
};

const SideNavItem = React.forwardRef(({ to, icon, children, ...props }, ref) => {
  const routeProps = to ? { as: NavLink, to, exact: true } : {};
  return (
    <Button {...routeProps} activeClassName="active" ref={ref} variant="none" sx={sidenavItemStyles} {...props}>
      <Icon py={1} icon={icon} />
      <Text maxLength={12} tooltipPlacement="right" fontSize="0.65rem">
        {children}
      </Text>
    </Button>
  );
});

const Logo = () => {
  return (
    <Button variant="none" href="/">
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
    </Button>
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
        <SideNavItem to="/learn" icon={<FaAsterisk size={20} />}>
          Learn
        </SideNavItem>
        <SideNavItem to="/components" icon={<FaShapes size={20} />}>
          Components
        </SideNavItem>
        <SideNavItem to="/themes" icon={<FaTheaterMasks size={20} />}>
          Themes
        </SideNavItem>
        <SideNavItem to="/api" icon={<FaList size={20} />}>
          API
        </SideNavItem>
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
