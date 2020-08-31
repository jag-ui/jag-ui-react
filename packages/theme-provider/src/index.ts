import {
  jsx,
  useThemeUI,
  ThemeProvider as CoreProvider,
  ThemeProviderProps as CoreThemeProviderProps,
  IntrinsicSxElements,
} from "@jag-ui-react/core";
import { css, Theme } from "@jag-ui-react/css";
import { ColorModeProvider } from "@jag-ui-react/color-modes";
import { MDXProvider, MDXProviderComponents } from "@jag-ui-react/mdx";
import { Global } from "@emotion/core";

const BodyStyles = () =>
  jsx(Global, {
    styles: (emotionTheme) => {
      const theme = emotionTheme as Theme;
      if (theme.useBodyStyles === false || (theme.styles && !theme.styles.root)) {
        return false;
      }
      const boxSizing = theme.useBorderBox === false ? undefined : "border-box";

      return css({
        "*": {
          boxSizing,
        },
        body: {
          margin: 0,
          variant: "styles.root",
        },
      })(theme);
    },
  });

interface ThemeProviderProps extends Pick<CoreThemeProviderProps, "theme"> {
  children?: React.ReactNode;
  components?: MDXProviderComponents;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, components, children }) => {
  const outer = useThemeUI();

  if (typeof outer.setColorMode === "function") {
    return jsx(
      CoreProvider,
      { theme },
      jsx(MDXProvider, {
        components,
        children,
      }),
    );
  }

  return jsx(
    CoreProvider,
    { theme },
    jsx(
      ColorModeProvider,
      null,
      jsx(BodyStyles),
      jsx(MDXProvider, {
        components,
        children,
      }),
    ),
  );
};
