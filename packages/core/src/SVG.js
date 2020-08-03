import React from "react";
import { Box } from "@jag-ui-react/core";

export const SVG = ({ size = 24, ...props }) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    width={size + ""}
    height={size + ""}
    viewBox="0 0 24 24"
    fill="currentcolor"
    {...props}
  />
);
