// Components
import { Button, Grid, Input, Slider, Typography, Box } from '@mui/material';

// Types
import { ChangeEvent } from 'react';
import { MarsFilterProps } from './types';
import { MarsRadioForm } from 'components';

const MarsFilter = ({
  roverValue,
  solValue,
  setRoverValue,
  setSolValue,
}: MarsFilterProps) => {
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setSolValue(newValue);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        <MarsRadioForm roverValue={roverValue} setRoverValue={setRoverValue} />
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
