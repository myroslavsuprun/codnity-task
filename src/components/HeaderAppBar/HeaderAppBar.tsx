// Navigation
import { Link } from 'react-router-dom';

// UI Components
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

// Misc
import { linkList } from 'components/constants';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import { RocketLaunch as RocketLaunchIcon } from '@mui/icons-material';

// Types
import { HeaderAppBarProps } from './types';

// **** Component **** //

const HeaderAppBar = ({ handleDrawerToggle }: HeaderAppBarProps) => {
  return (
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
          <RocketLaunchIcon /> Discover Space
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {linkList.map(({ to, text }) => (
            <Button component={Link} to={to} key={text} sx={{ color: '#fff' }}>
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// **** Exports **** //

export { HeaderAppBar };
