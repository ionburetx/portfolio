import { useEffect, useState } from 'react'
import TransitionOverlay from '../components/TransitionOverlay'
import { TRANSITION_DURATION } from '../utils/Constants'

const Welcome = () => {
  const [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {
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
  className="
    absolute 
    left-6 right-6 
    top-[30%]         /* Posición móvil (más arriba) */
    sm:top-[30%]      /* Posición tablet */
    md:top-[35%]      /* Posición tablet grande / small desktop */
    lg:top-[40%]      /* Desktop */
    xl:top-[45%]      /* Desktop grande */
    text-white z-10
  "
>
  <h1
    className="font-bold text-white leading-tight break-keep"
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
      ¿PREPARADO PARA VIAJAR CON ION?
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
      HAZ CLICK{' '}
      <button
        className="text-[#FF6347] italic bg-transparent p-0 m-0 border-none focus:outline-none focus:ring-0"
        onClick={() => alert('¡Aquí irá la animación y navegación!')}
        style={{ fontWeight: 400 }}
      >
        AQUÍ
      </button>{' '}
      Y DESCUBRE MÁS
    </em>
  </h1>
</div>


      {/* ✅ Fade-out al cargar */}
      {showOverlay && (
        <TransitionOverlay isEntering={true} duration={TRANSITION_DURATION} />
      )}
    </div>
  )
}

export default Welcome

