import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="fixed top-4 left-0 w-full flex justify-center z-50">
      <nav className="w-[70%] bg-neutral-950/50 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://gdsc-wow-hyd.vercel.app/wow-logo.svg" 
              alt="WoW Logo" 
              className="h-12s w-auto"
            />
          </Link>
        </div>
        
        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/sponsors" className="text-gray-300 hover:text-white transition-colors">
            Sponsors
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
