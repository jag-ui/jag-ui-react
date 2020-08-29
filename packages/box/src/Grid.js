import React from "react";
import { Box } from "@jag-ui-react/box";

const px = (n) => (typeof n === "number" ? n + "px" : n);

const widthToColumns = (width) =>
  Array.isArray(width) ? width.map(widthToColumns) : !!width && `repeat(auto-fit, minmax(${px(width)}, 1fr))`;

const countToColumns = (n) =>
  Array.isArray(n) ? n.map(countToColumns) : !!n && (typeof n === "number" ? `repeat(${n}, 1fr)` : n);

export const Grid = React.forwardRef(({ width, columns, gap = 3, ...props }, ref) => {
  const gridTemplateColumns = !!width ? widthToColumns(width) : countToColumns(columns);

  return (
    <Box
      ref={ref}
      {...props}
      __themeKey="Grid.root"
      __css={{
        display: "grid",
        gridGap: gap,
        gridTemplateColumns,
      }}
    />
  );
});
