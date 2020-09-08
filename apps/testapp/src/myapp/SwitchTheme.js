import { Box, Icon, useColorMode } from "jag-ui-react";
import React, { useContext, useState } from "react";
import { FaPalette, FaTheaterMasks } from "react-icons/fa";
import MyDropdown from "./components/MyDropdown";
import { MyAppContext } from "./MyAppContext";
import { themes } from "../themes";

const SwitchColorBtn = ({ colorModes }) => {
  const [colorMode, setColorMode] = useState(colorModes[0]);
  const [, setMode] = useColorMode();
  const selectColor = (item) => {
    setMode(item.id);
    setColorMode(item);
  };

  return (
    <>
      <MyDropdown
        defaultTitle={"Select Color"}
        leftIcon={<Icon icon={<FaPalette />} mr={2} />}
        selectedItem={colorMode}
        items={colorModes}
        onSelect={selectColor}
        ml={2}
      />
    </>
  );
};

const SwitchThemeBtn = ({ theme, setTheme }) => {
  return (
    <>
      <MyDropdown
        defaultTitle={"Select Theme"}
        leftIcon={<Icon icon={<FaTheaterMasks />} mr={2} />}
        selectedItem={theme}
        items={themes}
        onSelect={setTheme}
      />
    </>
  );
};

const SwitchTheme = () => {
  const { theme, setTheme } = useContext(MyAppContext);
  return (
    <Box display="flex" justifyContent="flex-end" flexWrap="wrap" py={2}>
      <SwitchThemeBtn theme={theme} setTheme={setTheme} />
      {theme.colorModes && <SwitchColorBtn colorModes={theme.colorModes} />}
    </Box>
  );
};

SwitchTheme.propTypes = {};

export default SwitchTheme;
