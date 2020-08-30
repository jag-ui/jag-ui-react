import { Box, Divider, Grid } from "jag-ui-react";
import React from "react";
import { Heading } from "../../components/Heading";

export default function GridDemo() {
  return (
    <Box>
      <Heading my={3}>Grid Demo</Heading>
      <Divider />
      <Box p={4} boxShadow="default" bg="bg2">
        <Grid width={[128, null, 192]} mb={3}>
          <Box p={1} bg="bg3">
            Box
          </Box>
          <Box p={1} bg="bg3">
            Box
          </Box>
          <Box p={1} bg="bg3">
            Box
          </Box>
          <Box p={1} bg="bg3">
            Box
          </Box>
        </Grid>
        <Grid gap={2} columns={[2, null, 4]} mb={3}>
          <Box p={1} bg="bg3">
            Box
          </Box>
          <Box p={1} bg="bg3">
            Box
          </Box>
          <Box p={1} bg="bg3">
            Box
          </Box>
          <Box p={1} bg="bg3">
            Box
          </Box>
        </Grid>
        <Grid gap={2} columns={[2, "1fr 2fr"]} mb={3}>
          <Box p={1} bg="bg3">
            Box
          </Box>
          <Box p={1} bg="bg3">
            Box
          </Box>
          <Box p={1} bg="bg3">
            Box
          </Box>
          <Box p={1} bg="bg3">
            Box
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
