import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
};

export default SharedLayout;
