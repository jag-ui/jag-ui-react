import { Alert, Divider, Heading, Text, IconButton } from "@jag-ui-react/components";
import { Box } from "@jag-ui-react/core";
import React from "react";
import { FaTimes, FaExclamationTriangle } from "react-icons/fa";

export default function AlertDemo() {
  return (
    <Box>
      <Heading>Alert Demo</Heading>
      <Divider />

      <Heading>Alert Demo</Heading>
      <Box my={10} p={4}>
        <Alert variant="primary" my={2}>
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
        <Alert variant="secondary" my={2}>
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
        <Alert variant="success" my={2}>
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
        <Alert variant="danger" my={2}>
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
        <Alert variant="info" my={2}>
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

        <Heading my={3}>Alert (Outline)</Heading>

        <Alert variant="primaryOutline" my={2}>
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
        <Alert variant="secondaryOutline" my={2}>
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
        <Alert variant="successOutline" my={2}>
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
        <Alert variant="errorOutline" my={2}>
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
        <Alert variant="infoOutline" my={2}>
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
