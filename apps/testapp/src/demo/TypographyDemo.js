import { Box } from "@jag-ui-react/core";
import React from "react";
import { Heading, Text } from "theme-ui";

export default function TypographyDemo() {
  return (
    <Box>
      <Heading as="h2" variant="styles.h2">
        TypographyDemo
      </Heading>
      <Box>
        <Heading variant="display">Display</Heading>
        <Heading as="h1" variant="styles.h1">
          Heading1
        </Heading>
        <Heading as="h2" variant="styles.h2">
          Heading2
        </Heading>
        <Heading as="h3" variant="styles.h3">
          Heading3
        </Heading>
        <Heading as="h4" variant="styles.h4">
          Heading4
        </Heading>
        <Heading as="h5" variant="styles.h5">
          Heading5
        </Heading>
        <Heading as="h6" variant="styles.h6">
          Heading6
        </Heading>
        <Heading variant="h3">Heading1</Heading>
        <Heading variant="h4">Heading1</Heading>
        <Text fontSize={[3, 4, 5]} fontWeight="bold" color="primary">
          Responsive Font Size [NW]
        </Text>
        <Text fontSize={[3, 4, 5]} fontWeight="bold" color="secondary">
          Responsive Font Size [NW]
        </Text>
      </Box>
    </Box>
  );
}
