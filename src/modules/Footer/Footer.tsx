// Components
import { Box, Container, Grid, Typography } from '@mui/material';

// Icons
import { RocketLaunch as RocketLaunchIcon } from '@mui/icons-material';

// **** Component **** //

const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{
        bottom: 0,
        position: 'fixed',
        width: '100%',
        height: 'auto',
        paddingTop: ' 1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              <RocketLaunchIcon /> Discover Space
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router | Redux`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// **** Exports **** //

export { Footer };
