// Hooks
import { useTheme } from '@mui/material';

// Router
import { Link as RouterLink } from 'react-router-dom';

// Components
import { Box, Grid, Typography, Link } from '@mui/material';

// Images
import { EarthImage } from 'assets';

// Misc
import { routes } from 'utils';

const EarthFootages = () => {
  // Hooks
  const theme = useTheme();

  // Styles
  const containerStyle = {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  };
  const typographyStyle = {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  };
  const imgWrapperStyle = {
    [theme.breakpoints.down('sm')]: {
      width: '300px',
      ml: 'auto',
      mr: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      width: '220px',
    },
  };
  const imgStyle = {
    display: 'block',
    width: 'inherit',
  };

  return (
    <Grid
      container
      spacing={{
        sm: 4,
      }}
      textAlign="end"
      sx={containerStyle}
      mb={5}
    >
      <Grid item sm={6} sx={typographyStyle}>
        <Typography variant="h4" mb={1} component="h3">
          Earth footages
        </Typography>
        <Typography variant="h5" component="p">
          <Link to={routes.earth} underline="none" component={RouterLink}>
            Take a look
          </Link>{' '}
          from the above. Access satellite Earth images by latitude and
          longitude.
        </Typography>
      </Grid>
      <Grid item sm={6}>
        <Box overflow="hidden" sx={imgWrapperStyle}>
          <img
            style={imgStyle}
            loading="lazy"
            src={EarthImage}
            alt="Mars drone"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export { EarthFootages };
