import { Alert, Divider, Heading, IconButton, Text } from "@jag-ui-react/components";
import { Box } from "@jag-ui-react/core";
import React from "react";
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";

export default function AlertDemo() {
  return (
    <Box>
      <Heading>Alert Demo</Heading>
      <Divider />
      <Box my={2}>
        <Heading as="h3" mt={3} mb={2}>
          Alerts: (Solid){" "}
        </Heading>
        <Alert variant="simple" xcolor="primary" my={2}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={2}>
              Primary Alert
            </Text>
            <Text fontSize={1}>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="simple" xcolor="secondary" my={2}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={2}>
              Secondary Alert
            </Text>
            <Text fontSize={1}>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="simple" xcolor="success" my={2}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={2}>
              Success Alert
            </Text>
            <Text fontSize={1}>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="simple" xcolor="danger" my={2}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={2}>
              Error Alert
            </Text>
            <Text fontSize={1}>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="simple" xcolor="info" my={2}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={2}>
              Info Alert
            </Text>
            <Text fontSize={1}>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>

        <Heading as="h3" mt={4} mb={2}>
          Alerts: (Outline){" "}
        </Heading>

        <Alert variant="outline" xcolor="primary" my={2}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={2}>
              Primary Alert
            </Text>
            <Text fontSize={1}>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="outline" xcolor="secondary" my={2}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={2}>
              Secondary Alert
            </Text>
            <Text fontSize={1}>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="outline" xcolor="success" my={2}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={2}>
              Success Alert
            </Text>
            <Text fontSize={1}>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="outline" xcolor="danger" my={2}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={2}>
              Error Alert
            </Text>
            <Text fontSize={1}>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="outline" xcolor="info" my={2}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize={2}>
              Info Alert
            </Text>
            <Text fontSize={1}>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
      </Box>
    </Box>
  );
}
