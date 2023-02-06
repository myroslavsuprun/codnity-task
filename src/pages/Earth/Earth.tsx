/**
 * Earth page component.
 *
 * The file contains Earth page routing UI with fetching data and location usage.
 */
// Hooks
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Components
// ---

// Util
import dayjs from 'dayjs';

// Types
import { Dayjs } from 'dayjs';
import { EarthFilterForm } from 'modules';

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
      <EarthFilterForm
        dateValue={dateValue}
        latValue={latValue}
        lonValue={lonValue}
        setDateValue={setDateValue}
        setLatValue={setLatValue}
        setLonValue={setLonValue}
      />
    </>
  );
};

// **** Export **** //

export default Earth;

export { defaultDate };
