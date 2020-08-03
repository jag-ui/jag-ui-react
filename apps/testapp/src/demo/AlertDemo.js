import { Alert, Divider, Heading } from "@jag-ui-react/components";
import { Box } from "@jag-ui-react/core";
import React from "react";
// import { Close } from "@jag-ui-react/icons";

export default function AlertDemo() {
  return (
    <Box>
      <Heading>Alert Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <Alert mb={3}>
          Beep boop, this is an alert!
          {/* <Close ml="auto" mr={-2} /> */}
        </Alert>

        <Alert variant="secondary" mb={2}>
          Secondary
        </Alert>
        <Alert variant="accent" mb={2}>
          Accent
        </Alert>
        <Alert variant="muted" mb={2}>
          muted
        </Alert>
      </Box>
    </Box>
  );
}
