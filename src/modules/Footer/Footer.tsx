// Components
import { Box, Container, Divider, Grid, Link, Typography } from '@mui/material';

// Icons
import {
  GitHub as GitHubIcon,
  RocketLaunch as RocketLaunchIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

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
      }}
      py={2}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="baseline" py={1}>
          <Grid item sm={5}>
            <Typography color="black" variant="h5">
              <RocketLaunchIcon /> Discover Space
            </Typography>
          </Grid>
          <Grid
            item
            container
            sm={7}
            columnSpacing={2.5}
            justifyContent="flex-end"
          >
            {/* // TODO: Extract these links into separate array with map. */}
            <Grid item>
              <Link
                href="https://beta.reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                React
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://mui.com/"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                Material UI
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://reactrouter.com/en/main"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                React Router
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                Redux
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          pt={1}
        >
          <Grid item xs={6}>
            <Typography color="textSecondary" variant="subtitle2">
              {`© ${new Date().getFullYear()} Discover Space. All rights reserved.`}
            </Typography>
          </Grid>
          <Grid item container xs={6} spacing={2} justifyContent="flex-end">
            {/* // TODO: Extract these links into separate array with map. */}
            <Grid item>
              <Link
                href="https://github.com/myroslavsuprun"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <GitHubIcon />
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.linkedin.com/in/myroslav-suprun/"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <LinkedInIcon />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// **** Exports **** //

export { Footer };
