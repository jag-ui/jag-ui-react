import { Box, Divider } from "jag-ui-react";
import React from "react";
import { Heading } from "../../components/Heading";
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
