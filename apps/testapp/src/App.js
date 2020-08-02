import React, { useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import ThemeUIDemo from './ThemeUIDemo';
import bootstrap from './themes/bootstrap';
import jtheme1 from './themes/jag-theme1';
import SwitchColor from './SwitchColor';
import SwitchTheme from './SwitchTheme';

const themes = {
  bootstrap,
  jtheme1,
};

function App() {
  const [currTheme, setCurrTheme] = useState('bootstrap');
  console.log({ currTheme });
  return (
    <ThemeProvider theme={themes[currTheme]}>
      <SwitchTheme onClick={() => setCurrTheme(currTheme === 'bootstrap' ? 'jtheme1' : 'bootstrap')} />
      <SwitchColor />
      <ThemeUIDemo />
    </ThemeProvider>
  );
}

export default App;
