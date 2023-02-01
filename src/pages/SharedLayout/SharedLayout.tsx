import { Outlet } from 'react-router-dom';

import { Header } from 'modules';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <div>Footer</div>
    </>
  );
};

export default SharedLayout;
