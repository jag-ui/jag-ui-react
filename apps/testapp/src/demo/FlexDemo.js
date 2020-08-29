import { Box, Flex, Divider, Heading, Text } from "jag-ui-react";
import React from "react";

const FlexboxWrapEx = () => {
  return (
    <>
      <Heading my={3}>FlexboxWrap</Heading>
      <Flex flexWrap="wrap" mx={-2}>
        <Box px={2} py={2} width={1 / 2}>
          <Text p={1} bg="bg3">
            1/2
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 2}>
          <Text p={1} bg="bg3">
            1/2
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 3}>
          <Text p={1} bg="bg3">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 3}>
          <Text p={1} bg="bg3">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 3}>
          <Text p={1} bg="bg3">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 4}>
          <Text p={1} bg="bg3">
            1/4
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 4}>
          <Text p={1} bg="bg3">
            1/4
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 4}>
          <Text p={1} bg="bg3">
            1/4
          </Text>
        </Box>
        <Box px={2} py={2} width={1 / 4}>
          <Text p={1} bg="bg3">
            1/4
          </Text>
        </Box>
      </Flex>

      <Heading my={3}>FlexboxWrap (Responsive) </Heading>
      <Flex flexWrap="wrap" mx={-2}>
        <Box px={2} py={2} width={[1, 1 / 2]}>
          <Text p={1} bg="bg3">
            1/2
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 2]}>
          <Text p={1} bg="bg3">
            1/2
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 3]}>
          <Text p={1} bg="bg3">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 3]}>
          <Text p={1} bg="bg3">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 3]}>
          <Text p={1} bg="bg3">
            1/3
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 4]}>
          <Text p={1} bg="bg3">
            1/4
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 4]}>
          <Text p={1} bg="bg3">
            1/4
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 4]}>
          <Text p={1} bg="bg3">
            1/4
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 4]}>
          <Text p={1} bg="bg3">
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
      <Box p={4} boxShadow="default" bg="bg2">
        <Box p={4} my={3} bg="bg3">
          Hello
        </Box>
        <Flex my={3}>
          <Box p={2} bg="bg3" display="flex" flexGrow={1}>
            Flex
          </Box>
          <Box p={2} bg="bg3" ml={3}>
            Box
          </Box>
        </Flex>
        <FlexboxWrapEx />
      </Box>
    </Box>
  );
}
