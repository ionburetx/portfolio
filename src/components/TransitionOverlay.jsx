import { useEffect, useState } from 'react'
import { TRANSITION_DURATION } from '../utils/Constants'

const TransitionOverlay = ({ isActive }) => {
  const [visible, setVisible] = useState(isActive)

  useEffect(() => {
    if (isActive) {
      setVisible(true) // activa el overlay negro (opacity 1)
    } else {
      // desactiva el overlay (opacity 0) después de la duración
      const timeout = setTimeout(() => setVisible(false), TRANSITION_DURATION)
      return () => clearTimeout(timeout)
    }
  }, [isActive])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] transition-opacity duration-[${TRANSITION_DURATION}ms] pointer-events-none ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    />
  )
}

export default TransitionOverlay

