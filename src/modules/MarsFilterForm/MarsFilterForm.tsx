// Components
import { MarsRadioForm, MarsSliderForm } from 'components';
import { Button, Grid, Box } from '@mui/material';

// Types
import { MarsFilterProps } from './types';

const MarsFilter = ({
  roverValue,
  solValue,
  setRoverValue,
  setSolValue,
}: MarsFilterProps) => {
  return (
    <Grid md={3} item>
      <Box display="flex" flexDirection="column">
        <MarsRadioForm roverValue={roverValue} setRoverValue={setRoverValue} />
        <MarsSliderForm solValue={solValue} setSolValue={setSolValue} />
        <Box>
          <Button variant="contained">Search</Button>
        </Box>
      </Box>
    </Grid>
  );
};

export { MarsFilter };
