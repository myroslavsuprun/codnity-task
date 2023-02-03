// Hooks
import { useTheme } from '@mui/material';

// Router
import { Link as RouterLink } from 'react-router-dom';

// Components
import { AboutUs, MarsRover } from 'modules';
import { Box, Grid, Typography, Link } from '@mui/material';

// Images
import { EarthImage } from 'assets';

// Misc
import { routes } from 'utils';

// **** Component **** //
// TODO: Add page description for file.

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <AboutUs />
      <MarsRover />
      <Grid
        container
        spacing={{
          sm: 4,
        }}
        textAlign="end"
        sx={{
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
          },
        }}
        mb={5}
      >
        <Grid
          item
          sm={6}
          sx={{
            [theme.breakpoints.down('sm')]: {
              textAlign: 'center',
            },
          }}
        >
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
          <Box
            overflow="hidden"
            sx={{
              [theme.breakpoints.down('sm')]: {
                width: '300px',
                ml: 'auto',
                mr: 'auto',
              },
              [theme.breakpoints.up('sm')]: {
                width: '220px',
              },
            }}
          >
            <img
              style={{
                display: 'block',
                width: 'inherit',
              }}
              loading="lazy"
              src={EarthImage}
              alt="Mars drone"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

// **** Export **** //

export default Home;
