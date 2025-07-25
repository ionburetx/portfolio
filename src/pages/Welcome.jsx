import React, { useEffect, useState } from 'react'
import TransitionOverlay from '../components/TransitionOverlay'
import { TRANSITION_DURATION } from '../utils/Constants'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import fondoBienvenida from '@/assets/generalAssets/fondoBienvenida.png'
import Logo from '@/assets/generalAssets/logo.png'

const Welcome = () => {
  const [showOverlay, setShowOverlay] = useState(true)
  const { t } = useTranslation()
  const navigate = useNavigate()

  // Fade-out al montar
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowOverlay(false)
    }, TRANSITION_DURATION)
    return () => clearTimeout(timeout)
  }, [])

  // Handler para ir a Home con fade-in negro
  const handleGoHome = () => {
    setShowOverlay(true)
    setTimeout(() => {
      navigate('/Home')
    }, TRANSITION_DURATION)
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={fondoBienvenida}
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover object-bottom object-right z-0"
      />

      <img 
        src={Logo}
        className="absolute top-4 left-4 h-10 z-10"
      />

      <div className="absolute left-6 right-6 top-[30%] sm:top-[30%] md:top-[35%] lg:top-[40%] xl:top-[45%] text-white z-10">
        <h1 className="font-bold text-white leading-tight break-keep"
          style={{
            maxWidth: '70vw',
            lineHeight: '1.2',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontSize: 'clamp(1rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              whiteSpace: 'nowrap',
            }}
          >
            {t('WelcomePage.preparado')}
          </span>

          <em
            style={{
              fontSize: 'clamp(0.8rem, 2.5vw, 1.4rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              whiteSpace: 'nowrap',
            }}
          >
            {t('WelcomePage.click')}{' '}
            <button
              className="text-[#FF6347] italic bg-transparent p-0 m-0 border-none focus:outline-none focus:ring-0"
              onClick={handleGoHome}
              style={{ fontWeight: 400 }}
            >
              {t('WelcomePage.aquí')}
            </button>{' '}
            {t('WelcomePage.descubre')}
          </em>
        </h1>
      </div>

      <TransitionOverlay isActive={showOverlay} />
    </div>
  )
}

export default Welcome
