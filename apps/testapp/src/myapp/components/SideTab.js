import { Box, Breadcrumb, BreadcrumbItem, Flex, Icon, Text, Link } from "jag-ui-react";
import React, { useState } from "react";
import { FaBoxes, FaCalendarAlt, FaChevronDown, FaCogs, FaFileAlt, FaFilter, FaSearch, FaTags } from "react-icons/fa";

function SideTabItem({ item, active, ...props }) {
  return (
    <Icon
      as="button"
      {...props}
      icon={item.icon}
      className={active ? "active" : undefined}
      sx={{
        display: "flex",
        width: "100%",
        py: 3,
        backgroundColor: "inherit",
        "&.active": {
          backgroundColor: "bg.card",
        },
      }}
    />
  );
}

export function SideTab({ items }) {
  const [tabHidden, setTabHidden] = useState(true);
  const [activeTab, setActiveTab] = useState(2);
  const handleTabClick = (item) => {
    if (item.id === activeTab.id && !tabHidden) {
      setTabHidden(true);
    } else {
      setActiveTab(item);
      setTabHidden(false);
    }
  };
  return (
    <Flex height="100%" overflowY="hidden" flexShrink={0}>
      <Box width="40px" height="100%" overflowY="hidden">
        {items.map((item) => (
          <SideTabItem
            item={item}
            active={item.id === activeTab.id && !tabHidden}
            tabHidden={tabHidden}
            onClick={() => handleTabClick(item)}
          />
        ))}
      </Box>
      <Box width={tabHidden ? 0 : "300px"} height="100%" overflowY="auto" bg="bg.card">
        <Box p={3}>{activeTab.component}</Box>
      </Box>
    </Flex>
  );
}
