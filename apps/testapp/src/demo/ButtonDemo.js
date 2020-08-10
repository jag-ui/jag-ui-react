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
        <Button vcolor="primary" mr={3}>
          Primary
        </Button>
        <Button vcolor="secondary" mr={3}>
          Secondary
        </Button>
        <Button vcolor="muted" mr={3}>
          Muted
        </Button>
        <Button vcolor="success" mr={3}>
          Success
        </Button>
        <Button vcolor="danger" mr={3}>
          Danger
        </Button>
        <Button vcolor="info" mr={3}>
          Info
        </Button>
        <Button vcolor="warning" mr={3}>
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
        <Button vcolor="primary" borderRadius="full" mr={3}>
          Primary
        </Button>
        <Button vcolor="secondary" borderRadius="full" mr={3}>
          Secondary
        </Button>
        <Button vcolor="muted" borderRadius="full" mr={3}>
          Muted
        </Button>
        <Button vcolor="success" borderRadius="full" mr={3}>
          Success
        </Button>
        <Button vcolor="danger" borderRadius="full" mr={3}>
          Danger
        </Button>
        <Button vcolor="info" borderRadius="full" mr={3}>
          Info
        </Button>
        <Button vcolor="warning" borderRadius="full" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [vsize="..."]
      </Heading>

      <Flex mb={4}>
        <Button vcolor="primary" vsize="sm" mr={3}>
          Small
        </Button>
        <Button vcolor="primary" vsize="md" mr={3}>
          Medium*
        </Button>
        <Button vcolor="primary" vsize="lg" mr={3}>
          Large
        </Button>
        <Button vcolor="primary" vsize="xl" mr={3}>
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
        <Button vcolor="primary" disabled mr={3}>
          Primary
        </Button>
        <Button vcolor="secondary" disabled mr={3}>
          Secondary
        </Button>
        <Button vcolor="muted" disabled mr={3}>
          Muted
        </Button>
        <Button vcolor="success" disabled mr={3}>
          Success
        </Button>
        <Button vcolor="danger" disabled mr={3}>
          Danger
        </Button>
        <Button vcolor="info" disabled mr={3}>
          Info
        </Button>
        <Button vcolor="warning" disabled mr={3}>
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
        <Button vcolor="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Button>
        <Button vcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Button>
        <Button vcolor="muted" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Muted
        </Button>
        <Button vcolor="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Button>
        <Button vcolor="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Button>
        <Button vcolor="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Button>
        <Button vcolor="warning" mr={3}>
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
        <Button variant="outline" vcolor="primary" mr={3}>
          Primary
        </Button>
        <Button variant="outline" vcolor="secondary" mr={3}>
          Secondary
        </Button>
        <Button variant="outline" vcolor="muted" mr={3}>
          Muted
        </Button>
        <Button variant="outline" vcolor="success" mr={3}>
          Success
        </Button>
        <Button variant="outline" vcolor="danger" mr={3}>
          Danger
        </Button>
        <Button variant="outline" vcolor="info" mr={3}>
          Info
        </Button>
        <Button variant="outline" vcolor="warning" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [variant="simple"] [borderRadius="full"]
      </Heading>

      <Flex mb={4}>
        <Button variant="outline" vcolor="primary" borderRadius="full" mr={3}>
          Primary
        </Button>
        <Button variant="outline" vcolor="secondary" borderRadius="full" mr={3}>
          Secondary
        </Button>
        <Button variant="outline" vcolor="muted" borderRadius="full" mr={3}>
          Muted
        </Button>
        <Button variant="outline" vcolor="success" borderRadius="full" mr={3}>
          Success
        </Button>
        <Button variant="outline" vcolor="danger" borderRadius="full" mr={3}>
          Danger
        </Button>
        <Button variant="outline" vcolor="info" borderRadius="full" mr={3}>
          Info
        </Button>
        <Button variant="outline" vcolor="warning" borderRadius="full" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [vsize="..."]
      </Heading>

      <Flex mb={4}>
        <Button variant="outline" vcolor="primary" vsize="sm" mr={3}>
          Small
        </Button>
        <Button variant="outline" vcolor="primary" vsize="md" mr={3}>
          Medium*
        </Button>
        <Button variant="outline" vcolor="primary" vsize="lg" mr={3}>
          Large
        </Button>
        <Button variant="outline" vcolor="primary" vsize="xl" mr={3}>
          X Large
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button [disabled]
      </Heading>

      <Flex mb={4}>
        <Button variant="outline" vcolor="primary" disabled mr={3}>
          Primary
        </Button>
        <Button variant="outline" vcolor="secondary" disabled mr={3}>
          Secondary
        </Button>
        <Button variant="outline" vcolor="muted" disabled mr={3}>
          Muted
        </Button>
        <Button variant="outline" vcolor="success" disabled mr={3}>
          Success
        </Button>
        <Button variant="outline" vcolor="danger" disabled mr={3}>
          Danger
        </Button>
        <Button variant="outline" vcolor="info" disabled mr={3}>
          Info
        </Button>
        <Button variant="outline" vcolor="warning" disabled mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Button with Icon & Text
      </Heading>

      <Flex mb={4}>
        <Button variant="outline" vcolor="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Button>
        <Button variant="outline" vcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Button>
        <Button variant="outline" vcolor="muted" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Muted
        </Button>
        <Button variant="outline" vcolor="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Button>
        <Button variant="outline" vcolor="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Button>
        <Button variant="outline" vcolor="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Button>
        <Button variant="outline" vcolor="warning" mr={3}>
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
        <Button variant="icon" vcolor="primary" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" vcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" vcolor="muted" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" vcolor="success" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" vcolor="danger" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" vcolor="info" mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" vcolor="warning" mr={3}>
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
        <Button variant="icon" vcolor="primary" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" vcolor="secondary" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" vcolor="muted" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" vcolor="success" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" vcolor="danger" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" vcolor="info" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Button>
        <Button variant="icon" vcolor="warning" disabled mr={3}>
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
    <>
      <Heading mt={5}>Button Demo</Heading>
      <Divider />
      <Box p={4} boxShadow="default" bg="bg2">
        <SimpleButtonDemo />
        <OutlineButtonDemo />
        <BtnWithIconsDemo />
      </Box>
    </>
  );
}
