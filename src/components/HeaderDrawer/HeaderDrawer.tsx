// **** Component **** //

// UI Components
import { Box, Drawer } from '@mui/material';

// Components
import { DrawerContent } from './DrawerContent';

// Types
import { HeaderDrawerProps } from './types';

const HeaderDrawer = ({
  mobileOpen,
  handleDrawerToggle,
}: HeaderDrawerProps) => {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
          },
        }}
      >
        <DrawerContent handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </Box>
  );
};

// **** Exports **** //

export { HeaderDrawer };
