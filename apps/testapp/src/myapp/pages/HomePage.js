import { DropdownCaret } from "@jag-ui-react/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Flex,
  Icon,
  IconButton,
  TabItem,
  Tabs,
  Text,
} from "jag-ui-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FaBoxes,
  FaCalendarAlt,
  FaChartLine,
  FaCheck,
  FaChevronDown,
  FaCog,
  FaCogs,
  FaEllipsisH,
  FaEllipsisV,
  FaFileAlt,
  FaFilter,
  FaMusic,
  FaPlus,
  FaSearch,
  FaTags,
  FaTimes,
} from "react-icons/fa";
import { SideTab } from "../components/SideTab";
import { useBreakpoint } from "../contexts/breakpoint";

const TemplateInfo = () => {
  return (
    <Box>
      <Breadcrumb delimiter="/" delimiterColor="gray" fontSize="1.2rem">
        <BreadcrumbItem href="#">
          <Icon icon={<FaBoxes />} mr={2} /> Asssssset1 One One
        </BreadcrumbItem>
        <BreadcrumbItem href="#" active>
          <Icon icon={<FaFileAlt />} mr={2} /> Template 1 One One
          <Icon icon={<FaChevronDown />} ml={1} />
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};

const Tags = () => {
  return <Box>Tags</Box>;
};

const ContextSettings = () => {
  return <Box>ContextSettings</Box>;
};

const Filter = () => {
  return <Box>Filter</Box>;
};

const Settings = () => {
  return <Box>Settings</Box>;
};

const Search = () => {
  return <Box>Search</Box>;
};

const items = [
  { id: 1, title: "Template Info", icon: <FaFileAlt />, component: <TemplateInfo /> },
  { id: 2, title: "Tags", icon: <FaTags />, component: <Tags /> },
  { id: 3, title: "Context Settings", icon: <FaCalendarAlt />, component: <ContextSettings /> },
  { id: 4, title: "Filter", icon: <FaFilter />, component: <Filter /> },
  { id: 5, title: "Settings", icon: <FaCogs />, component: <Settings /> },
  { id: 6, title: "Search", icon: <FaSearch />, component: <Search /> },
];

const charts = Object.keys([...Array(10)]).map((i) => ({ id: i, title: `Chart ${i}` }));

const allTabs = Object.keys([...Array(10)]).map((i) => ({
  id: i,
  title: `My Long long Tab ${i}`,
  visible: true,
  icon: <FaMusic />,
}));

const Charts = ({ items }) => {
  return (
    <>
      {Object.keys([...Array(10)]).map((i) => (
        <Box mb={3} p={5} boxShadow="default" bg="bg.card">
          {i}
        </Box>
      ))}
    </>
  );
};

const MyTabItem = ({ item, active, onClick, onClose, onItemVisiblityChange, ...props }) => {
  const [closeBtnHidden, setCloseBtnHidden] = useState(true);
  return (
    <TabItem
      {...props}
      active={active}
      ml={2}
      minWidth="80px"
      maxWidth="200px"
      onMouseEnter={() => setCloseBtnHidden(false)}
      onMouseLeave={() => setCloseBtnHidden(true)}>
      <Button as="button" variant="none" onClick={onClick} flexGrow={1} justifyContent="flex-start">
        <Icon icon={<FaMusic />} mr={2} /> <Text maxLength={15}>{item.title}</Text>
      </Button>
      <IconButton
        tooltip="Close Tab"
        icon={<FaTimes />}
        sx={{ visibility: closeBtnHidden ? "hidden" : "visible" }}
        ml={2}
        onClick={onClose}
      />
    </TabItem>
  );
};

const MoreTabs = ({ items, max, toggleTabVisiblity }) => {
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  return (
    <Dropdown placement="bottom-end" active={showPopper} onOutsideClick={() => setShowPopper(false)} mx={2}>
      <DropdownToggle caret>
        <IconButton p={2} icon={<FaEllipsisH />} onClick={() => setShowPopper(!showPopper)} ref={buttonRef} />
      </DropdownToggle>
      <DropdownMenu bg="white">
        <DropdownItem>
          <Icon icon={<FaPlus />} mx={2} />
          Add Tab
        </DropdownItem>
        <DropdownItem divider />
        {max && (
          <>
            <DropdownItem disabled justifyContent="center">
              select maximum "{max}"
            </DropdownItem>
            <DropdownItem divider />
          </>
        )}

        {items &&
          items.map((item) => (
            <DropdownItem
              as="button"
              width="200px"
              color={item.visible ? "primary.main" : "inherit"}
              onClick={() => toggleTabVisiblity(item)}>
              <Icon mr={2} icon={item.icon} />
              <Text display="flex" flexGrow={1}>
                {item.title}
              </Text>
              {item.visible && <Icon ml={2} icon={<FaCheck />} />}
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
};

const maxTabsConfig = {
  xs: 1,
  sm: 2,
  md: 4,
  lg: 5,
};

const getBestBp = (bp) => {
  if (bp.xs) {
    return "xs";
  } else if (bp.sm) {
    return "sm";
  } else if (bp.md) {
    return "md";
  } else if (bp.lg) {
    return "lg";
  }
  return "xl";
};

const TabsContainer = ({}) => {
  const [tabs, setTabs] = useState(allTabs);
  const [maxTabs, setMaxTabs] = useState(null);
  const [activeTabId, setActiveTabId] = useState(allTabs[0].id);
  const visibleTabs = tabs.filter((tab) => tab.visible);

  // updateMaxTabs:
  const bp = useBreakpoint();
  useEffect(() => {
    const bestBp = getBestBp(bp);
    const newMaxTabs = maxTabsConfig[bestBp];
    setMaxTabs(newMaxTabs);
  }, [bp]);

  // visibleTabs:
  useEffect(() => {
    const visibleTabs = tabs.filter((tab) => tab.visible);
    if (maxTabs && visibleTabs.length > maxTabs) {
      // tabs: has more than 'maxTabs' limits
      let max = maxTabs;
      const updatedTabs = tabs.map((tab) => {
        if (max > 0) {
          max--;
          return { ...tab, visible: true };
        } else {
          return { ...tab, visible: false };
        }
      });
      console.log("updatedVisibleTabs:", { maxTabs, visibleTabs, tabs, updatedTabs });
      setTabs(updatedTabs);
      const visibleTabs1 = updatedTabs.filter((tab) => tab.visible);
      setActiveTabId(visibleTabs1[0].id);
    }
  }, [tabs, maxTabs]);

  console.log("TabsContainer", { bp });

  // const visibleTabs = tabs.filter((tab) => tab.visible);

  const addVisibleTabs = useCallback(
    (item) => {
      const visibleTabs = tabs.filter((tab) => tab.visible);
      const maxTabsNotSpecified = !maxTabs;
      const canHaveMoreTabs = maxTabs && visibleTabs.length < maxTabs;
      console.log("addVisibleTabs", item);
      debugger;
      // if: item already visible or canHaveMoreTabs
      if (item.visible || maxTabsNotSpecified || canHaveMoreTabs) {
        const updatedTabs = tabs.map((tab) => (tab.id === item.id ? { ...item, visible: !item.visible } : tab));
        console.log("toggleTabVisiblity:", { tabs, maxTabs, updatedTabs });
        setTabs(updatedTabs);
        const visibleTabs1 = updatedTabs.filter((tab) => tab.visible);
        if (visibleTabs1 && visibleTabs1.length > 0) {
          setActiveTabId(visibleTabs1[0].id);
        }
      } else {
        console.error("Can not add more than allowed tabs for this screen size", {
          maxTabs,
          visibleTabsLen: visibleTabs.length,
        });
      }
    },
    [tabs, maxTabs],
  );

  return (
    <Box my={3}>
      <Flex alignItems="center" bg="bg.main">
        <Tabs sx={{ flexGrow: 1 }} variant="boxed" vsize="lg">
          {visibleTabs.map((tab) => (
            <MyTabItem item={tab} active={tab.id === activeTabId} onClick={() => setActiveTabId(tab.id)}></MyTabItem>
          ))}
        </Tabs>
        <MoreTabs items={tabs} max={maxTabs} toggleTabVisiblity={addVisibleTabs} />
      </Flex>
      <Box p={3}>
        Tab Content {activeTabId} --- maxTabs: {maxTabs}.... Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Expedita sequi dolorem iste explicabo assumenda. Quaerat, officiis quia doloribus repellendus debitis iste,
        dolor dignissimos, ex suscipit nesciunt error? Minima, placeat? Quaerat? ---
        <Charts items={charts} />
      </Box>
    </Box>
  );
};

const ContextSelector = () => {
  return (
    <Flex alignItems="center" fontSize={["1rem", "1.5rem"]} flexGrow={1}>
      <Icon icon={<FaChartLine />} mr={2} />
      <Text fontSize="inherit" flexShrink={0}>
        Analysis
      </Text>
      <Box mx={2}>/</Box>
      <Text fontSize="inherit" flexShrink={0}>
        Asset 1
      </Text>
      <Box mx={2}>/</Box>
      <Text fontSize="inherit" display="flex" alignItems="center" flexShrink={0}>
        Template 1 <Icon icon={<DropdownCaret />} ml={2} />
      </Text>
    </Flex>
  );
};

const HeaderActions = () => {
  return (
    <>
      <Box flexShrink={0}>
        <Button variant="solid" vcolor="primary" vsize="sm" mr={2}>
          Save Changes
        </Button>
        <IconButton icon={<FaCog />} mr={3} />
        <IconButton icon={<FaCog />} mr={3} />
        <IconButton icon={<FaCog />} mr={3} />
        <IconButton icon={<FaEllipsisV />} mr={3} />
      </Box>
    </>
  );
};

const Header = ({}) => {
  return (
    <Box px={3}>
      <Flex alignItems="center">
        <ContextSelector />
        <HeaderActions />
      </Flex>
      <Box my={3}>
        <Button variant="outline" vcolor="secondary" vsize="sm" mr={2} borderRadius="full">
          01/08/2020 - 04/08/2020
        </Button>
        <Button variant="outline" vcolor="secondary" vsize="sm" mr={2} borderRadius="full">
          Filter (2)
        </Button>
        <Button variant="outline" vcolor="secondary" vsize="sm" mr={2} borderRadius="full">
          DS: S3
        </Button>
      </Box>
    </Box>
  );
};

export default function HomePage() {
  return (
    <Flex width="full" height="100%" overflowY="hidden">
      <SideTab items={items} />
      <Box
        width="100%"
        height="100%"
        overflowY="auto"
        borderLeftWidth="1px"
        borderLeftStyle="solid"
        borderLeftColor="divider">
        <Header />
        <TabsContainer />
      </Box>
    </Flex>
  );
}
