import React, { useState } from "react";
import { ThemeProvider } from "theme-ui";
import Demo from "./demo";
import SwitchTheme from "./SwitchTheme";
// import bootstrap from "./themes/bootstrap";
import jagTheme1 from "./themes/jagTheme1";
import jagTheme2 from "./themes/jagTheme2";

const themes = {
  jagTheme2,
  jagTheme1,
};

function App() {
  const [currTheme, setCurrTheme] = useState(0);
  console.log({ currTheme });
  return (
    <ThemeProvider theme={themes[Object.keys(themes)[currTheme]]}>
      <SwitchTheme themes={themes} currTheme={currTheme} setCurrTheme={setCurrTheme} />
      <Demo />
    </ThemeProvider>
  );
}

export default App;
