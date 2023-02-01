// **** React **** //

import { useState } from 'react';

import { Link } from 'react-router-dom';

// **** UI Components **** //

// Components
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  ListItemText,
} from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

// **** Misc **** //

import { routes } from 'utils';

// TODO: Extract into separate file.
const linkList = [
  { to: routes.home, text: 'Home' },
  { to: routes.earth, text: 'Earth' },
  { to: routes.mars, text: 'Mars' },
];

// **** Component **** //

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // TODO: Extract Drawer to components which will accept array or object with possible children
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {/* //TODO: Extract name to another variable */}
        Discover Space
      </Typography>
      <Divider />
      <List>
        {linkList.map(({ to, text }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={to}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText>{text}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <header>
        <AppBar position="static" component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Discover Space
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {linkList.map(({ to, text }) => (
                <Button
                  component={Link}
                  to={to}
                  key={text}
                  sx={{ color: '#fff' }}
                >
                  {text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
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
            {drawer}
          </Drawer>
        </Box>
      </header>
    </>
  );
};

// **** Exports **** //

export { Header };
