import { Divider, Heading } from "@jag-ui-react/components";
import { Box } from "@jag-ui-react/core";
import { Dropdown } from "jag-ui-react";
import React from "react";

export default function DropdownDemo() {
  return (
    <Box>
      <Heading>Dropdown Demo</Heading>
      <Divider />
      <Box my={10}>
        <Dropdown>...</Dropdown>
      </Box>
    </Box>
  );
}
