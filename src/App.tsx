// Browser navigation
import { Route, Routes } from 'react-router-dom';

// Pages
import { Home, SharedLayout } from 'pages';

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
          <Route path={routes.mars} element={<div>Mars page</div>} />
        </Route>
      </Routes>
    </>
  );
}

// **** Exports **** //

export default App;
