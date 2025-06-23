import React from 'react'
import { useTranslation } from "react-i18next";

const NavBar = ({ onNavClick }) => {
  const { t } = useTranslation();
  const handleClick = (id) => {
    if(onNavClick) onNavClick(id)
  }

  return (
    <nav className="hidden md:flex space-x-8 font-semibold text-white">
      <button
        onClick={() => handleClick('sobre-mi')}
        className="hover:text-[#FF6347] bg-transparent"
      >
        {t("HomePage.HEADER.about")}
      </button>
      <button
        onClick={() => handleClick('trabajos')}
        className="hover:text-[#FF6347] bg-transparent"
      >
        {t("HomePage.HEADER.projects")}
      </button>
      <button
        onClick={() => handleClick('cv')}
        className="hover:text-[#FF6347] bg-transparent"
      >
        {t("HomePage.HEADER.cv")}
      </button>
      <button
        onClick={() => handleClick('contacto')}
        className="hover:text-[#FF6347] bg-transparent"
      >
        {t("HomePage.HEADER.contact")}
      </button>
    </nav>
  )
}

export default NavBar
