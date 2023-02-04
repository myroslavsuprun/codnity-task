// Redux Provider
import { Provider } from 'react-redux';
import { marsImagesStore } from 'modules';

// Hooks
import { useState } from 'react';
import { useTheme } from '@mui/material';

// Components
import { MarsFilter, MarsImagesList } from 'modules';
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
        <Grid
          md={9}
          justifyContent="center"
          alignItems="center"
          display="flex"
          item
        >
          <Provider store={marsImagesStore}>
            <MarsImagesList sol={String(solValue)} camera={roverValue} />
          </Provider>
        </Grid>
      </Grid>
    </>
  );
};

// **** Export **** //

export default Mars;
