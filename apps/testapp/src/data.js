import React from "react";
import { FaMusic } from "react-icons/fa";

export const getItems = (text, n = 10, props) =>
  Object.keys([...Array(n)]).map((i) => ({
    id: i,
    title: `${text} ${i}`,
    icon: <FaMusic />,
    ...props,
  }));
