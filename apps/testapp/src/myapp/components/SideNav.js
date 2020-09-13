import { Box, Button, Divider, Flex, Icon, Image, Link, Popover, Text } from "jag-ui-react";
import React, { useRef, useState } from "react";
import {
  FaAccessibleIcon,
  FaAddressBook,
  FaAnchor,
  FaAsterisk,
  FaCode,
  FaCogs,
  FaEllipsisH,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaList,
  FaQuestion,
  FaShapes,
  FaTheaterMasks,
  FaHome,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AVATAR = "http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg";

const sidenavDDItemStyles = {
  mr: 2,
  width: "90px",
  opacity: 1,
  display: "flex",
  flexDirection: "column",
  height: "50px",
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

const moreOptions = [
  { id: "one", name: "One", icon: <FaCogs size={14} /> },
  { id: "two", name: "Two", icon: <FaAddressBook size={14} /> },
  { id: "three", name: "Three", icon: <FaTheaterMasks size={14} /> },
  { id: "four", name: "Four", icon: <FaList size={14} /> },
  { id: "five", name: "Five", icon: <FaShapes size={14} /> },
  { id: "six", name: "Six", icon: <FaGlobe size={14} /> },
  { id: "seven", name: "Five", icon: <FaAccessibleIcon size={14} /> },
  { id: "seven", name: "Seven", icon: <FaAnchor size={14} /> },
];

const SideNavDropDownItem = ({ children, ...props }) => {
  return (
    <SideNavItem sx={sidenavDDItemStyles} {...props}>
      {children}
    </SideNavItem>
  );
};

const SideNavDropDown = ({ children }) => {
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
          {moreOptions.map((option) => (
            <SideNavDropDownItem to={option.id} icon={option.icon}>
              {option.name}
            </SideNavDropDownItem>
          ))}
        </Flex>
      </Popover>
    </>
  );
};

const SideNavItemDev = ({ children }) => {
  const [showPopper, setShowPopper] = useState(false);
  const triggerRef = useRef(null);
  return (
    <>
      <SideNavItem
        ref={triggerRef}
        onClick={() => setShowPopper(!showPopper)}
        active={showPopper}
        border={0}
        image={AVATAR}></SideNavItem>
      <Popover
        triggerRef={triggerRef}
        placement="right-start"
        active={showPopper}
        onOutsideClick={() => setShowPopper(false)}
        p={2}
        mb={3}>
        <Box width="400px" color="text">
          <Text variant="muted" mb={2}>
            Developed By:
          </Text>
          <Flex>
            <Image src={AVATAR} variant="avatar" borderRadius={6} size="7rem" mr={3} />
            <Box>
              <Text fontWeight="semibold" color="primary">
                Jagadeesh Palaniappan
              </Text>
              <Text> Fullstack Developer</Text>
              <Text> San Francisco, CA</Text>
              <Box>
                <Link href="https://jagadeeshpalaniappan.com/" target="_blank" mr={2}>
                  <Icon py={1} icon={<FaGlobe size={14} />} />
                </Link>
                <Link href="https://www.linkedin.com/in/jagadeeshpalaniappan/" target="_blank" mr={2}>
                  <Icon py={1} icon={<FaLinkedin size={14} />} />
                </Link>
                <Link href="https://github.com/jagadeeshpalaniappan" target="_blank">
                  <Icon py={1} icon={<FaGithub size={14} />} />
                </Link>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Popover>
    </>
  );
};

const sidenavItemStyles = {
  display: "flex",
  flexDirection: "column",
  height: "50px",
  mb: "0.1rem",
  userSelect: "none",
  transition: "background 0.8s, opacity 0.8s",
  opacity: 0.63,
  textRendering: "optimizeLegibility",
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

const SideNavItem = React.forwardRef(({ to, title, icon, image, children, ...props }, ref) => {
  const routeProps = to ? { as: NavLink, to, exact: true } : {};
  return (
    <Button {...routeProps} activeClassName="active" ref={ref} variant="none" sx={sidenavItemStyles} {...props}>
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

const Logo = () => {
  return (
    <Button variant="none" href="/">
      <Text
        variant="caps"
        sx={{
          fontWeight: "bold",
          fontSize: "xs",
          userSelect: "none",
          py: 2,
        }}>
        jag-ui
      </Text>
    </Button>
  );
};

const topOptions = [
  { id: "/home", name: "Home", icon: <FaHome size={14} /> },
  { id: "/components", name: "Components", icon: <FaCode size={14} /> },
  { id: "/themes", name: "Themes", icon: <FaTheaterMasks size={14} /> },
  { id: "/api", name: "API", icon: <FaList size={14} /> },
  { component: <SideNavDropDown /> },
];
const bottomOptions = [
  { id: "/help", name: "Help", icon: <FaQuestion size={14} /> },
  { id: "/settings", name: "Settings", icon: <FaCogs size={14} /> },
  { id: "/github", name: "Github", icon: <FaGithub size={14} /> },
  { component: <SideNavItemDev /> },
];

function SideNav({ width = "55px" }) {
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
      <Logo />
      <Divider color="rgb(0 0 0 / 8%)" mb={1} />
      <Flex flexDirection="column" width="full" flexGrow={1}>
        {topOptions.map((option) =>
          option && option.component ? (
            option.component
          ) : (
            <SideNavItem to={option.id} icon={option.icon} title={option.name} />
          ),
        )}
      </Flex>
      <Flex flexDirection="column" width="full">
        {bottomOptions.map((option) =>
          option && option.component ? (
            option.component
          ) : (
            <SideNavItem to={option.id} icon={option.icon} title={option.name} />
          ),
        )}
      </Flex>
    </Box>
  );
}

SideNav.propTypes = {};

export default SideNav;
