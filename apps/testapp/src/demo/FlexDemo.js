import React from "react";
import { Box, Flex } from "@jag-ui-react/core";
import { Heading, Text, Divider, Grid } from "@jag-ui-react/components";

const FlexboxWrapEx = () => {
  return (
    <>
      <Heading>FlexboxWrap</Heading>
      <Flex flexWrap="wrap" mx={-2}>
        <Box px={2} py={2} width={1 / 2}>
          <Text p={1} color="background" bg="primary">
            1/2
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 2}>
          <Text p={1} color="background" bg="primary">
            1/2
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 3}>
          <Text p={1} color="background" bg="primary">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 3}>
          <Text p={1} color="background" bg="primary">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 3}>
          <Text p={1} color="background" bg="primary">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 4}>
          <Text p={1} color="background" bg="primary">
            1/4
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 4}>
          <Text p={1} color="background" bg="primary">
            1/4
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 4}>
          <Text p={1} color="background" bg="primary">
            1/4
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 4}>
          <Text p={1} color="background" bg="primary">
            1/4
          </Text>
        </Box>
      </Flex>

      <Heading>FlexboxWrap (Responsive) </Heading>
      <Flex flexWrap="wrap" mx={-2}>
        <Box px={2} py={2} width={[1, 1 / 2]}>
          <Text p={1} color="background" bg="primary">
            1/2
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 2]}>
          <Text p={1} color="background" bg="primary">
            1/2
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 3]}>
          <Text p={1} color="background" bg="primary">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 3]}>
          <Text p={1} color="background" bg="primary">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 3]}>
          <Text p={1} color="background" bg="primary">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 4]}>
          <Text p={1} color="background" bg="primary">
            1/4
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 4]}>
          <Text p={1} color="background" bg="primary">
            1/4
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 4]}>
          <Text p={1} color="background" bg="primary">
            1/4
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 4]}>
          <Text p={1} color="background" bg="primary">
            1/4
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default function FlexDemo() {
  return (
    <Box>
      <Heading>Box / Flex Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <Box p={4} my={3} color="white" bg="primary">
          Beep
        </Box>
        <Flex my={3}>
          <Box p={2} bg="primary" sx={{ flex: "1 1 auto" }}>
            Flex
          </Box>
          <Box p={2} bg="muted">
            Box
          </Box>
        </Flex>
        <FlexboxWrapEx />
      </Box>
    </Box>
  );
}
