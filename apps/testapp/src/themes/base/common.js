// @media queries
export const breakpoints = ["640px", "768px", "1024px", "1280px"];

// z-index
export const zIndices = { auto: "auto", "0": "0", "10": "10", "20": "20", "30": "30", "40": "40", "50": "50" };

export const space = [0, "0.25rem", "0.5rem", "1rem", "2rem", "4rem", "8rem", "16rem", "32rem"];

export const borderWidths = { px: "1px", "0": "0", "2": "2px", "4": "4px", "8": "8px" };

// border-radius
export const radii = { none: "0", sm: "0.125rem", default: "0.25rem", md: "0.375rem", lg: "0.5rem", full: "9999px" };

// box-shadow
export const shadows = {
  // xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  // sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  //
  // md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  // lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  // xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  // "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",

  0: "none",
  1: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  2: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  3: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  4: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  5: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  6: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
  none: "none",
  btn: "0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08)",
};

export const transitions = {
  property: {
    none: "none",
    all: "all",
    default: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform",
  },
  timingFunction: {
    linear: "linear",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  duration: {
    "75": "75ms",
    "100": "100ms",
    "150": "150ms",
    "200": "200ms",
    "300": "300ms",
    "500": "500ms",
    "700": "700ms",
    "1000": "1000ms",
  },
};
