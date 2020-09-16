import { Box, Divider, Flex, Icon, TabItem, Tabs } from "jag-ui-react";
import React, { useState } from "react";
import { FaCamera, FaCogs, FaMusic, FaStar } from "react-icons/fa";
import { Heading } from "../../components/Heading";

const SimpleTabs = ({ vsize }) => {
  const [activeTabId, setActiveTabId] = useState(1);
  return (
    <Box my={3} bg="bg.card">
      <Tabs vsize={vsize}>
        <TabItem active={activeTabId === 1} onClick={() => setActiveTabId(1)}>
          <Icon icon={<FaMusic />} mr={2} /> Tab 1
        </TabItem>
        <TabItem active={activeTabId === 2} onClick={() => setActiveTabId(2)}>
          <Icon icon={<FaStar />} mr={2} /> Tab 2
        </TabItem>
        <TabItem active={activeTabId === 3} onClick={() => setActiveTabId(3)}>
          <Icon icon={<FaCogs />} mr={2} /> Tab 3
        </TabItem>
        <TabItem active={activeTabId === 4} onClick={() => setActiveTabId(4)}>
          <Icon icon={<FaCamera />} mr={2} /> Tab 4
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
          <Icon icon={<FaMusic />} mr={2} /> Tab 1
        </TabItem>
        <TabItem active={activeTabId === 2} onClick={() => setActiveTabId(2)}>
          <Icon icon={<FaStar />} mr={2} /> Tab 2
        </TabItem>
        <TabItem active={activeTabId === 3} onClick={() => setActiveTabId(3)}>
          <Icon icon={<FaCogs />} mr={2} /> Tab 3
        </TabItem>
        <TabItem active={activeTabId === 4} onClick={() => setActiveTabId(4)}>
          <Icon icon={<FaCamera />} mr={2} /> Tab 4
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
            <Icon icon={<FaMusic />} mr={2} /> Tab 1
          </TabItem>
          <TabItem active={activeTabId === 2} onClick={() => setActiveTabId(2)}>
            <Icon icon={<FaStar />} mr={2} /> Tab 2
          </TabItem>
          <TabItem active={activeTabId === 3} onClick={() => setActiveTabId(3)}>
            <Icon icon={<FaCogs />} mr={2} /> Tab 3
          </TabItem>
          <TabItem active={activeTabId === 4} onClick={() => setActiveTabId(4)}>
            <Icon icon={<FaCamera />} mr={2} /> Tab 4
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
        <Heading mt={3}>Tabs: [variant="line"]</Heading>
        <Divider mb={3} />
        <SimpleTabs vsize="xs" />
        <SimpleTabs vsize="sm" />
        <SimpleTabs vsize="md" />
        <SimpleTabs vsize="lg" />

        <Heading mt={3}>Tabs: [variant="boxed"]</Heading>
        <Divider mb={3} />
        <BoxedTabs vsize="xs" />
        <BoxedTabs vsize="sm" />
        <BoxedTabs vsize="md" />
        <BoxedTabs vsize="lg" />

        <Heading mt={3}>Tabs: [variant="toggle"]</Heading>
        <Divider mb={3} />
        <ToggelTabs vsize="xs" />
        <ToggelTabs vsize="sm" />
        <ToggelTabs vsize="md" />
        <ToggelTabs vsize="lg" />
      </Box>
    </Box>
  );
}
