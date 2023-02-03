import { Grid, Typography } from '@mui/material';
import { NasaImage } from 'assets';

const Home = () => {
  return (
    <>
      <Grid container alignItems="center" spacing={4} p={2}>
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
          <img width="300" src={NasaImage} alt="Nasa" />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
