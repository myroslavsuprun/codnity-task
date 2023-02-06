// Navigation
import { Link } from 'react-router-dom';

// UI Components
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Link as StyledLink,
} from '@mui/material';

// Misc
import { linkList } from 'components/constants';
import { routes } from 'utils';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import { RocketLaunch as RocketLaunchIcon } from '@mui/icons-material';

// Types
import { HeaderAppBarProps } from './types';

// **** Component **** //

const HeaderAppBar = ({ handleDrawerToggle }: HeaderAppBarProps) => {
  return (
    <AppBar position="static" component="nav">
      <Container maxWidth="lg">
        <Toolbar style={{ padding: 0 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            gap={1}
            alignItems="center"
            display="flex"
            sx={{ flexGrow: 1 }}
          >
            <StyledLink
              component={Link}
              to={routes.home}
              color="inherit"
              underline="none"
            >
              <RocketLaunchIcon /> Discover Space
            </StyledLink>
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
      </Container>
    </AppBar>
  );
};

// **** Exports **** //

export { HeaderAppBar };
