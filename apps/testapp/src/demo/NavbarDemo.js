import React from "react";
import { Box, Flex } from "@jag-ui-react/core";
import { Heading, Text, Divider, NavLink, Link } from "@jag-ui-react/components";

const NavBarEx = () => {
  return (
    <>
      <Heading as="h1" mt={4} mb={2}>
        NavBar
      </Heading>
      <Flex px={2} color="white" bg="black" alignItems="center">
        <Text p={2} fontWeight="bold">
          jagUI
        </Text>
        <Box mx="auto" />
        <Link variant="nav" href="#!">
          Profile
        </Link>
      </Flex>
    </>
  );
};

export default function NavbarDemo() {
  return (
    <Box>
      <Heading>Navbar Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <NavBarEx />
        <Flex as="nav">
          <NavLink href="#!" p={2}>
            Home
          </NavLink>
          <NavLink href="#!" p={2}>
            Blog
          </NavLink>
          <NavLink href="#!" p={2}>
            About
          </NavLink>
        </Flex>
      </Box>
    </Box>
  );
}
