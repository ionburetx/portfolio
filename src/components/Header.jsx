import React, { useState } from 'react'
import NavBar from './Menu/NavBar'
import HamburgerMenu from './Menu/HamburgerMenu'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo    from '@/assets/generalAssets/logo.png' 

const Header = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (id) => {
    if (location.pathname === '/home' || location.pathname === '/') {
      const el = document.getElementById(id)
      if (el) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate(`/home#${id}`)
    }
    setIsOpen(false)
  }

  const handleLogoClick = () => {
    if (isSpinning) return
    setIsSpinning(true)
  }

  const handleAnimationEnd = () => {
    setIsSpinning(false)
    navigate('/')
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 ${className}`}>
        {/* Overlay con blur degradado sin color */}
        <div className="absolute inset-0 backdrop-blur-md pointer-events-none z-[-1] mask-gradient" />

        {/* Contenido del header */}
        <div className="flex items-center justify-between px-6 py-4">
          <img
            src={Logo}
            alt="Logo"
            className={`h-10 cursor-pointer ${isSpinning ? 'spin-animation' : ''}`}
            onClick={handleLogoClick}
            onAnimationEnd={handleAnimationEnd}
          />

          <NavBar onNavClick={handleNavClick} />

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
        </div>
      </header>

      <HamburgerMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default Header

