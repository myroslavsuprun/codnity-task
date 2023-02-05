/**
 * SharedLayout component.
 *
 * File contains basic application layout for all routes with header and footer parts.
 */

// Lazy loading
import { Suspense } from 'react';

// Routing
import { Outlet } from 'react-router-dom';

// Components
import { Box, Container } from '@mui/material';
import { Header, Footer } from 'modules';
import { Loader } from 'components';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Box component="main" mb={5} mt={2} minHeight="82vh">
        <Suspense fallback={<Loader />}>
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Suspense>
      </Box>

      <Footer />
    </>
  );
};

export default SharedLayout;
