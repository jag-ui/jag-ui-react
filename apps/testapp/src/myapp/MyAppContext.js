import React, { createContext, useState } from "react";
import { themes } from "../themes";

export const MyAppContext = createContext();

export const MyAppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes[0]);
  return <MyAppContext.Provider value={{ theme, setTheme }}>{children}</MyAppContext.Provider>;
};
