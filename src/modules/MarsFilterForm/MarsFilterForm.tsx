// Hooks
import { useTheme } from '@mui/material';

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
  const theme = useTheme();

  // TODO: Add request on Search click and on componentWillMount
  return (
    <Grid md={3} item>
      <Box display="flex" flexDirection="column">
        <MarsRadioForm roverValue={roverValue} setRoverValue={setRoverValue} />
        <MarsSliderForm solValue={solValue} setSolValue={setSolValue} />
        <Box
          sx={{
            [theme.breakpoints.down('sm')]: {
              display: 'flex',
              justifyContent: 'center',
            },
          }}
        >
          <Button variant="contained">Search</Button>
        </Box>
      </Box>
    </Grid>
  );
};

export { MarsFilter };
