import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { css, get } from "@theme-ui/css";
import { color, compose, flexbox, layout, space, typography } from "styled-system";

const sx = (props) => css(props.sx)(props.theme);
const base = (props) => css(props.__css)(props.theme);
const variant = ({ theme, variant, __themeKey = "variants" }) =>
  css(get(theme, __themeKey + "." + variant, get(theme, variant)));

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
  sx,
  (props) => props.css,
  compose(space, layout, typography, color, flexbox),
);
