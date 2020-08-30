import { Box, Icon, Input, Link, Text } from "jag-ui-react";
import React from "react";
import { FaAsterisk, FaShapes, FaTheaterMasks } from "react-icons/fa";
const sidenavItemStyles = {
  display: "flex",
  justifyContent: "flex-start",
  height: "50px",
  px: 3,
  mb: 1,
  userSelect: "none",
  "&:hover": {
    bg: "bg3",
  },
};

const sidenavItemActiveStyles = {
  ...sidenavItemStyles,
  bg: "bg3",
};
const LeftPanelNavItem = React.forwardRef(({ active, icon, children, ...props }, ref) => {
  return (
    <Link ref={ref} variant="none" kind="button" sx={active ? sidenavItemActiveStyles : sidenavItemStyles} {...props}>
      <Icon py={1} icon={icon} mr={3} />
      <Text maxLength={20} tooltipPlacement="right" fontSize={1}>
        {children}
      </Text>
    </Link>
  );
});
function LeftPanel(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bg: "bg2",
        width: "320px",
        maxWidth: "320px",
        flexShrink: 0,
        overflowX: "hidden",
        overflowY: "auto",
      }}>
      <Box p={3}>
        <Input name="componentSearch" placeholder="Search" bg="transparent" fontSize={1} />
      </Box>
      <LeftPanelNavItem icon={<FaAsterisk size={20} />}>All Components</LeftPanelNavItem>
      <LeftPanelNavItem icon={<FaShapes size={20} />} active>
        Alert
      </LeftPanelNavItem>
      <LeftPanelNavItem icon={<FaTheaterMasks size={20} />}>Button</LeftPanelNavItem>
      <LeftPanelNavItem icon={<FaTheaterMasks size={20} />}>Button</LeftPanelNavItem>
      <LeftPanelNavItem icon={<FaTheaterMasks size={20} />}>Button</LeftPanelNavItem>
      <LeftPanelNavItem icon={<FaTheaterMasks size={20} />}>Button</LeftPanelNavItem>
      <LeftPanelNavItem icon={<FaTheaterMasks size={20} />}>Button</LeftPanelNavItem>
      <LeftPanelNavItem icon={<FaTheaterMasks size={20} />}>Button</LeftPanelNavItem>
      <LeftPanelNavItem icon={<FaTheaterMasks size={20} />}>Button</LeftPanelNavItem>
      <LeftPanelNavItem icon={<FaTheaterMasks size={20} />}>Button</LeftPanelNavItem>
      <LeftPanelNavItem icon={<FaTheaterMasks size={20} />}>Button</LeftPanelNavItem>
      <LeftPanelNavItem icon={<FaTheaterMasks size={20} />}>Button</LeftPanelNavItem>
    </Box>
  );
}

LeftPanel.propTypes = {};

export default LeftPanel;
