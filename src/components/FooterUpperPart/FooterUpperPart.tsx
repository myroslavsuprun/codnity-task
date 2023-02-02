// Components
import { Grid } from '@mui/material';
import { Title } from './Title';
import { TechLinks } from './TechLinks';

const FooterUpperPart = () => {
  return (
    <Grid container justifyContent="center" alignItems="baseline" py={1}>
      <Title />
      <TechLinks />
    </Grid>
  );
};

export { FooterUpperPart };
