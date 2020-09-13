import { Box, Button, Flex, Icon, Image, Popover, Text } from "jag-ui-react";
import React, { useRef, useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const sidenavDDItemStyles = {
  mr: 2,
  width: "70px",
  opacity: 1,
  display: "flex",
  flexDirection: "column",
  height: "60px",
  mb: "0.1rem",
  userSelect: "none",
  textRendering: "optimizeLegibility",
  cursor: "pointer",
  "&:hover": {
    bg: "rgb(0 0 0 / 0.05)",
    color: "primary.main",
    opacity: 1,
  },
  "&.active": {
    color: "primary.main",
    border: "1px solid",
  },
};

const SideNavDropDownItem = ({ children, ...props }) => {
  return (
    <SideNavItem sx={sidenavDDItemStyles} {...props}>
      {children}
    </SideNavItem>
  );
};

const SideNavDropDown = ({ options }) => {
  const [showPopper, setShowPopper] = useState(false);
  const triggerRef = useRef(null);
  return (
    <>
      <SideNavItem
        ref={triggerRef}
        onClick={() => setShowPopper(!showPopper)}
        className={showPopper && "active"}
        border={0}>
        <Icon py={1} icon={<FaEllipsisH size={14} />} />
      </SideNavItem>
      <Popover
        triggerRef={triggerRef}
        enableArrow={false}
        placement="right"
        active={showPopper}
        onOutsideClick={() => setShowPopper(false)}>
        <Flex flexWrap="wrap" alignContent="flex-start" minHeight="25vh" maxWidth="37vw" color="text" p={3}>
          {options.map((option) => (
            <SideNavDropDownItem to={option.to} icon={option.icon}>
              {option.title}
            </SideNavDropDownItem>
          ))}
        </Flex>
      </Popover>
    </>
  );
};

const sidenavItemStyles = {
  display: "flex",
  flexDirection: "column",
  bg: "transparent",
  userSelect: "none",
  textRendering: "optimizeLegibility",
  transition: "background 0.8s, opacity 0.8s",
  height: "50px",
  mb: "0.1rem",
  opacity: 0.63,
  cursor: "pointer",
  "&:hover": {
    bg: "sideNavHover",
    opacity: 1,
  },
  "&.active": {
    bg: "sideNavHover",
    borderLeft: "2px solid",
    opacity: 1,
  },
};

export const SideNavItem = React.forwardRef(({ to, href, title, icon, image, children, ...props }, ref) => {
  const routeProps = to ? { as: NavLink, to, exact: true } : href ? { as: "a", href } : {};
  return (
    <Button ref={ref} variant="none" sx={sidenavItemStyles} activeClassName="active" {...routeProps} {...props}>
      {icon && <Icon py={1} icon={icon} />}
      {image && <Image src={image} variant="avatar" size="2.5rem" borderRadius={9999} />}
      {title && (
        <Text maxLength={12} tooltipPlacement="right" fontSize="0.5rem" fontWeight={300}>
          {title}
        </Text>
      )}
      {children}
    </Button>
  );
});

export const SideNav = ({ width = "55px", topOptions, moreOptions, bottomOptions }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bg: "primary.darker",
        color: "sideNavText",
        width,
        maxWidth: width,
        flexShrink: 0,
        overflowX: "hidden",
        overflowY: "hidden",
      }}>
      <Flex flexDirection="column" width="full" flexGrow={1}>
        {topOptions &&
          topOptions.map((option) =>
            option && option.component ? option.component : <SideNavItem key={option.id} {...option} />,
          )}
        {moreOptions && <SideNavDropDown options={moreOptions} />}
      </Flex>
      <Flex flexDirection="column" width="full">
        {bottomOptions &&
          bottomOptions.map((option) =>
            option && option.component ? option.component : <SideNavItem key={option.id} {...option} />,
          )}
      </Flex>
    </Box>
  );
};

SideNav.propTypes = {};
