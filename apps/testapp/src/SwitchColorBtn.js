import { Button } from "jag-ui-react";
import React from "react";
import { useColorMode } from "theme-ui";

const modes = ["lite", "dark"];
const Dot = (props) => (
  <svg
    viewBox="0 0 32 32"
    width="24"
    height="24"
    fill="currentcolor"
    style={{
      display: "block",
    }}>
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

const SwitchColorBtn = () => {
  const [mode, setMode] = useColorMode();

  const cycleMode = (e) => {
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

SwitchColorBtn.propTypes = {};

export default SwitchColorBtn;
