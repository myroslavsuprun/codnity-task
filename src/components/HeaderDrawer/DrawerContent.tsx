// Navigation
import { Link } from 'react-router-dom';

// UI Components
import {
  Divider,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

// Misc
import { linkList } from 'components/constants';

// Types
import { DrawerContentProps } from './types';

// **** Component **** //

const DrawerContent = ({ handleDrawerToggle }: DrawerContentProps) => {
  return (
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
};

// **** Exports **** //

export { DrawerContent };
