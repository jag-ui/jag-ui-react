import { Divider, Heading, Text } from "@jag-ui-react/components";
import { Box } from "@jag-ui-react/core";
import React from "react";

export default function TypographyDemo() {
  return (
    <Box>
      <Heading>Typography Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <Heading variant="display">Display</Heading>
        <Heading>Default Heading</Heading>
        <Heading as="h1">Heading 1</Heading>
        <Heading as="h3">Heading 2</Heading>
        <Heading as="h3">Heading 3</Heading>
        <Heading as="h4">Heading 4</Heading>
        <Heading as="h5">Heading 5</Heading>
        <Heading as="h6">Heading 6</Heading>

        <Heading as="h1" variant="styles.h1">
          Theme Heading 1
        </Heading>
        <Heading as="h2" variant="styles.h2">
          Theme Heading 2
        </Heading>
        <Heading as="h3" variant="styles.h3">
          Theme Heading 3
        </Heading>
        <Heading as="h4" variant="styles.h4">
          Theme Heading 4
        </Heading>
        <Heading as="h5" variant="styles.h5">
          Theme Heading 5
        </Heading>
        <Heading as="h6" variant="styles.h6">
          Theme Heading 6
        </Heading>

        <Text fontSize={[3, 4, 5]} fontWeight="bold" color="primary">
          Responsive Font Size
        </Text>
        <Text fontSize={[3, 4, 5]} fontWeight="bold" color="secondary">
          Responsive Font Size
        </Text>

        <Text sx={{ fontSize: 4, fontWeight: "bold" }}>Hello</Text>
        <Text variant="caps">Hello</Text>
      </Box>
    </Box>
  );
}
