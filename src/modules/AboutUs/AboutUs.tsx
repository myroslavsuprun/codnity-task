// Hooks
import { useTheme } from '@mui/material';

// Components
import { Box, Grid, Typography } from '@mui/material';

// Images
import { NasaImage } from 'assets';

const AboutUs = () => {
  // Hooks
  const theme = useTheme();

  // Styles
  const containerStyle = {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  };

  const typographyStyle = {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'end',
    },
  };

  const imgStyle = {
    display: 'block',
  };

  return (
    <Grid container alignItems="center" mb={3} p={2} sx={containerStyle}>
      <Grid item sm={6} sx={typographyStyle}>
        <Typography variant="h4">Powered by</Typography>
        <Typography variant="h3">NASA API</Typography>
      </Grid>
      <Grid item sm={6}>
        <Box overflow="hidden">
          <img
            style={imgStyle}
            loading="lazy"
            width="300"
            src={NasaImage}
            alt="Nasa"
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export { AboutUs };
