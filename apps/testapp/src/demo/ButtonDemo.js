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
        <Button xcolor="primary" mr={3}>
          Primary
        </Button>
        <Button xcolor="secondary" mr={3}>
          Secondary
        </Button>
        <Button xcolor="white" mr={3}>
          White
        </Button>
        <Button xcolor="success" mr={3}>
          Success
        </Button>
        <Button xcolor="danger" mr={3}>
          Danger
        </Button>
        <Button xcolor="info" mr={3}>
          Info
        </Button>
        <Button xcolor="warning" mr={3}>
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
        <Button xcolor="primary" borderRadius="full" mr={3}>
          Primary
        </Button>
        <Button xcolor="secondary" borderRadius="full" mr={3}>
          Secondary
        </Button>
        <Button xcolor="white" borderRadius="full" mr={3}>
          White
        </Button>
        <Button xcolor="success" borderRadius="full" mr={3}>
          Success
        </Button>
        <Button xcolor="danger" borderRadius="full" mr={3}>
          Danger
        </Button>
        <Button xcolor="info" borderRadius="full" mr={3}>
          Info
        </Button>
        <Button xcolor="warning" borderRadius="full" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [xsize="..."]
      </Heading>

      <Flex mb={4}>
        <Button xcolor="primary" xsize="sm" mr={3}>
          Small
        </Button>
        <Button xcolor="primary" xsize="md" mr={3}>
          Medium*
        </Button>
        <Button xcolor="primary" xsize="lg" mr={3}>
          Large
        </Button>
        <Button xcolor="primary" xsize="xl" mr={3}>
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
        <Button xcolor="primary" disabled mr={3}>
          Primary
        </Button>
        <Button xcolor="secondary" disabled mr={3}>
          Secondary
        </Button>
        <Button xcolor="white" disabled mr={3}>
          White
        </Button>
        <Button xcolor="success" disabled mr={3}>
          Success
        </Button>
        <Button xcolor="danger" disabled mr={3}>
          Danger
        </Button>
        <Button xcolor="info" disabled mr={3}>
          Info
        </Button>
        <Button xcolor="warning" disabled mr={3}>
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
        <Button xcolor="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Button>
        <Button xcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Button>
        <Button xcolor="white" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          White
        </Button>
        <Button xcolor="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Button>
        <Button xcolor="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Button>
        <Button xcolor="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Button>
        <Button xcolor="warning" mr={3}>
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
        <Button variant="outline" xcolor="primary" mr={3}>
          Primary
        </Button>
        <Button variant="outline" xcolor="secondary" mr={3}>
          Secondary
        </Button>
        <Button variant="outline" xcolor="white" mr={3}>
          White
        </Button>
        <Button variant="outline" xcolor="success" mr={3}>
          Success
        </Button>
        <Button variant="outline" xcolor="danger" mr={3}>
          Danger
        </Button>
        <Button variant="outline" xcolor="info" mr={3}>
          Info
        </Button>
        <Button variant="outline" xcolor="warning" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [variant="simple"] [borderRadius="full"]
      </Heading>

      <Flex mb={4}>
        <Button variant="outline" xcolor="primary" borderRadius="full" mr={3}>
          Primary
        </Button>
        <Button variant="outline" xcolor="secondary" borderRadius="full" mr={3}>
          Secondary
        </Button>
        <Button variant="outline" xcolor="white" borderRadius="full" mr={3}>
          White
        </Button>
        <Button variant="outline" xcolor="success" borderRadius="full" mr={3}>
          Success
        </Button>
        <Button variant="outline" xcolor="danger" borderRadius="full" mr={3}>
          Danger
        </Button>
        <Button variant="outline" xcolor="info" borderRadius="full" mr={3}>
          Info
        </Button>
        <Button variant="outline" xcolor="warning" borderRadius="full" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [xsize="..."]
      </Heading>

      <Flex mb={4}>
        <Button variant="outline" xcolor="primary" xsize="sm" mr={3}>
          Small
        </Button>
        <Button variant="outline" xcolor="primary" xsize="md" mr={3}>
          Medium*
        </Button>
        <Button variant="outline" xcolor="primary" xsize="lg" mr={3}>
          Large
        </Button>
        <Button variant="outline" xcolor="primary" xsize="xl" mr={3}>
          X Large
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [disabled]
      </Heading>

      <Flex mb={4}>
        <Button variant="outline" xcolor="primary" disabled mr={3}>
          Primary
        </Button>
        <Button variant="outline" xcolor="secondary" disabled mr={3}>
          Secondary
        </Button>
        <Button variant="outline" xcolor="white" disabled mr={3}>
          White
        </Button>
        <Button variant="outline" xcolor="success" disabled mr={3}>
          Success
        </Button>
        <Button variant="outline" xcolor="danger" disabled mr={3}>
          Danger
        </Button>
        <Button variant="outline" xcolor="info" disabled mr={3}>
          Info
        </Button>
        <Button variant="outline" xcolor="warning" disabled mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button with Icon & Text
      </Heading>

      <Flex mb={4}>
        <Button variant="outline" xcolor="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Button>
        <Button variant="outline" xcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Button>
        <Button variant="outline" xcolor="white" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          White
        </Button>
        <Button variant="outline" xcolor="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Button>
        <Button variant="outline" xcolor="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Button>
        <Button variant="outline" xcolor="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Button>
        <Button variant="outline" xcolor="warning" mr={3}>
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
        <Button variant="icon" xcolor="primary" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" xcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" xcolor="white" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" xcolor="success" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" xcolor="danger" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" xcolor="info" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" xcolor="warning" mr={3}>
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
        <Button variant="icon" xcolor="primary" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" xcolor="secondary" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" xcolor="white" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" xcolor="success" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" xcolor="danger" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" xcolor="info" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" xcolor="warning" disabled mr={3}>
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
