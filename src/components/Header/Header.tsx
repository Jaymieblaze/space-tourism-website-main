// src/components/Header/Header.tsx
import logo from '../../assets/shared/logo.svg';
import hamburgerIcon from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // A helper function to create nav links, making it easier to manage the active state
  const navLink = (number: string, text: string, isActive = false) => (
    <a href="#" className={`flex items-center h-full border-b-2 ${isActive ? 'border-white' : 'border-transparent'} hover:border-white/50`}>
      <span className="font-bold mr-2 hidden lg:inline">{number}</span>
      <span className="uppercase tracking-widest">{text}</span>
    </a>
  );

  return (
    <header className="flex items-center justify-between md:pl-10 lg:pt-10">
      {/* Logo */}
      <div className="p-6 md:p-0">
        <img src={logo} alt="Space Tourism logo" className="h-10 w-10 md:h-12 md:w-12" />
      </div>

      {/* Decorative Line (Desktop only) */}
      <div className="flex-grow h-px bg-white/25 -mr-8 z-10 hidden lg:block"></div>

      {/* Hamburger Menu Button (Mobile only) */}
      <button className="z-20 md:hidden p-6" onClick={toggleMenu}>
        <img src={isMenuOpen ? closeIcon : hamburgerIcon} alt="Menu" />
      </button>

      {/* Navigation Links */}
      <nav className={`
        fixed inset-y-0 right-0 z-10 w-2/3 backdrop-blur-xl bg-white/5 
        md:static md:w-auto md:bg-white/10
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
      `}>
        <ul className="flex flex-col gap-8 pt-28 px-8 md:flex-row md:gap-9 md:h-24 md:p-0 md:px-12">
          <li>{navLink('00', 'Home', true)}</li> 
          <li>{navLink('01', 'Destination')}</li>
          <li>{navLink('02', 'Crew')}</li>
          <li>{navLink('03', 'Technology')}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;