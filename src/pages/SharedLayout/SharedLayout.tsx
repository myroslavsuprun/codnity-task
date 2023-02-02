/**
 * SharedLayout component.
 *
 * File contains basic application layout for all routes with header and footer parts.
 */

// Routing
import { Outlet } from 'react-router-dom';

// Components
import { Container } from '@mui/material';
import { Header, Footer } from 'modules';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
