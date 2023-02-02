// Hooks
import { useTheme } from '@mui/material';

// Components
import { Grid, Link } from '@mui/material';

// Misc
import { techLinks } from 'components';

// **** Component **** //

const TechLinks = () => {
  // MUI theme from ThemeProvider.
  const theme = useTheme();

  /**
   * Grid style for mobile view.
   * Responsive UI.
   */
  const GridStyle = {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '8px',
    },
  };

  return (
    <Grid
      item
      container
      sm={7}
      sx={GridStyle}
      columnSpacing={2.5}
      justifyContent="flex-end"
    >
      {techLinks.map(({ link, text }) => (
        <Grid key={text} item>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            {text}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

// **** Export **** //

export { TechLinks };
