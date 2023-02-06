// Hooks
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

// Components
import { Grid, Input, Popover, Slider, Typography } from '@mui/material';

// Types
import { ChangeEvent, MouseEvent } from 'react';
import { MarsSliderFormProps } from './types';

const MarsSliderForm = ({ solValue, setSolValue }: MarsSliderFormProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setSolValue(newValue);
    updateSeacrhParams(newValue);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    setSolValue(value);
    updateSeacrhParams(value);
  };

  const handleBlur = () => {
    if (typeof solValue !== 'number') {
      return;
    }

    if (solValue < 0) {
      setSolValue(0);
      updateSeacrhParams(0);
    } else if (solValue > 3400) {
      setSolValue(3400);
      updateSeacrhParams(3400);
    }
  };

  function updateSeacrhParams(newSolValue: number | number[]) {
    setSearchParams({
      camera: String(searchParams.get('camera')),
      sol: String(newSolValue),
    });
  }

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);

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
            max={3400}
            step={100}
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
              step: 100,
              min: 0,
              max: 3400,
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
