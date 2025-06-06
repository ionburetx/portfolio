import React, { useEffect, useRef } from 'react'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/tu_usuario',
    iconPath: (
      <path fill="currentColor" d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z" />
    )
  },
  {
    name: 'GitHub',
    href: 'https://github.com/tu_usuario',
    iconPath: (
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12a9.99 9.99 0 006.84 9.5c.5.09.68-.22.68-.48v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.08 2.92.82.09-.65.35-1.08.64-1.33-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 7.6c.85 0 1.7.12 2.5.35 1.9-1.3 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.68-4.59 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/tu_usuario',
    iconPath: (
      <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 11-.001 5.001 2.5 2.5 0 01.001-5.001zM3 9h4v12H3V9zm7.5 0h3.572v1.795h.05c.497-.942 1.712-1.94 3.526-1.94 3.774 0 4.474 2.483 4.474 5.709V21H17v-6.48c0-1.545-.03-3.533-2.152-3.533-2.153 0-2.483 1.68-2.483 3.417V21h-4V9z" />
    )
  }
]

const HamburgerMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleCategoryClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    onClose()
  }

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 right-0 h-full bg-black text-white z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        w-1/2 md:w-1/4`}
      style={{ borderTopLeftRadius: '100vw' }}
    >
      {/* Botón de cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-white hover:text-[#FF6347] transition-colors duration-300 bg-transparent focus:outline-none focus:ring-0 active:bg-transparent hover:bg-transparent"
        aria-label="Cerrar menú"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <nav className="flex flex-col pt-24 pr-6 space-y-10 font-semibold text-lg">
  {/* Categorías */}
  <button
    onClick={() => handleCategoryClick('sobre-mi')}
    className="text-right hover:text-[#FF6347] w-full bg-transparent text-white"
  >
    SOBRE MI
  </button>
  <button
    onClick={() => handleCategoryClick('trabajos')}
    className="text-right hover:text-[#FF6347] w-full bg-transparent text-white"
  >
    TRABAJOS
  </button>
  <button
    onClick={() => handleCategoryClick('cv')}
    className="text-right hover:text-[#FF6347] w-full bg-transparent text-white"
  >
    CV
  </button>
  <button
    onClick={() => handleCategoryClick('contacto')}
    className="text-right hover:text-[#FF6347] w-full bg-transparent text-white"
  >
    CONTACTO
  </button>

  {/* Links sociales */}
  <div className="mt-20 flex flex-col space-y-6 items-end">
    {socialLinks.map(({ name, href, iconPath }) => (
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="group"
        aria-label={name}
      >
        <svg
          className="w-9 h-9 text-white transition-colors duration-200 group-hover:text-[#FF6347]"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {iconPath}
        </svg>
      </a>
    ))}
  </div>
</nav>

    </div>
  )
}

export default HamburgerMenu
