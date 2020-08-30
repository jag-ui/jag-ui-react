import { Box, Flex } from "jag-ui-react";
import React from "react";
import LeftPanel from "../components/LeftPanel";
function ComponentsPage(props) {
  return (
    <Flex width="full" height="full">
      <LeftPanel />
      <Box width="full" height="full" overflowY="auto" p={5}>
        <Box m={3} p="12rem" bg="bg1">
          My Box
        </Box>
        <Box m={3} p="12rem" bg="bg1">
          My Box
        </Box>
        <Box m={3} p="12rem" bg="bg1">
          My Box
        </Box>
        <Box m={3} p="12rem" bg="bg1">
          My Box
        </Box>
        <Box m={3} p="12rem" bg="bg1">
          My Box
        </Box>
      </Box>
    </Flex>
  );
}

ComponentsPage.propTypes = {};

export default ComponentsPage;
