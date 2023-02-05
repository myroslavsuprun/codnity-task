/**
 * App component.
 *
 * Consists of routing components and components-providers.
 */
import { lazy } from 'react';

// Browser navigation
import { Route, Routes } from 'react-router-dom';

// Pages
import { Home, Mars, SharedLayout } from 'pages';
const Home = lazy(() => import('pages/Home'));
const Mars = lazy(() => import('pages/Home'));
const Home = lazy(() => import('pages/Home'));

// Styles
import { CssBaseline } from '@mui/material';

// Misc
import { routes } from 'utils';

// **** Component **** //

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={routes.earth} element={<div>Earth page</div>} />
          <Route path={routes.mars} element={<Mars />} />
        </Route>
      </Routes>
      <CssBaseline />
    </>
  );
}

// **** Exports **** //

export default App;
