// Hooks
import { useTheme } from '@mui/material';
import { useGetMarsImagesQuery } from './api';

// Components
import { MarsImageListItem } from 'components';
import { ImageList, Box, Typography, CircularProgress } from '@mui/material';

// Types
import { MarsImagesListProps } from './types';

// **** Component **** //

const MarsImagesList = ({ camera, sol }: MarsImagesListProps) => {
  // Hooks
  const theme = useTheme();
  const { data, isSuccess, isError, isFetching } = useGetMarsImagesQuery({
    camera,
    sol,
  });

  // Styles
  const imageListStyle = {
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 540,
    },
    [theme.breakpoints.up('md')]: {
      width: 580,
    },
  };

  /**
   * UI return in case of loading.
   */
  if (isFetching) {
    return (
      <Box>
        <CircularProgress size={60} />
      </Box>
    );
  }

  /**
   * UI return in case of success.
   */
  if (isSuccess) {
    const { photos } = data;

    if (photos.length === 0) {
      return (
        <Box>
          <Typography variant="h5">No images found</Typography>
        </Box>
      );
    }

    return (
      <ImageList sx={imageListStyle} gap={2}>
        <MarsImageListItem images={photos} />
      </ImageList>
    );
  }

  /**
   * UI return in case of error.
   */
  if (isError) {
    return (
      <Box>
        <Typography variant="h5" color="error">
          An error has occured. Sorry!
        </Typography>
      </Box>
    );
  }

  return <></>;
};

// **** Export **** //

export { MarsImagesList };
