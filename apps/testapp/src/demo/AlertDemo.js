import { Alert, Divider, Heading, Text } from "@jag-ui-react/components";
import { Box } from "@jag-ui-react/core";
import React from "react";
import { Close } from "@jag-ui-react/icons";

export default function AlertDemo() {
  return (
    <Box>
      <Heading>Alert Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <Alert variant="primary" my={2}>
          Primary Alert
        </Alert>
        <Alert variant="secondary" my={2}>
          Secondary Alert
        </Alert>
        <Alert variant="success" my={2}>
          Success Alert
        </Alert>
        <Alert variant="error" my={2}>
          Error Alert
        </Alert>
        <Alert variant="info" my={2}>
          Info Alert
        </Alert>

        <Alert my={4}>
          <Box>
            <Heading as="h3">Primary Alert (TODO: Bold)</Heading>
            <Text>This is a description of this alert</Text>
          </Box>
          {/* <Close ml="auto" mr={-2} /> */}
        </Alert>
      </Box>
    </Box>
  );
}
