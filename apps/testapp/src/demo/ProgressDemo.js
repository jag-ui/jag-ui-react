import { Divider, Donut, Heading, Progress, Spinner } from "@jag-ui-react/components";
import { Box } from "@jag-ui-react/core";
import React from "react";

export default function ProgressDemo() {
  return (
    <Box>
      <Heading>Progress / Spiner / Donut Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <Box mb={4}>
          <Progress max={1} value={1 / 2}>
            50%
          </Progress>
        </Box>
        <Spinner />
        <Donut value={1 / 2} />
      </Box>
    </Box>
  );
}
