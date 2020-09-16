import { Box, Divider, Flex, Icon, Text, Breadcrumb, BreadcrumbItem } from "jag-ui-react";
import React from "react";
import { FaCog } from "react-icons/fa";
import { Heading } from "../../components/Heading";

const SimpleBreadcrumbDemo = () => {
  return (
    <>
      <Breadcrumb delimiter="/" delimiterColor="gray">
        <BreadcrumbItem href="#">One</BreadcrumbItem>
        <BreadcrumbItem href="#">Two</BreadcrumbItem>
        <BreadcrumbItem href="#">Three</BreadcrumbItem>
        <BreadcrumbItem active>Four</BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb delimiter="\02192" delimiterColor="gray">
        <BreadcrumbItem href="#">One</BreadcrumbItem>
        <BreadcrumbItem href="#">Two</BreadcrumbItem>
        <BreadcrumbItem href="#">Three</BreadcrumbItem>
        <BreadcrumbItem active>Four</BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb delimiter="\02022" delimiterColor="gray">
        <BreadcrumbItem href="#">One</BreadcrumbItem>
        <BreadcrumbItem href="#">Two</BreadcrumbItem>
        <BreadcrumbItem href="#">Three</BreadcrumbItem>
        <BreadcrumbItem active>Four</BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbItem href="#">
          <Icon icon={<FaCog />} mr={2} />
          One
        </BreadcrumbItem>

        <BreadcrumbItem href="#">
          <Icon icon={<FaCog />} mr={2} />
          Two
        </BreadcrumbItem>

        <BreadcrumbItem href="#">
          <Icon icon={<FaCog />} mr={2} />
          Three
        </BreadcrumbItem>

        <BreadcrumbItem href="#" active>
          <Icon icon={<FaCog />} mr={2} />
          Four
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default function BreadcrumbDemo() {
  // const context = useThemeUI();
  // const { theme, components, colorMode, setColorMode } = context;
  // console.log("ButtonDemo: ", { theme });

  return (
    <>
      <Heading>BreadcrumbItem Demo</Heading>
      <Divider />
      <Box p={4} boxShadow="default" bg="bg.card">
        <SimpleBreadcrumbDemo />
      </Box>
    </>
  );
}
