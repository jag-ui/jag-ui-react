import React from "react";
import { Box } from "@jag-ui-react/core";
import AlertDemo from "./AlertDemo";
import TypographyDemo from "./TypographyDemo";
import FormDemo from "./FormDemo";

export default function Demo() {
  return (
    <Box px={3}>
      <TypographyDemo />
      <AlertDemo />
      <FormDemo />
    </Box>
  );
}
