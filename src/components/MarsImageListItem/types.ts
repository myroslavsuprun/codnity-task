interface IRover {
  name: string;
  landing_date: string;
  launch_date: string;
}

interface IImage {
  img_src: string;
  earth_date: string;
  id: string;
  camera: {
    full_name: string;
  };
  rover: IRover;
}

interface MarsImageListItemProps {
  images: IImage[];
}

export { type MarsImageListItemProps };
