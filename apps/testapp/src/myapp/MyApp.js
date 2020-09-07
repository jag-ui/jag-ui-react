// import { ThemeProvider } from "emotion-theming";
// import { ThemeProvider } from "./theme";
import { ResetCss, ThemeProvider } from "jag-ui-react";
import React, { useContext } from "react";
import { themeStyles } from "../themes";
import AppRoutes from "./AppRoutes";
import { MyAppContext, MyAppContextProvider } from "./MyAppContext";

function MyAppContainer() {
  const appContext = useContext(MyAppContext);
  const curTheme = themeStyles[appContext.theme.id];
  console.log({ appContext, curTheme });
  return (
    <ThemeProvider theme={curTheme}>
      <ResetCss />
      <AppRoutes />
    </ThemeProvider>
  );
}

function MyApp() {
  return (
    <MyAppContextProvider>
      <MyAppContainer />
    </MyAppContextProvider>
  );
}

export default MyApp;
