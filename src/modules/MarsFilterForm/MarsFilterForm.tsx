// Components
import { MarsRadioForm, MarsSliderForm } from 'components';
import { Grid, Box } from '@mui/material';

// Types
import { MarsFilterProps } from './types';

const MarsFilter = ({
  roverValue,
  solValue,
  setRoverValue,
  setSolValue,
}: MarsFilterProps) => {
  return (
    <Grid md={3} mb={3} item>
      <Box display="flex" flexDirection="column">
        <MarsRadioForm roverValue={roverValue} setRoverValue={setRoverValue} />
        <MarsSliderForm solValue={solValue} setSolValue={setSolValue} />
      </Box>
    </Grid>
  );
};

export { MarsFilter };
