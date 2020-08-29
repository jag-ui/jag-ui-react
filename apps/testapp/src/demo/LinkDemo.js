import { Box, Divider, Flex, Heading, Icon, Link } from "jag-ui-react";
import React from "react";
import { FaCog, FaGlobe, FaTimes } from "react-icons/fa";

const SimpleButtonDemo = () => {
  return (
    <>
      <Heading variant="styles.h5" mb={3}>
        Default Link [variant="solid"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" color="primary" mr={3}>
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
      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [variant="solid"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" vcolor="primary" mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" vcolor="secondary" mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" vcolor="muted" mr={3}>
          Muted
        </Link>
        <Link href="#" kind="button" vcolor="success" mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" vcolor="danger" mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" vcolor="info" mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" vcolor="warning" mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [variant="solid"] [borderRadius="full"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" vcolor="primary" borderRadius="full" mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" vcolor="secondary" borderRadius="full" mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" vcolor="muted" borderRadius="full" mr={3}>
          Muted
        </Link>
        <Link href="#" kind="button" vcolor="success" borderRadius="full" mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" vcolor="danger" borderRadius="full" mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" vcolor="info" borderRadius="full" mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" vcolor="warning" borderRadius="full" mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [vsize="..."]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" vcolor="primary" vsize="sm" mr={3}>
          Small
        </Link>
        <Link href="#" kind="button" vcolor="primary" vsize="md" mr={3}>
          Medium*
        </Link>
        <Link href="#" kind="button" vcolor="primary" vsize="lg" mr={3}>
          Large
        </Link>
        <Link href="#" kind="button" vcolor="primary" vsize="xl" mr={3}>
          X Large
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [disabled]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" vcolor="primary" disabled mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" vcolor="secondary" disabled mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" vcolor="muted" disabled mr={3}>
          Muted
        </Link>
        <Link href="#" kind="button" vcolor="success" disabled mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" vcolor="danger" disabled mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" vcolor="info" disabled mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" vcolor="warning" disabled mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link with Icons
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" vcolor="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Link>
        <Link href="#" kind="button" vcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Link>
        <Link href="#" kind="button" vcolor="muted" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Muted
        </Link>
        <Link href="#" kind="button" vcolor="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Link>
        <Link href="#" kind="button" vcolor="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Link>
        <Link href="#" kind="button" vcolor="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Link>
        <Link href="#" kind="button" vcolor="warning" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Warning
        </Link>
      </Flex>
    </>
  );
};

const OutlineButtonDemo = () => {
  return (
    <>
      <Heading variant="styles.h5" mt={4} mb={3}>
        Default Link Styled Link [kind="button"] [variant="solid"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" vcolor="primary" mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="secondary" mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="muted" mr={3}>
          Muted
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="success" mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="danger" mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="info" mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="warning" mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [variant="solid"] [borderRadius="full"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" vcolor="primary" borderRadius="full" mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="secondary" borderRadius="full" mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="muted" borderRadius="full" mr={3}>
          Muted
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="success" borderRadius="full" mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="danger" borderRadius="full" mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="info" borderRadius="full" mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="warning" borderRadius="full" mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [vsize="..."]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" vcolor="primary" vsize="sm" mr={3}>
          Small
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="primary" vsize="md" mr={3}>
          Medium*
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="primary" vsize="lg" mr={3}>
          Large
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="primary" vsize="xl" mr={3}>
          X Large
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [disabled]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" vcolor="primary" disabled mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="secondary" disabled mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="muted" disabled mr={3}>
          Muted
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="success" disabled mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="danger" disabled mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="info" disabled mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="warning" disabled mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link with Icons
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" vcolor="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="muted" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Muted
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Link>
        <Link href="#" kind="button" variant="outline" vcolor="warning" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Warning
        </Link>
      </Flex>
    </>
  );
};

const LinkWithIconDemo = () => {
  return (
    <>
      <Heading variant="styles.h5" mt={4} mb={3}>
        Link with Icon [variant="solid"]
      </Heading>
      <Flex mb={4}>
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

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link with Icon [variant="icon"]
      </Heading>

      <Flex mb={4}>
        <Link variant="icon" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="primary" mr={3}>
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
      <Heading variant="styles.h5" mt={4} mb={3}>
        Link with Icon [variant="icon"] [disabled]
      </Heading>

      <Flex mb={4}>
        <Link variant="icon" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="primary" disabled mr={3}>
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
      <Heading mt={5}>Link Demo</Heading>
      <Divider />
      <Box p={4} boxShadow="default" bg="bg2">
        <SimpleButtonDemo />
        <OutlineButtonDemo />
        <LinkWithIconDemo />
      </Box>
    </>
  );
}
