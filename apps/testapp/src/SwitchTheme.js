import { Box, Button } from "jag-ui-react";
import React from "react";
import SwitchColorBtn from "./SwitchColorBtn";

const SwitchThemeBtn = ({ onClick }) => {
  return (
    <Button title="Change color mode" onClick={onClick} display="flex" mr={3}>
      Switch Theme
    </Button>
  );
};

const SwitchTheme = ({ themes, currTheme, setCurrTheme }) => {
  return (
    <Box display="flex" justifyContent="flex-end" py={2}>
      currTheme: {currTheme}
      <SwitchThemeBtn
        onClick={() => {
          currTheme + 1 <= Object.keys(themes).length - 1 ? setCurrTheme(currTheme + 1) : setCurrTheme(0);
          console.log(Object.keys(themes).length, currTheme + 1 > Object.keys(themes).length - 1);
        }}
      />
      <SwitchColorBtn />
    </Box>
  );
};

SwitchTheme.propTypes = {};

export default SwitchTheme;
