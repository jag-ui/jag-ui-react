import { Box, Divider, Tabs, TabItem, Flex } from "jag-ui-react";
import React, { useState } from "react";
import { Heading } from "../../components/Heading";

const SimpleTabs = ({ vsize }) => {
  const [activeTabId, setActiveTabId] = useState(1);
  return (
    <Box my={3} bg="bg.card">
      <Tabs vsize={vsize}>
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
      <Box p={3}>
        Tab Content {activeTabId}.... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sequi dolorem
        iste explicabo assumenda. Quaerat, officiis quia doloribus repellendus debitis iste, dolor dignissimos, ex
        suscipit nesciunt error? Minima, placeat? Quaerat?
      </Box>
    </Box>
  );
};

const BoxedTabs = ({ vsize }) => {
  const [activeTabId, setActiveTabId] = useState(1);
  return (
    <Box my={3} bg="bg.main" pt={2}>
      <Tabs variant="boxed" vsize={vsize} px={2}>
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
      <Box p={3}>
        Tab Content {activeTabId}.... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sequi dolorem
        iste explicabo assumenda. Quaerat, officiis quia doloribus repellendus debitis iste, dolor dignissimos, ex
        suscipit nesciunt error? Minima, placeat? Quaerat?
      </Box>
    </Box>
  );
};

const ToggelTabs = ({ vsize }) => {
  const [activeTabId, setActiveTabId] = useState(1);
  return (
    <Box my={3} p={3}>
      <Flex justifyContent="center">
        <Tabs variant="toggle" vsize={vsize}>
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
      </Flex>
      <Box p={3}>
        Tab Content {activeTabId}.... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sequi dolorem
        iste explicabo assumenda. Quaerat, officiis quia doloribus repellendus debitis iste, dolor dignissimos, ex
        suscipit nesciunt error? Minima, placeat? Quaerat?
      </Box>
    </Box>
  );
};

export default function TabsDemo() {
  return (
    <Box>
      <Heading>Tabs Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <SimpleTabs />
        <BoxedTabs />
        <ToggelTabs />

        <Heading mt={3}>Size: xs</Heading>
        <Divider mb={3} />
        <SimpleTabs vsize="xs" />
        <BoxedTabs vsize="xs" />
        <ToggelTabs vsize="xs" />
        <Heading mt={3}>Size: sm</Heading>
        <Divider mb={3} />
        <SimpleTabs vsize="sm" />
        <BoxedTabs vsize="sm" />
        <ToggelTabs vsize="sm" />
        <Heading mt={3}>Size: lg</Heading>
        <Divider mb={3} />
        <SimpleTabs vsize="lg" />
        <BoxedTabs vsize="lg" />
        <ToggelTabs vsize="lg" />
      </Box>
    </Box>
  );
}
