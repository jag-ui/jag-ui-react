// import { ThemeProvider } from "emotion-theming";
// import { ThemeProvider } from "./theme";
import { Box, Flex, ResetCss } from "jag-ui-react";
import React, { useState } from "react";
import { ThemeProvider } from "theme-ui";
// import DemoApp from "../demo";
import SwitchTheme from "../SwitchTheme";
import jag1 from "../themes/jag1";
// import bootstrap from "./themes/bootstrap";
import jagTheme1 from "../themes/jagTheme1";
import jagTheme2 from "../themes/jagTheme2";
import SideNav from "./components/SideNav";

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
      <Flex width="full" height="100vh">
        <SideNav />
        <Box bg="bg2" width="full" height="full" overflowY="auto">
          <SwitchTheme themes={themes} currTheme={currTheme} setCurrTheme={setCurrTheme} />
          <Box m={3} p="12rem" bg="bg1">
            My Box
          </Box>
          <Box m={3} p="12rem" bg="bg1">
            My Box
          </Box>
          <Box m={3} p="12rem" bg="bg1">
            My Box
          </Box>
          <Box m={3} p="12rem" bg="bg1">
            My Box
          </Box>
          <Box m={3} p="12rem" bg="bg1">
            My Box
          </Box>
        </Box>
      </Flex>
    </ThemeProvider>
  );
}

export default MyApp;
