interface HeaderDrawerProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

interface DrawerContentProps {
  handleDrawerToggle: () => void;
}

export { type HeaderDrawerProps, type DrawerContentProps };
