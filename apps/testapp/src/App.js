import React, { useState } from "react";
import { ThemeProvider } from "theme-ui";
import Demo from "./demo";
import SwitchTheme from "./SwitchTheme";
import bootstrap from "./themes/bootstrap";
import jtheme1 from "./themes/jag-theme1";

const themes = {
  bootstrap,
  jtheme1,
};

function App() {
  const [currTheme, setCurrTheme] = useState("jtheme1");
  console.log({ currTheme });
  return (
    <ThemeProvider theme={themes[currTheme]}>
      <SwitchTheme currTheme={currTheme} setCurrTheme={setCurrTheme} />
      <Demo />
    </ThemeProvider>
  );
}

export default App;
