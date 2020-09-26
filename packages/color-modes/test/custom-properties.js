import { toCustomProperties, createColorStyles } from "../src/custom-properties";

describe("toCustomProperties", () => {
  test("converts theme object to custom properties", () => {
    const result = toCustomProperties({
      initialColorModeName: "light",
      colors: {
        text: "black",
      },
      space: [0, 4, 8, 16, 32],
      fonts: {
        body: "system-ui, sans-serif",
      },
      fontWeights: {
        body: 400,
      },
    });
    expect(result).toEqual({
      initialColorModeName: "light",
      colors: {
        text: "var(--jag-ui-colors-text, black)",
      },
      space: [
        "var(--jag-ui-space-0, 0px)",
        "var(--jag-ui-space-1, 4px)",
        "var(--jag-ui-space-2, 8px)",
        "var(--jag-ui-space-3, 16px)",
        "var(--jag-ui-space-4, 32px)",
      ],
      fonts: {
        body: "var(--jag-ui-fonts-body, system-ui, sans-serif)",
      },
      fontWeights: {
        body: "var(--jag-ui-fontWeights-body, 400)",
      },
    });
  });
});

describe("createColorStyles", () => {
  test("creates styles from color palette", () => {
    const styles = createColorStyles({
      colors: {
        text: "tomato",
        background: "white",
        modes: {
          dark: {
            text: "white",
            background: "black",
          },
        },
      },
    });
    expect(styles).toEqual({
      body: {
        color: "tomato",
        backgroundColor: "white",
        "--jag-ui-colors-text": "tomato",
        "--jag-ui-colors-background": "white",
        "&.jag-ui-dark": {
          "--jag-ui-colors-text": "white",
          "--jag-ui-colors-background": "black",
        },
      },
    });
  });
});
