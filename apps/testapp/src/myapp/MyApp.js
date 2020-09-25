// import { ThemeProvider } from "emotion-theming";
// import { ThemeProvider } from "./theme";
import { ResetCss, ThemeProvider } from "jag-ui-react";
import React, { useContext } from "react";
import { themeStyles } from "../themes";
import AppRoutes from "./AppRoutes";
import { MyAppContext, MyAppContextProvider } from "./MyAppContext";
import { BreakpointProvider } from "./contexts/breakpoint";

function MyAppContainer() {
  const appContext = useContext(MyAppContext);
  const curTheme = themeStyles[appContext.theme.id];
  return (
    <ThemeProvider theme={curTheme}>
      <ResetCss />
      <AppRoutes />
    </ThemeProvider>
  );
}

// ["640px", "768px", "1024px", "1280px"];
const queries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 720px)",
  md: "(max-width: 1024px)",
  lg: "(max-width: 1280px)",
};

function MyApp() {
  return (
    <MyAppContextProvider>
      <BreakpointProvider queries={queries}>
        <MyAppContainer />
      </BreakpointProvider>
    </MyAppContextProvider>
  );
}

export default MyApp;
