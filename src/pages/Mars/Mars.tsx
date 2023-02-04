// Redux Provider
import { Provider } from 'react-redux';
import { marsImagesStore } from 'modules';

// Hooks
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';

// Components
import { MarsFilter, MarsImagesList } from 'modules';
import { Grid } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

// **** Component **** //

const Mars = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const theme = useTheme();

  // Initial state values from search query params:
  const initialRoverQueryValue = searchParams.get('camera');
  const initialSolQueryValue = searchParams.get('sol')
    ? Number(searchParams.get('sol'))
    : null;

  // filter values
  const [roverValue, setRoverValue] = useState(
    initialRoverQueryValue ?? 'FHAZ',
  );
  const [solValue, setSolValue] = useState<number | number[]>(
    initialSolQueryValue ?? 1000,
  );

  // Lifecycles
  useEffect(() => {
    if (!searchParams.get('camera') || !searchParams.get('sol')) {
      setSearchParams({ camera: roverValue, sol: String(solValue) });
    }
  }, [roverValue, searchParams, setSolValue, solValue, setSearchParams]);

  return (
    <>
      <Provider store={marsImagesStore}>
        <Grid
          container
          sx={{
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
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
            display="flex"
            alignItems="center"
            justifyContent="center"
            item
          >
            <MarsImagesList sol={String(solValue)} camera={roverValue} />
          </Grid>
        </Grid>
      </Provider>
    </>
  );
};

// **** Export **** //

export default Mars;
