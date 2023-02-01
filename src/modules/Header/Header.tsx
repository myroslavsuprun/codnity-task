// **** React **** //

import { useState } from 'react';

// **** Components **** //

import { HeaderAppBar, HeaderDrawer } from 'components';

// **** Component **** //

const Header = () => {
  // Component state
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handlers
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <HeaderAppBar handleDrawerToggle={handleDrawerToggle} />
        <HeaderDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </header>
    </>
  );
};

// **** Exports **** //

export { Header };
