import { Link, Divider, Heading, Icon } from "@jag-ui-react/components";
import { Box, Flex } from "@jag-ui-react/core";
import React from "react";
import { FaCog, FaTimes, FaGlobe } from "react-icons/fa";
// import { useThemeUI } from "theme-ui";

const SimpleButtonDemo = () => {
  return (
    <>
      <Heading variant="styles.h5" mb={3}>
        Default Link [variant="simple"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" xcolor="primary" mr={3}>
          Primary
        </Link>
        <Link href="#" xcolor="secondary" mr={3}>
          Secondary
        </Link>
        <Link href="#" xcolor="muted" mr={3}>
          Muted
        </Link>
        <Link href="#" xcolor="success" mr={3}>
          Success
        </Link>
        <Link href="#" xcolor="danger" mr={3}>
          Danger
        </Link>
        <Link href="#" xcolor="info" mr={3}>
          Info
        </Link>
        <Link href="#" xcolor="warning" mr={3}>
          Warning
        </Link>
      </Flex>
      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [variant="simple"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" xcolor="primary" mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" xcolor="secondary" mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" xcolor="muted" mr={3}>
          Muted
        </Link>
        <Link href="#" kind="button" xcolor="success" mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" xcolor="danger" mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" xcolor="info" mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" xcolor="warning" mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [variant="simple"] [borderRadius="full"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" xcolor="primary" borderRadius="full" mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" xcolor="secondary" borderRadius="full" mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" xcolor="muted" borderRadius="full" mr={3}>
          Muted
        </Link>
        <Link href="#" kind="button" xcolor="success" borderRadius="full" mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" xcolor="danger" borderRadius="full" mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" xcolor="info" borderRadius="full" mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" xcolor="warning" borderRadius="full" mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [xsize="..."]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" xcolor="primary" xsize="sm" mr={3}>
          Small
        </Link>
        <Link href="#" kind="button" xcolor="primary" xsize="md" mr={3}>
          Medium*
        </Link>
        <Link href="#" kind="button" xcolor="primary" xsize="lg" mr={3}>
          Large
        </Link>
        <Link href="#" kind="button" xcolor="primary" xsize="xl" mr={3}>
          X Large
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [disabled]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" xcolor="primary" disabled mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" xcolor="secondary" disabled mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" xcolor="muted" disabled mr={3}>
          Muted
        </Link>
        <Link href="#" kind="button" xcolor="success" disabled mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" xcolor="danger" disabled mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" xcolor="info" disabled mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" xcolor="warning" disabled mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link with Icons
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" xcolor="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Link>
        <Link href="#" kind="button" xcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Link>
        <Link href="#" kind="button" xcolor="muted" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Muted
        </Link>
        <Link href="#" kind="button" xcolor="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Link>
        <Link href="#" kind="button" xcolor="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Link>
        <Link href="#" kind="button" xcolor="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Link>
        <Link href="#" kind="button" xcolor="warning" mr={3}>
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
        <Link href="#" kind="button" variant="outline" xcolor="primary" mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="secondary" mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="muted" mr={3}>
          Muted
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="success" mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="danger" mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="info" mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="warning" mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [variant="simple"] [borderRadius="full"]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" xcolor="primary" borderRadius="full" mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="secondary" borderRadius="full" mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="muted" borderRadius="full" mr={3}>
          Muted
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="success" borderRadius="full" mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="danger" borderRadius="full" mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="info" borderRadius="full" mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="warning" borderRadius="full" mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [xsize="..."]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" xcolor="primary" xsize="sm" mr={3}>
          Small
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="primary" xsize="md" mr={3}>
          Medium*
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="primary" xsize="lg" mr={3}>
          Large
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="primary" xsize="xl" mr={3}>
          X Large
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link Styled Link [kind="button"] [disabled]
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" xcolor="primary" disabled mr={3}>
          Primary
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="secondary" disabled mr={3}>
          Secondary
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="muted" disabled mr={3}>
          Muted
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="success" disabled mr={3}>
          Success
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="danger" disabled mr={3}>
          Danger
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="info" disabled mr={3}>
          Info
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="warning" disabled mr={3}>
          Warning
        </Link>
      </Flex>

      <Heading variant="styles.h5" mt={4} mb={3}>
        Link with Icons
      </Heading>

      <Flex mb={4}>
        <Link href="#" kind="button" variant="outline" xcolor="primary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Primary
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Secondary
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="muted" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Muted
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="success" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Success
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="danger" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Danger
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="info" mr={3}>
          <Icon icon={<FaCog />} mr={2} />
          Info
        </Link>
        <Link href="#" kind="button" variant="outline" xcolor="warning" mr={3}>
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
        <Link variant="icon" xcolor="primary" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" xcolor="secondary" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" xcolor="muted" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" xcolor="success" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" xcolor="danger" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" xcolor="info" mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" xcolor="warning" mr={3}>
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
        <Link variant="icon" xcolor="primary" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" xcolor="secondary" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" xcolor="muted" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" xcolor="success" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" xcolor="danger" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" xcolor="info" disabled mr={3}>
          <Icon icon={<FaCog />} />
        </Link>
        <Link variant="icon" xcolor="warning" disabled mr={3}>
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
