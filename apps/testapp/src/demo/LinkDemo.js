import { Link, Divider, Heading, Icon } from "@jag-ui-react/components";
import { Box, Flex } from "@jag-ui-react/core";
import React from "react";
import { FaCog, FaTimes, FaGlobe } from "react-icons/fa";
// import { useThemeUI } from "theme-ui";

const SimpleButtonDemo = () => {
  return (
    <>
      <Heading variant="styles.h5" mt={4} mb={3}>
        Default Link [variant="simple"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" color="primary" mr={3}>
          Primary
        </Link>
        <Link href="#" color="secondary" mr={3}>
          Secondary
        </Link>
        <Link href="#" color="white" mr={3}>
          White
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
        Link Styled Link [kind="button"] [variant="simple"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" color="primary" mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" color="secondary" mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" color="white" mr={3}>
          White
        </Link>
        <Link href="#" kind="button" color="success" mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" color="danger" mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" color="info" mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" color="warning" mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [variant="simple"] [borderRadius="full"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" color="primary" borderRadius="full" mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" color="secondary" borderRadius="full" mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" color="white" borderRadius="full" mr={3}>
          White
        </Link>
        <Link href="#" kind="button" color="success" borderRadius="full" mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" color="danger" borderRadius="full" mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" color="info" borderRadius="full" mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" color="warning" borderRadius="full" mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [size="..."]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" color="primary" size="sm" mr={3}>
          Small
        </Link>
        <Link href="#" kind="button" color="primary" size="md" mr={3}>
          Medium*
        </Link>
        <Link href="#" kind="button" color="primary" size="lg" mr={3}>
          Large
        </Link>
        <Link href="#" kind="button" color="primary" size="xl" mr={3}>
          X Large
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [disabled]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" color="primary" disabled mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" color="secondary" disabled mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" color="white" disabled mr={3}>
          White
        </Link>
        <Link href="#" kind="button" color="success" disabled mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" color="danger" disabled mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" color="info" disabled mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" color="warning" disabled mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link with Icons
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" color="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Link>
        <Link href="#" kind="button" color="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Link>
        <Link href="#" kind="button" color="white" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          White
        </Link>
        <Link href="#" kind="button" color="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Link>
        <Link href="#" kind="button" color="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Link>
        <Link href="#" kind="button" color="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Link>
        <Link href="#" kind="button" color="warning" mr={3}>
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
        Default Link Styled Link [kind="button"] [variant="simple"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" color="primary" mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" variant="outline" color="secondary" mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" variant="outline" color="white" mr={3}>
          White
        </Link>
        <Link href="#" kind="button" variant="outline" color="success" mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" variant="outline" color="danger" mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" variant="outline" color="info" mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" variant="outline" color="warning" mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [variant="simple"] [borderRadius="full"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" color="primary" borderRadius="full" mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" variant="outline" color="secondary" borderRadius="full" mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" variant="outline" color="white" borderRadius="full" mr={3}>
          White
        </Link>
        <Link href="#" kind="button" variant="outline" color="success" borderRadius="full" mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" variant="outline" color="danger" borderRadius="full" mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" variant="outline" color="info" borderRadius="full" mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" variant="outline" color="warning" borderRadius="full" mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [size="..."]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" color="primary" size="sm" mr={3}>
          Small
        </Link>
        <Link href="#" kind="button" variant="outline" color="primary" size="md" mr={3}>
          Medium*
        </Link>
        <Link href="#" kind="button" variant="outline" color="primary" size="lg" mr={3}>
          Large
        </Link>
        <Link href="#" kind="button" variant="outline" color="primary" size="xl" mr={3}>
          X Large
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [disabled]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" color="primary" disabled mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" variant="outline" color="secondary" disabled mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" variant="outline" color="white" disabled mr={3}>
          White
        </Link>
        <Link href="#" kind="button" variant="outline" color="success" disabled mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" variant="outline" color="danger" disabled mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" variant="outline" color="info" disabled mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" variant="outline" color="warning" disabled mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link with Icons
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" color="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Link>
        <Link href="#" kind="button" variant="outline" color="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Link>
        <Link href="#" kind="button" variant="outline" color="white" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          White
        </Link>
        <Link href="#" kind="button" variant="outline" color="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Link>
        <Link href="#" kind="button" variant="outline" color="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Link>
        <Link href="#" kind="button" variant="outline" color="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Link>
        <Link href="#" kind="button" variant="outline" color="warning" mr={3}>
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
        Link with Icon [variant="simple"]
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
        <Link variant="icon" color="secondary" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="white" mr={3}>
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
        <Link variant="icon" color="secondary" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" color="white" disabled mr={3}>
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
    <Box>
      <Heading>Link Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <SimpleButtonDemo />
        <OutlineButtonDemo />
        <LinkWithIconDemo />
      </Box>
    </Box>
  );
}
