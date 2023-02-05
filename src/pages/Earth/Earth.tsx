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
import { FormEvent } from 'react';
import { Dayjs } from 'dayjs';

// TODO: Extract types somewhere =)
interface FormElements extends HTMLFormControlsCollection {
  longtitude: HTMLInputElement;
  latitude: HTMLInputElement;
}

interface FormTarget extends HTMLFormElement {
  elements: FormElements;
}

// **** Component **** //

const Earth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsDate = dayjs(searchParams.get('date'));
  const [dateValue, setDateValue] = useState<Dayjs>(
    searchParamsDate ?? dayjs('2020-08-10'),
  );

  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue) {
      setDateValue(newValue);
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as FormTarget;
    const { latitude, longtitude } = target.elements;

    // Setting route query
    setSearchParams({
      lon: longtitude.value,
      lat: latitude.value,
      date: dateValue.format('YYYY-MM-DD'),
    });
  };

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
              defaultValue={searchParams.get('lat') ?? ''}
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
              defaultValue={searchParams.get('lon') ?? ''}
              type="number"
              required
              id="longtitude"
              label="Longitude"
            />
          </FormControl>
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
