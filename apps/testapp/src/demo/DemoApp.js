import React, { useState } from "react";
import { ThemeProvider } from "jag-ui-react";
// import { ThemeProvider } from "emotion-theming";
// import { ThemeProvider } from "./theme";
import { ResetCss } from "jag-ui-react";

import DemoComponents from "./components";

import SwitchTheme from "../SwitchTheme";
// import bootstrap from "./themes/bootstrap";
import jagTheme1 from "../themes/jagTheme1";
import jagTheme2 from "../themes/jagTheme2";
import jag1 from "../themes/jag1";

const themes = {
  jag1,
  jagTheme2,
  jagTheme1,
};

function App() {
  const [currTheme, setCurrTheme] = useState(0);
  console.log({ currTheme });
  return (
    <ThemeProvider theme={themes[Object.keys(themes)[currTheme]]}>
      <ResetCss />
      <SwitchTheme themes={themes} currTheme={currTheme} setCurrTheme={setCurrTheme} />
      <DemoComponents />
    </ThemeProvider>
  );
}

export default App;