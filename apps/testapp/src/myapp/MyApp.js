// import { ThemeProvider } from "emotion-theming";
// import { ThemeProvider } from "./theme";
import { Flex, ResetCss } from "jag-ui-react";
import React, { useState } from "react";
import { ThemeProvider } from "jag-ui-react";
import jag1 from "../themes/jag1";
// import bootstrap from "./themes/bootstrap";
import jagTheme1 from "../themes/jagTheme1";
import jagTheme2 from "../themes/jagTheme2";
import SideNav from "./components/SideNav";
import AppRoutes from "./AppRoutes";

const themes = {
  jag1,
  jagTheme2,
  jagTheme1,
};

function MyApp() {
  const [currTheme, setCurrTheme] = useState(0);
  console.log({ currTheme });
  return (
    <ThemeProvider theme={themes[Object.keys(themes)[currTheme]]}>
      <ResetCss />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default MyApp;
