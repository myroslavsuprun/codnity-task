import { Grid, Typography } from '@mui/material';

// **** Component **** //

const Subtitle = () => {
  return (
    <Grid item xs={6}>
      <Typography color="textSecondary" variant="subtitle2">
        {`© ${new Date().getFullYear()} Discover Space. All rights reserved.`}
      </Typography>
    </Grid>
  );
};

// **** Exports **** //

export { Subtitle };
