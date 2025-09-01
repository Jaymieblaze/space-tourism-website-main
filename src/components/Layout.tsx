import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header/Header';
// You will need to manage backgrounds based on the current route later
import BackgroundDesktop from '../assets/home/background-home-desktop.jpg';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div 
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundDesktop})` }}
    >
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Outlet /> {/* This will render the current page (Home, Destination, etc.) */}
    </div>
  );
}

export default Layout;