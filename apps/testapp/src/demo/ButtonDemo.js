import { Button, Divider, Heading, Icon, IconButton, Link } from "@jag-ui-react/components";
import { Box, Flex } from "@jag-ui-react/core";
import React from "react";
import { FaCog, FaTimes } from "react-icons/fa";
// import { useThemeUI } from "theme-ui";

const SimpleButtonDemo = () => {
  return (
    <>
      <Heading variant="styles.h5" mt={4} mb={3}>
        Default Button [variant="simple"]
      </Heading>

      <Flex mb={4}>
        <Button color="primary" mr={3}>
          Primary
        </Button>
        <Button color="secondary" mr={3}>
          Secondary
        </Button>
        <Button color="white" mr={3}>
          White
        </Button>
        <Button color="success" mr={3}>
          Success
        </Button>
        <Button color="danger" mr={3}>
          Danger
        </Button>
        <Button color="info" mr={3}>
          Info
        </Button>
        <Button color="warning" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [variant="simple"] [borderRadius="full"]
      </Heading>

      <Flex mb={4}>
        <Button color="primary" borderRadius="full" mr={3}>
          Primary
        </Button>
        <Button color="secondary" borderRadius="full" mr={3}>
          Secondary
        </Button>
        <Button color="white" borderRadius="full" mr={3}>
          White
        </Button>
        <Button color="success" borderRadius="full" mr={3}>
          Success
        </Button>
        <Button color="danger" borderRadius="full" mr={3}>
          Danger
        </Button>
        <Button color="info" borderRadius="full" mr={3}>
          Info
        </Button>
        <Button color="warning" borderRadius="full" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [size="..."]
      </Heading>

      <Flex mb={4}>
        <Button color="primary" size="sm" mr={3}>
          Small
        </Button>
        <Button color="primary" size="md" mr={3}>
          Medium*
        </Button>
        <Button color="primary" size="lg" mr={3}>
          Large
        </Button>
        <Button color="primary" size="xl" mr={3}>
          X Large
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [disabled]
      </Heading>

      <Flex mb={4}>
        <Button color="primary" disabled mr={3}>
          Primary
        </Button>
        <Button color="secondary" disabled mr={3}>
          Secondary
        </Button>
        <Button color="white" disabled mr={3}>
          White
        </Button>
        <Button color="success" disabled mr={3}>
          Success
        </Button>
        <Button color="danger" disabled mr={3}>
          Danger
        </Button>
        <Button color="info" disabled mr={3}>
          Info
        </Button>
        <Button color="warning" disabled mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button with Icons
      </Heading>

      <Flex mb={4}>
        <Button color="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Button>
        <Button color="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Button>
        <Button color="white" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          White
        </Button>
        <Button color="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Button>
        <Button color="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Button>
        <Button color="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Button>
        <Button color="warning" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Warning
        </Button>
      </Flex>
    </>
  );
};

const OutlineButtonDemo = () => {
  return (
    <>
      <Heading variant="styles.h5" mt={4} mb={3}>
        Default Button [variant="simple"]
      </Heading>

      <Flex mb={4}>
        <Button variant="outline" color="primary" mr={3}>
          Primary
        </Button>
        <Button variant="outline" color="secondary" mr={3}>
          Secondary
        </Button>
        <Button variant="outline" color="white" mr={3}>
          White
        </Button>
        <Button variant="outline" color="success" mr={3}>
          Success
        </Button>
        <Button variant="outline" color="danger" mr={3}>
          Danger
        </Button>
        <Button variant="outline" color="info" mr={3}>
          Info
        </Button>
        <Button variant="outline" color="warning" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [variant="simple"] [borderRadius="full"]
      </Heading>

      <Flex mb={4}>
        <Button variant="outline" color="primary" borderRadius="full" mr={3}>
          Primary
        </Button>
        <Button variant="outline" color="secondary" borderRadius="full" mr={3}>
          Secondary
        </Button>
        <Button variant="outline" color="white" borderRadius="full" mr={3}>
          White
        </Button>
        <Button variant="outline" color="success" borderRadius="full" mr={3}>
          Success
        </Button>
        <Button variant="outline" color="danger" borderRadius="full" mr={3}>
          Danger
        </Button>
        <Button variant="outline" color="info" borderRadius="full" mr={3}>
          Info
        </Button>
        <Button variant="outline" color="warning" borderRadius="full" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [size="..."]
      </Heading>

      <Flex mb={4}>
        <Button variant="outline" color="primary" size="sm" mr={3}>
          Small
        </Button>
        <Button variant="outline" color="primary" size="md" mr={3}>
          Medium*
        </Button>
        <Button variant="outline" color="primary" size="lg" mr={3}>
          Large
        </Button>
        <Button variant="outline" color="primary" size="xl" mr={3}>
          X Large
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [disabled]
      </Heading>

      <Flex mb={4}>
        <Button variant="outline" color="primary" disabled mr={3}>
          Primary
        </Button>
        <Button variant="outline" color="secondary" disabled mr={3}>
          Secondary
        </Button>
        <Button variant="outline" color="white" disabled mr={3}>
          White
        </Button>
        <Button variant="outline" color="success" disabled mr={3}>
          Success
        </Button>
        <Button variant="outline" color="danger" disabled mr={3}>
          Danger
        </Button>
        <Button variant="outline" color="info" disabled mr={3}>
          Info
        </Button>
        <Button variant="outline" color="warning" disabled mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button with Icons
      </Heading>

      <Flex mb={4}>
        <Button variant="outline" color="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Button>
        <Button variant="outline" color="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Button>
        <Button variant="outline" color="white" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          White
        </Button>
        <Button variant="outline" color="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Button>
        <Button variant="outline" color="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Button>
        <Button variant="outline" color="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Button>
        <Button variant="outline" color="warning" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Warning
        </Button>
      </Flex>
    </>
  );
};

const BtnWithIconsDemo = () => {
  return <Box my={2}></Box>;
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

const LinkDemo = () => {
  return (
    <Box my={2}>
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

export default function ButtonDemo() {
  // const context = useThemeUI();
  // const { theme, components, colorMode, setColorMode } = context;
  // console.log("ButtonDemo: ", { theme });

  return (
    <Box>
      <Heading>Button Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <SimpleButtonDemo />
        <OutlineButtonDemo />

        <BtnWithIconsDemo />
        <IconBtnDemo />

        <LinkDemo />

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
