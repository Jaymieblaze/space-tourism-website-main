import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';
import hamburgerIcon from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const location = useLocation(); // Get the current location
  const { pathname } = location;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLink = (href: string, number: string, text: string) => {
    const isActive = pathname === href;
    return (
      <Link
        to={href}
        onClick={() => setIsMenuOpen(false)}
        className={`
        flex items-center text-white transition-colors duration-300
        border-r-4 md:border-r-0 md:h-full md:p-0 md:border-b-2 
        ${isActive ? 'border-white' : 'border-transparent hover:border-white/50'}
      `}
      >
        <span className="font-bold mr-3">{number}</span>
        <span className="uppercase tracking-widest">{text}</span>
      </Link>
    );
  };

  return (
    <header className="flex items-center justify-between md:pl-10 lg:pt-10">
      {/* Logo */}
      <div className="p-6 md:p-0">
        <Link to="/">
          <img src={logo} alt="Space Tourism logo" className="h-10 w-10 md:h-12 md:w-12" />
        </Link>
      </div>

      {/* Decorative Line (Desktop only) */}
      <div className="flex-grow h-px bg-white/25 -mr-8 z-20 hidden lg:block"></div>

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
        <ul className="flex flex-col gap-8 pt-28 pl-8 md:flex-row md:gap-9 md:h-24 md:p-0 md:pl-32 md:pr-20">
          <li>{navLink('/', '00', 'Home')}</li>
          <li>{navLink('/destination', '01', 'Destination')}</li>
          <li>{navLink('/crew', '02', 'Crew')}</li>
          <li>{navLink('/technology', '03', 'Technology')}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;