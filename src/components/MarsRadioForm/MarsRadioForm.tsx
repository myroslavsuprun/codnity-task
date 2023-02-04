// Hooks
import { useState } from 'react';
import { Popover } from '@mui/material';

// Components
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

// Misc
import { roverCameras } from 'components';

// Types
import { MouseEvent, ChangeEvent } from 'react';
import { MarsRadioFormProps } from './types';

// **** Component **** //

const MarsRadioForm = ({ roverValue, setRoverValue }: MarsRadioFormProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoverValue(event.target.value);
  };

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        <Typography
          aria-owns={openPopover ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          Rover Cameras
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={openPopover}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }} variant="subtitle2">
            Each camera has a unique function and perspective,
            <br /> and they are named as follows
          </Typography>
        </Popover>
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={roverValue}
        onChange={handleChange}
      >
        {roverCameras.map(({ value, label }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={<Radio />}
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

// **** Export **** //

export { MarsRadioForm };
