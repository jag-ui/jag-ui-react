import { Icon, useColorMode } from "jag-ui-react";
import React, { useState } from "react";
import { FaPalette } from "react-icons/fa";
import MyDropdown from "./myapp/components/MyDropdown";

const colors = [
  { id: "lightBlue", name: "Light - Blue" },
  { id: "darkBlue", name: "Dark - Blue" },
];

const SwitchColorBtn = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [mode, setMode] = useColorMode();
  console.log({ mode });

  const handleSelectColor = (item) => {
    setMode(item.id);
    setSelectedColor(item);
  };

  return (
    <>
      <MyDropdown
        defaultTitle={"Select Color"}
        leftIcon={<Icon icon={<FaPalette />} mr={2} />}
        selectedItem={selectedColor}
        items={colors}
        onSelect={handleSelectColor}
      />
    </>
  );
};

SwitchColorBtn.propTypes = {};

export default SwitchColorBtn;
