// Components
import { FooterBottomPart, FooterUpperPart } from 'components';
import { Box, Container, Divider } from '@mui/material';

// **** Component **** //

const Footer = () => {
  return (
    <Box component={'footer'} py={2}>
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
