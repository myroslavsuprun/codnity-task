// Hooks
import { useState } from 'react';

// Components
import { Grid, Input, Popover, Slider, Typography } from '@mui/material';

// Types
import { ChangeEvent, MouseEvent } from 'react';
import { MarsSliderFormProps } from './types';

const MarsSliderForm = ({ solValue, setSolValue }: MarsSliderFormProps) => {
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

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  // TODO: Extract popover into single reusable component.

  return (
    <>
      <Typography
        aria-owns={openPopover ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        mb={1}
      >
        Sol
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
          Sol is a solar day on Mars; that is, a Mars-day.
        </Typography>
      </Popover>
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
    </>
  );
};

export { MarsSliderForm };
