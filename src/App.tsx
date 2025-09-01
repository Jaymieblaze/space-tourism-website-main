// src/App.tsx
import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

// Background images
import BackgroundMobile from './assets/home/background-home-mobile.jpg';
import BackgroundTablet from './assets/home/background-home-tablet.jpg';
import BackgroundDesktop from './assets/home/background-home-desktop.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen">
      {/* Background Images */}
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-center sm:hidden" 
        style={{ backgroundImage: `url(${BackgroundMobile})` }}
      ></div>
      <div 
        className="absolute inset-0 z-[-1] hidden bg-cover bg-center sm:block md:hidden" 
        style={{ backgroundImage: `url(${BackgroundTablet})` }}
      ></div>
      <div 
        className="absolute inset-0 z-[-1] hidden bg-cover bg-center md:block" 
        style={{ backgroundImage: `url(${BackgroundDesktop})` }}
      ></div>

      {/* Page Content */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
    </div>
  );
}

export default App;