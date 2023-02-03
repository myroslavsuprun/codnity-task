import { Link as RouterLink } from 'react-router-dom';

// Components
import { Box, Grid, Typography, Link } from '@mui/material';

// Images
import { MarsDroneImage, NasaImage } from 'assets';
import { routes } from 'utils';

// **** Component **** //

const Home = () => {
  return (
    <>
      <Grid container alignItems="center" mb={3} spacing={4} p={2}>
        <Grid
          container
          spacing={1}
          justifyContent="flex-end"
          alignItems="baseline"
          item
          sm={6}
        >
          <Grid item>
            <Typography variant="h4">Powered by</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">NASA API</Typography>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <img loading="lazy" width="300" src={NasaImage} alt="Nasa" />
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end" spacing={4} p={2}>
        <Grid item display="flex" justifyContent="flex-end" xs={6}>
          <Box borderRadius={2} overflow="hidden">
            <img
              style={{
                display: 'block',
              }}
              loading="lazy"
              width="400"
              src={MarsDroneImage}
              alt="Mars drone"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
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
      <Grid container>
        <Grid item></Grid>
        <Grid item display="flex" justifyContent="flex-end" xs={6}>
          <Box borderRadius={2} overflow="hidden">
            <img
              style={{
                display: 'block',
              }}
              loading="lazy"
              width="400"
              src={MarsDroneImage}
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
