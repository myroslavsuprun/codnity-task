// Hooks
import { useState } from 'react';
import { useTheme } from '@mui/material';

// Components
import { MarsFilter } from 'modules';
import { Grid } from '@mui/material';

// **** Component **** //

const Mars = () => {
  const theme = useTheme();
  const [roverValue, setRoverValue] = useState('FHAZ');
  const [solValue, setSolValue] = useState<number | number[]>(1000);

  return (
    <>
      <Grid
        container
        sx={{
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
          },
        }}
      >
        <MarsFilter
          roverValue={roverValue}
          setRoverValue={setRoverValue}
          solValue={solValue}
          setSolValue={setSolValue}
        />
        <Grid md={9} item></Grid>
      </Grid>
    </>
  );
};

// **** Export **** //

export default Mars;
