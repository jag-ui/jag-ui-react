import { Box, Divider, Heading, Progress, Spinner } from "jag-ui-react";
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
      </Box>
    </Box>
  );
}
