import { Dayjs } from 'dayjs';

interface EarthFootageProps {
  date: Dayjs;
  lat: string;
  lon: string;
}

interface GetEarthLandstatError {
  status: number;
  data: {
    msg: string;
  };
}

export { type EarthFootageProps, type GetEarthLandstatError };
