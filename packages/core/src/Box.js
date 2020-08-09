import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { css, get } from "@theme-ui/css";
import { color, compose, flexbox, layout, space, typography, shadow, border } from "styled-system";

const sx = (props) => css(props.sx)(props.theme);
const base = (props) => css(props.__css)(props.theme);
const variant = ({ theme, variant, __themeKey = "variants" }) => {
  const themeVariant = get(theme, __themeKey + "." + variant, get(theme, variant));
  return themeVariant && themeVariant.styles ? css(themeVariant.styles) : css(themeVariant);
};
const xtras = (props) => css(props.__xtras)(props.theme);

export const Box = styled("div", {
  shouldForwardProp,
})(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  variant,
  xtras,
  sx,
  (props) => props.css,
  compose(space, layout, typography, color, flexbox, shadow, border),
);
