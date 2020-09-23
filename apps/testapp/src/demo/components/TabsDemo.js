import { Box, Button, Divider, Flex, Icon, TabItem, Tabs } from "jag-ui-react";
import React, { useState } from "react";
import { FaMusic } from "react-icons/fa";
import { Heading } from "../../components/Heading";

const getItems = (text, n = 10) =>
  Object.keys([...Array(n)]).map((i) => ({
    id: i,
    title: `Tab ${i}`,
    icon: <FaMusic />,
  }));

const SimpleTabs = ({ vsize, items }) => {
  const [activeTabId, setActiveTabId] = useState(items[0].id);
  return (
    <Box my={3} bg="bg.card">
      <Tabs vsize={vsize}>
        {items &&
          items.map((item) => (
            <TabItem key={item.id} active={activeTabId === item.id}>
              <Button variant="none" onClick={() => setActiveTabId(item.id)}>
                <Icon icon={item.icon} mr={2} /> {item.title}
              </Button>
            </TabItem>
          ))}
      </Tabs>
      <Box p={3}>
        Tab Content {activeTabId}.... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sequi dolorem
        iste explicabo assumenda. Quaerat, officiis quia doloribus repellendus debitis iste, dolor dignissimos, ex
        suscipit nesciunt error? Minima, placeat? Quaerat?
      </Box>
    </Box>
  );
};

const BoxedTabs = ({ vsize, items }) => {
  const [activeTabId, setActiveTabId] = useState(items[0].id);
  return (
    <Box my={3} bg="bg.main" pt={2}>
      <Tabs variant="boxed" vsize={vsize} px={2}>
        {items &&
          items.map((item) => (
            <TabItem key={item.id} active={activeTabId === item.id}>
              <Button variant="none" onClick={() => setActiveTabId(item.id)}>
                <Icon icon={item.icon} mr={2} /> {item.title}
              </Button>
            </TabItem>
          ))}
      </Tabs>
      <Box p={3}>
        Tab Content {activeTabId}.... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sequi dolorem
        iste explicabo assumenda. Quaerat, officiis quia doloribus repellendus debitis iste, dolor dignissimos, ex
        suscipit nesciunt error? Minima, placeat? Quaerat?
      </Box>
    </Box>
  );
};

const ToggelTabs = ({ vsize, items }) => {
  const [activeTabId, setActiveTabId] = useState(items[0].id);
  return (
    <Box my={3} p={3}>
      <Flex justifyContent="center">
        <Tabs variant="toggle" vsize={vsize}>
          {items &&
            items.map((item) => (
              <TabItem key={item.id} active={activeTabId === item.id}>
                <Button variant="none" onClick={() => setActiveTabId(item.id)}>
                  <Icon icon={item.icon} mr={2} /> {item.title}
                </Button>
              </TabItem>
            ))}
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
        <SimpleTabs vsize="xs" items={getItems("Tab", 5)} />
        <SimpleTabs vsize="sm" items={getItems("Tab", 5)} />
        <SimpleTabs vsize="md" items={getItems("Tab", 5)} />
        <SimpleTabs vsize="lg" items={getItems("Tab", 5)} />

        <Heading mt={3}>Tabs: [variant="boxed"]</Heading>
        <Divider mb={3} />

        <BoxedTabs vsize="xs" items={getItems("Tab", 5)} />
        <BoxedTabs vsize="sm" items={getItems("Tab", 5)} />
        <BoxedTabs vsize="md" items={getItems("Tab", 5)} />
        <BoxedTabs vsize="lg" items={getItems("Tab", 5)} />

        <Heading mt={3}>Tabs: [variant="toggle"]</Heading>
        <Divider mb={3} />
        <ToggelTabs vsize="xs" items={getItems("Tab", 5)} />
        <ToggelTabs vsize="sm" items={getItems("Tab", 5)} />
        <ToggelTabs vsize="md" items={getItems("Tab", 5)} />
        <ToggelTabs vsize="lg" items={getItems("Tab", 5)} />
      </Box>
    </Box>
  );
}
