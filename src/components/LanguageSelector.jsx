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
  const [selectedLang, setSelectedLang] = useState(null)

  const handleLanguageClick = (lang) => {
    setSelectedLang(lang)
    setIsTransitioning(true)

    setTimeout(() => {
      i18n.changeLanguage(lang)
      localStorage.setItem('lang', lang)
      navigate('/Welcome')
    }, TRANSITION_DURATION)
  }

  return (
    <>
      <TransitionOverlay isActive={isTransitioning} />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
        <LanguageButton lang="eu" onClick={() => handleLanguageClick('eu')} ariaLabel="Euskera" extraClasses="mb-20 -mt-6" />
        <LanguageButton lang="es" onClick={() => handleLanguageClick('es')} ariaLabel="Español" extraClasses="mb-20" />
        <LanguageButton lang="en" onClick={() => handleLanguageClick('en')} ariaLabel="Inglés" />
      </div>
    </>
  )
}

export default LanguageSelector
