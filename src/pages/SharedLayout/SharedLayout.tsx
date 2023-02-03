/**
 * SharedLayout component.
 *
 * File contains basic application layout for all routes with header and footer parts.
 */

// Routing
import { Outlet } from 'react-router-dom';

// Components
import { Box, Container } from '@mui/material';
import { Header, Footer } from 'modules';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Box component="main" minHeight="82vh">
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default SharedLayout;
