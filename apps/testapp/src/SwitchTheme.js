import { Box, Icon, useColorMode } from "jag-ui-react";
import React, { useContext, useState } from "react";
import { FaPalette, FaTheaterMasks } from "react-icons/fa";
import MyDropdown from "./myapp/components/MyDropdown";
import { MyAppContext } from "./myapp/MyAppContext";
import { colorModes, themes } from "./themes";

const SwitchColorBtn = () => {
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
      />
    </>
  );
};

const SwitchThemeBtn = () => {
  const { theme, setTheme } = useContext(MyAppContext);
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

const SwitchTheme = ({ themes, currTheme, setCurrTheme }) => {
  return (
    <Box display="flex" justifyContent="flex-end" py={2}>
      <SwitchThemeBtn />
      <SwitchColorBtn />
    </Box>
  );
};

SwitchTheme.propTypes = {};

export default SwitchTheme;
