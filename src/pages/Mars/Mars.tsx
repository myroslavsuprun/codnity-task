// Hooks
import { useState } from 'react';

// Components
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

const roverCamers = [
  { value: 'FHAZ', label: 'Front Hazard Avoidance Camera' },
  { value: 'RHAZ', label: 'Rear Hazard Avoidance Camera' },
  { value: 'MAST', label: 'Mast Camera' },
  { value: 'CHEMCAM', label: 'Chemistry and Camera Complex' },
  { value: 'MAHLI', label: 'Mars Hand Lens Imager' },
  { value: 'MARDI', label: 'Mars Descent Imager' },
  { value: 'NAVCAM', label: 'Navigation Camera' },
];

// **** Component **** //

const Mars = () => {
  const [value, setValue] = useState('FHAZ');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Rover Cameras</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {roverCamers.map(({ value, label }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              label={label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

// **** Export **** //

export default Mars;
