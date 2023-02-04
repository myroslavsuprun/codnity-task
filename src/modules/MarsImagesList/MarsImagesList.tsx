// Hooks
import { useTheme } from '@mui/material';
import { useGetMarsImagesQuery } from './api';

// Components
import { MarsImageListItem } from 'components';
import { ImageList, Box, Typography } from '@mui/material';

// Types
import { MarsImagesListProps } from './types';

// **** Component **** //
// TODO: Add spinners or skeletons
const MarsImagesList = ({ camera, sol }: MarsImagesListProps) => {
  // Hooks
  const theme = useTheme();
  const { data, isLoading, isSuccess, isError } = useGetMarsImagesQuery({
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
  if (isLoading) {
    return <></>;
  }

  /**
   * UI return in case of success.
   */
  if (isSuccess) {
    const { photos } = data;

    if (photos.length === 0) {
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
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
    return <></>;
  }

  return <></>;
};

// **** Export **** //

export { MarsImagesList };
