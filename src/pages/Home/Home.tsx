// Router
import { Link as RouterLink } from 'react-router-dom';

// Hooks
import { useTheme } from '@mui/material';

// Components
import { Box, Grid, Typography, Link } from '@mui/material';

// Images
import { EarthImage, MarsDroneImage, NasaImage } from 'assets';

// Misc
import { routes } from 'utils';

// **** Component **** //

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        alignItems="center"
        mb={3}
        p={2}
        sx={{
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
          },
        }}
      >
        <Grid
          item
          sm={6}
          sx={{
            [theme.breakpoints.down('sm')]: {
              textAlign: 'center',
            },
            [theme.breakpoints.up('sm')]: {
              textAlign: 'end',
            },
          }}
        >
          <Typography variant="h4">Powered by</Typography>
          <Typography variant="h3">NASA API</Typography>
        </Grid>
        <Grid item sm={6}>
          <Box overflow="hidden">
            <img
              style={{
                display: 'block',
              }}
              loading="lazy"
              width="300"
              src={NasaImage}
              alt="Nasa"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="flex-end"
        mb={3}
        spacing={{
          xs: 1,
          sm: 4,
        }}
        p={2}
        sx={{
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
          },
        }}
      >
        <Grid item display="flex" justifyContent="flex-end" sm={6}>
          <Box
            borderRadius={2}
            overflow="hidden"
            sx={{
              [theme.breakpoints.down('sm')]: {
                width: '280px',
                ml: 'auto',
                mr: 'auto',
              },
              [theme.breakpoints.up('sm')]: {
                width: '400px',
              },
            }}
          >
            <img
              style={{
                display: 'block',
                width: 'inherit',
              }}
              loading="lazy"
              src={MarsDroneImage}
              alt="Mars drone"
            />
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            [theme.breakpoints.down('sm')]: {
              textAlign: 'center',
            },
          }}
          sm={6}
        >
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
