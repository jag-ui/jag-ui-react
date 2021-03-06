import { Box, Divider, Flex, Link, Text } from "jag-ui-react";
import React from "react";
import { Heading } from "../../components/Heading";
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
          <Link href="#!" p={2}>
            Home
          </Link>
          <Link href="#!" p={2}>
            Blog
          </Link>
          <Link href="#!" p={2}>
            About
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
