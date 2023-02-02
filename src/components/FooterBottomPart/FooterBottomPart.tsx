// Components
import { Grid } from '@mui/material';
import { Subtitle } from './Subtitle';
import { SocialLinks } from './SocialLinks';

// **** Component **** //

const FooterBottomPart = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      pt={1}
    >
      <Subtitle />
      <SocialLinks />
    </Grid>
  );
};

// **** Export **** //

export { FooterBottomPart };
