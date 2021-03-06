import { Avatar, Badge, Box, Divider } from "jag-ui-react";
import React from "react";
import { Heading } from "../../components/Heading";

const IMG = "https://via.placeholder.com/800/f2f2f2/fff.png";

export default function BadgeDemo() {
  return (
    <Box>
      <Heading>Badge Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <Badge>Badge</Badge>

        <Heading>
          Components
          <Badge variant="accent">New</Badge>
          <Badge variant="outline" ml={1}>
            Cool
          </Badge>
          <Avatar src={IMG} />
          <Badge variant="circle" ml={-3} mt={-3}>
            16
          </Badge>
        </Heading>
      </Box>
    </Box>
  );
}
