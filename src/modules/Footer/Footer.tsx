// Components
import { FooterBottomPart, FooterUpperPart } from 'components';
import { Box, Container, Divider } from '@mui/material';

// **** Component **** //

const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{
        bottom: 0,
        position: 'fixed',
        width: '100%',
        height: 'auto',
      }}
      py={2}
    >
      <Container maxWidth="lg">
        <FooterUpperPart />
        <Divider />
        <FooterBottomPart />
      </Container>
    </Box>
  );
};

// **** Exports **** //

export { Footer };
