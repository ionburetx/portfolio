import React, { useState } from 'react'
import NavBar from './NavBar'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // cerrar menú si estaba abierto (para móvil)
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50 flex items-center justify-between px-6 py-4">
        <img
          src="/generalAssets/logo.png"
          alt="Logo"
          className="h-10 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        <NavBar onNavClick={handleNavClick} />

        {/* Botón hamburguesa visible solo en md y menos */}
        <button
className="md:hidden fixed top-4 right-6 focus:outline-none text-white bg-transparent hover:text-[#FF6347] transition-colors duration-300 z-60"
  onClick={toggleMenu}
  aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
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
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Menu hamburguesa */}
      <HamburgerMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default Header
