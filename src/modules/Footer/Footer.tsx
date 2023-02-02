// Hooks
import { useTheme } from '@mui/material';

// Components
import { Box, Container, Divider, Grid, Link, Typography } from '@mui/material';

// Icons
import { RocketLaunch as RocketLaunchIcon } from '@mui/icons-material';

// Misc
import { socialLinks, techLinks } from 'components';

// **** Component **** //

const Footer = () => {
  const theme = useTheme();

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
            <Typography
              color="black"
              gap={1}
              alignItems="baseline"
              display="flex"
              variant="h5"
            >
              <RocketLaunchIcon /> Discover Space
            </Typography>
          </Grid>
          <Grid
            item
            container
            sm={7}
            sx={{
              [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '8px',
              },
            }}
            columnSpacing={2.5}
            justifyContent="flex-end"
          >
            {techLinks.map(({ link, text }) => (
              <Grid item>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                >
                  {text}
                </Link>
              </Grid>
            ))}
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
            {socialLinks.map(({ link, inner }) => (
              <Grid item>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                >
                  {inner}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// **** Exports **** //

export { Footer };
