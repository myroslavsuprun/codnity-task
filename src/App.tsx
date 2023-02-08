/**
 * App component.
 *
 * Consists of routing components and components-providers.
 */
import { lazy } from 'react';

// Browser navigation
import { Route, Routes } from 'react-router-dom';

// Pages
import { SharedLayout } from 'pages';

// Styles
import { CssBaseline } from '@mui/material';

// Misc
import { routes } from 'utils';

// Lazy loading
const Home = lazy(() => import('pages/Home/Home'));
const Mars = lazy(() => import('pages/Mars/Mars'));
const Earth = lazy(() => import('pages/Earth/Earth'));

// **** Component **** //
console.log(Home);

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={routes.earth} element={<Earth />} />
          <Route path={routes.mars} element={<Mars />} />
        </Route>
      </Routes>
      <CssBaseline />
    </>
  );
}

// **** Exports **** //

export default App;
