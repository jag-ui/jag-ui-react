import React, { createContext, useState } from "react";
import { themes } from "../themes";

export const MyAppContext = createContext();

export const MyAppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes[1]);
  return <MyAppContext.Provider value={{ theme, setTheme }}>{children}</MyAppContext.Provider>;
};
