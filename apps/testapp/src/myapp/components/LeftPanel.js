import { Box, Button, Icon, Input, Text } from "jag-ui-react";
import React from "react";
import { FaAsterisk, FaShapes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const leftPanelItemStyles = {
  display: "flex",
  justifyContent: "flex-start",
  height: "40px",
  px: 3,
  mb: 1,
  userSelect: "none",
  "&:hover": {
    bg: "bg3",
  },
  "&.active": {
    bg: "bg3",
  },
};

const LeftPanelNavItem = React.forwardRef(({ to, icon, children, ...props }, ref) => {
  return (
    <Button
      as={NavLink}
      to={to}
      exact
      activeClassName="active"
      ref={ref}
      variant="none"
      sx={leftPanelItemStyles}
      {...props}>
      <Icon py={1} icon={icon} mr={3} />
      <Text maxLength={20} tooltipPlacement="right" fontSize="sm">
        {children}
      </Text>
    </Button>
  );
});
function LeftPanel(props) {
  return (
    <Box
      sx={{
        display: ["none", "block"],
        bg: "bg2",
        height: "100%",
        width: "230px",
        maxWidth: "230px",
        flexShrink: 0,
        overflowX: "hidden",
        overflowY: "auto",
      }}>
      <Box p={3}>
        <Input name="componentSearch" placeholder="Search" bg="transparent" fontSize="sm" />
      </Box>
      <LeftPanelNavItem to="/components/all" icon={<FaAsterisk size={20} />}>
        All Components
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/alert" icon={<FaShapes size={20} />}>
        Alert
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/badge" icon={<FaShapes size={20} />}>
        Badge
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/button" icon={<FaShapes size={20} />}>
        Button
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/card" icon={<FaShapes size={20} />}>
        Card
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/container" icon={<FaShapes size={20} />}>
        Container
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/divider" icon={<FaShapes size={20} />}>
        Divider
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/dropdown" icon={<FaShapes size={20} />}>
        Dropdown
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/embed" icon={<FaShapes size={20} />}>
        Embed
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/flex" icon={<FaShapes size={20} />}>
        Flex
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/form" icon={<FaShapes size={20} />}>
        Form
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/grid" icon={<FaShapes size={20} />}>
        Grid
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/image" icon={<FaShapes size={20} />}>
        Image
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/link" icon={<FaShapes size={20} />}>
        Link
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/modal" icon={<FaShapes size={20} />}>
        Modal
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/navbar" icon={<FaShapes size={20} />}>
        Navbar
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/pagination" icon={<FaShapes size={20} />}>
        Pagination
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/popover" icon={<FaShapes size={20} />}>
        Popover
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/progress" icon={<FaShapes size={20} />}>
        Progress
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/table" icon={<FaShapes size={20} />}>
        Table
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/tabs" icon={<FaShapes size={20} />}>
        Tabs
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/tooltip" icon={<FaShapes size={20} />}>
        Tooltip
      </LeftPanelNavItem>
      <LeftPanelNavItem to="/components/typography" icon={<FaShapes size={20} />}>
        Typography
      </LeftPanelNavItem>
    </Box>
  );
}

LeftPanel.propTypes = {};

export default LeftPanel;
