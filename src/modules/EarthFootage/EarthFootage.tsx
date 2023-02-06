// Hooks
import { useGetEarthLandsatQueryState } from './api';
import { useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

// Components
import { Box, CircularProgress, Typography, Skeleton } from '@mui/material';

// Types
import { EarthFootageProps, GetEarthLandstatError } from './types';

// Util
import { defaultDate } from 'pages';

// **** Component **** //

const EarthFootage = ({ date, lat, lon }: EarthFootageProps) => {
  // ** Variables
  const formattedDate = date.isValid()
    ? date.format('YYYY-MM-DD')
    : defaultDate.format('YYYY-MM-DD');

  // ** State
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  // ** Hooks
  const theme = useTheme();
  const { data, isFetching, isUninitialized, isError, isSuccess, error } =
    useGetEarthLandsatQueryState({
      date: formattedDate,
      lat,
      lon,
    });

  // ** Lifecycle
  useEffect(() => {
    setImageLoaded(false);
  }, [data]);

  // ** Handlers
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // ** Styles
  const imgStyle = {
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 400,
    },
    [theme.breakpoints.up('md')]: {
      width: 800,
    },
    borderRadius: 2,
  };

  // ** UI return
  if (isUninitialized) {
    return <Typography variant="h4">Start searching for footages</Typography>;
  }

  if (isFetching) {
    return <CircularProgress size={60} />;
  }

  if (isSuccess) {
    const { url } = data;

    return (
      <>
        <Box>
          {!imageLoaded && (
            <Skeleton variant="rounded" sx={imgStyle} height={400} />
          )}
          <Box
            component="img"
            sx={imgStyle}
            src={url}
            height={!imageLoaded ? 0 : 'auto'}
            alt="Google Earth footage"
            onLoad={handleImageLoad}
          />
        </Box>
      </>
    );
  }

  if (isError) {
    const enhancedError = error as GetEarthLandstatError;

    const { data, status } = enhancedError;

    if (status === 404) {
      return (
        <Typography variant="h4" color="error">
          {data.msg}
        </Typography>
      );
    }

    return (
      <Typography variant="h4" color="error">
        Error has occured. Sorry.
      </Typography>
    );
  }

  return <></>;
};

// **** Export **** //

export { EarthFootage };
