import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header/Header';

// Home backgrounds
import HomeBgMobile from '../assets/home/background-home-mobile.jpg';
import HomeBgTablet from '../assets/home/background-home-tablet.jpg';
import HomeBgDesktop from '../assets/home/background-home-desktop.jpg';

// Destination backgrounds
import DestBgMobile from '../assets/destination/background-destination-mobile.jpg';
import DestBgTablet from '../assets/destination/background-destination-tablet.jpg';
import DestBgDesktop from '../assets/destination/background-destination-desktop.jpg';

// Crew backgrounds
import CrewBgMobile from '../assets/crew/background-crew-mobile.jpg';
import CrewBgTablet from '../assets/crew/background-crew-tablet.jpg';
import CrewBgDesktop from '../assets/crew/background-crew-desktop.jpg';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [backgrounds, setBackgrounds] = useState({
    mobile: HomeBgMobile,
    tablet: HomeBgTablet,
    desktop: HomeBgDesktop,
  });

  useEffect(() => {
    switch (location.pathname) {
      case '/destination':
        setBackgrounds({ mobile: DestBgMobile, tablet: DestBgTablet, desktop: DestBgDesktop });
        break;
      case '/crew':
        setBackgrounds({ mobile: CrewBgMobile, tablet: CrewBgTablet, desktop: CrewBgDesktop });
        break;
      // Add a case for '/technology' when you get to it
      default:
        setBackgrounds({ mobile: HomeBgMobile, tablet: HomeBgTablet, desktop: HomeBgDesktop });
        break;
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      {/* Background Images */}
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-center sm:hidden" 
        style={{ backgroundImage: `url(${backgrounds.mobile})` }}
      ></div>
      <div 
        className="absolute inset-0 z-[-1] hidden bg-cover bg-center sm:block md:hidden" 
        style={{ backgroundImage: `url(${backgrounds.tablet})` }}
      ></div>
      <div 
        className="absolute inset-0 z-[-1] hidden bg-cover bg-center md:block" 
        style={{ backgroundImage: `url(${backgrounds.desktop})` }}
      ></div>

      {/* Page Content */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Outlet />
    </div>
  );
}

export default Layout;