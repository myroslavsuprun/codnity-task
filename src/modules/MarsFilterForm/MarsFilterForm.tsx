import React from 'react';

// Hooks
import { useState } from 'react';
import { Popover } from '@mui/material';

// Components
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  Slider,
  Typography,
  Box,
} from '@mui/material';

// Misc
import { roverCameras } from 'components';

// Types
import { MarsFilterProps } from './types';

const MarsFilter = ({
  roverValue,
  solValue,
  setRoverValue,
  setSolValue,
}: MarsFilterProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoverValue(event.target.value);
  };

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setSolValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSolValue(Number(event.target.value));
  };

  const handleBlur = () => {
    if (typeof solValue !== 'number') {
      return;
    }

    if (solValue < 0) {
      setSolValue(0);
    } else if (solValue > 1000) {
      setSolValue(1000);
    }
  };

  return (
    <Grid md={3} item>
      <Box display="flex" flexDirection="column">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            <Typography
              aria-owns={open ? 'mouse-over-popover' : undefined}
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
              open={open}
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
        <Typography id="input-slider" gutterBottom>
          {/* //TODO: Add popover same as for rover cameras */}
          Sol
        </Typography>
        <Grid container spacing={2} width="250px" alignItems="center">
          <Grid item xs>
            <Slider
              aria-label="sol slider"
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              step={10}
              value={typeof solValue === 'number' ? solValue : 0}
              onChange={handleSliderChange}
            />
          </Grid>
          <Grid item>
            <Input
              value={solValue}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 1000,
                type: 'number',
                'aria-labelledby': 'sol-slider',
              }}
            />
          </Grid>
        </Grid>
        <Box>
          <Button variant="contained">Search</Button>
        </Box>
      </Box>
    </Grid>
  );
};

export { MarsFilter };
