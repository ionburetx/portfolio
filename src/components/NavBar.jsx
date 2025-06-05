import React from 'react'

const NavBar = ({ onNavClick }) => {
  const handleClick = (id) => {
    if(onNavClick) onNavClick(id)
  }

  return (
    <nav className="hidden md:flex space-x-8 font-semibold text-white">
      <button
        onClick={() => handleClick('sobre-mi')}
        className="hover:text-[#FF6347] bg-transparent"
      >
        SOBRE MI
      </button>
      <button
        onClick={() => handleClick('trabajos')}
        className="hover:text-[#FF6347] bg-transparent"
      >
        TRABAJOS
      </button>
      <button
        onClick={() => handleClick('cv')}
        className="hover:text-[#FF6347] bg-transparent"
      >
        CV
      </button>
      <button
        onClick={() => handleClick('contacto')}
        className="hover:text-[#FF6347] bg-transparent"
      >
        CONTACTO
      </button>
    </nav>
  )
}

export default NavBar
