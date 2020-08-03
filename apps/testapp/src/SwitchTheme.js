import { Button } from "@jag-ui-react/components";
import { Box } from "@jag-ui-react/core";
import React from "react";
import SwitchColorBtn from "./SwitchColorBtn";

const SwitchThemeBtn = ({ onClick }) => {
  return (
    <Button title="Change color mode" onClick={onClick} display="flex" mr={3}>
      Switch Theme
    </Button>
  );
};

const SwitchTheme = ({ currTheme, setCurrTheme }) => {
  return (
    <Box display="flex" justifyContent="flex-end" py={2}>
      <SwitchThemeBtn onClick={() => setCurrTheme(currTheme === "bootstrap" ? "jtheme1" : "bootstrap")} />
      <SwitchColorBtn />
    </Box>
  );
};

SwitchTheme.propTypes = {};

export default SwitchTheme;
