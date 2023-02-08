// Hooks
import { useSearchParams } from 'react-router-dom';
import { useGetEarthLandstatQuerySubscription } from 'modules';

// Components
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    Link,
    OutlinedInput,
    Stack,
    TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

// Util
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { defaultDate } from 'pages/Earth/Earth';

// Types
import { FormEvent, ChangeEvent } from 'react';
import { Dayjs } from 'dayjs';
import { EarthFilterFormProps } from './types';

// **** Variables **** //

const coordinatesLink = 'https://www.latlong.net/';

// **** Component **** //

const EarthFilterForm = ({
    dateValue,
    setDateValue,
    latValue,
    setLatValue,
    lonValue,
    setLonValue,
}: EarthFilterFormProps) => {
    // ** Hooks
    const [, setSearchParams] = useSearchParams();
    const [getEarthLandstat] = useGetEarthLandstatQuerySubscription();

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

        getEarthLandstat({
            date: dateValue.format('YYYY-MM-DD'),
            lat: latValue,
            lon: lonValue,
        });
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
        <Stack component="form" spacing={1} onSubmit={handleFormSubmit}>
            <Box>
                <FormControl>
                    <InputLabel htmlFor="latitude">Latitude</InputLabel>
                    <OutlinedInput
                        value={latValue}
                        onChange={handleLatChange}
                        id="latitude"
                        type="number"
                        required
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
                    onClick={handleMyLocationClick}
                    type="button"
                    size="small"
                >
                    Use my current location
                </Button>
            </Box>
            <Box>
                <Link
                    component={Button}
                    size="small"
                    underline="none"
                    href={coordinatesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Search for specific coordinates
                </Link>
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
    );
};

// **** Export **** //

export { EarthFilterForm };
