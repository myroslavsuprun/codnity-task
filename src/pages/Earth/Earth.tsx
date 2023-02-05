/**
 * Earth page component.
 *
 * The file contains Earth page routing UI with fetching data and location usage.
 */

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

// **** Component **** //

const Earth = () => {
  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <Box width={200}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="latitude">Latitude</InputLabel>
            <OutlinedInput id="latitude" label="Latitude" />
          </FormControl>
        </Box>
        <Box width={200}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="longtitude">Longitude</InputLabel>
            <OutlinedInput id="longtitude" label="Longitude" />
          </FormControl>
        </Box>
        {/* <Box width={200}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="date">Date</InputLabel>
            <OutlinedInput id="date" label="Date" />
          </FormControl>
        </Box> */}
        <Button type="submit" variant="contained">
          Search Earth imagery
        </Button>
      </Box>
    </>
  );
};

// **** Export **** //

export default Earth;
