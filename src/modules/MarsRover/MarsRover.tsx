// Hooks
import { useTheme } from '@mui/material';

// Router
import { Link as RouterLink } from 'react-router-dom';

// Components
import { Box, Grid, Typography, Link } from '@mui/material';

// Images
import { MarsDroneImage } from 'assets';

// Misc
import { routes } from 'utils';

const MarsRover = () => {
  // Hooks
  const theme = useTheme();

  // Styles
  const containerStyle = {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  };
  const imgWrapperStyle = {
    [theme.breakpoints.down('sm')]: {
      width: '280px',
      ml: 'auto',
      mr: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      width: '400px',
    },
  };
  const imgStyle = {
    display: 'block',
    width: 'inherit',
  };
  const typographyStyle = {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  };

  return (
    <Grid
      container
      justifyContent="flex-end"
      mb={3}
      spacing={{
        xs: 1,
        sm: 4,
      }}
      p={2}
      sx={containerStyle}
    >
      <Grid item display="flex" justifyContent="flex-end" sm={6}>
        <Box borderRadius={2} overflow="hidden" sx={imgWrapperStyle}>
          <img
            style={imgStyle}
            loading="lazy"
            src={MarsDroneImage}
            alt="Mars drone"
          />
        </Box>
      </Grid>
      <Grid item sx={typographyStyle} sm={6}>
        <Typography mb={1} variant="h4" component="h3">
          Mars Rover Photos
        </Typography>
        <Typography variant="h5" component="p">
          <Link to={routes.mars} underline="none" component={RouterLink}>
            Discover
          </Link>{' '}
          mars photos provided by NASA.
        </Typography>
      </Grid>
    </Grid>
  );
};

export { MarsRover };
