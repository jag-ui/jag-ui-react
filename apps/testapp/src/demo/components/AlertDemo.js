import { Alert, Box, Divider, IconButton, Text } from "jag-ui-react";
import React from "react";
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";
import { Heading } from "../../components/Heading";

export default function AlertDemo() {
  return (
    <Box>
      <Heading>Alert Demo</Heading>
      <Divider />
      <Box my={4}>
        <Heading variant="h5" mt={3} mb={2}>
          Alerts: (Solid)
        </Heading>
        <Alert variant="solid" vcolor="primary" my={4}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" mr={3}>
              Primary Alert!
            </Text>
            <Text>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="solid" vcolor="secondary" my={4}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" mr={3}>
              Secondary Alert
            </Text>
            <Text>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="solid" vcolor="success" my={4}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" mr={3}>
              Success Alert
            </Text>
            <Text>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="solid" vcolor="danger" my={4}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" mr={3}>
              Error Alert
            </Text>
            <Text>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="solid" vcolor="info" my={4}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" mr={3}>
              Info Alert
            </Text>
            <Text>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>

        <Heading as="h3" mt={4} mb={2}>
          Alerts: (Outline){" "}
        </Heading>

        <Alert variant="outline" vcolor="primary" my={4}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" mr={3}>
              Primary Alert
            </Text>
            <Text>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="outline" vcolor="secondary" my={4}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" mr={3}>
              Secondary Alert
            </Text>
            <Text>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="outline" vcolor="success" my={4}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" mr={3}>
              Success Alert
            </Text>
            <Text>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="outline" vcolor="danger" my={4}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" mr={3}>
              Error Alert
            </Text>
            <Text>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
        <Alert variant="outline" vcolor="info" my={4}>
          <Box mr={3}>
            <FaExclamationTriangle />
          </Box>
          <Box>
            <Text fontWeight="bold" mr={3}>
              Info Alert
            </Text>
            <Text>This is a description of this alert</Text>
          </Box>
          <IconButton ml="auto" mr={-2}>
            <FaTimes />
          </IconButton>
        </Alert>
      </Box>
    </Box>
  );
}
