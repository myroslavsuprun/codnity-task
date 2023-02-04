import { ImageListItem } from '@mui/material';

// Types
import { MarsImageListItemProps } from './types';

// **** Component **** //

const MarsImageListItem = ({ images }: MarsImageListItemProps) => {
  return (
    <>
      {images.map(({ img_src, id, rover: { name } }) => (
        <ImageListItem key={id}>
          <img src={img_src} alt={`${id}-${name}`} loading="lazy" />
        </ImageListItem>
      ))}
    </>
  );
};

// **** Export **** //

export { MarsImageListItem };
