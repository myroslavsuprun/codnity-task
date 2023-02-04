// Hooks
import { useState } from 'react';
import { useTheme } from '@mui/material';

// Components
import { MarsFilter } from 'modules';
import { Grid, ImageList, ImageListItem } from '@mui/material';

// **** Component **** //

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const Mars = () => {
  const theme = useTheme();
  const [roverValue, setRoverValue] = useState('FHAZ');
  const [solValue, setSolValue] = useState<number | number[]>(1000);

  return (
    <>
      <Grid
        container
        sx={{
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
          },
        }}
      >
        <MarsFilter
          roverValue={roverValue}
          setRoverValue={setRoverValue}
          solValue={solValue}
          setSolValue={setSolValue}
        />
        <Grid
          md={9}
          justifyContent="center"
          alignItems="center"
          display="flex"
          item
        >
          <ImageList
            sx={{
              [theme.breakpoints.down('sm')]: {
                width: 300,
              },
              [theme.breakpoints.between('sm', 'md')]: {
                width: 540,
              },
              [theme.breakpoints.up('md')]: {
                width: 580,
              },
            }}
            gap={2}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </>
  );
};

// **** Export **** //

export default Mars;
