import React, { useEffect, useState } from 'react'
import TransitionOverlay from '../components/TransitionOverlay'
import { TRANSITION_DURATION } from '../utils/Constants'
import { useTranslation } from 'react-i18next'

const Welcome = () => {
  const [showOverlay, setShowOverlay] = useState(true) // empieza con overlay negro
  const { t } = useTranslation()

  useEffect(() => {
    // después de TRANSITION_DURATION, quitamos overlay (fade out)
    const timeout = setTimeout(() => {
      setShowOverlay(false)
    }, TRANSITION_DURATION)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* ✅ Mismo fondo que en Language.jsx */}
        <img
        src="/generalAssets/fondoBienvenida.png"
        alt="Fondo"
       className="absolute inset-0 w-full h-full object-cover object-bottom object-right z-0"
        />


      {/* ✅ Logo arriba a la derecha */}
      <img 
        src="/generalAssets/logo.png"
        alt="Logo"
        className="absolute top-4 left-4 w-8 md:w-12 lg:w-14 z-10"
      />

      {/* ✅ H1 justificado a la izquierda con palabra 'aquí' en naranja */}
      <div
  className="absolute left-6 right-6 top-[30%]sm:top-[30%] md:top-[35%] lg:top-[40%] xl:top-[45%] text-white z-10">
  <h1 className="font-bold text-white leading-tight break-keep"
    style={{
      maxWidth: '70vw',
      lineHeight: '1.2',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    }}
  >
    {/* Primera línea */}
    <span
      style={{
        fontSize: 'clamp(1rem, 3.5vw, 2.5rem)', // ajustado para que no se corte en móvil
        fontWeight: 700,
        whiteSpace: 'nowrap',
      }}
    >
      {t('LanguagePage.preparado')}
    </span>

    {/* Segunda línea más pequeña y fina */}
    <em
      style={{
        fontSize: 'clamp(0.8rem, 2.5vw, 1.4rem)', // más pequeña en móvil
        fontWeight: 300,
        fontStyle: 'italic',
        whiteSpace: 'nowrap',
      }}
    >
      {t('LanguagePage.click')}
      <button
        className="text-[#FF6347] italic bg-transparent p-0 m-0 border-none focus:outline-none focus:ring-0"
        onClick={() => alert('¡Aquí irá la animación y navegación!')}
        style={{ fontWeight: 400 }}
      >
        {t('LanguagePage.aquí')}
      </button>{' '}
      {t('LanguagePage.descubre')}
    </em>
  </h1>
</div>


<TransitionOverlay isActive={showOverlay} />
    </div>
  )
}

export default Welcome

