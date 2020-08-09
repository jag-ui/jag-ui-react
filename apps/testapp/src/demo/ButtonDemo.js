import { Button, Divider, Heading, Icon, IconButton, Link } from "@jag-ui-react/components";
import { Box, Flex } from "@jag-ui-react/core";
import React from "react";
import { FaCog, FaTimes, FaGlobe } from "react-icons/fa";
// import { useThemeUI } from "theme-ui";

const SimpleButtonDemo = () => {
  return (
    <>
      <Heading variant="styles.h5" mt={4} mb={3}>
        Default Button [variant="simple"]
      </Heading>

      <Flex mb={4}>
        <Button mr={3}>Default</Button>
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
        <Button borderRadius="full" mr={3}>
          Default
        </Button>
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
        <Button disabled mr={3}>
          Default
        </Button>
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
        Button with Icon & Text [diabled]
      </Heading>

      <Flex mb={4}>
        <Button mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Default
        </Button>
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
        Button with Icon & Text
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
  return (
    <>
      <Heading variant="styles.h5" mt={4} mb={3}>
        Button with Icon [variant="simple"]
      </Heading>
      <Flex mb={4}>
        <Button mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button mr={3}>
          <Icon icon={<FaTimes />} />
        </Button>
        <Button mr={3}>
          <Icon icon={<FaGlobe />} />
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button with Icon [variant="icon"]
      </Heading>

      <Flex mb={4}>
        <Button variant="icon" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="primary" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="secondary" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="white" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="success" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="danger" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="info" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="warning" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
      </Flex>
      <Heading variant="styles.h5" mt={4} mb={3}>
        Button with Icon [variant="icon"] [disabled]
      </Heading>

      <Flex mb={4}>
        <Button variant="icon" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="primary" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="secondary" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="white" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="success" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="danger" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="info" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" color="warning" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
      </Flex>
    </>
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
      </Box>
    </Box>
  );
}
