import { Divider, Heading, Message } from "@jag-ui-react/components";
import { Box } from "@jag-ui-react/core";
import React from "react";

export default function MessageDemo() {
  return (
    <Box>
      <Heading>Message Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <Message>This is just a message for someone to read</Message>
      </Box>
    </Box>
  );
}
