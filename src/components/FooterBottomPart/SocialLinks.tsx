// Components
import { Grid, Link } from '@mui/material';

// Misc
import { socialLinks } from 'components';

// **** Component **** //

const SocialLinks = () => {
  return (
    <Grid item container xs={6} spacing={2} justifyContent="flex-end">
      {socialLinks.map(({ link, inner }) => (
        <Grid key={link} item>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            {inner}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

// **** Export **** //

export { SocialLinks };
