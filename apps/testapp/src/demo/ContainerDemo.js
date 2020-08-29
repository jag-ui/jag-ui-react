import { Container, Divider, Heading } from "jag-ui-react";
import { Box } from "@jag-ui-react/box";
import React from "react";

export default function ContainerDemo() {
  return (
    <Box>
      <Heading>Container Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <Container p={4} bg="muted">
          Centered container
        </Container>
      </Box>
    </Box>
  );
}
