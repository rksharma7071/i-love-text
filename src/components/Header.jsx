import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: "Home", url: "/" },
  { label: "Text Editor", url: "/text-editor" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#193f6e] text-white">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-0 py-3">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 17H21M3 12H21M3 7H21"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to={'/'}>
          <img src="/logo2.png" alt="Logo" className="h-12" />
          </Link>
        </div>

        {/* Contact info or extras (optional) */}
        <div className="hidden md:flex text-sm gap-4 font-medium uppercase">
          <Link to={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </Link>
          <Link to={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Link>

        </div>
      </div>

      {/* Desktop Nav */}
      {/* <div className="max-w-7xl mx-auto hidden  md:flex justify-between items-center px-0 py-5 pt-2">
        <nav className="hidden md:flex justify-start gap-6 text-sm font-medium uppercase">
          {navLinks.map((link, idx) => (
            <Link key={idx} to={link.url} className="hover:text-white/80">
              {link.label}
            </Link>
          ))}
        </nav>
      </div> */}


      {/* Mobile Nav */}
      {/* {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col gap-3 px-5 pb-5 text-sm font-medium uppercase">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.url}
              onClick={handleMobileLinkClick}
              className="hover:text-white/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )} */}
    </header>
  );
}
