# @jag-ui-react-core/color

Color manipulation utilities for Theme UI

```sh
npm i @jag-ui-react-core/color
```

Import utilities from the `@jag-ui-react-core/color` package and use them with colors in the `sx` prop.

```js
/** @jsx jsx */
import { jsx } from "theme-ui";
import { darken, lighten } from "@jag-ui-react-core/color";

export default (props) => (
  <div
    {...props}
    sx={{
      color: darken("primary", 0.25),
      bg: lighten("primary", 0.875),
    }}
  />
);
```

## API

### `getColor`

```js
import { getColor } from "@jag-ui-react-core/color";
// getColor(theme, 'primary')
```

### `darken`

Darken a color by an amount 0–1

```js
import { darken } from "@jag-ui-react-core/color";
// darken('primary', amount)
```

### `lighten`

Lighten a color by an amount 0–1

```js
import { lighten } from "@jag-ui-react-core/color";
// lighten('primary', amount)
```

### `rotate`

Rotate the hue of a color by an amount 0–360

```js
import { rotate } from "@jag-ui-react-core/color";
// rotate('primary', degrees)
```

### `hue`

Set the hue of a color to a degree 0–360

```js
import { hue } from "@jag-ui-react-core/color";
// hue('primary', degrees)
```

### `saturation`

Set the saturation of a color to an amount 0–1

```js
import { saturation } from "@jag-ui-react-core/color";
// saturation('primary', amount)
```

### `lightness`

Set the lightness of a color to an amount 0–1

```js
import { lightness } from "@jag-ui-react-core/color";
// lightness('primary', amount)
```

### `desaturate`

Desaturate a color by an amount 0–1

```js
import { desaturate } from "@jag-ui-react-core/color";
// desaturate('primary', amount)
```

### `saturate`

Saturate a color by an amount 0–1

```js
import { saturate } from "@jag-ui-react-core/color";
// saturate('primary', amount)
```

### `shade`

Shade a color by an amount 0–1

```js
import { shade } from "@jag-ui-react-core/color";
// shade('primary', amount)
```

### `tint`

Tint a color by an amount 0–1

```js
import { tint } from "@jag-ui-react-core/color";
// tint('primary', amount)
```

### `alpha`

Set the transparency of a color to an amount 0-1

```js
import { alpha } from "@jag-ui-react-core/color";
// alpha('primary', amount)
```

### `transparentize`

Similar to `alpha`, but decreases opacity by the given amount.

```js
import { transparentize } from "@jag-ui-react-core/color";
// transparentize('primary', amount)
```

### `mix`

Mix two colors by a specific ratio

```js
import { mix } from "@jag-ui-react-core/color";
// mix('primary', 'secondary', ratio)
```

### `complement`

Get the complement of a color

```js
import { complement } from "@jag-ui-react-core/color";
// complement('primary')
```

### `invert`

Get the inverted color

```js
import { invert } from "@jag-ui-react-core/color";
// invert('primary')
```

### `grayscale`

Desaturate the color to grayscale

```js
import { grayscale } from "@jag-ui-react-core/color";
// grayscale('primary')
```

## Advanced Usage

If you want to do something more complex, such as setting up gradients, you can do that with some extra workarounds.

We can take the result of any of the above helper functions (which return a function) and call it with the theme object to generate a string in place. This is useful for interpolating values into complex CSS declarations:

```jsx
<MyComponentWithBackground
  sx={{
    backgroundImage: (t) => `
      linear-gradient(
        to bottom,
        ${alpha("primary", 0.5)(t)},
        ${alpha("secondary", 0.5)(t)}
      )
    `,
  }}
/>
```

## Related

- [Polished](https://polished.js.org)
