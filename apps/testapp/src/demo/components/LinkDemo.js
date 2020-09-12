import { Box, Divider, Flex, Icon, Link, Button } from "jag-ui-react";
import React from "react";
import { FaCog, FaGlobe, FaTimes } from "react-icons/fa";
import { Heading } from "../../components/Heading";
const SimpleButtonDemo = () => {
  return (
    <>
      <Heading variant="h5" mb={3}>
        Default Link [variant="solid"]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Link href="#" color="primary.main" mr={3}>
          Primary
        </Link>
        <Link href="#" color="text" mr={3}>
          Secondary
        </Link>
        <Link href="#" color="muted" mr={3}>
          Muted
        </Link>
        <Link href="#" color="success" mr={3}>
          Success
        </Link>
        <Link href="#" color="danger" mr={3}>
          Danger
        </Link>
        <Link href="#" color="info" mr={3}>
          Info
        </Link>
        <Link href="#" color="warning" mr={3}>
          Warning
        </Link>
      </Flex>
      <Heading variant="h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [variant="solid"]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button as="a" href="#" vcolor="primary" mr={3}>
          Primary
        </Button>
        <Button as="a" href="#" vcolor="secondary" mr={3}>
          Secondary
        </Button>
        <Button as="a" href="#" vcolor="muted" mr={3}>
          Muted
        </Button>
        <Button as="a" href="#" vcolor="success" mr={3}>
          Success
        </Button>
        <Button as="a" href="#" vcolor="danger" mr={3}>
          Danger
        </Button>
        <Button as="a" href="#" vcolor="info" mr={3}>
          Info
        </Button>
        <Button as="a" href="#" vcolor="warning" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [variant="solid"] [borderRadius="full"]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button as="a" href="#" vcolor="primary" borderRadius="full" mr={3}>
          Primary
        </Button>
        <Button as="a" href="#" vcolor="secondary" borderRadius="full" mr={3}>
          Secondary
        </Button>
        <Button as="a" href="#" vcolor="muted" borderRadius="full" mr={3}>
          Muted
        </Button>
        <Button as="a" href="#" vcolor="success" borderRadius="full" mr={3}>
          Success
        </Button>
        <Button as="a" href="#" vcolor="danger" borderRadius="full" mr={3}>
          Danger
        </Button>
        <Button as="a" href="#" vcolor="info" borderRadius="full" mr={3}>
          Info
        </Button>
        <Button as="a" href="#" vcolor="warning" borderRadius="full" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [vsize="..."]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button as="a" href="#" vcolor="primary" vsize="sm" mr={3}>
          Small
        </Button>
        <Button as="a" href="#" vcolor="primary" vsize="md" mr={3}>
          Medium*
        </Button>
        <Button as="a" href="#" vcolor="primary" vsize="lg" mr={3}>
          Large
        </Button>
        <Button as="a" href="#" vcolor="primary" vsize="xl" mr={3}>
          X Large
        </Button>
      </Flex>

      <Heading variant="h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [disabled]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button as="a" href="#" vcolor="primary" disabled mr={3}>
          Primary
        </Button>
        <Button as="a" href="#" vcolor="secondary" disabled mr={3}>
          Secondary
        </Button>
        <Button as="a" href="#" vcolor="muted" disabled mr={3}>
          Muted
        </Button>
        <Button as="a" href="#" vcolor="success" disabled mr={3}>
          Success
        </Button>
        <Button as="a" href="#" vcolor="danger" disabled mr={3}>
          Danger
        </Button>
        <Button as="a" href="#" vcolor="info" disabled mr={3}>
          Info
        </Button>
        <Button as="a" href="#" vcolor="warning" disabled mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="h5" mt={4} mb={3}>
        Link with Icons
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button as="a" href="#" vcolor="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Button>
        <Button as="a" href="#" vcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Button>
        <Button as="a" href="#" vcolor="muted" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Muted
        </Button>
        <Button as="a" href="#" vcolor="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Button>
        <Button as="a" href="#" vcolor="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Button>
        <Button as="a" href="#" vcolor="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Button>
        <Button as="a" href="#" vcolor="warning" mr={3}>
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
        Default Link Styled Link [kind="button"] [variant="solid"]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button as="a" href="#" variant="outline" vcolor="primary" mr={3}>
          Primary
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="secondary" mr={3}>
          Secondary
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="muted" mr={3}>
          Muted
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="success" mr={3}>
          Success
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="danger" mr={3}>
          Danger
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="info" mr={3}>
          Info
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="warning" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [variant="solid"] [borderRadius="full"]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button as="a" href="#" variant="outline" vcolor="primary" borderRadius="full" mr={3}>
          Primary
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="secondary" borderRadius="full" mr={3}>
          Secondary
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="muted" borderRadius="full" mr={3}>
          Muted
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="success" borderRadius="full" mr={3}>
          Success
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="danger" borderRadius="full" mr={3}>
          Danger
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="info" borderRadius="full" mr={3}>
          Info
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="warning" borderRadius="full" mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [vsize="..."]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button as="a" href="#" variant="outline" vcolor="primary" vsize="sm" mr={3}>
          Small
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="primary" vsize="md" mr={3}>
          Medium*
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="primary" vsize="lg" mr={3}>
          Large
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="primary" vsize="xl" mr={3}>
          X Large
        </Button>
      </Flex>

      <Heading variant="h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [disabled]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button as="a" href="#" variant="outline" vcolor="primary" disabled mr={3}>
          Primary
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="secondary" disabled mr={3}>
          Secondary
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="muted" disabled mr={3}>
          Muted
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="success" disabled mr={3}>
          Success
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="danger" disabled mr={3}>
          Danger
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="info" disabled mr={3}>
          Info
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="warning" disabled mr={3}>
          Warning
        </Button>
      </Flex>

      <Heading variant="h5" mt={4} mb={3}>
        Link with Icons
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Button as="a" href="#" variant="outline" vcolor="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="muted" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Muted
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Button>
        <Button as="a" href="#" variant="outline" vcolor="warning" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Warning
        </Button>
      </Flex>
    </>
  );
};

const LinkWithIconDemo = () => {
  return (
    <>
      <Heading variant="h5" mt={4} mb={3}>
        Link with Icon [variant="solid"]
      </Heading>
      <Flex mb={4} flexWrap="wrap">
        <Link mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link mr={3}>
          <Icon icon={<FaTimes />} />
        </Link>
        <Link mr={3}>
          <Icon icon={<FaGlobe />} />
        </Link>
      </Flex>

      <Heading variant="h5" mt={4} mb={3}>
        Link with Icon [variant="icon"]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Link variant="icon" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="primary.main" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="text" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="muted" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="success" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="danger" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="info" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="warning" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
      </Flex>
      <Heading variant="h5" mt={4} mb={3}>
        Link with Icon [variant="icon"] [disabled]
      </Heading>

      <Flex mb={4} flexWrap="wrap">
        <Link variant="icon" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="primary.main" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="text" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="muted" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="success" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="danger" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="info" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="warning" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
      </Flex>
    </>
  );
};

export default function LinkDemo() {
  // const context = useThemeUI();
  // const { theme, components, colorMode, setColorMode } = context;
  // console.log("ButtonDemo: ", { theme });

  return (
    <>
      <Heading>Link Demo</Heading>
      <Divider />
      <Box p={4} boxShadow="default" bg="bg.card">
        <SimpleButtonDemo />
        <OutlineButtonDemo />
        <LinkWithIconDemo />
      </Box>
    </>
  );
}
