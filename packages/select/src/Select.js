import { Box, Flex } from "@jag-ui-react/box";
import { Svg } from "@jag-ui-react/svg";
import { getMargin, omitMargin } from "@jag-ui-react/utils";
import React from "react";

const CaretIcon = (props) => (
  <Svg {...props}>
    <path d="M7 10l5 5 5-5z" />
  </Svg>
);

export const Select = React.forwardRef((props, ref) => (
  <Flex __themeKey="Select.root" {...getMargin(props)}>
    <Box
      ref={ref}
      as="select"
      variant="select"
      {...omitMargin(props)}
      __themeKey="Select.select"
      __css={{
        display: "block",
        width: "100%",
        p: 2,
        appearance: "none",
        fontSize: "inherit",
        lineHeight: "inherit",
        border: "1px solid",
        borderRadius: 4,
        color: "inherit",
        bg: "transparent",
      }}
    />
    <CaretIcon
      __themeKey="Select.caret"
      sx={{
        ml: -28,
        alignSelf: "center",
        pointerEvents: "none",
      }}
    />
  </Flex>
));
