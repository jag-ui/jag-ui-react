import { Box, Container, Divider } from "jag-ui-react";
import React from "react";
import { Heading } from "../components/Heading";

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
