import { Button, Box, Flex, Divider, Icon, IconButton } from "jag-ui-react";
import React from "react";
import { FaCog, FaGlobe, FaTimes } from "react-icons/fa";
import { Heading } from "../../components/Heading";

const SimpleButtonDemo = () => {
  return (
    <>
      <Heading variant="h5" mt={4} mb={3}>
        Default Button [variant="solid"]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button mr={3}>Default</Button>
        <Button variant="solid" vcolor="primary" mr={3}>
          Primary
        </Button>
        <Button vcolor="secondary" mr={3}>
          Secondary
        </Button>
        <Button vcolor="white" mr={3}>
          White
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

      <Heading variant="h5" mt={4} mb={3}>
        Button [variant="solid"] [borderRadius="full"]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button borderRadius="full" mr={3}>
          Default
        </Button>
        <Button vcolor="primary" borderRadius="full" mr={3}>
          Primary
        </Button>
        <Button vcolor="secondary" borderRadius="full" mr={3}>
          Secondary
        </Button>
        <Button vcolor="white" borderRadius="full" mr={3}>
          White
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

      <Heading variant="h5" mt={4} mb={3}>
        Button [vsize="..."]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
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

      <Heading variant="h5" mt={4} mb={3}>
        Button [disabled]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button disabled mr={3}>
          Default
        </Button>
        <Button vcolor="primary" disabled mr={3}>
          Primary
        </Button>
        <Button vcolor="secondary" disabled mr={3}>
          Secondary
        </Button>
        <Button vcolor="white" disabled mr={3}>
          White
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

      <Heading variant="h5" mt={4} mb={3}>
        Button with Icon & Text [diabled]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
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
        <Button vcolor="white" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          White
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
      <Heading variant="h5" mt={4} mb={3}>
        Default Button [variant="solid"]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button variant="outline" vcolor="primary" mr={3}>
          Primary
        </Button>
        <Button variant="outline" vcolor="secondary" mr={3}>
          Secondary
        </Button>
        <Button variant="outline" vcolor="white" mr={3}>
          White
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

      <Heading variant="h5" mt={4} mb={3}>
        Button [variant="solid"] [borderRadius="full"]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button variant="outline" vcolor="primary" borderRadius="full" mr={3}>
          Primary
        </Button>
        <Button variant="outline" vcolor="secondary" borderRadius="full" mr={3}>
          Secondary
        </Button>
        <Button variant="outline" vcolor="white" borderRadius="full" mr={3}>
          White
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

      <Heading variant="h5" mt={4} mb={3}>
        Button [vsize="..."]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
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

      <Heading variant="h5" mt={4} mb={3}>
        Button [disabled]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button variant="outline" vcolor="primary" disabled mr={3}>
          Primary
        </Button>
        <Button variant="outline" vcolor="secondary" disabled mr={3}>
          Secondary
        </Button>
        <Button variant="outline" vcolor="white" disabled mr={3}>
          White
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

      <Heading variant="h5" mt={4} mb={3}>
        Button with Icon & Text
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button variant="outline" vcolor="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Button>
        <Button variant="outline" vcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Button>
        <Button variant="outline" vcolor="white" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          White
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
      <Heading variant="h5" mt={4} mb={3}>
        Button with Icon [variant="solid"]
      </Heading>
      <Flex mb={4} flexWrap="wrap">
        <IconButton icon={<FaCog />} mr={3} />
        <IconButton icon={<FaTimes />} mr={3} />

        <IconButton icon={<FaGlobe />} mr={3} />
      </Flex>

      <Heading variant="h5" mt={4} mb={3}>
        Button with Icon [variant="icon"]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <IconButton icon={<FaCog />} mr={3} />

        <IconButton icon={<FaCog />} vcolor="primary" mr={3} />

        <IconButton icon={<FaCog />} vcolor="secondary" mr={3} />

        <IconButton icon={<FaCog />} vcolor="white" mr={3} />

        <IconButton icon={<FaCog />} vcolor="success" mr={3} />

        <IconButton icon={<FaCog />} vcolor="danger" mr={3} />

        <IconButton icon={<FaCog />} vcolor="info" mr={3} />

        <IconButton icon={<FaCog />} vcolor="warning" mr={3} />
      </Flex>
      <Heading variant="h5" mt={4} mb={3}>
        Button with Icon [variant="icon"] [disabled]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <IconButton icon={<FaCog />} disabled mr={3} />

        <IconButton icon={<FaCog />} vcolor="primary" disabled mr={3} />

        <IconButton icon={<FaCog />} vcolor="secondary" disabled mr={3} />

        <IconButton icon={<FaCog />} vcolor="white" disabled mr={3} />

        <IconButton icon={<FaCog />} vcolor="success" disabled mr={3} />

        <IconButton icon={<FaCog />} vcolor="danger" disabled mr={3} />

        <IconButton icon={<FaCog />} vcolor="info" disabled mr={3} />

        <IconButton icon={<FaCog />} variant="icon" vcolor="warning" disabled mr={3} />
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
      <Heading>Button Demo</Heading>
      <Divider />
      <Box p={4}>
        <SimpleButtonDemo />
        <OutlineButtonDemo />
        <BtnWithIconsDemo />
      </Box>
    </>
  );
}
