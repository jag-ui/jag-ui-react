import React from "react";
import { Box } from "@jag-ui-react/core";
import { Heading, Divider, Container } from "@jag-ui-react/components";

export default function DividerDemo() {
  return (
    <Box>
      <Heading>Divider Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <Divider />
        <Divider />
        <Divider />
      </Box>
    </Box>
  );
}
