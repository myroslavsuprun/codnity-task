/**
 * App component.
 *
 * Consists of routing components and components-providers.
 */

// Browser navigation
import { Route, Routes } from 'react-router-dom';

// Pages
import { Home, Mars, SharedLayout } from 'pages';

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
