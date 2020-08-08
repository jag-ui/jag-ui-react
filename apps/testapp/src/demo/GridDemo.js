import { Divider, Grid, Heading } from "@jag-ui-react/components";
import { Box } from "@jag-ui-react/core";
import React from "react";

export default function GridDemo() {
  return (
    <Box>
      <Heading>Grid Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <Grid width={[128, null, 192]} my={5}>
          <Box bg="primary">Box</Box>
          <Box bg="muted">Box</Box>
          <Box bg="primary">Box</Box>
          <Box bg="muted">Box</Box>
        </Grid>
        <Grid gap={2} columns={[2, null, 4]} my={5}>
          <Box bg="primary">Box</Box>
          <Box bg="muted">Box</Box>
          <Box bg="primary">Box</Box>
          <Box bg="muted">Box</Box>
        </Grid>
        <Grid gap={2} columns={[2, "1fr 2fr"]} my={5}>
          <Box bg="primary">Box</Box>
          <Box bg="muted">Box</Box>
          <Box bg="primary">Box</Box>
          <Box bg="muted">Box</Box>
        </Grid>
      </Box>
    </Box>
  );
}
