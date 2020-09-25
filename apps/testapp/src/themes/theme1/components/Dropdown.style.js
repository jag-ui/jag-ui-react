const menuItem = {
  baseStyle: {
    px: 2,
    py: 1,
    cursor: "pointer",
    "&:hover": {
      bg: "primary.dark",
      color: "primary.contrastText",
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
    fontSize: "xs",
  },
};

export default { menuItem: { root: menuItem, disabled: menuItemDisabled, header: menuItemHeader } };
