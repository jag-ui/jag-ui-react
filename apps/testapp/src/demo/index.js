import { Box } from "@jag-ui-react/core";
import React from "react";
import AlertDemo from "./AlertDemo";
import BadgeDemo from "./BadgeDemo";
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
import LinkDemo from "./LinkDemo";
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
      <ButtonDemo />
      <LinkDemo />
      <ModalDemo />

      <DropdownDemo />
      <PopoverDemo />

      <CardDemo />
      <FormDemo />
      <FlexDemo />
      <GridDemo />
      <ImageDemo />
      <EmbedDemo />
      <TypographyDemo />

      {/* TODO */}
      <BadgeDemo />
      <ContainerDemo />
      <DividerDemo />

      <MessageDemo />
      <ModalDemo />
      <NavbarDemo />
      <PaginationDemo />

      <ProgressDemo />
      <TableDemo />
      <TabsDemo />
      <TooltipDemo />
    </Box>
  );
}
