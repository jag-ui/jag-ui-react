import { Box, Divider, Text } from "jag-ui-react";
import React from "react";
import { Heading } from "../../components/Heading";
export default function TypographyDemo() {
  return (
    <Box>
      <Heading>Typography Demo</Heading>
      <Divider />
      <Text variant="h4" as="h4">
        Text (Variants):
      </Text>
      <Box p={4} boxShadow="default" bg="bg.card">
        <Text variant="h1" as="h1">
          Heading 1
        </Text>
        <Text variant="h2" as="h2">
          Heading 2
        </Text>
        <Text variant="h3" as="h3">
          Heading 3
        </Text>
        <Text variant="h4" as="h4">
          Heading 4
        </Text>
        <Text variant="h5" as="h5">
          Heading 5
        </Text>
        <Text variant="h6" as="h6">
          Heading 6
        </Text>
        <Box>
          <Text variant="display">Display</Text>
        </Box>
        <Divider />
        <Box mb={3}>
          <Text>Default Text</Text>
        </Box>
        <Box mb={3}>
          <Text variant="muted">Muted Text</Text>
        </Box>
        <Box mb={3}>
          <Text variant="caps">CAPS TEXT</Text>
        </Box>
        <Box mb={3}>
          <Text as="p">
            This is pragarph text, Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
            print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </Text>
        </Box>
      </Box>

      <Text variant="h4" as="h4" mt={3} mb={2}>
        Text (Sizes):
      </Text>
      <Box p={4} boxShadow="default" bg="bg.card">
        <Text fontSize="xs">Text (xs)</Text>
        <Text fontSize="sm">Text (sm)</Text>
        <Text fontSize="md">Text (md)</Text>
        <Text fontSize="lg">Text (lg)</Text>
        <Text fontSize="xl">Text (xl)</Text>
        <Text fontSize="2xl">Text (2xl)</Text>
      </Box>

      <Text variant="h4" as="h4" mt={3} mb={2}>
        Text (with Tooltip):
      </Text>
      <Box p={4} boxShadow="default" bg="bg.card">
        <Box mb={3}>
          <Text as="span" enableTooltip>
            This is very very long text (has tooltip)
          </Text>
        </Box>
        <Box mb={3}>
          <Text as="span" enableTooltip tooltip="Hello! Tooltip">
            This is very very long text (has custom tooltip)
          </Text>
        </Box>

        <Box mb={3}>
          <Text as="span" maxLength={15}>
            This is very very long text (tooltip has full text)
          </Text>
        </Box>

        <Box mb={3}>
          <Text as="span" maxLength={50} truncateType="middle">
            This is very very very very very very very long text (truncateType is "middle")
          </Text>
        </Box>

        <Box mb={3}>
          <Text as="p" maxLength={100}>
            This is pragarph text, Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
            print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </Text>
        </Box>
      </Box>

      <Text variant="h4" as="h4" mt={3} mb={2}>
        Text (Responsive):
      </Text>
      <Box p={4} boxShadow="default" bg="bg.card">
        <Text as="span" maxLength={8} fontSize={["xs", "md", "2xl"]} fontWeight="bold" color="primary.main">
          Responsive Font Size Responsive Font Size
        </Text>
        <Text as="span" fontSize={["xs", "md", "2xl"]} fontWeight="bold" color="secondary">
          Responsive Font Size
        </Text>
      </Box>
    </Box>
  );
}
