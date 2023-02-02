import { Grid, Typography } from '@mui/material';
import { NasaImage } from 'assets';

const Home = () => {
  return (
    <>
      <Grid container p={2}>
        <Grid item sm={6}>
          <Typography variant="h4">Powered by</Typography>
          <Typography variant="h3">NASA API</Typography>
        </Grid>
        <Grid item sm={6}>
          <img width="300" src={NasaImage} alt="Nasa" />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
