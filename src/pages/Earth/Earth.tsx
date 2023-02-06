/**
 * Earth page component.
 *
 * The file contains Earth page routing UI with fetching data and location usage.
 */
// Providers
import { Provider } from 'react-redux';

// Hooks
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTheme } from '@mui/material';

// Components
import { EarthFilterForm, EarthFootage } from 'modules';
import { Grid } from '@mui/material';

// Util
import dayjs from 'dayjs';

// Types
import { Dayjs } from 'dayjs';
import { earthLandsatStore } from 'modules';

// **** Declarations **** //

const defaultDate = dayjs('2020-08-10');
const defaultLat = '56.949650';
const defaultLon = '24.105186';

// **** Component **** //

const Earth = () => {
  // ** Hooks
  const theme = useTheme();
  const [searchParams] = useSearchParams();

  // ** Search parameters default values
  const searchParamsDate = searchParams.get('date')
    ? dayjs(searchParams.get('date'))
    : null;
  const searchParamsLat = searchParams.get('lat');
  const searchParamsLon = searchParams.get('lon');

  // ** State values
  const [dateValue, setDateValue] = useState<Dayjs>(
    searchParamsDate ?? defaultDate,
  );
  const [latValue, setLatValue] = useState(searchParamsLat ?? defaultLat);
  const [lonValue, setLonValue] = useState(searchParamsLon ?? defaultLon);

  // ** Styles
  const earthFootageWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      minWidth: 200,
    },
  };

  return (
    <>
      <Provider store={earthLandsatStore}>
        <Grid container>
          <Grid item mb={2}>
            <EarthFilterForm
              dateValue={dateValue}
              latValue={latValue}
              lonValue={lonValue}
              setDateValue={setDateValue}
              setLatValue={setLatValue}
              setLonValue={setLonValue}
            />
          </Grid>
          <Grid item xs sx={earthFootageWrapperStyle}>
            <EarthFootage date={dateValue} lat={latValue} lon={lonValue} />
          </Grid>
        </Grid>
      </Provider>
    </>
  );
};

// **** Export **** //

export default Earth;

export { defaultDate, defaultLat, defaultLon };
