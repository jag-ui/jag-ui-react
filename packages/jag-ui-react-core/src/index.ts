import { jsx } from "@jag-ui-react-core/core";

export {
  jsx,
  Context,
  merge,
  useThemeUI,
  ContextValue,
  IntrinsicSxElements,
  SxProps,
  SxStyleProp,
} from "@jag-ui-react-core/core";
export { useColorMode, InitializeColorMode } from "@jag-ui-react-core/color-modes";
export { Styled, components } from "@jag-ui-react-core/mdx";
export { ThemeProvider } from "@jag-ui-react-core/theme-provider";
export {
  css,
  get,
  ColorMode,
  ColorModesScale,
  CSSObject,
  CSSProperties,
  CSSPseudoSelectorProps,
  ResponsiveStyleValue,
  ThemeUICSSProperties,
  ThemeUIStyleObject,
  Theme,
  ThemeStyles,
  TLengthStyledSystem,
  ThemeDerivedStyles,
} from "@jag-ui-react-core/css";

// TODO: work this into root provider/global styles?
export const BaseStyles = (props: Record<string, unknown>) =>
  jsx("div", {
    ...props,
    sx: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      variant: "styles",
    },
  });
