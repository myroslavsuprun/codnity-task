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

// Components
import { EarthFilterForm, EarthFootage } from 'modules';
import { Grid } from '@mui/material';

// Util
import dayjs from 'dayjs';

// Types
import { Dayjs } from 'dayjs';
import { earthLandsatStore } from 'modules/EarthFootage/store';

// **** Declarations **** //

const defaultDate = dayjs('2020-08-10');

// **** Component **** //

const Earth = () => {
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
  const [latValue, setLatValue] = useState(searchParamsLat ?? '');
  const [lonValue, setLonValue] = useState(searchParamsLon ?? '');

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
          <Grid
            item
            xs
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <EarthFootage date={dateValue} lat={latValue} lon={lonValue} />
          </Grid>
        </Grid>
      </Provider>
    </>
  );
};

// **** Export **** //

export default Earth;

export { defaultDate };
