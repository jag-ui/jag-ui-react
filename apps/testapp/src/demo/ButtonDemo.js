import { Button, Divider, Heading, Icon, IconButton, Link } from "@jag-ui-react/components";
import { Box, Flex } from "@jag-ui-react/core";
import React from "react";
import { FaCog, FaTimes } from "react-icons/fa";
import { useThemeUI } from "theme-ui";

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
        Buttons (Size)
      </Heading>

      <Flex mb={4}>
        <Button variant="primary" size="sm" mr={3}>
          Small
        </Button>
        <Button variant="primary" size="md" mr={3}>
          Medium*
        </Button>
        <Button variant="primary" size="lg" mr={3}>
          Large
        </Button>
        <Button variant="primary" size="xl" mr={3}>
          X Large
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

      <Heading variant="h1" my={2}>
        Buttons (Disabled)
      </Heading>

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
        Buttons (Outline) (Sizes)
      </Heading>

      <Flex mb={4}>
        <Button variant="primaryOutline" size="sm" mr={3}>
          Small
        </Button>
        <Button variant="primaryOutline" size="md" mr={3}>
          Medium
        </Button>
        <Button variant="primaryOutline" size="lg" mr={3}>
          Large
        </Button>
        <Button variant="primaryOutline" size="xl" mr={3}>
          X Large
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
        <Link href="#" mr={3}>
          Primary Link
        </Link>
        <Link href="#" variant="secondary" mr={3}>
          Secondary Link
        </Link>
        <Link href="#" variant="success" mr={3}>
          Success Link
        </Link>
        <Link href="#" variant="danger" mr={3}>
          Danger Link
        </Link>
      </Flex>

      <Heading variant="h1" my={2}>
        Link (Button Style)
      </Heading>

      <Flex mb={4} alignItems="center">
        <Link href="#" kind="button" mr={3}>
          Primary Link
        </Link>
        <Link href="#" kind="button" variant="secondary" mr={3}>
          Secondary Link
        </Link>
        <Link href="#" kind="button" variant="success" mr={3}>
          Success Link
        </Link>
        <Link href="#" kind="button" variant="danger" mr={3}>
          Danger Link
        </Link>
      </Flex>
    </Box>
  );
};

const BtnWithIconsDemo = () => {
  return (
    <Box my={2}>
      <Heading variant="h1" my={2}>
        Button with Icons
      </Heading>

      <Flex mb={4}>
        <Button mr={3} variant="primary">
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Button>
        <Button variant="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} color="primary" />
          Secondary
        </Button>
        <Button variant="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Button>
        <Button variant="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Button>
      </Flex>
    </Box>
  );
};

const IconBtnDemo = () => {
  return (
    <Box my={2}>
      <Heading variant="h1" my={2}>
        IconButton
      </Heading>

      <Flex mb={4}>
        <IconButton mr={3}>
          <FaTimes />
        </IconButton>
        <IconButton mr={3}>
          <FaCog />
        </IconButton>
      </Flex>
    </Box>
  );
};

export default function ButtonDemo() {
  const context = useThemeUI();
  const { theme, components, colorMode, setColorMode } = context;
  console.log("ButtonDemo: ", { theme });

  return (
    <Box>
      <Heading>Button Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <BtnEx />

        <BtnWithIconsDemo />
        <IconBtnDemo />
        {/* 
        <Link href="#!">Hello</Link>

        <IconButton aria-label="Toggle dark mode">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentcolor">
            <circle r={11} cx={12} cy={12} fill="none" stroke="currentcolor" strokeWidth={2} />
          </svg>
        </IconButton> */}

        {/* <MenuButton aria-label="Toggle Menu" /> */}
      </Box>
    </Box>
  );
}
