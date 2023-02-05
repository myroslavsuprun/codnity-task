/**
 * Earth page component.
 *
 * The file contains Earth page routing UI with fetching data and location usage.
 */
// Hooks
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Components
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

// Util
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

// Types
import { FormEvent, ChangeEvent } from 'react';
import { Dayjs } from 'dayjs';

// **** Declarations **** //

const defaultDate = dayjs('2020-08-10');

// **** Component **** //

const Earth = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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

  // ** Input handlers
  const handleDateChange = (newValue: Dayjs | null) => {
    if (!newValue) return;

    setDateValue(newValue);
    updateSearchParams({ date: newValue });
  };

  const handleLatChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setLatValue(value);
    updateSearchParams({ lat: value });
  };

  const handleLonChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setLonValue(value);
    updateSearchParams({ lon: value });
  };

  // ** Button & Form handlers
  const handleMyLocationClick = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const { latitude, longitude } = position.coords;
      // String typization
      const lat = String(latitude);
      const lon = String(longitude);

      setLatValue(lat);
      setLonValue(lon);
      updateSearchParams({ lon, lat });
    });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  // ** Uitlity
  function updateSearchParams({
    lon = lonValue,
    lat = latValue,
    date = dateValue,
  }) {
    let formattedDate = defaultDate.format('YYYY-MM-DD');

    if (date.isValid()) {
      formattedDate = date.format('YYYY-MM-DD');
    }

    setSearchParams({
      lon,
      lat,
      date: formattedDate,
    });
  }

  return (
    <>
      <Stack
        component="form"
        noValidate
        spacing={1}
        onSubmit={handleFormSubmit}
      >
        <Box>
          <FormControl>
            <InputLabel htmlFor="latitude">Latitude</InputLabel>
            <OutlinedInput
              value={latValue}
              onChange={handleLatChange}
              type="number"
              required
              id="latitude"
              label="Latitude"
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <InputLabel htmlFor="longtitude">Longitude</InputLabel>
            <OutlinedInput
              value={lonValue}
              onChange={handleLonChange}
              type="number"
              required
              id="longitude"
              label="Longitude"
            />
          </FormControl>
        </Box>
        <Box>
          <Button
            type="button"
            onClick={handleMyLocationClick}
            variant="contained"
            size="small"
          >
            Use my current location
          </Button>
        </Box>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date picker"
              inputFormat="YYYY/MM/DD"
              value={dateValue}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box width={240}>
          <Button type="submit" variant="contained">
            Search Earth imagery
          </Button>
        </Box>
      </Stack>
    </>
  );
};

// **** Export **** //

export default Earth;
