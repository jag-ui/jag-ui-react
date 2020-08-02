import React, { useState } from 'react';
import { useColorMode } from 'theme-ui';
import PropTypes from 'prop-types';

import { Button } from '@jag-ui-react/components';

const modes = ['lite', 'dark'];
const Dot = props => (
  <svg
    viewBox="0 0 32 32"
    width="24"
    height="24"
    fill="currentcolor"
    style={{
      display: 'block',
    }}
  >
    <circle cx="16" cy="16" r="14" fill="none" stroke="currentcolor" strokeWidth="4" />
    <path
      d={`
        M 16 0
        A 16 16 0 0 0 16 32
        z
      `}
    />
  </svg>
);

const SwitchColor = () => {
  const [mode, setMode] = useColorMode();
  // const [mode, setMode] = useState("lite");

  const cycleMode = e => {
    const i = (modes.indexOf(mode) + 1) % modes.length;
    const newColorMode = modes[i];
    console.log({ newColorMode });
    setMode(newColorMode);
  };

  return (
    <Button title="Change color mode" onClick={cycleMode} display="flex">
      <Dot /> Switch Color
    </Button>
  );
};

SwitchColor.propTypes = {};

export default SwitchColor;
