const menuItem = {
  baseStyle: {
    px: 2,
    py: 1,
    cursor: "pointer",
    "&:hover": {
      bg: "primaryHover",
      color: "white",
    },
  },
};

const menuItemDisabled = {
  baseStyle: {
    px: 2,
    py: 1,
  },
};

const menuItemHeader = {
  baseStyle: {
    px: 2,
    py: 0.5,
    fontSize: "0.8rem",
  },
};

export default { menuItem: { root: menuItem, disabled: menuItemDisabled, header: menuItemHeader } };
