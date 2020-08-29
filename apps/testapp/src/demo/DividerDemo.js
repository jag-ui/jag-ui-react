import { Box, Divider, Heading } from "jag-ui-react";
import React from "react";

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
