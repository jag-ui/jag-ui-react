import React from "react";
import { Box } from "@jag-ui-react/core";
import { Heading, Divider, Container } from "@jag-ui-react/components";

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
