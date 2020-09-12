import { Box, Button, Divider, Flex, Icon, Image, Link, Popover, Text } from "jag-ui-react";
import React, { useRef, useState } from "react";
import {
  FaAsterisk,
  FaCogs,
  FaEllipsisH,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaList,
  FaQuestion,
  FaShapes,
  FaTheaterMasks,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AVATAR = "http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg";

const SideNavItemMore = ({ children }) => {
  const [showPopper, setShowPopper] = useState(false);
  const triggerRef = useRef(null);
  return (
    <>
      <SideNavItem ref={triggerRef} onClick={() => setShowPopper(!showPopper)} active={showPopper} border={0}>
        <Icon py={1} icon={<FaEllipsisH size={20} />} />
      </SideNavItem>
      <Popover
        triggerRef={triggerRef}
        enableArrow={false}
        placement="right"
        active={showPopper}
        onOutsideClick={() => setShowPopper(false)}>
        <Flex flexWrap="wrap" minHeight="25vh" maxWidth="37vw" color="text" p={3}>
          <SideNavItem to="/one" icon={<FaAsterisk size={20} />} mr={2} width="90px">
            Learn
          </SideNavItem>
          <SideNavItem to="/two" icon={<FaShapes size={20} />} mr={2} width="90px">
            Components
          </SideNavItem>
          <SideNavItem to="/three" icon={<FaTheaterMasks size={20} />} mr={2} width="90px">
            Themes
          </SideNavItem>
          <SideNavItem to="/four" icon={<FaList size={20} />} mr={2} width="90px">
            API
          </SideNavItem>
          <SideNavItem icon={<FaQuestion size={20} />} mr={2} width="90px">
            Help
          </SideNavItem>
          <SideNavItem to="/one" icon={<FaAsterisk size={20} />} mr={2} width="90px">
            Learn
          </SideNavItem>
          <SideNavItem to="/two" icon={<FaShapes size={20} />} mr={2} width="90px">
            Components
          </SideNavItem>
          <SideNavItem to="/three" icon={<FaTheaterMasks size={20} />} mr={2} width="90px">
            Themes
          </SideNavItem>
          <SideNavItem to="/four" icon={<FaList size={20} />} mr={2} width="90px">
            API
          </SideNavItem>
          <SideNavItem icon={<FaQuestion size={20} />} mr={2} width="90px">
            Help
          </SideNavItem>
          <SideNavItem to="/one" icon={<FaAsterisk size={20} />} mr={2} width="90px">
            Learn
          </SideNavItem>
          <SideNavItem to="/two" icon={<FaShapes size={20} />} mr={2} width="90px">
            Components
          </SideNavItem>
          <SideNavItem to="/three" icon={<FaTheaterMasks size={20} />} mr={2} width="90px">
            Themes
          </SideNavItem>
          <SideNavItem to="/four" icon={<FaList size={20} />} mr={2} width="90px">
            API
          </SideNavItem>
          <SideNavItem icon={<FaQuestion size={20} />} mr={2} width="90px">
            Help
          </SideNavItem>
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
      <SideNavItem ref={triggerRef} onClick={() => setShowPopper(!showPopper)} active={showPopper} border={0}>
        <Image src={AVATAR} variant="avatar" size="2.5rem" borderRadius={9999} />
      </SideNavItem>
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
                  <Icon py={1} icon={<FaGlobe size={20} />} />
                </Link>
                <Link href="https://www.linkedin.com/in/jagadeeshpalaniappan/" target="_blank" mr={2}>
                  <Icon py={1} icon={<FaLinkedin size={20} />} />
                </Link>
                <Link href="https://github.com/jagadeeshpalaniappan" target="_blank">
                  <Icon py={1} icon={<FaGithub size={20} />} />
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
  height: "60px",
  mb: 1,
  userSelect: "none",
  transition: "background 0.8s",
  "&:hover": {
    bg: "sideNavHover",
  },
  "&.active": {
    bg: "sideNavHover",
    borderLeft: "2px solid",
  },
};

const SideNavItem = React.forwardRef(({ to, icon, image, children, ...props }, ref) => {
  const routeProps = to ? { as: NavLink, to, exact: true } : {};
  return (
    <Button {...routeProps} activeClassName="active" ref={ref} variant="none" sx={sidenavItemStyles} {...props}>
      {icon && <Icon py={1} icon={icon} />}
      {image && <Image src={image} variant="avatar" size="2rem" />}
      <Text maxLength={12} tooltipPlacement="right" fontSize="xs">
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
          fontSize: "xs",
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
        bg: "primary.darker",
        color: "sideNavText",
        width: "70px",
        maxWidth: "70px",
        flexShrink: 0,
        overflowX: "hidden",
        overflowY: "hidden",
      }}>
      <Logo />
      <Divider color="rgb(0 0 0 / 8%)" mb={1} />
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
        {/* <SideNavItemMore icon={<FaEllipsisH size={20} />}></SideNavItemMore> */}
        <SideNavItemMore />
      </Flex>
      <Flex flexDirection="column" width="full">
        <SideNavItem icon={<FaQuestion size={20} />}>Help</SideNavItem>
        <SideNavItem icon={<FaCogs size={20} />}>Settings</SideNavItem>
        <SideNavItemDev />
      </Flex>
    </Box>
  );
}

SideNav.propTypes = {};

export default SideNav;
