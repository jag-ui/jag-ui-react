import { Box, Button, Divider, Flex, Tooltip } from "jag-ui-react";
import React, { useRef, useState } from "react";
import { Heading } from "../../components/Heading";
const SampleTooltip = ({ placement }) => {
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  return (
    <Flex>
      <Button
        onMouseEnter={() => setShowPopper(true)}
        onMouseLeave={() => setShowPopper(false)}
        ref={buttonRef}
        mr={3}
        vcolor="primary"
        vsize="sm">
        Tooltip "{placement}"
      </Button>
      <Tooltip triggerRef={buttonRef} placement={placement} active={showPopper}>
        Hello Tooltip!
      </Tooltip>
    </Flex>
  );
};

export default function TooltipDemo() {
  return (
    <Box>
      <Heading>Tooltip Demo</Heading>
      <Divider />
      <Box mt="200px" mb="500px">
        <Flex justifyContent="space-between">
          <SampleTooltip placement="top-start" />
          <SampleTooltip placement="top" />
          <SampleTooltip placement="top-end" />
        </Flex>
        <Flex mt={3} mb={4} height="250px" justifyContent="space-between">
          <Flex flexDirection="column" justifyContent="space-between" alignItems="flex-start" height="100%" my={10}>
            <SampleTooltip placement="right-start" />
            <SampleTooltip placement="right" />
            <SampleTooltip placement="right-end" />
          </Flex>
          <Flex flexDirection="column" justifyContent="space-between" alignItems="flex-end" height="100%" my={10}>
            <SampleTooltip placement="left-start" />
            <SampleTooltip placement="left" />
            <SampleTooltip placement="left-end" />
          </Flex>
        </Flex>
        <Flex justifyContent="space-between">
          <SampleTooltip placement="bottom-start" />
          <SampleTooltip placement="bottom" />
          <SampleTooltip placement="bottom-end" />
        </Flex>
      </Box>
    </Box>
  );
}
