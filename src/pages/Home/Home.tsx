/**
 * Home component.
 *
 * File contains home page route of the application with description about us and links to Earth and Mars pages.
 */

// Components
import { AboutUs, EarthFootages, MarsRover } from 'modules';

// **** Component **** //

const Home = () => {
  return (
    <>
      <AboutUs />
      <MarsRover />
      <EarthFootages />
    </>
  );
};

// **** Export **** //

export default Home;
