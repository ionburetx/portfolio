import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageButton from './LanguageButton'
import TransitionOverlay from './TransitionOverlay'
import { TRANSITION_DURATION } from '../utils/Constants'

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleLanguageClick = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
    setIsTransitioning(true)

    // Navega a Welcome solo después de que se termine el fade-in (pantalla negra)
    setTimeout(() => {
      navigate('/Welcome')
    }, TRANSITION_DURATION)
  }

  return (
    <>
      {isTransitioning && (
        <TransitionOverlay isEntering={false} duration={TRANSITION_DURATION} />
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
        <LanguageButton lang="eu" onClick={handleLanguageClick} ariaLabel="Euskera" extraClasses="mb-20 -mt-6" />
        <LanguageButton lang="es" onClick={handleLanguageClick} ariaLabel="Español" extraClasses="mb-20" />
        <LanguageButton lang="en" onClick={handleLanguageClick} ariaLabel="Inglés" />
      </div>
    </>
  )
}

export default LanguageSelector


