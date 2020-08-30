import { Box, Flex } from "jag-ui-react";
import React from "react";
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import All from "../../demo/components";
import AlertDemo from "../../demo/components/AlertDemo";
import BadgeDemo from "../../demo/components/BadgeDemo";
import ButtonDemo from "../../demo/components/ButtonDemo";
import CardDemo from "../../demo/components/CardDemo";
import ContainerDemo from "../../demo/components/ContainerDemo";
import DividerDemo from "../../demo/components/DividerDemo";
import DropdownDemo from "../../demo/components/DropdownDemo";
import EmbedDemo from "../../demo/components/EmbedDemo";
import FlexDemo from "../../demo/components/FlexDemo";
import FormDemo from "../../demo/components/FormDemo";
import GridDemo from "../../demo/components/GridDemo";
import ImageDemo from "../../demo/components/ImageDemo";
import LinkDemo from "../../demo/components/LinkDemo";
import ModalDemo from "../../demo/components/ModalDemo";
import NavbarDemo from "../../demo/components/NavbarDemo";
import PaginationDemo from "../../demo/components/PaginationDemo";
import PopoverDemo from "../../demo/components/PopoverDemo";
import ProgressDemo from "../../demo/components/ProgressDemo";
import TableDemo from "../../demo/components/TableDemo";
import TabsDemo from "../../demo/components/TabsDemo";
import TooltipDemo from "../../demo/components/TooltipDemo";
import TypographyDemo from "../../demo/components/TypographyDemo";
import LeftPanel from "../components/LeftPanel";

function ComponentsPage(props) {
  return (
    <Flex width="full" height="full">
      <LeftPanel />
      <Box width="full" height="full" overflowY="auto" p={5}>
        <Switch>
          <Route path={`/components/all`}>
            <All />
          </Route>
          <Route path="/components/alert">
            <AlertDemo />
          </Route>
          <Route path="/components/badge">
            <BadgeDemo />
          </Route>
          <Route path="/components/button">
            <ButtonDemo />
          </Route>
          <Route path="/components/card">
            <CardDemo />
          </Route>
          <Route path="/components/container">
            <ContainerDemo />
          </Route>
          <Route path="/components/divider">
            <DividerDemo />
          </Route>
          <Route path="/components/dropdown">
            <DropdownDemo />
          </Route>
          <Route path="/components/embed">
            <EmbedDemo />
          </Route>
          <Route path="/components/flex">
            <FlexDemo />
          </Route>
          <Route path="/components/form">
            <FormDemo />
          </Route>
          <Route path="/components/grid">
            <GridDemo />
          </Route>
          <Route path="/components/image">
            <ImageDemo />
          </Route>

          <Route path="/components/link">
            <LinkDemo />
          </Route>
          <Route path="/components/modal">
            <ModalDemo />
          </Route>
          <Route path="/components/navbar">
            <NavbarDemo />
          </Route>
          <Route path="/components/pagination">
            <PaginationDemo />
          </Route>
          <Route path="/components/popover">
            <PopoverDemo />
          </Route>
          <Route path="/components/progress">
            <ProgressDemo />
          </Route>
          <Route path="/components/table">
            <TableDemo />
          </Route>
          <Route path="/components/tabs">
            <TabsDemo />
          </Route>
          <Route path="/components/tooltip">
            <TooltipDemo />
          </Route>
          <Route path="/components/typography">
            <TypographyDemo />
          </Route>
        </Switch>
      </Box>
    </Flex>
  );
}

ComponentsPage.propTypes = {};

export default ComponentsPage;
