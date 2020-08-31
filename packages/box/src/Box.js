import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { color, compose, flexbox, layout, space, typography, shadow, border } from "styled-system";
import { css, get } from "@jag-ui-react-core/css";

const sx = (props) => css(props.sx)(props.theme);
const base = (props) => css(props.__css)(props.theme);

// const variant = ({ theme, variant, __themeKey = "variants" }) =>
//   css(get(theme, __themeKey + "." + variant, get(theme, variant)));

const themeStyles = ({ theme, variant, vcolor, vsize, __themeKey = "variants" }) => {
  const componentTheme = get(theme, __themeKey);
  if (!componentTheme) return [];

  //
  const results = [];
  const { baseStyle, variants, defaultProps } = componentTheme || {};

  // defaultProps:
  if (defaultProps) {
    if (!variant) variant = defaultProps.variant;
    if (!vcolor) vcolor = defaultProps.vcolor;
    if (!vsize) vsize = defaultProps.vsize;
  }

  // baseStyle:
  if (baseStyle) results.push(css(baseStyle));

  // variant:
  const componentVariant = variants && variants[variant];
  if (componentVariant) {
    const { variantStyle, variantColors, variantSizes } = componentVariant || {};
    // variantStyle:
    if (variantStyle) results.push(css(variantStyle));
    // size:
    if (variantSizes && variantSizes[vsize]) results.push(css(variantSizes[vsize]));
    // color:
    if (variantColors && variantColors[vcolor]) results.push(css(variantColors[vcolor]));
  }

  // console.log(__themeKey, { theme, componentTheme, componentVariant, variant, vcolor, vsize, results });
  return results;
};

export const Box = styled("div", { shouldForwardProp })(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },
  base,
  //   variant,
  ...themeStyles,
  sx,
  (props) => props.css,
  compose(space, layout, typography, color, flexbox, shadow, border),
);
