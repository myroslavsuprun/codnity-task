// Components
import { Grid, Typography } from '@mui/material';

// Icons
import { RocketLaunch as RocketLaunchIcon } from '@mui/icons-material';

// **** Component **** //

const Title = () => (
  <Grid item sm={5}>
    <Typography
      variant="h5"
      color="black"
      gap={1}
      alignItems="baseline"
      display="flex"
    >
      <RocketLaunchIcon /> Discover Space
    </Typography>
  </Grid>
);

// **** Export **** //

export { Title };
