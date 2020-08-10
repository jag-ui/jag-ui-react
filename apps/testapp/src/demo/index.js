import { Box } from "@jag-ui-react/core";
import React from "react";
import AlertDemo from "./AlertDemo";
import BadgeDemo from "./BadgeDemo";
import LinkDemo from "./LinkDemo";
import ButtonDemo from "./ButtonDemo";
import CardDemo from "./CardDemo";
import ContainerDemo from "./ContainerDemo";
import DividerDemo from "./DividerDemo";
import DropdownDemo from "./DropdownDemo";
import EmbedDemo from "./EmbedDemo";
import FlexDemo from "./FlexDemo";
import FormDemo from "./FormDemo";
import GridDemo from "./GridDemo";
import ImageDemo from "./ImageDemo";
import MessageDemo from "./MessageDemo";
import ModalDemo from "./ModalDemo";
import NavbarDemo from "./NavbarDemo";
import PaginationDemo from "./PaginationDemo";
import PopoverDemo from "./PopoverDemo";
import ProgressDemo from "./ProgressDemo";
import TableDemo from "./TableDemo";
import TabsDemo from "./TabsDemo";
import TooltipDemo from "./TooltipDemo";
import TypographyDemo from "./TypographyDemo";

export default function Demo() {
  return (
    <Box px={5}>
      <AlertDemo />
      <BadgeDemo />
      <LinkDemo />
      <ButtonDemo />
      <CardDemo />
      <FormDemo />

      <ContainerDemo />
      <DividerDemo />
      <DropdownDemo />
      <EmbedDemo />
      <FlexDemo />

      <GridDemo />
      <ImageDemo />
      <MessageDemo />
      <ModalDemo />
      <NavbarDemo />
      <PaginationDemo />
      <PopoverDemo />
      <ProgressDemo />
      <TableDemo />
      <TabsDemo />
      <TooltipDemo />
      <TypographyDemo />
    </Box>
  );
}
