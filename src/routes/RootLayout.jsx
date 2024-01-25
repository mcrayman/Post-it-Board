import { Outlet } from 'react-router-dom';

import MainHeader from '../Components/MainHeader';

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;