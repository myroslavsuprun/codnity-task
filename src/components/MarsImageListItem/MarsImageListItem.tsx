// Components
import { ImageListItem } from '@mui/material';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

// Types
import { MarsImageListItemProps } from './types';

// **** Component **** //

const MarsImageListItem = ({ images }: MarsImageListItemProps) => {
  return (
    <>
      {images.map(({ img_src, id, rover: { name } }) => (
        <LazyLoadComponent>
          <ImageListItem key={id}>
            <img src={img_src} alt={`${id}-${name}`} loading="lazy" />
          </ImageListItem>
        </LazyLoadComponent>
      ))}
    </>
  );
};

// **** Export **** //

export { MarsImageListItem };
