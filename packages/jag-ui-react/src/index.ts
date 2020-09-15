// ################ CORE ################
import { jsx } from "@jag-ui-react/core";

export {
  jsx,
  Context,
  merge,
  useThemeUI,
  ContextValue,
  IntrinsicSxElements,
  SxProps,
  SxStyleProp,
} from "@jag-ui-react/core";
export { useColorMode, InitializeColorMode } from "@jag-ui-react/color-modes";
export { Styled, components } from "@jag-ui-react/mdx";
export { ThemeProvider } from "@jag-ui-react/theme-provider";
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
} from "@jag-ui-react/css";

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

// ################ COMPONENTS ################
export { Alert } from "@jag-ui-react/alert";
export { Badge } from "@jag-ui-react/badge";
export { Box } from "@jag-ui-react/box";
export { Button, IconButton } from "@jag-ui-react/button";
export { Card } from "@jag-ui-react/card";
export { Checkbox } from "@jag-ui-react/checkbox";
export { Divider } from "@jag-ui-react/divider";
export { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "@jag-ui-react/dropdown";
export { Embed } from "@jag-ui-react/embed";
export { Field } from "@jag-ui-react/field";
export { useOnClickOutside } from "@jag-ui-react/hooks";
export { Icon, Svg } from "@jag-ui-react/icon";
export { Avatar, Image } from "@jag-ui-react/image";
export { Input } from "@jag-ui-react/input";
export { Container, Flex, Grid } from "@jag-ui-react/layout";
export { Link } from "@jag-ui-react/link";
export { Progress, Spinner } from "@jag-ui-react/loader";
export { Modal } from "@jag-ui-react/modal";
export { Popover } from "@jag-ui-react/popover";
export { Radio } from "@jag-ui-react/radio";
export { ResetCss } from "@jag-ui-react/reset-css";
export { Select } from "@jag-ui-react/select";
export { Slider } from "@jag-ui-react/slider";
export { Switch } from "@jag-ui-react/switch";
export { Label, Text } from "@jag-ui-react/text";
export { Textarea } from "@jag-ui-react/textarea";
export { Tooltip } from "@jag-ui-react/tooltip";
export { Tabs, TabItem } from "@jag-ui-react/tabs";
export { getMargin, getProps, getSystemProps, omitMargin } from "@jag-ui-react/utils";
