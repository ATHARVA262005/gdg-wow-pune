import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-4 left-0 w-full px-4 flex justify-center z-40">
        <nav className="w-full max-w-7xl bg-neutral-950/50 backdrop-blur-md rounded-full px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://gdsc-wow-hyd.vercel.app/wow-logo.svg" 
                alt="WoW Logo" 
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/sponsors" className="text-gray-300 hover:text-white transition-colors">
              Sponsors
            </Link>
          </div>

          {/* Hamburger Button */}
          <button 
            className="md:hidden text-white p-1.5"
            onClick={toggleMenu}
          >
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </nav>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <aside 
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-[400px] min-w-[280px] bg-neutral-950 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col p-6 h-full">
          <button 
            className="self-end text-white p-2 -mr-2"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col space-y-4 mt-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white transition-colors py-3 px-4 text-lg"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/sponsors" 
              className="text-gray-300 hover:text-white transition-colors py-3 px-4 text-lg"
              onClick={toggleMenu}
            >
              Sponsors
            </Link>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Navbar
