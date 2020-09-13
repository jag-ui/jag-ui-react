import { Box, Button, Divider, Flex, Icon, Image, Link, Popover, Text } from "jag-ui-react";
import React, { useRef, useState } from "react";
import {
  FaAccessibleIcon,
  FaAddressBook,
  FaAnchor,
  FaCode,
  FaCogs,
  FaGithub,
  FaGlobe,
  FaHome,
  FaLinkedin,
  FaList,
  FaQuestion,
  FaShapes,
  FaTheaterMasks,
} from "react-icons/fa";
import { SideNav, SideNavItem } from "./components/SideNav";

const AVATAR = "http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg";

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

const topOptions = [
  { id: "logo", component: <Logo /> },
  { id: "divider", component: <Divider color="rgb(0 0 0 / 8%)" mb={1} /> },
  { id: "home", to: "/home", title: "Home", icon: <FaHome size={14} /> },
  { id: "components", to: "/components", title: "Components", icon: <FaCode size={14} /> },
  { id: "themes", to: "/themes", title: "Themes", icon: <FaTheaterMasks size={14} /> },
  { id: "api", to: "/api", title: "API", icon: <FaList size={14} /> },
];
const bottomOptions = [
  { id: "help", to: "/help", title: "Help", icon: <FaQuestion size={14} /> },
  { id: "settings", to: "/settings", title: "Settings", icon: <FaCogs size={14} /> },
  {
    id: "github",
    title: "Github",
    icon: <FaGithub size={14} />,
    href: "https://github.com/jag-ui/jag-ui-react",
    target: "_blank",
  },
  { id: "developedBy", component: <SideNavItemDev /> },
];

const moreOptions = [
  { id: "1", to: "one", title: "One", icon: <FaCogs size={14} /> },
  { id: "2", to: "two", title: "Two", icon: <FaAddressBook size={14} /> },
  { id: "3", to: "three", title: "Three", icon: <FaTheaterMasks size={14} /> },
  { id: "4", to: "four", title: "Four", icon: <FaList size={14} /> },
  { id: "5", to: "five", title: "Five", icon: <FaShapes size={14} /> },
  { id: "6", to: "six", title: "Six", icon: <FaGlobe size={14} /> },
  { id: "7", to: "seven", title: "Five", icon: <FaAccessibleIcon size={14} /> },
  { id: "8", to: "seven", title: "Seven", icon: <FaAnchor size={14} /> },
];

function MyAppNav(props) {
  return <SideNav topOptions={topOptions} bottomOptions={bottomOptions} moreOptions={moreOptions} />;
}

MyAppNav.propTypes = {};

export default MyAppNav;
