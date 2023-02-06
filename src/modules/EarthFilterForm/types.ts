import { Dayjs } from 'dayjs';

interface EarthFilterFormProps {
  dateValue: Dayjs;
  setDateValue: (prop: Dayjs) => void;
  latValue: string;
  setLatValue: (prop: string) => void;
  lonValue: string;
  setLonValue: (prop: string) => void;
}

export { type EarthFilterFormProps };
