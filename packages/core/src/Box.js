import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { css, get } from "@theme-ui/css";
import { color, compose, flexbox, layout, space, typography, shadow, border } from "styled-system";

const sx = (props) => css(props.sx)(props.theme);
const base = (props) => css(props.__css)(props.theme);
const variant = ({ theme, variant, __themeKey = "variants" }) =>
  css(get(theme, __themeKey + "." + variant, get(theme, variant)));

const xtras = ({ theme, variant, vcolor, vsize, __themeKey = "variants" }) => {
  const themeVariant = get(theme, __themeKey + "." + variant, get(theme, variant));
  if (typeof themeVariant === "object" && themeVariant !== null) {
    const results = [];
    const { styles, colors, sizes } = themeVariant;
    const color = get(colors, vcolor);
    const size = get(sizes, vsize);
    if (styles) results.push(css(styles));
    if (color) results.push(css(color));
    if (size) results.push(css(size));
    return results;
  }
  return [];
};

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
  ...xtras,
  sx,
  (props) => props.css,
  compose(space, layout, typography, color, flexbox, shadow, border),
);
