import { Box, Divider, Tabs, TabItem } from "jag-ui-react";
import React, { useState } from "react";
import { Heading } from "../../components/Heading";

const SimpleTabs = ({ variant }) => {
  const [activeTabId, setActiveTabId] = useState(1);
  return (
    <Box my={3}>
      <Tabs variant={variant}>
        <TabItem active={activeTabId === 1} onClick={() => setActiveTabId(1)}>
          Tab 1
        </TabItem>
        <TabItem active={activeTabId === 2} onClick={() => setActiveTabId(2)}>
          Tab 2
        </TabItem>
        <TabItem active={activeTabId === 3} onClick={() => setActiveTabId(3)}>
          Tab 3
        </TabItem>
        <TabItem active={activeTabId === 4} onClick={() => setActiveTabId(4)}>
          Tab 4
        </TabItem>
      </Tabs>
      <Box>Tab Content {activeTabId}....</Box>
    </Box>
  );
};

export default function TabsDemo() {
  return (
    <Box>
      <Heading>Tabs Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <SimpleTabs variant="" />
        <SimpleTabs variant="boxed" />
        <SimpleTabs variant="toggle" />
      </Box>
    </Box>
  );
}
