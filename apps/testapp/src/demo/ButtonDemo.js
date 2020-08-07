import React from "react";
import { Box, Flex, Badge } from "@jag-ui-react/core";
import { Heading, Divider, Button, Link, IconButton } from "@jag-ui-react/components";

const BtnEx = () => {
  return (
    <Box my={2}>
      <Heading variant="h1" my={2}>
        Buttons
      </Heading>

      <Flex mb={4}>
        <Button mr={3} variant="primary">
          Primary
        </Button>
        <Button variant="secondary" mr={3}>
          Secondary
        </Button>
        <Button variant="success" mr={3}>
          Success
        </Button>
        <Button variant="danger" mr={3}>
          Danger
        </Button>
      </Flex>

      <Heading variant="h1" my={2}>
        Buttons (Disabled)
      </Heading>

      <Flex mb={4}>
        <Button mr={3} variant="primary" disabled>
          Primary
        </Button>
        <Button variant="secondary" mr={3} disabled>
          Secondary
        </Button>
        <Button variant="success" mr={3} disabled>
          Success
        </Button>
        <Button variant="danger" mr={3} disabled>
          Danger
        </Button>
      </Flex>

      <Heading variant="h1" my={2}>
        Buttons (Outline)
      </Heading>

      <Flex mb={4}>
        <Button variant="primaryOutline" mr={3}>
          Primary
        </Button>
        <Button variant="secondaryOutline" mr={3}>
          Secondary
        </Button>
        <Button variant="successOutline" mr={3}>
          Success
        </Button>
        <Button variant="dangerOutline" mr={3}>
          Danger
        </Button>
      </Flex>
      <Flex mb={4}>
        <Button variant="primaryOutline" mr={3} disabled>
          Primary
        </Button>
        <Button variant="secondaryOutline" mr={3} disabled>
          Secondary
        </Button>
        <Button variant="successOutline" mr={3} disabled>
          Success
        </Button>
        <Button variant="dangerOutline" mr={3} disabled>
          Danger
        </Button>
      </Flex>

      <Heading variant="h1" my={2}>
        Buttons (Size)
      </Heading>

      <Flex mb={4}>
        <Button variant="primary" px={4} py={3} mr={3}>
          Big Primary
        </Button>
        <Button variant="secondary" px={4} py={3} mr={3}>
          Big Secondary
        </Button>
      </Flex>

      <Heading variant="h1" my={2}>
        Link
      </Heading>

      <Flex mb={4} alignItems="center">
        <Link href="#" mr={3} variant="link">
          Link
        </Link>

        <Link variant="nav" href="#">
          Nav Link
        </Link>
      </Flex>

      <Heading variant="h1" my={2}>
        Link (Button Styled)
      </Heading>

      <Flex mb={4} alignItems="center">
        <Link href="#" mr={3} variant="primary">
          Primary
        </Link>
        <Link href="#" variant="secondary" mr={3}>
          Secondary
        </Link>
        <Link href="#" variant="success" mr={3}>
          Success
        </Link>
        <Link href="#" variant="danger" mr={3}>
          Danger
        </Link>
      </Flex>
    </Box>
  );
};

export default function ButtonDemo() {
  return (
    <Box>
      <Heading>Button Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <BtnEx />
        <Box my={3}>
          <Button mr={2} variant="primary">
            Primary
          </Button>
          <Button variant="secondary">Secondary</Button>
        </Box>

        <Link href="#!">Hello</Link>

        <IconButton aria-label="Toggle dark mode">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentcolor">
            <circle r={11} cx={12} cy={12} fill="none" stroke="currentcolor" strokeWidth={2} />
          </svg>
        </IconButton>

        {/* <MenuButton aria-label="Toggle Menu" /> */}
      </Box>
    </Box>
  );
}
