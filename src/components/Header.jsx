import React, { useState } from 'react'
import NavBar from './NavBar'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-40 flex items-center justify-between px-6 py-4">
        <img
          src="/generalAssets/logo.png"
          alt="Logo"
          className="h-10 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        <NavBar onNavClick={handleNavClick} />

        {/* Botón hamburguesa visible solo en md y menos */}
        <button
          className="md:hidden fixed top-4 right-6 focus:outline-none text-white bg-transparent hover:text-[#FF6347] transition-colors duration-300 z-50"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      <HamburgerMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default Header
